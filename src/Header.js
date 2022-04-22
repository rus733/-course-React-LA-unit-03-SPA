import { NavLink } from 'react-router-dom';
function Header(props) {
  const data = props.data;
  const navItems = data.map((item) => (
    <li key={item.link}>
      <NavLink to={item.link}>{item.title}</NavLink>
    </li>
  ));
  return (
    <>
      <nav>
        <ul>{navItems}</ul>
      </nav>
    </>
  );
}

export default Header;
