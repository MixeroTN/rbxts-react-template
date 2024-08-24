import { Players } from "@rbxts/services";
import { clientDefaultState, clientStateType } from "./client-state";
import { Producer } from "@rbxts/reflex";

const storedDatas: {[playerUID: number]: clientPlayerData} = {}

export class clientPlayerData {
    dataOfPlayer: Player
    clientState: clientStateType
    constructor(player: Player, clientState: clientStateType){
        this.clientState = clientState
        this.dataOfPlayer = player
    }

    addToData(): void {
        storedDatas[this.dataOfPlayer.UserId] = this
    }

    removeFromData(): void {
        delete storedDatas[this.dataOfPlayer.UserId]
    }
}

export const getClientPlayerData = (): clientPlayerData => {
    return storedDatas[Players.LocalPlayer.UserId]
}