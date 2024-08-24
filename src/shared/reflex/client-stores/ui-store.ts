import { createProducer } from "@rbxts/reflex";

interface tempStore {
    readonly uiVisible: readonly string[];
}

const defaultState: tempStore = {
    uiVisible: []
}

export const uiStore = createProducer(defaultState, {
    addUIVisible: (state, todo: string) => ({
        ...state,
        uiVisible: [...state.uiVisible, todo],
    }),

    removeUIVisible: (state, todo: string) => ({
        ...state,
        uiVisible: state.uiVisible.filter((t) => t !== todo),
    }),
})