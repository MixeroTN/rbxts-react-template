import { createProducer, Producer } from "@rbxts/reflex";

export interface serverProfileState {
	readonly uiVisible: readonly string[];
	readonly player?: Player;
}

export const defaultServerProfileState: serverProfileState = {
	uiVisible: [],
};

export type ServerProducer = ReturnType<typeof createServerProducer>;

export const createServerProducer = (defaultState: serverProfileState) => {
	return createProducer(defaultState, {
		setPlayer: (state, player: Player) => ({
			...state,
			player: player,
		}),

		addUIVisible: (state, todo: string) => ({
			...state,
			uiVisible: [...state.uiVisible, todo],
		}),

		removeUIVisible: (state, todo: string) => ({
			...state,
			uiVisible: state.uiVisible.filter(t => t !== todo),
		}),
	});
};
