import { ImmutableProfile } from "../model/Profile";
import ManifestV2 from "../model/ManifestV2";

export type InstallArgs = {
    mod: ManifestV2;
    profile: ImmutableProfile;
    packagePath: string;
};

export interface PackageInstaller {
    install(args: InstallArgs): Promise<void>;
    uninstall?(args: InstallArgs): Promise<void>;
}
