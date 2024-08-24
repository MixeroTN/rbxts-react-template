import React, { useEffect, useState } from "@rbxts/react";
import { fonts } from "client/constants/fonts";
import { usePx } from "client/hooks/use-px";
import { palette } from "client/utils/palette";
import { useMotion } from "client/hooks/use-motion";
import { springs } from "client/constants/springs";


interface SizeUpEffect {
	size?: UDim2;
	position?: UDim2;
	anchorPoint?: Vector2;
    children?: React.ReactNode
    square?: boolean
}

export function SizeUpEffect({children, size = new UDim2(1,0,1,0), position, anchorPoint = new Vector2(0.5, 0.5), square}: SizeUpEffect) {

	const [frameSize, frameSizeMotion] = useMotion(1);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
		if (hovered) {
			frameSizeMotion.spring(1.5, springs.gentle);
		} else {
			frameSizeMotion.spring(1, springs.gentle);
		}
	}, [hovered]);

	return square? (
    <imagebutton
        AnchorPoint={anchorPoint}
        BackgroundTransparency={1}
        ImageTransparency={1}
        BorderSizePixel={0}
        Position={position}
        Size={frameSize.map((x) => new UDim2(size.X.Scale * x, 0, size.Y.Scale * x, 0))}
        Event={{
			MouseEnter: () => setHovered(true),
			MouseLeave: () => {
				setHovered(false);
			},
		}}>
        <uiaspectratioconstraint></uiaspectratioconstraint>
        {children}
    </imagebutton>
    ): (
        <imagebutton
            AnchorPoint={anchorPoint}
            BackgroundTransparency={1}
            ImageTransparency={1}
            BorderSizePixel={0}
            Position={position}
            Size={frameSize.map((x) => new UDim2(size.X.Scale * x, 0, size.Y.Scale * x, 0))}
            Event={{
                MouseEnter: () => setHovered(true),
                MouseLeave: () => {
                    setHovered(false);
                },
            }}>
            {children}
        </imagebutton>
    );
}

