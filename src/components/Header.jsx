import { useContext } from "react";
import { UserContext } from "../contexts/User";


const Header = () => {

    const {user} = useContext(UserContext)
    return (
        <main className="header">
    <h1>NC Games</h1>
    <p>Logged in as: {user.username}</p>
    </main>
    )
}

export default Header;