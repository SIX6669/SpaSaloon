import Logo from './logo';
import Navigation from './navBar';
import LoginButton from './loginButton';
import '../../styles/header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <div className="left-section">
          <LoginButton />
        </div>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;