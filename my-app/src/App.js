import AntD from '../src/components/antd';
import  ReactPro from './components/reactpro';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div style={{padding: 20, display: "flex"}}>
        <nav>
          <ul>
            <li>
              <Link to="/type1">Option 1</Link>
            </li>
            <li>
              <Link to="/type2">Option 2</Link>
            </li>
            <li>
              <Link to="/type3">Option 3</Link>
            </li>
          </ul>
        </nav>
      </div>

      <hr />

      <div>
        <Routes>
          <Route path="/type1" exact element={<AntD />} />
          <Route path="/type2" exact element={<ReactPro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
