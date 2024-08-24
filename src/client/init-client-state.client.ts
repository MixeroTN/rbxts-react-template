import { createProducer } from "@rbxts/reflex";
import { Players } from "@rbxts/services";
import { clientPlayerData } from "shared/reflex/client-player-data";
import { clientState } from "shared/reflex/client-state";

print("HALO?")
const playerData = new clientPlayerData(Players.LocalPlayer, clientState)
playerData.addToData()

print(playerData.clientState.getState())
playerData.clientState.setUIVisible("cos")
print(playerData.clientState.getState())
playerData.clientState.removeUIVisible("cos")
print(playerData.clientState.getState())

print(script.Name)
