import { Producer, ProducerMiddleware } from "@rbxts/reflex"
import { createServerProducer, defaultServerProfileState, ServerProducer, serverProfileState } from "shared/reflex/server-store"
import { remotes } from "shared/remotes"

type StoredDatas = {[playerUID: number]: serverData}

const storedDatas: StoredDatas = {}

export const getPlayerServerData = (player: Player): serverData => {
    return storedDatas[player.UserId]
}

let isActionReplicated = false

const middleware: ProducerMiddleware = (producer) => {
    return (nextAction, name) => {
        return (... args) => {
            const state = producer.getState() as serverProfileState
            const player = state.player
            if (player) {

                if (isActionReplicated){
                    isActionReplicated = false
                } else {
                    remotes.replicateAction.fire(player, name, args)
                }

                nextAction(... args);
            } else {
                return producer.getState()
            }
        }
    }
}

remotes.replicateActionS.connect((player, actionName, actionArgs) => {

    print("EJ TO PRZYCHODZI?")

    const profile = getPlayerServerData(player).producer as ServerProducer

    if (!actionName.find("secure").isEmpty()) {
        return
    }

    isActionReplicated = true;
    (profile.getDispatchers() as  { [key: string]: (...args: unknown[]) => unknown})[actionName](...actionArgs)
    print(profile.getState())
})

export class serverData {
    dataOfPlayer: Player
    producer: ServerProducer
    constructor(player: Player){
        this.dataOfPlayer = player
        this.producer = createServerProducer(defaultServerProfileState)

        this.producer.setPlayer(player)

        this.producer.applyMiddleware(middleware)

        storedDatas[player.UserId] = this
    }
}