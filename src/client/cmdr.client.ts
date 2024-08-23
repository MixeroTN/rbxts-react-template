import { Players } from "@rbxts/services";
import { CmdrClient } from "@rbxts/cmdr";
import { ADMIN_RANK, GROUP_ID } from "shared/configs/core";

const ACTIVATION_KEYS: [Enum.KeyCode] = [Enum.KeyCode.F2];

const canLaunch: boolean = Players.LocalPlayer.GetRankInGroup(GROUP_ID) >= ADMIN_RANK;

CmdrClient.SetActivationKeys(ACTIVATION_KEYS);
CmdrClient.SetEnabled(canLaunch);
