import React from "@rbxts/react";
import { fonts } from "client/constants/fonts";
import { usePx } from "client/hooks/use-px";
import { palette } from "client/utils/palette";
import { SizeUpEffect } from "./size-up-effect";


interface CircleButton {
	icon?: string;
	size?: UDim2;
	position?: UDim2;
	anchorPoint?: Vector2;
    onClick?: () => void
}

export function CircleButton({icon, size = new UDim2(1,0,1,0), position = new UDim2(0,0,0,0), anchorPoint = new Vector2(0,0), onClick}: CircleButton) {



	return (
        <SizeUpEffect
        size={size}
        position={position}
        square={true}
        >
            <frame
                BackgroundColor3={Color3.fromRGB(255, 255, 255)}
                BorderColor3={Color3.fromRGB(0, 0, 0)}
                BorderSizePixel={0}
                Position={new UDim2(0,0,0,0)}
                Size={new UDim2(1,0,1,0)}
            >
                <uicorner
                CornerRadius={new UDim(100, 0)}
                />

                <uiaspectratioconstraint />

                <imagebutton
                AnchorPoint={new Vector2(0.5, 0.5)}
                BackgroundColor3={Color3.fromRGB(255, 255, 255)}
                BackgroundTransparency={1}
                BorderColor3={Color3.fromRGB(0, 0, 0)}
                BorderSizePixel={0}
                Image={icon}
                Position={UDim2.fromScale(0.5, 0.5)}
                Size={UDim2.fromScale(0.8, 0.8)}
                Event={{
                    Activated: onClick
                }}
                />

                <uigradient
                Color={new ColorSequence([
                    new ColorSequenceKeypoint(0, Color3.fromRGB(56, 103, 251)),
                    new ColorSequenceKeypoint(1, Color3.fromRGB(51, 68, 175)),
                ])}
                />
            </frame>
        </SizeUpEffect>
    );
}