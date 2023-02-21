import "./Navbar.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>

            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    )
}

export default Navbar