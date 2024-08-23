import "./dev";

import React, { StrictMode } from "@rbxts/react";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { Players } from "@rbxts/services";
import { Cleanser } from "@rbxts/cleanser";
import { HotReloader } from "@rbxts/rewire";
import { promiseChild } from "@rbxts/promise-child";

import { App } from "./components/app";

export type BaseModule = {
	initialize: () => [...any];
	start: () => [...any];
};

const Player = Players.LocalPlayer as Player;
const PlayerGui = Player.WaitForChild("PlayerGui") as PlayerGui;
const PlayerScripts = Player.WaitForChild("PlayerScripts") as PlayerScripts;

const initialize = () => {
	const beginTime: number = os.clock();

	const TSFolder = promiseChild(PlayerScripts, "TS").expect() as Folder;
	const controllers = promiseChild(TSFolder, "controllers").expect() as Folder;

	const _render = () =>
		Promise.defer<void>((_resolve) => {
			const root = createRoot(new Instance("Folder"));
			const target = PlayerGui;

			root.render(<StrictMode>{createPortal(<App />, target)}</StrictMode>);

			return _resolve();
		});

	const _start = () =>
		Promise.defer<void>((_resolve) => {
			for (const controller of controllers.GetDescendants()) {
				if (!controller.IsA("ModuleScript")) continue;

				const module = require(controller) as Partial<BaseModule>;

				if (typeIs(module.initialize, "function")) {
					debug.setmemorycategory(controller.Name);
					module.initialize();
				} else continue;

				if (typeIs(module.start, "function")) {
					debug.setmemorycategory(controller.Name);
					module.start();
				}
			}

			return _resolve();
		});

	_render()
		.andThen(_start, warn)
		.finally(() => {
			print(`The client took ${os.clock() - beginTime} [to format] seconds to initialize.`);

			const reloader = new HotReloader();
			reloader.scan(
				controllers,
				(module) => {
					require(module);
					print("Reloading module", module.Name);
				},
				(module) => {},
			);
		});
};

initialize();
