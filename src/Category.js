import { useLocation, NavLink, Link } from 'react-router-dom';

function Category() {
  let url = useLocation();
  return (
    <>
      <h1>Category</h1>
      <Link to="/">Назад</Link>
      <ul>
        <li>
          <NavLink to={`${url.pathname}/notebook`}>Ноутбуки</NavLink>
        </li>
        <li>
          <NavLink to={`${url.pathname}/monitor`}>Мониторы</NavLink>
        </li>
        <li>
          <NavLink to={`${url.pathname}/cellphone`}>Мобильные телефоны</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Category;
