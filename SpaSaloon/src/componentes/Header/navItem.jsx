
const NavItem = ({ text, href }) => {
  return (
    <li className="nav-item">
      <a href={href}>{text}</a>
    </li>
  );
};

export default NavItem;