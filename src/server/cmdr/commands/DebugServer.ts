//import { TestService } from "@rbxts/services";
import type { CommandContext } from "@rbxts/cmdr";

const DEFAULT_MESSAGE = "Test message is here";

export = (_context: CommandContext, message: string | undefined): string => {
	message = message ?? DEFAULT_MESSAGE;

	print(message);

	return "Message: " + message;
};
