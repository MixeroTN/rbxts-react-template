import { BroadcastAction } from "@rbxts/reflex";
import { Client, createRemotes, namespace, remote, Server, throttleMiddleware } from "@rbxts/remo";
import { t } from "@rbxts/t";
import { serverProfileState } from "./reflex/server-store";

export const remotes = createRemotes({
    replicateAction: remote<Client, [actionName: string, actionArgs: unknown[]]>(),
    replicateActionS: remote<Server, [actionName: string, actionArgs: unknown[]]>(),
    createClientData: remote<Client, [loadedState: serverProfileState]>()
});
