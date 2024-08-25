import { createProducer } from "@rbxts/reflex";

interface tempStore {
	readonly uiVisible: ReadonlyArray<string>;
}

const defaultState: tempStore = {
	uiVisible: [],
};

export const uiStore = createProducer(defaultState, {
	addUIVisible: (state, todo: string) => ({
		...state,
		uiVisible: [...state.uiVisible, todo],
	}),

	removeUIVisible: (state, todo: string) => ({
		...state,
		uiVisible: state.uiVisible.filter(t => t !== todo),
	}),
});
