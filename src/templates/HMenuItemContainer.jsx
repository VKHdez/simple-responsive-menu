import { Stack } from "@chakra-ui/react";

export const HMenuItemContainer = ({children, isOpen,...res}) => {
	return(
		<Stack
			spacing={["5px","24px"]}
			direction={["column", "row"]}
			display={{sm:"inherit", base:"none"}}
			textAlign={["center","left"]}
			h="35px"
		>
			{children}
		</Stack>
	);
}