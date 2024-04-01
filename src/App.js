import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';

//index ugyanaz, mint a path="/" vagyis az index oldalra mutató

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
        </Routes>
      </main> 
    </BrowserRouter>
  );
}

export default App
