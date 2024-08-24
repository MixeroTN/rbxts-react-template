import "./dev";

import React, { StrictMode } from "@rbxts/react";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { Players } from "@rbxts/services";

import { App } from "./components/app";
import { MainMenu } from "./components/base/main-menu";

const root = createRoot(new Instance("Folder"));
const target = Players.LocalPlayer.WaitForChild("PlayerGui").WaitForChild("ReactRender");

root.render(createPortal(<MainMenu />, target));
