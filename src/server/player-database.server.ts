import { Players } from "@rbxts/services";
import { remotes } from "shared/remotes";

import { serverData } from "./components/server-data";

Players.PlayerAdded.Connect(player => {
	const dataContainer = new serverData(player);
	remotes.createClientData.fire(player, dataContainer.producer.getState());

	task.wait(2);
	dataContainer.producer.addUIVisible("essa xddddddddddddd");
});
