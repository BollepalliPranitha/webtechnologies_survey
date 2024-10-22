import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Content from './components/Content';
import Taxonomy from './components/Taxonomy';
import Team from './components/Team';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Content">Content</Link></li>
          <li><Link to="/Taxonomy">Taxonomy</Link></li>
          <li><Link to="/Team">Team</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Content" element={<Content />} />
        <Route path="/Taxonomy" element={<Taxonomy />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
