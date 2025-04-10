import Logo from './logo';
import Navigation from './navBar';
import '../../styles/header.css'; // Ajusta la ruta según tu estructura

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;