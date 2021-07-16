import { GlobalStyle, theme } from "./GlobalStyle";
import { ThemeProvider } from 'styled-components';
import styled from "styled-components/macro";
import { Header, Scrollup } from "./Components";
import resumeData from "./data/resumeData.json";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Application>
        <Scrollup />
        <Header data={resumeData.header} />
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
      </Application>
    </ThemeProvider>
  );
};

export default App;

const Application = styled.main``;
