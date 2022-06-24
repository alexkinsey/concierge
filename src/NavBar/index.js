import { NavBackground, Title, LogoImage } from './index.style';
import Logo from '../images/logo.svg';

const NavBar = () => {
  return (
    <NavBackground>
      <LogoImage src={Logo}></LogoImage>
      <Title>Concierge</Title>
    </NavBackground>
  );
};

export default NavBar;
