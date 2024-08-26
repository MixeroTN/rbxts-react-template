import React, { useEffect, useState } from "@rbxts/react";
import { fonts } from "client/constants/fonts";
import { palette } from "client/constants/palette";
import { springs } from "client/constants/springs";
import { useMotion } from "client/hooks/use-motion";
import { usePx } from "client/hooks/use-px";
import { brighten } from "client/utils/color-utils";

interface ButtonProps {
	onClick?: () => void;
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

export function Button({
	onClick,
	font = fonts.inter.regular,
	text,
	textSize,
	textColor = palette.white,
	backgroundColor = palette.blue,
	size,
	position,
	anchorPoint,
	children,
}: ButtonProps) {
	const px = usePx();

	const [pressed, setPressed] = useState(false);
	const [hovered, setHovered] = useState(false);

	const [buttonPosition, buttonPositionMotion] = useMotion(0);
	const [buttonColor, buttonColorMotion] = useMotion(backgroundColor);

	useEffect(() => {
		if (pressed) {
			buttonPositionMotion.spring(px(8), springs.responsive2);
			buttonColorMotion.spring(brighten(backgroundColor, -0.1), springs.responsive2);
		} else if (hovered) {
			buttonPositionMotion.spring(-px(8), springs.responsive2);
			buttonColorMotion.spring(brighten(backgroundColor, 0.1), springs.responsive2);
		} else {
			buttonPositionMotion.spring(0, springs.responsive2);
			buttonColorMotion.spring(backgroundColor, springs.responsive2);
		}
	}, [pressed, hovered, backgroundColor, px]);

	useEffect(() => {
		if (!pressed && hovered) {
			buttonPositionMotion.impulse(-px(1));
			buttonPositionMotion.spring(-px(8), springs.bubbly2);
		}
	}, [pressed]);

	return (
		<frame BackgroundTransparency={1} AnchorPoint={anchorPoint} Size={size} Position={position}>
			<textbutton
				FontFace={font}
				Text={text}
				TextColor3={textColor}
				TextSize={textSize}
				AutoButtonColor={false}
				BackgroundColor3={buttonColor}
				Size={new UDim2(1, 0, 1, 0)}
				Position={buttonPosition.map(y => new UDim2(0, 0, 0, y))}
				Event={{
					Activated: onClick,
					MouseEnter: () => setHovered(true),
					MouseLeave: () => {
						setHovered(false);
						setPressed(false);
					},
					MouseButton1Down: () => setPressed(true),
					MouseButton1Up: () => setPressed(false),
				}}
			>
				<uicorner CornerRadius={new UDim(0, px(16))} />
				{children}
			</textbutton>
		</frame>
	);
}
