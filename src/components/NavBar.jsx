import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <Link className="link" to="/users">USERS</Link>
            <Link className="link" to="/">HOME</Link>
        </nav>
        
    )
}

export default NavBar