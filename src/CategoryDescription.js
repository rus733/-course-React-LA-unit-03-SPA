import { useParams, Link } from 'react-router-dom';

function CategoryDescription() {
  let { catDescr } = useParams();
  return (
    <div>
      <h1>Category: {catDescr}</h1>
      <Link to="/cat">Назад</Link>
    </div>
  );
}

export default CategoryDescription;
