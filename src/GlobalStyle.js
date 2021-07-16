import styled from "styled-components/macro";
import { createGlobalStyle } from "styled-components";

export const theme = {
  // Header Height
  HeaderHeight: '3rem',

  // Colors
  color: {
    firstColor: "#3e0e12",
    firstColorDark: "#2f0a0d",
    textColor: "#524748",
    firstColorLight: "#7b6f71",
    firstColorLighten: "#f8f9f9"
  },

  // Fonts and Typography
  font: {
    bodyFont: "'Roboto', sans-serif",
    bigFontSize: "2.5rem",
    h1FontSize: "1.5rem",
    h2FontSize: "1.25rem",
    h3fontSize: "1.125rem",
    normalFontSize: "0.938rem",
    smallFontSize: "0.813rem",
    smallerFontSize: "0.75rem",
    fontWeight: {
      medium: "300",
      semiBold: "400",
      bold: "700"
    }
  },

  // Margins
  margin: {
    mb_1: "0.5rem",
    mb_2: "1rem",
    mb_3: "1.5rem",
    mb_4: "2rem",
    mb_5: "2.5rem",
    mb_6: "3rem"
  },

  // Z-Index
  zIndex: {
    zNormal: "1",
    zTooltip: "10",
    zScroll: "100",
    zHeader: "200"
  },

  // ResponsiveFonts ==== min-width: 768px ====
  resFont: {
    bigFontSize: "4.5rem",
    h1FontSize: "2.25rem",
    h2FontSize: "1.5rem",
    h3fontSize: "1.25rem",
    normalFontSize: "1rem",
    smallFontSize: "0.875rem",
    smallerFontSize: "0.813rem",
  }
};

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.font.bodyFont};
    margin: 0;
    padding: 0;
  }

  h1 {
    margin: 0;
  }

  h2 {
    margin: 0;
    font-weight: ${({ theme }) => theme.font.fontWeight.semiBold};
  }

  h3 {
    margin: 0;
    font-weight: ${({ theme }) => theme.font.fontWeight.semiBold};
  }

  p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

// Section Components
export const Section = styled.section`
  padding: 4rem 0 2rem;
  background: ${({ home }) => home && "#000"};
  overflow: ${({ home }) => home && "hidden"};
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.font.h1FontSize};
  color: ${({ theme }) => theme.color.firstColor};
  margin-bottom: ${({ theme }) => theme.margin.mb_3};
`;

export const SectionSubtitle = styled.span`
  text-align: center;
  font-size: ${({ theme }) => theme.font.smallerFontSize};
  font-weight: ${({ theme }) => theme.font.fontWeight.semiBold};
`;

// Layout Components
export const Container = styled.div`
  max-width: 1024px;
  width: calc(100% - 2rem);
  margin-left: ${({ theme }) => theme.margin.mb_2};
  margin-right: ${({ theme }) => theme.margin.mb_2};
`;

// Buttons
export const Button = styled.a`
  display: inline-block;
  background-color: ${({ theme, light }) => light ? theme.color.firstColorLight : theme.color.firstColor};
  color: ${({ theme }) => theme.color.firstColorLighten};
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  transition: 0.3s;

  :hover {
    background-color: ${({ theme }) => theme.color.firstColorDark};
  }
`;
