import styled from "styled-components/macro";
import { Link as ScrollLink } from "react-scroll";

export const HeaderTag = styled.header`
  background-color: ${({ theme, scrollHeader }) => scrollHeader ? theme.color.firstColorLighten : '#000'};
  box-shadow: ${({ scrollHeader }) => scrollHeader && '0 2px 4px rgba(0, 0, 0, 0.1)'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.zHeader};
`;
export const Nav = styled.nav`
  height: ${({ theme }) => theme.HeaderHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a`
  color: ${({ theme, scrollHeader }) => scrollHeader ? theme.color.firstColorDark : theme.color.firstColorLighten};
`;

export const NavMenu = styled.div`
  @media screen and (max-width: 768px) {
      position: fixed;
      top: ${({ theme, show }) => show ? theme.HeaderHeight : "-100%"};
      left: 0;
      width: 100%;
      padding-top: 1.5rem;
      text-align: center;
      background-color: ${({ theme, scrollHeader }) => scrollHeader ? theme.color.firstColorLighten : '#000'};
      transition: 0.4s;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 0 0 1rem 1rem;
  }
`;

export const NavList = styled.ul`
  .active-link {
      position: relative;

      ::after {
        content: '';
        position: absolute;
        bottom: -0.7rem;
        left: 0;
        width: 65%;
        height: 3px;
        background-color: ${({ theme }) => theme.color.firstColorLight};
      }
  }
`;

export const NavItem = styled.li`
  margin-bottom: ${({ theme }) => theme.margin.mb_4};
`;

export const NavLink = styled(ScrollLink)`
  color: ${({ theme, scrollHeader }) => scrollHeader ? theme.color.firstColorDark : theme.color.firstColorLighten};

  :hover {
    color: ${({ theme }) => theme.color.firstColorLight};
  }
`;

export const NavToggle = styled.div`
  color: ${({ theme, scrollHeader }) => scrollHeader ? theme.color.firstColorDark : theme.color.firstColorLighten};
  font-size: 1.3rem;
  cursor: pointer;
`;
