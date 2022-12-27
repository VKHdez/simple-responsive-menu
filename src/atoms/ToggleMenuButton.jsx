
import { Box } from "@chakra-ui/react";
import {BsXLg, BsList} from 'react-icons/bs';

export const ToggleMenuButton = ({toggle, isOpen}) => {
	return(
		<Box 
			display={{base: "flex", sm:"none"}} 
			onClick={toggle}
			w="35px"
			h="35px"
			alignItems="center"
			justifyContent="center"
		>
			{isOpen ? <BsXLg size={25} /> : <BsList size={35} />}	
		</Box>
	);
}