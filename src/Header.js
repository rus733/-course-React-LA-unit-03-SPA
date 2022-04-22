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
        <ul>
          {navItems}
          {/* <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/cat">Category</NavLink>
          </li> */}
        </ul>
      </nav>
    </>
  );
}

export default Header;
