import { useNavigate } from 'react-router-dom';

// STYLES
import { NavBackground, Aligner, Wrapper, Title, LogoImage, AccountIcon } from './index.style';

// ASSETS
import Logo from '../../../images/logo.svg';

const NavBar = () => {
  const navigate = useNavigate();

  const handleLoginButton = () => {
    navigate('/login');
  };
  return (
    <NavBackground>
      <Aligner>
        <Wrapper href="/">
          <LogoImage src={Logo}></LogoImage>
          <Title>CONCIERGE</Title>
        </Wrapper>
        <AccountIcon
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="white"
          viewBox="0 0 16 16"
          onClick={handleLoginButton}
        >
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z" />
        </AccountIcon>
      </Aligner>
    </NavBackground>
  );
};

export default NavBar;
