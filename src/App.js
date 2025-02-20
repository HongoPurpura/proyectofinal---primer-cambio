import { useAuth0 } from '@auth0/auth0-react';
import Home from './pages/Home';
import Login from './auth/Login';
import Logout from './auth/Logout';
import { Link, Route, Routes } from 'react-router-dom';
import { Favorites } from './pages/Favorites';
import SearchBar from './components/SearchBar';
import "./estilosBarraNav.css";


function App() {
  const {isAuthenticated} = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
      {isAuthenticated ? (
        <>
        <nav  class="nav" id='barra'>
        <Link to='/favorites'> <a class="nav-link active" aria-current="page" href="#">Favoritos</a></Link>
        <Link to='/home'> <a class="nav-link active" aria-current="page" href="#">Home</a> </Link>
        <Link to='/logout'>  <a class="nav-link active" aria-current="page" href="#">Logout</a> </Link>
        </nav>
      
        </>
      ): (
        <Login/>
      )}
      </header>
      <Routes>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/home' element={<SearchBar/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </div>
  );
}

export default App;
