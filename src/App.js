import { GlobalStyle, theme } from "./GlobalStyle";
import { ThemeProvider } from 'styled-components';
import styled from "styled-components/macro";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Application>
        <h1>Hello Life !</h1>
      </Application>
    </ThemeProvider>
  );
};

export default App;

const Application = styled.main``;
