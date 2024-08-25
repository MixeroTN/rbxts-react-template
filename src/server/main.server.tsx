import { ServerScriptService } from "@rbxts/services";
import { HotReloader } from "@rbxts/rewire";
import { promiseChild } from "@rbxts/promise-child";

export type BaseModule = {
	initialize: () => [...any];
	start: () => [...any];
};

const initialize = () => {
	const beginTime: number = os.clock();

	const TSFolder = promiseChild(ServerScriptService, "TS").expect() as Folder;
	const services = promiseChild(TSFolder, "services").expect() as Folder;

	const _start = () =>
		Promise.defer<void>(_resolve => {
			for (const service of services.GetDescendants()) {
				if (!service.IsA("ModuleScript")) continue;

				const module = require(service) as Partial<BaseModule>;

				if (typeIs(module.initialize, "function")) {
					debug.setmemorycategory(service.Name);
					module.initialize();
				} else continue;

				if (typeIs(module.start, "function")) {
					debug.setmemorycategory(service.Name);
					module.start();
				}
			}

			return _resolve();
		});

	_start()
		.catch(warn)
		.finally(() => {
			print(`The server took ${os.clock() - beginTime} [to format] seconds to initialize.`);

			const reloader = new HotReloader();
			reloader.scan(
				services,
				module => {
					require(module);
					print("Reloading module", module.Name);
				},
				module => {},
			);
		});
};

initialize();
