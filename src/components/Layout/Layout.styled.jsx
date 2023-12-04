import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import BgLogoImg from "assets/images/logo.png";

// export const BgLogo = styled.div`
//   position: relative;
//   top: 8px;  
//   width: 130px;
//   background-image: url(${BgLogoImg});
//   background-repeat: no-repeat;
//   // background-position: 50% 0;
//   background-size: 100%;
// `;

export const BgLogo = styled.div`
  // position: relative;
  // top: 8px;  
  // width: 130px;
  background-repeat: no-repeat;
  // background-position: 50% 0;
  background-size: 100%;
  border: 5px double orangered;
  padding: 8px 16px;
  border-radius: 50%;
`;

export const TextLogo = styled.p`
  // position: relative;
  // top: -12px;
  // text-align: left;
  font-size: 20px;
  text-shadow: 1px 1px 0px rgba(255,255,255,20);
  color: #d96040;
`;


export const Header = styled.div`
  display: flex;
  // margin-bottom: 20px;
  // width: 1440px;
  margin: 0 auto;
  gap: 20px;
  // padding: 7px 0px;
  // box-shadow: 0px 4px 4px rgba(0,0,0,0.5);  
  max-width: 1440px;
  // text-align: center;
  align-items: center;
  // align-items: flex-end;
  justify-content: space-between;
`;

export const Div = styled.div`
  // margin-bottom: 50px;
  padding: 7px 16px;
  background-color: transparent;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.5);
  background: linear-gradient(to top, var(--bg-primary-green), var(--bg-second-green), var(--bg-second-green), var(--bg-primary-green)); 
`;

export const NavContainer = styled.nav`
  display: flex;
  margin: 0;
  align-items: center;
  gap: 30px;  
`;

export const NavLinkStyle = styled(NavLink)`
  color: #000;
  position: relative;
  font-size: 32px;
  font-weight: 700;  
  text-shadow: 1px 1px 0px rgba(255,255,255,20);
  
  &:hover {
    color: var(--text-color-active-blue);
  }

  &.active {
    color: var(--text-color-active-blue);
  }
`;

export const LoginBtn = styled.button`
  margin-left: auto; 
  background-color: transparent;
  border: none;
  font-size: larger;
  font-weight: 700;

  &:hover {
    color: var(--text-color-active-blue);
  }
`;

// export const Quantity = styled.div`
//   display: flex;
//   position: absolute;
//   top: 0;
//   right: 0;
//   align-items: center;
//   justify-content: center;
//   width: 30px;
//   height: 30px;
//   fill: var(--bg-button-color);
//   background-color: var(--bg-button-color);
//   border-radius: 50%;
//   color: var(--text-color-white);
  
// `;