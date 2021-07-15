import { GlobalStyle, theme } from "./GlobalStyle";
import { ThemeProvider } from 'styled-components';
import styled from "styled-components/macro";
import { Header } from "./Components";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Application>
        <Header />
      </Application>
    </ThemeProvider>
  );
};

export default App;

const Application = styled.main``;
