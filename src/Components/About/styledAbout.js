import styled from 'styled-components/macro';

export const AboutContainer = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export const AboutData = styled.div`
  display: grid;
  gap: 1.5rem;
  text-align: center;
`;

export const AboutDescription = styled.p`
  font-size: ${({ theme }) => theme.font.h2FontSize};
  font-weight: ${({ theme }) => theme.font.fontWeight.semiBold};
  color: ${({ theme }) => theme.color.firstColor};
  `;

export const AboutNumber = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.font.h1FontSize};
  color: ${({ theme }) => theme.color.firstColor};
  `;

export const AboutImage = styled.img`
  justify-self: center;
  width: 220px;
  border-radius: 0.5rem;
`;
