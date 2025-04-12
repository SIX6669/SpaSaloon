import NavItem from './navItem';

const Navigation = () => {
  const menuItems = [
    { text: 'Servicios', href: '/servicios' },
    { text: 'Fotos', href: '/fotos' },
    { text: 'Eventos', href: '/eventos' },
    { text: 'Contacto', href: '/contacto' },
    { text: 'Sobre Nosotros', href: '/sobre-nosotros' }
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