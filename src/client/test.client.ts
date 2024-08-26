import type { ProducerMiddleware } from "@rbxts/reflex";
import { clientStore } from "shared/reflex/client-store";
import { createServerProducer, type serverProfileState } from "shared/reflex/server-store";
import { remotes } from "shared/remotes";

import { clientData } from "./components/client-data";

let isActionReplicated = false;

const middleware: ProducerMiddleware = producer => {
	return (nextAction, name) => {
		return (...args) => {
			const state = producer.getState() as serverProfileState;
			const player = state.player;
			if (player) {
				if (isActionReplicated) {
					isActionReplicated = false;
					nextAction(...args);
				} else {
					if (!name.find("secure").isEmpty()) {
						warn("[REFLEX-CLIENT] Odrzucono akcje z powodu na uzycie secure jako client");
						return state;
					} else {
						remotes.replicateActionS.fire(name, args);
						nextAction(...args);
					}
				}
			} else {
				return state;
			}
		};
	};
};

remotes.replicateAction.connect((actionName, actionArgs) => {
	if (!clientData.serverProducer) {
		return;
	}

	isActionReplicated = true;
	(clientData.serverProducer?.getDispatchers() as Record<string, (..._args: Array<unknown>) => unknown>)[actionName](
		...actionArgs,
	);
	print(clientData.serverProducer?.getState());
});

remotes.createClientData.connect(initData => {
	clientData.clientProducer = clientStore;
	clientData.serverProducer = createServerProducer(initData);
	clientData.serverProducer.applyMiddleware(middleware);
});
