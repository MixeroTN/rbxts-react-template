import { Players, RunService } from "@rbxts/services";
import { $NODE_ENV } from "rbxts-transform-env";

export const ADMIN_RANK: number = 4;
export const GROUP_ID: number = 4454344;

export const IS_PLUGIN = RunService.IsStudio() && !RunService.IsRunning();
export const IS_CANARY = $NODE_ENV === "canary";
export const IS_PROD = $NODE_ENV === "production";

export const REMOTE_TICK = 1 / 20; // Roblox limits

export const USER_ID = Players.LocalPlayer ? Players.LocalPlayer.UserId : 0;
export const USER_NAME = Players.LocalPlayer ? Players.LocalPlayer.Name : "(server)";
