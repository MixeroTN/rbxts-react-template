import React from "@rbxts/react";

interface LayerProps {
	displayOrder?: number;
  children?: React.ReactNode
}

export function MenuBackground({displayOrder, children}: LayerProps) {
	return (
		
  <frame
    BackgroundColor3={Color3.fromRGB(4, 11, 11)}
    BorderColor3={Color3.fromRGB(0, 0, 0)}
    BorderSizePixel={0}
    Size={UDim2.fromScale(1, 1)}
  >
    <imagelabel
      BackgroundColor3={Color3.fromRGB(255, 255, 255)}
      BackgroundTransparency={1}
      BorderColor3={Color3.fromRGB(27, 42, 53)}
      Image={"rbxassetid://2151781758"}
      ImageTransparency={0.6}
      ScaleType={Enum.ScaleType.Tile}
      Size={UDim2.fromScale(1, 1)}
      SliceCenter={new Rect(0, 256, 0, 256)}
      TileSize={UDim2.fromOffset(30, 60)}
      ZIndex={0}
    >
      <uigradient
        Transparency={new NumberSequence([
          new NumberSequenceKeypoint(0, 0),
          new NumberSequenceKeypoint(0.3, 1),
          new NumberSequenceKeypoint(0.7, 1),
          new NumberSequenceKeypoint(1, 0),
        ])}
      />
    </imagelabel>
    {children}
  </frame>

	);
}