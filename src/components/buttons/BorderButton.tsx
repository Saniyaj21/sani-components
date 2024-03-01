import * as React from "react";
import { ReactNode } from "react";

type PropsType = {
	children: ReactNode;
	onClick: () => void;
	type?: "submit" | "button" | "reset";
	paddingX?: Number;
	paddingY?: Number;
	borderRadious?: string;
	backgroundColor?: string;
	color?: string;
};

const BorderButton = ({
	children,
	onClick,
	type = "button",
	paddingX = 15,
	paddingY = 10,
	borderRadious = "5px",
	backgroundColor = "green",
	color = "white",
}: PropsType) => {
	return (
		<button
			onClick={onClick}
			type={type}
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				gap: "5px",
				border: "none",
				fontSize: "18px",
				fontFamily: "'Courier New', Courier, monospace",
				padding: `${paddingY}px ${paddingX}px`,
				color: color,
				backgroundColor: backgroundColor,
				borderRadius: borderRadious,
				cursor: "pointer",
			}}
		>
			{children}
		</button>
	);
};

export { BorderButton };
