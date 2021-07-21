import { GlobalStyle, theme } from "./GlobalStyle";
import { ThemeProvider } from 'styled-components';
import styled from "styled-components/macro";
import { About, Header, Home, Project, Qualification, Scrollup, Services } from "./Components";
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
          <Qualification data={resumeData.qualification} />
          <Services data={resumeData.services} />
          <Project />
        </Main>
      </Application>
    </ThemeProvider>
  );
};

export default App;

const Application = styled.div``;

const Main = styled.main``;