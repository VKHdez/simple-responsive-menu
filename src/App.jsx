import { ChakraProvider, ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/react';
import theme from './lib/theme';
import { Menu } from './organisms/Menu';

import './App.css'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Menu/>
    </ChakraProvider>
  );
}

export default App
