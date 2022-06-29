import logo from './logo.svg';
import './App.css';
import Button from './components/atoms/Button';
import styled, {ThemeProvider} from 'styled-components';
import theme from './theme';
import Test from './Test';
import LayoutPage from './components/pages/LayoutPage';

const Box = styled.div`
  background-color : ${({theme}) => theme.palette.background};
  min-height : 100vh;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Box className="App">
    <LayoutPage />
    </Box>
    </ThemeProvider>

  );
}

export default App;
