import { Cmdr } from "@rbxts/cmdr";

const parent = <Folder>script.Parent;

Cmdr.RegisterDefaultCommands();
Cmdr.RegisterCommandsIn(<Folder>parent.WaitForChild("commands"));
Cmdr.RegisterHooksIn(<Folder>parent.WaitForChild("hooks"));
Cmdr.RegisterTypesIn(<Folder>parent.WaitForChild("types"));
