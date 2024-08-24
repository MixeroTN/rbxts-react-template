import React from "@rbxts/react";
import { fonts } from "client/constants/fonts";
import { usePx } from "client/hooks/use-px";
import { palette } from "client/utils/palette";


interface Text {
	font?: Font;
	text?: string;
	textSize?: number;
	textColor?: Color3;
	backgroundColor?: Color3;
	size?: UDim2;
	position?: UDim2;
	anchorPoint?: Vector2;
	children?: React.ReactNode;
}

export function Text({font = fonts.gotham.regular, text, textColor = palette.white, size, position, anchorPoint, textSize = 14}: Text) {
	const px = usePx();

	return (
		<textlabel
        AnchorPoint={anchorPoint}
        BackgroundColor3={Color3.fromRGB(255, 255, 255)}
        BackgroundTransparency={1}
        BorderColor3={Color3.fromRGB(0, 0, 0)}
        BorderSizePixel={0}
        FontFace={font}
        Position={position}
        Size={size}
        Text={text}
        TextColor3={textColor}
        TextScaled={true}
        TextSize={textSize}
        TextWrapped={true}
        />
	);
}