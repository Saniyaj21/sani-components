// to solve a import error i am importing in this way

import * as React from "react";
import { ReactNode } from "react";

type PropsType = {
	children: ReactNode;
};

const BorderButton = ({ children }: PropsType) => {
	return (
		<button
			style={{
				padding: "15px 10px",
				display: "flex",
				gap: "5px",
				color: "white",
				backgroundColor: "blue",
				justifyContent: "center",
				alignItems: "center",
				borderRadius: "10px",
			}}
		>
			{children}
		</button>
	);
};

export { BorderButton };
