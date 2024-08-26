import React, { useState } from "@rbxts/react";
import { fonts } from "client/constants/fonts";
import { palette } from "client/constants/palette";
import { usePx } from "client/hooks/use-px";

import { Button } from "./button";
import { clientData } from "./client-data";

const COLORS = [palette.purple, palette.blue, palette.green, palette.yellow, palette.red];

export function Counter() {
	const px = usePx();
	const [count, setCount] = useState(0);
	const [colorIndex, setColorIndex] = useState(0);

	return (
		<Button
			onClick={() => {
				setCount(count + 1);
				setColorIndex((colorIndex + 1) % COLORS.size());
				clientData.serverProducer?.removeUIVisible("essa xddddddddddddd");
			}}
			font={fonts.inter.medium}
			text={`👆 Clicked ${count} times`}
			textSize={px(32)}
			textColor={palette.white}
			backgroundColor={COLORS[colorIndex]}
			size={new UDim2(0, px(320), 0, px(128))}
			position={new UDim2(0.5, 0, 0.5, 0)}
			anchorPoint={new Vector2(0.5, 0.5)}
		/>
	);
}
