import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import Logo from "../images/logo.png"
import { links } from "../data"
import { GoThreeBars } from 'react-icons/go'
import "./navbar.css"

// 1-09-36 закончил видео смотреть
const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false)


  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className="logo">
                <img src={Logo} alt="Nav logo"/>
            </Link>
            <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li key={path}>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}>{name}</NavLink>
                            </li>       
                        )
                    })
                }
            </ul>
            <button className="nav__toggle-btn">
                <GoThreeBars/>
            </button>
        </div>
    </nav>
  )
}

export default Navbar

