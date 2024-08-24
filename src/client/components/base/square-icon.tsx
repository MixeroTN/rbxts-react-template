import React from "@rbxts/react";
import { usePx } from "client/hooks/use-px";
import { fonts } from "client/utils/fonts";
import { palette } from "client/utils/palette";


interface SquareIcon {
	size?: UDim2;
	position?: UDim2;
	anchorPoint?: Vector2;
    icon?: string
}

export function SquareIcon({size, position, anchorPoint, icon}: SquareIcon) {
	const px = usePx();

	return (
		(
        <imagelabel
            AnchorPoint={anchorPoint}
            BackgroundColor3={Color3.fromRGB(255, 255, 255)}
            BackgroundTransparency={1}
            BorderColor3={Color3.fromRGB(27, 42, 53)}
            Image={icon}
            Position={position}
            ScaleType={Enum.ScaleType.Fit}
            Size={size}
        >
            <uiaspectratioconstraint/>
        </imagelabel>
        )
	);
}