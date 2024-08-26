import { type Client, createRemotes, remote, type Server } from "@rbxts/remo";

import type { serverProfileState } from "./reflex/server-store";

export const remotes = createRemotes({
	replicateAction: remote<Client, [actionName: string, actionArgs: Array<unknown>]>(),
	replicateActionS: remote<Server, [actionName: string, actionArgs: Array<unknown>]>(),
	createClientData: remote<Client, [loadedState: serverProfileState]>(),
});
