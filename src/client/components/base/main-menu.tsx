import React from "@rbxts/react";

import { MenuBackground } from "./menu-background";
import { Text } from "./text";
import { SquareIcon } from "./square-icon";
import { fonts } from "client/constants/fonts";
import { CircleButton } from "./circle-button";
import { SizeUpEffect } from "./size-up-effect";
import { useProducer } from "@rbxts/react-reflex";
import { clientStateType } from "shared/reflex/client-state";
import { getClientPlayerData } from "shared/reflex/client-player-data";


//const getData = getClientPlayerData()

//while (!getData || !getData.clientState) {
//    task.wait()
//}

//print("shit loaded")

//const onClick = () => {
//    getData.clientState.setUIVisible("essa")
//    print(getData.clientState.getState())
//}

export function MainMenu() {

    return (
        <MenuBackground>
            <SquareIcon icon="http://www.roblox.com/asset/?id=4862903631" size={new UDim2(0.3,0,0.3,0)} anchorPoint={new Vector2(0.5,0)} position={new UDim2(0.5,0,0.1,0)}></SquareIcon>
            <Text text={"STAN WINNEBEG"} size={new UDim2(0.276,0,0.062,0)} font={fonts.gotham.bold} position={new UDim2(0.5,0,0.42,0)} anchorPoint={new Vector2(0.5, 0)}/>
            <Text text={"HRABSTWO BAYLOR"} size={new UDim2(0.235,0,0.062,0)} font={fonts.gotham.medium} position={new UDim2(0.5,0,0.469,0)} anchorPoint={new Vector2(0.5, 0)}/>
            <Text text={"Utwórz postać"} size={new UDim2(0.235,0,0.04,0)} position={new UDim2(0.5,0,0.774,0)} anchorPoint={new Vector2(0.5, 0)}/>
            <CircleButton position={new UDim2(0.5,0,0.663,0)} size={new UDim2(0.1,0,0.1,0)} icon={"rbxassetid://14915516955"}></CircleButton>
        </MenuBackground>
    )
}
