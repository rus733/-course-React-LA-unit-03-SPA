import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/cat">Category</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
