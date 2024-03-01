import * as React from "react";
import { ReactNode } from "react";

type PropsType = {
	height?: Number;
	width?: Number;
	paddingX?: Number;
	paddingY?: Number;
	borderRadious?: Number;
	borderColor?: string;
	backgroundColor?: string;
	color?: string;
	loadingText?: string;
};

const Button = ({
	height,
	width,
	paddingX = 15,
	paddingY = 10,
	borderRadious = 5,
	borderColor = "gray",
	backgroundColor = "skyblue",
	color = "black",
	loadingText = "Pending",
}: PropsType) => {
	return (
		<button
			style={{
				height: `${height}px`,
				width: `${width}px`,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				gap: "5px",
				border: `ipx solid ${borderColor}`,
				fontSize: "18px",
				fontFamily: "'Courier New', Courier, monospace",
				padding: `${paddingY}px ${paddingX}px`,
				color: color,
				backgroundColor: backgroundColor,
				borderRadius: `${borderRadious}px`,
				cursor: "pointer",
			}}
		>
			{loadingText}
		</button>
	);
};

export { Button };
