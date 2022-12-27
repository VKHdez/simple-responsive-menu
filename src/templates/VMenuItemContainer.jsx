import { Stack } from "@chakra-ui/react";
import { Children } from "react";

export const VMenuItemContainer = ({children, isOpen,...res}) => {
	return(
		<Stack
			spacing={["5px","24px"]}
			direction={["column", "row"]}
			display={{sm:"none", base: isOpen ? "inherit" : "none"}}
			textAlign={["center","left"]}
		>
			{children}
		</Stack>
	);
}