import { ReplicatedStorage, ServerScriptService, StarterPlayer } from "@rbxts/services";

export type BaseModule = {
    Initialize: (Player: Player, PlayerGui: PlayerGui) => [...any];
    Start: (Player: Player, PlayerGui: PlayerGui) => [...any];
}
