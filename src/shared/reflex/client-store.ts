import { combineProducers, InferState } from "@rbxts/reflex";
import { tempStore } from "./client-stores/temp-store";
import { uiStore } from "./client-stores/ui-store";

export type ClientProducer = typeof clientStore;

export type RootState = InferState<ClientProducer>;

export const clientStore = combineProducers({
	tempStore: tempStore,
	uiStore: uiStore,
});
