import { remotes } from "shared/remotes";
import { clientSignals } from "./client-signals";
import { ClientProducer, clientStore } from "shared/reflex/client-store";
import { createServerProducer, ServerProducer, serverProfileState } from "shared/reflex/server-store";
import { clientData } from "./components/client-data";
import { ProducerMiddleware } from "@rbxts/reflex";

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
						return producer.getState();
					} else {
						remotes.replicateActionS.fire(name, args);
						nextAction(...args);
					}
				}
			} else {
				return producer.getState();
			}
		};
	};
};

remotes.replicateAction.connect((actionName, actionArgs) => {
	if (!clientData.serverProducer) {
		return;
	}

	isActionReplicated = true;
	(clientData.serverProducer?.getDispatchers() as { [key: string]: (...args: unknown[]) => unknown })[actionName](
		...actionArgs,
	);
	print(clientData.serverProducer?.getState());
});

remotes.createClientData.connect(initData => {
	clientData["clientProducer"] = clientStore;
	clientData["serverProducer"] = createServerProducer(initData);
	clientData["serverProducer"].applyMiddleware(middleware);
});
