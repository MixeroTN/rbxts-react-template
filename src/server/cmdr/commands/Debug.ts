import type { CommandDefinition } from "@rbxts/cmdr";

export = {
	Name: "debug",
	Aliases: ["deb"],
	Description: "Sending a message in output.",
	Group: "Admin",
	Args: [
		{
			Type: "string",
			Name: "message",
			Description: "Message to show in output.",
			Optional: true,
		},
	],
} as CommandDefinition;
