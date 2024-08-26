import { config, type SpringOptions } from "@rbxts/ripple";

export const springs = {
	...config.spring,
	bubbly: { tension: 400, friction: 14 },
	bubbly2: { tension: 300, friction: 20, mass: 1.2 },
	responsive: { tension: 400 },
	responsive2: { tension: 600, friction: 34, mass: 0.7 },
	gentle: { tension: 250, friction: 30 },
	world: { tension: 180, friction: 30 },
} satisfies Record<string, SpringOptions>;
