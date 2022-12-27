
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import {MoonIcon, SunIcon} from '@chakra-ui/icons';

const ToggleThemeButton = () => {

	const {colorMode, toggleColorMode} = useColorMode();

	return (
		<IconButton 
			aria-label='Toggle Theme'
			colorScheme={useColorModeValue('purple', 'orange')}
			icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)}
			onClick={toggleColorMode}
			mr={2}
			h="35px"
		/>
	);
}

export default ToggleThemeButton;