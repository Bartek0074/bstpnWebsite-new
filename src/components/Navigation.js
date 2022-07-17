import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import NavDesktopLink from './NavDesktopLink'
import '../styles/Navigation.css'

const Navigation = () => {
    return(
        <>
            <nav className='mobileNav'>
                <NavLink className='navTitle' to={'/'}><h1>bstpn.pl</h1></NavLink>
                <button className='mobileNavOpenBtn'><i class="fa-solid fa-bars"></i></button>
                {/* <ul>
                    <li><NavLink to={'/about'}>About</NavLink></li>
                    <li><a target="_blank" href="https://github.com/Bartek0074">GitHub</a></li>
                    <li><NavLink to={'/contact'}>Contact</NavLink></li>
                </ul> */}
            </nav>
            <nav className='desktopNav wrapper'>
            <NavLink className='navTitle' to={'/'}><h1>bstpn.pl</h1></NavLink>
                <ul className='navList'>
                    <li><NavLink className='navLink' to={'/about'}><NavDesktopLink name={'About'}></NavDesktopLink></NavLink></li>
                    <li><a className='navLink' target="_blank" href="https://github.com/Bartek0074"><NavDesktopLink name={'GitHub'}></NavDesktopLink></a></li>
                    <li><NavLink className='navLink' to={'/contact'}><NavDesktopLink name={'Contact'}></NavDesktopLink></NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation