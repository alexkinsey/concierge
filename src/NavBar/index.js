import { NavBackground, Aligner, Wrapper, Title, LogoImage } from './index.style';
import Logo from '../images/logo.svg';

const NavBar = () => {
  return (
    <NavBackground>
      <Aligner>
        <Wrapper href="/">
          <LogoImage src={Logo}></LogoImage>
          <Title>CONCIERGE</Title>
        </Wrapper>
      </Aligner>
    </NavBackground>
  );
};

export default NavBar;
