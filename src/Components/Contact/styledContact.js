import styled from 'styled-components/macro';

export const ContactContainer = styled.div`
  display: grid;
  row-gap: 2.5rem;
`;

export const ContactContent = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

export const ContactBox = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(174, 190, 205, 0.3);
  transition: 0.5s;

  :hover {
    box-shadow: 0 6px 8px rgba(174, 190, 205, 0.4);
  }
`;

export const ContactIcon = styled.div`
  color: ${({ theme }) => theme.color.firstColor};
  font-size: 2rem;
`;

export const ContactTitle = styled.h3`
  color: ${({ theme }) => theme.color.firstColor};
  font-size: ${({ theme }) => theme.font.h3FontSize};
  margin: ${({ theme }) => theme.margin.mb_1} 0;
`;

export const ContactText = styled.span``;

export const ContactSocial = styled.a`
  color: ${({ theme }) => theme.color.firstColorLight};
  font-size: 1.25rem;
  margin: 0 ${({ theme }) => theme.margin.mb_1};
`;

export const ContactForm = styled.form``;

export const ContactInputs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
`;

export const Input = styled.input`
  outline: 0;
  font-family: ${({ theme }) => theme.font.bodyFont};
  font-size: ${({ theme }) => theme.font.normalFontSize};
  width: 100%;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.color.firstColorLight};
  color: ${({ theme }) => theme.color.firstColor};
  border-radius: 0.5rem;
  margin-bottom: ${({ theme }) => theme.margin.mb_1};
`;

export const TextArea = styled.textarea`
  outline: 0;
  font-family: ${({ theme }) => theme.font.bodyFont};
  font-size: ${({ theme }) => theme.font.normalFontSize};
  width: 100%;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.color.firstColorLight};
  color: ${({ theme }) => theme.color.firstColor};
  border-radius: 0.5rem;
  margin-bottom: ${({ theme }) => theme.margin.mb_1};
`;