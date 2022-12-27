import { Link } from "@chakra-ui/react";

export const MenuButton = ({children}) => {
	return (
		<Link
			as="b"
			textAlign="center"
			fontSize="12px"
			w={["100%","111px"]}
			h="35px"
			bg="#18A572"
			lineHeight="33px"
			color="white"
			borderRadius="5px"
			_hover={{
				textDecoration:'none',
				bg:"#1C8861",
			}}
		>
			{children}
		</Link>
	);
}