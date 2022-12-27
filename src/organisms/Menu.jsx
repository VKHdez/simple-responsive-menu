import { Box, useColorModeValue } from "@chakra-ui/react";
import { MenuLogo } from "../atoms/MenuLogo";
import { VMenuItemContainer } from "../templates/VMenuItemContainer";
import { HMenuItemContainer } from "../templates/HMenuItemContainer";
import { MenuItem } from "../atoms/MenuItem";
import { MenuButton } from "../atoms/MenuButton";
import ToggleThemeButton from '../atoms/ToggleThemeButton';
import { ToggleMenuButton } from "../atoms/ToggleMenuButton";
import { useState } from "react";

export const Menu = () => {

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return(
		<Box 
			as="nav"
			bg={useColorModeValue("gray.50","gray.800")}
			d="block"
			w="100vw"

		>
			<Box
				maxWidth={[465,680,920,990]}
				py="17px"
				px={["30px", "20px","20px","0px"]}
				boxSizing="border-box"
				m="auto"
				display="flex"
				flexDirection={["column","row","row","row"]}
				justifyContent="space-between"
			>
				<Box
					display="flex"
					justifyContent="space-between"
					h="35px"
				>
					<MenuLogo>LOGO</MenuLogo>
					
					<Box
						display="flex"
						flexDirection="row"
						gap={1}
						ml={2}
					>
						<ToggleThemeButton/>
						<ToggleMenuButton toggle={toggle} isOpen={isOpen}/>	
					</Box>

				</Box>
				
				<HMenuItemContainer>
					<MenuItem>Home</MenuItem>
					<MenuItem>How it Works?</MenuItem>
					<MenuItem>Pricing</MenuItem>
					<MenuButton>Create Account</MenuButton>
				</HMenuItemContainer>

				<VMenuItemContainer isOpen={isOpen}>
					<MenuItem>Home</MenuItem>
					<MenuItem>How it Works?</MenuItem>
					<MenuItem>Pricing</MenuItem>
					<MenuButton>Create Account</MenuButton>
				</VMenuItemContainer>
			</Box>
		</Box>
	);
}