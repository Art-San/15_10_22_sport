import { Link, NavLink } from "react-router-dom"
import Logo from "../images/logo.png"
import { links } from "../data"
import { GoThreeBars } from 'react-icons/go'
import "./navbar.css"


const Navbar = () => {
  return (
    <nav>
        <div className="container nav_container">
            <Link to="/" className="logo">
                <img src={Logo} alt="Nav logo"/>
            </Link>
            <ul className="nav_links">
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li key={name}>
                                <NavLink to={path}>{name}</NavLink>
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