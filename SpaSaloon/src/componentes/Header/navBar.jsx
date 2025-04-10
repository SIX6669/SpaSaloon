// navBar.jsx
import NavItem from './navItem';

const Navigation = () => {
  const menuItems = [
    { text: 'Servicios', href: '/servicios' },
    { text: 'Sobre nosotros', href: '/sobre-nosotros' },
    { text: 'photos', href: '/photos' },
    { text: 'eventos', href: '/eventos' },
    { text: 'Contacto', href: '/contacto' }
  ];

  return (
    <nav className="navigation">
      <ul>
        {menuItems.map((item, index) => (
          <NavItem key={index} text={item.text} href={item.href} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;