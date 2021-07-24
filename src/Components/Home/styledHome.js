import styled from 'styled-components/macro';

export const HomeContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  color: #fff;
  position: relative;
  height: calc(100vh - ${({ theme }) => theme.HeaderHeight});
  grid-template-columns: repeat(2fr, max-content);
  align-content: space-around;
  row-gap: 2rem;
`;

export const HomeData = styled.div`
  border-left: 4px solid ${({ theme }) => theme.color.firstColorLighten};
  color: ${({ theme }) => theme.colorfirstColorLighten};
  padding-left: 1.5rem;
  z-index: ${({ theme }) => theme.zIndex.zTooltip};
`;

export const HomeGreeting = styled.span`
  display: block;
  font-weight: ${({ theme }) => theme.font.fontWeight.bold};
  font-size: 0.813rem;
`;

export const HomeName = styled.h1`
  font-size: ${({ theme }) => theme.font.bigFontSize};
`;

export const HomeProfession = styled.span`
  display: block;
  font-weight: ${({ theme }) => theme.font.fontWeight.bold};
  font-size: 0.938rem;
  margin-bottom: ${({ theme }) => theme.margin.mb_3};
`;

export const HomeSocial = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeSocialIcon = styled.a`
  width: max-content;
  font-size: 1.3rem;
  margin-bottom: ${({ theme }) => theme.margin.mb_2};
  color: ${({ theme }) => theme.color.firstColorLighten};

  :hover {
    color: ${({ theme }) => theme.color.firstColorLight};
  }
`;

export const HomeImage = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const Image = styled.img`
  width: 240px;

  @media screen and (min-width: 576px) {
    width: 330px;
  }
`;
