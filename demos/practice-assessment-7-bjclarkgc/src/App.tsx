import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import FriendListRoute from './FriendListRoute';
import SongListRoute from './SongListRoute';
import SongRoute from './SongRoute';
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <li><Link to="/" >Friend List</Link></li>
          <li><Link to="/songs" >Song List</Link></li>

        </nav>
        <Routes>
          <Route path="/" element={<FriendListRoute />} />
          <Route path="/songs" element={<SongListRoute />} />
          <Route path="/song/:id" element={<SongRoute />} />

        </Routes>
      </div>
    </Router>

  );
}

export default App;
