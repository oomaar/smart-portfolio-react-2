import { GlobalStyle, theme } from "./GlobalStyle";
import { ThemeProvider } from 'styled-components';
import styled from "styled-components/macro";
import { About, Header, Home, Qualification, Scrollup } from "./Components";
import resumeData from "./data/resumeData.json";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Application>
        <Scrollup />
        <Header data={resumeData.header} />
        <Main>
          <Home />
          <About data={resumeData.about} />
          <Qualification />
        </Main>
      </Application>
    </ThemeProvider>
  );
};

export default App;

const Application = styled.div``;

const Main = styled.main``;