import { DynamicGameInstruction } from 'src/r2mm/launching/instructions/DynamicGameInstruction';
import Profile from 'src/model/Profile';
import Game from 'src/model/game/Game';
import path from 'path';
import FsProvider from 'src/providers/generic/file/FsProvider';
import R2Error from 'src/model/errors/R2Error';

export default class GameInstructionParser {

    public static PARSERS: Map<string, (game: Game, profile: Profile) => Promise<string | R2Error>> = new Map([
        [DynamicGameInstruction.BEPINEX_PRELOADER_PATH, GameInstructionParser.bepInExPreloaderPathResolver],
        [DynamicGameInstruction.PROFILE_DIRECTORY, GameInstructionParser.profileDirectoryResolver],
        [DynamicGameInstruction.BEPINEX_CORLIBS, GameInstructionParser.bepInExCorelibsPathResolver]
    ]);

    public static async parse(launchString: string, game: Game, profile: Profile): Promise<string | R2Error> {
        let resolvedString = launchString;
        for (let match of launchString.matchAll(new RegExp('@[a-zA-Z0-9]+', 'g'))) {
            const matchValue = match[0];
            if (this.PARSERS.has(matchValue)) {
                const replacement = await this.PARSERS.get(matchValue)!(game, profile);
                if (replacement instanceof R2Error) {
                    return replacement;
                }
                resolvedString = resolvedString.replace(new RegExp("@[a-zA-Z0-9]+", "g"), replacement);
            }
        }
        return resolvedString;
    }

    private static async profileDirectoryResolver(game: Game, profile: Profile): Promise<string> {
        return profile.getPathOfProfile();
    }

    private static async bepInExPreloaderPathResolver(game: Game, profile: Profile): Promise<string | R2Error> {
        try {
            const corePath = path.join(profile.getPathOfProfile(), "BepInEx", "core");
            return path.join(corePath,
                (await FsProvider.instance.readdir(corePath))
                    .filter((x: string) => ["BepInEx.Preloader.dll", "BepInEx.IL2CPP.dll"].includes(x))[0]);
        } catch (e) {
            const err: Error = e as Error;
            return new R2Error("Failed to find preloader dll", err.message, "BepInEx may not installed correctly. Further help may be required.");
        }
    }

    private static async bepInExCorelibsPathResolver(game: Game, profile: Profile): Promise<string | R2Error> {
        try {
            return await FsProvider.instance.realpath(path.join(profile.getPathOfProfile(), "unstripped_corlib"));
        } catch (e) {
            const err: Error = e as Error;
            return new R2Error("Unable to resolver Corelibs folder", `"unstripped_corlib" folder failed. No such directory exists for path: ${Profile.getActiveProfile().getPathOfProfile()}.\nReason: ${err.message}`, null);
        }
    }

}
