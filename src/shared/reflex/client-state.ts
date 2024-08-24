import create from "@rbxts/plasma/src/create";
import { createProducer } from "@rbxts/reflex";

export type clientStateType = typeof clientState

export interface clientDefaultState{
    readonly uiVisible: readonly string[]
}

export const clientDefaultState: clientDefaultState = {
    uiVisible: [],
}

export const clientState = createProducer(clientDefaultState, {
    setUIVisible: (state, uiName: string) => ({
        ...state,
        uiVisible: [...state.uiVisible, uiName],
    }),

    removeUIVisible: (state, uiName: string) => ({
        ...state,
        uiVisible: state.uiVisible.filter((name) => name !== uiName),
    })
})