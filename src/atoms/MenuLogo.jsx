
import { Box,Text } from "@chakra-ui/react";

export const MenuLogo = ({children}) => {
	return(
		<Box
			h="35px"
			w="45px"
		>
			<Text
				as="b"
				lineHeight="35px"
				color="#18A572"
			>
				{children}
			</Text>
		</Box>
	);
}