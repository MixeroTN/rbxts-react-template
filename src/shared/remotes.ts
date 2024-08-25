import { Client, createRemotes, remote, Server } from "@rbxts/remo";

import { serverProfileState } from "./reflex/server-store";

export const remotes = createRemotes({
	replicateAction: remote<Client, [actionName: string, actionArgs: Array<unknown>]>(),
	replicateActionS: remote<Server, [actionName: string, actionArgs: Array<unknown>]>(),
	createClientData: remote<Client, [loadedState: serverProfileState]>(),
});
