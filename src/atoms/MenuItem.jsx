
import { Link } from "@chakra-ui/react";

export const MenuItem = ({to,children}) => {
	return(
		<Link 
			href={to}
			lineHeight="32px"	
			fontSize="12px"
			h="40px"
			_hover={{
				color:"#18A572",
				textDecoration:"underline",
			}}
		>
			{children}
		</Link>
	);
}