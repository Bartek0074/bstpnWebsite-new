import React from "react"
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Error404 from "./pages/Error404"
import './App.css'

function App() {
  return (
    <BrowserRouter>
          <header>
            <nav>
            <NavLink to={'/'}>bstpn.pl</NavLink>
              <ul>
                <li><NavLink to={'/about'}>About</NavLink></li>
                <li><a target="_blank" href="https://github.com/Bartek0074">GitHub</a></li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>
              </ul>
            </nav>
          </header>
          <section>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="*" element={<Error404 />}/>
            </Routes>
          </section>
        </BrowserRouter>
  );
}

export default App;
