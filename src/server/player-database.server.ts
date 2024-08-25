import { Players } from "@rbxts/services";
import { serverData } from "./components/server-data";
import { remotes } from "shared/remotes";

Players.PlayerAdded.Connect((player) => {
	const dataContainer = new serverData(player);
	remotes.createClientData.fire(player, dataContainer.producer.getState());

	task.wait(2);
	dataContainer.producer.addUIVisible("essa xddddddddddddd");
});
