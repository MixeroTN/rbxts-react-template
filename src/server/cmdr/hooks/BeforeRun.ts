import { CommandContext, Registry } from "@rbxts/cmdr";

// https://eryn.io/Cmdr/guide/Hooks.html
// At least one BeforeRun hook is required to make commands work in the live game
// To disable this, comment "RegisterHooksIn" line in cmdr server script

const ADMIN_RANK: number = 4;
const GROUP_ID: number = 4454344;
const TIMEOUT: number = 30;

interface CacheEntry {
    rank: number;
    timestamp: number;
}

const cache: Map<number, CacheEntry> = new Map();

function checkRank(player: Player): number {
    const rank: number = player.GetRankInGroup(GROUP_ID);
    const userId: number = player.UserId;

    const currentTime: number = os.time();
    const cacheEntry: CacheEntry | undefined = cache.get(userId);

    if (cacheEntry && currentTime - cacheEntry.timestamp < TIMEOUT) {
        return cacheEntry.rank;
    }

    cache.set(player.UserId, {
        rank, timestamp: currentTime
    });

    return rank;
}

function adminPermissionCheck(player: Player): boolean {
    return checkRank(player) >= ADMIN_RANK;
}

export = ( registry: Registry ) => {
    registry.RegisterHook("BeforeRun", (context: CommandContext): string | undefined => {
        if (
            !(context.Group === "Admin" || context.Group === "DefaultAdmin") ||
            !adminPermissionCheck(context.Executor)
        ) {
            return "You don't have permission to run this command";
        }
    });
};
