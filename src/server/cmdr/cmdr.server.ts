import { Cmdr } from "@rbxts/cmdr";

const parent = script.Parent as Folder;

Cmdr.RegisterDefaultCommands();
Cmdr.RegisterCommandsIn(parent.WaitForChild("commands") as Folder);
Cmdr.RegisterHooksIn(parent.WaitForChild("hooks") as Folder);
Cmdr.RegisterTypesIn(parent.WaitForChild("types") as Folder);
