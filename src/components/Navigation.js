import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

const Navigation = () => {
    return(
        <nav>
        <NavLink to={'/'}>bstpn.pl</NavLink>
            <ul>
                <li><NavLink to={'/about'}>About</NavLink></li>
                <li><a target="_blank" href="https://github.com/Bartek0074">GitHub</a></li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation