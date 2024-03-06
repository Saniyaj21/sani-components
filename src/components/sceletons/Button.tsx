import * as React from "react";
import { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

export type ButtonProps = {
	height?: number;
	width?: number;
	borderRadius?: "px" | "%";
	marginX?: number;
	marginY?: number;
};

// animation
const loading = keyframes`
  0% {
	background-position: 200% 0;
  }
  100% {
	background-position: -200% 0;
  }
`;

const StyledButton = styled.div<ButtonProps>`
	background: linear-gradient(90deg, #f2f2f2 25%, #e0e0e0 50%, #f2f2f2 75%);
	background-size: 200% 100%;
	animation: ${loading} 1.5s infinite;
`;

const Button = ({
	height,
	width,
	borderRadius,
	marginX = 0,
	marginY = 0,
}: ButtonProps) => {
	return (
		<StyledButton
			style={{
				height: height,
				width: width,
				borderRadius: borderRadius,
				margin: `${marginY}px ${marginX}px`,
			}}
		></StyledButton>
	);
};

export { Button };
