
import { ChakraProvider,} from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import {Router} from "./components/router/Router";
import theme from './theme/theme';
// import './App.css'

function App() {


  return (
    <ChakraProvider theme={theme}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
      </ChakraProvider>
  )
}

export default App
