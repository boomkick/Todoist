import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import Login from './pages/Login';
import axios from 'axios';
import './components/Navigation/style.css';
import './components/LandingPage/style.scss';
import './components/Footer/style.css'
import './components/Login/styleLogin.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users/showLogin' element={<Login />} />
      </Routes>
      
    </div>
  );
}

export default App;
