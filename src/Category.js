import { useLocation, NavLink, Link } from 'react-router-dom';

function Category(props) {
  let url = useLocation();
  const data = props.data;
  const categoryItems = data.map((item) => (
    <li key={item.link}>
      <NavLink to={`${url.pathname}${item.link}`}>{item.title}</NavLink>
    </li>
  ));

  return (
    <>
      <h1>Category</h1>
      <Link to="/">Назад</Link>
      <ul>{categoryItems}</ul>
    </>
  );
}

export default Category;
