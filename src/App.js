import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Category from './Category';
import CategoryDescription from './CategoryDescription';
import Error from './Error';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  document.title = 'unit_03_spa';
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/cat" element={<Category />} />
          <Route path="/cat/:catDescr" element={<CategoryDescription />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
