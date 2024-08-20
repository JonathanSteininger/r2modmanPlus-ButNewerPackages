import ModLoaderPackageMapping from '../../../model/installing/ModLoaderPackageMapping';
import { PackageLoader } from '../../../model/installing/PackageLoader';
import VersionNumber from '../../../model/VersionNumber';


/**
 * The hardcoded metadata here should really be a property of the packages themselves & parsed from there when
 * installing, but as that does not yet exist, we have to maintain a mapping here.
 *
 * As things are now, consider this implementation legacy but a necessity until a more data-oriented method is
 * implemented.
 */
export const MODLOADER_PACKAGES = [
    new ModLoaderPackageMapping("bbepis-BepInExPack", "BepInExPack", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("xiaoxiao921-BepInExPack", "BepInExPack", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("xiaoye97-BepInEx", "BepInExPack", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("denikson-BepInExPack_Valheim", "BepInExPack_Valheim", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("1F31A-BepInEx_Valheim_Full", "BepInEx_Valheim_Full", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_GTFO", "BepInExPack_GTFO", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_Outward", "BepInExPack_Outward", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("bbepisTaleSpire-BepInExPack", "BepInExPack", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_H3VR", "BepInExPack_H3VR", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_ROUNDS", "BepInExPack_ROUNDS", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("Zinal001-BepInExPack_MECHANICA", "BepInExPack_MECHANICA", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_Muck", "BepInExPack_Muck", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_LLBlaze", "BepInExPack_LLBlaze", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_Timberborn", "BepInExPack_Timberborn", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_TABS", "BepInExPack_TABS", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_NASB", "BepInExPack_NASB", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_Inscryption", "BepInExPack_Inscryption", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_Starsand", "BepInExPack_Starsand", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_CaLABP", "BepInExPack_CaLABP", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_PotionCraft", "BepInExPack_PotionCraft", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_NearlyDead", "BepInExPack_NearlyDead", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_AGAINST", "BepInExPack_AGAINST", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("bbepis-BepInEx_Rogue_Tower", "", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_HOTDS", "BepInExPack_HOTDS", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_ForTheKing", "BepInExPack_ForTheKing", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("Subnautica_Modding-BepInExPack_Subnautica", "BepInExPack_Subnautica", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("Subnautica_Modding-BepInExPack_Subnautica_Experimental", "BepInExPack_Subnautica_Experimental", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("Subnautica_Modding-BepInExPack_BelowZero", "BepInExPack_BelowZero", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_Core_Keeper", "BepInExPack_Core-Keeper", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("Northstar-Northstar", "Northstar", PackageLoader.NORTHSTAR),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_Peglin", "BepInExPack_Peglin", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_V_Rising", "BepInExPack_V_Rising", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("PCVR_Modders-BepInExPack_GHVR", "BepInExPack_GHVR", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInExPackMTD-BepInExPack_20MTD", "BepInExPack_20MTD", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_VTOL_VR", "BepInExPack_VTOL_VR", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_Stacklands", "BepInExPack_Stacklands", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_EtG", "BepInExPack_EtG", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_Ravenfield", "BepInExPack_Ravenfield", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_Aloft", "BepInExPack_Aloft", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_CultOfTheLamb", "BepInExPack_CultOfTheLamb", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_Chrono_Ark", "BepInExPack_Chrono_Ark", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_TromboneChamp", "BepInExPack_TromboneChamp", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_RogueGenesia", "BepInExPack_RogueGenesia", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_AcrossTheObelisk", "BepInExPack_AcrossTheObelisk", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack", "BepInExPack", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("GodotModding-GodotModLoader", "", PackageLoader.GODOT_ML),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_Skul", "BepInExPack", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_IL2CPP", "BepInExPack", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_x86", "BepInExPack", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("Modding_Council-BepInExPack_of_Legend", "BepInExPack_of_Legend", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_Thronefall", "BepInExPack", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx-BepInExPack_WizardWithAGun", "BepInExPack", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("SunkenlandModding-BepInExPack_Sunkenland", "BepInExPack_Sunkenland", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("BepInEx_Wormtown-BepInExPack", "BepInExPack", PackageLoader.BEPINEX),
    new ModLoaderPackageMapping("0xFFF7-votv_shimloader", "", PackageLoader.SHIMLOADER),
    new ModLoaderPackageMapping("Thunderstore-unreal_shimloader", "", PackageLoader.SHIMLOADER),
    new ModLoaderPackageMapping("Thunderstore-lovely", "", PackageLoader.LOVELY),
    new ModLoaderPackageMapping("ReturnOfModding-ReturnOfModding", "ReturnOfModdingPack", PackageLoader.RETURN_OF_MODDING),
];


/**
 * While this object is a bit silly given that all the keys are pointing to the
 * same value, it's still kept around as it provides some type hinting
 * capabilities elsewhere in the project (see the GAME_NAME type below).
 */
const VARIANTS = {
    RiskOfRain2: MODLOADER_PACKAGES,
    ThunderstoreDev: MODLOADER_PACKAGES,
    DysonSphereProgram: MODLOADER_PACKAGES,
    Valheim: MODLOADER_PACKAGES,
    GTFO: MODLOADER_PACKAGES,
    Outward: MODLOADER_PACKAGES,
    OutwardDe: MODLOADER_PACKAGES,
    TaleSpire: MODLOADER_PACKAGES,
    H3VR: MODLOADER_PACKAGES,
    ThunderstoreBeta: MODLOADER_PACKAGES,
    ROUNDS: MODLOADER_PACKAGES,
    Mechanica: MODLOADER_PACKAGES,
    Muck: MODLOADER_PACKAGES,
    BONEWORKS: [new ModLoaderPackageMapping("LavaGang-MelonLoader", "", PackageLoader.MELON_LOADER, new VersionNumber("0.5.4"))],
    LethalLeagueBlaze: MODLOADER_PACKAGES,
    Timberborn: MODLOADER_PACKAGES,
    TABS: MODLOADER_PACKAGES,
    NASB: MODLOADER_PACKAGES,
    Inscryption: MODLOADER_PACKAGES,
    Starsand: MODLOADER_PACKAGES,
    CatsAreLiquidABP: MODLOADER_PACKAGES,
    PotionCraft: MODLOADER_PACKAGES,
    NearlyDead: MODLOADER_PACKAGES,
    AGAINST: MODLOADER_PACKAGES,
    RogueTower: MODLOADER_PACKAGES,
    HOTDS: MODLOADER_PACKAGES,
    ForTheKing: MODLOADER_PACKAGES,
    Subnautica: MODLOADER_PACKAGES,
    SubnauticaBZ: MODLOADER_PACKAGES,
    CoreKeeper: MODLOADER_PACKAGES,
    Titanfall2: MODLOADER_PACKAGES,
    Peglin: MODLOADER_PACKAGES,
    VRising: MODLOADER_PACKAGES,
    HardBullet: MODLOADER_PACKAGES,
    GreenHellVR: MODLOADER_PACKAGES,
    "20MinutesTillDawn": MODLOADER_PACKAGES,
    VTOL_VR: MODLOADER_PACKAGES,
    BackpackHero: MODLOADER_PACKAGES,
    Stacklands: MODLOADER_PACKAGES,
    ETG: MODLOADER_PACKAGES,
    Ravenfield: MODLOADER_PACKAGES,
    Aloft: MODLOADER_PACKAGES,
    COTL: MODLOADER_PACKAGES,
    ChronoArk: MODLOADER_PACKAGES,
    BONELAB: [new ModLoaderPackageMapping("LavaGang-MelonLoader", "", PackageLoader.MELON_LOADER, new VersionNumber("0.5.7"))],
    TromboneChamp: MODLOADER_PACKAGES,
    RogueGenesia: MODLOADER_PACKAGES,
    AcrossTheObelisk: MODLOADER_PACKAGES,
    ULTRAKILL: MODLOADER_PACKAGES,
    UltimateChickenHorse: MODLOADER_PACKAGES,
    AtrioTheDarkWild: MODLOADER_PACKAGES,
    AncientDungeonVR: MODLOADER_PACKAGES,
    Brotato: MODLOADER_PACKAGES,
    RUMBLE: MODLOADER_PACKAGES,
    DomeKeeper: MODLOADER_PACKAGES,
    SkulTheHeroSlayer: MODLOADER_PACKAGES,
    SonsOfTheForest: MODLOADER_PACKAGES,
    TheOuroborosKing: MODLOADER_PACKAGES,
    WrestlingEmpire: MODLOADER_PACKAGES,
    Receiver2: MODLOADER_PACKAGES,
    ThePlanetCrafter: MODLOADER_PACKAGES,
    PatchQuest: MODLOADER_PACKAGES,
    ShadowsOverLoathing: MODLOADER_PACKAGES,
    WestofLoathing: MODLOADER_PACKAGES,
    SunHaven: MODLOADER_PACKAGES,
    Wildfrost: MODLOADER_PACKAGES,
    ShadowsofDoubt: MODLOADER_PACKAGES,
    WeLoveKatamariRerollRoyalReverie: MODLOADER_PACKAGES,
    Thronefall: MODLOADER_PACKAGES,
    Techtonica: MODLOADER_PACKAGES,
    GarfieldKartFuriousRacing: MODLOADER_PACKAGES,
    WizardOfLegend: MODLOADER_PACKAGES,
    BombRushCyberfunk: MODLOADER_PACKAGES,
    TouhouLostBranchOfLegend: MODLOADER_PACKAGES,
    WizardWithAGun: MODLOADER_PACKAGES,
    Sunkenland: MODLOADER_PACKAGES,
    Atomicrops: MODLOADER_PACKAGES,
    Erenshor: MODLOADER_PACKAGES,
    LastTrainOuttaWormtown: MODLOADER_PACKAGES,
    Dredge: MODLOADER_PACKAGES,
    CitiesSkylines2: MODLOADER_PACKAGES,
    LethalCompany: MODLOADER_PACKAGES,
    MeepleStation: MODLOADER_PACKAGES,
    VoidCrew: MODLOADER_PACKAGES,
    Sailwind: MODLOADER_PACKAGES,
    VotV: MODLOADER_PACKAGES,
    Palworld: MODLOADER_PACKAGES,
    Plasma: MODLOADER_PACKAGES,
    ContentWarning: MODLOADER_PACKAGES,
    Balatro: MODLOADER_PACKAGES,
    BoplBattle: MODLOADER_PACKAGES,
    Vertigo2: MODLOADER_PACKAGES,
    AgainstTheStorm: MODLOADER_PACKAGES,
    Lycans: MODLOADER_PACKAGES,
    CastleStory: MODLOADER_PACKAGES,
    Panicore: MODLOADER_PACKAGES,
    RiskofRainReturns: MODLOADER_PACKAGES,
    Magicraft: MODLOADER_PACKAGES,
    AnotherCrabsTreasure: MODLOADER_PACKAGES,
    GladioMori: MODLOADER_PACKAGES,
    SlipstreamRogueSpace: MODLOADER_PACKAGES,
    BacktotheDawn: MODLOADER_PACKAGES,
    BelowTheStone: MODLOADER_PACKAGES,
    Gloomwood: MODLOADER_PACKAGES,
    AmongUs: MODLOADER_PACKAGES,
    DeepRockGalacticSurvivor: MODLOADER_PACKAGES,
};
// Exported separately from the definition in order to preserve the key names in the type definition.
// Otherwise this would become [key: string] and we couldn't use the game names for type hinting elsewhere.
// Casting is done here to ensure the values are ModLoaderPackageMapping[]
export type GAME_NAME = keyof typeof VARIANTS;
export const MOD_LOADER_VARIANTS: {[key in GAME_NAME]: ModLoaderPackageMapping[]} = VARIANTS;
