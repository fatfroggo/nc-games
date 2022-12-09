import { useContext, useEffect, useState } from "react"
import { getUsers } from "../api"
import { UserContext } from "../contexts/User"

const Users = ({setErrorMessage}) => {

    const [users, setUsers] = useState([])
    const { setUser } = useContext(UserContext)

    useEffect((setErrorMessage) => {
        getUsers().then((users) => {
            setUsers(users)
        })
    }, [])

    return (
        <div>
       <ul className="user-list">
            {users.map((user) => {
                return (
                  <li key={user.username} className="individual-user">
                    <p>Username: {user.username}</p>
                    <p>Name: {user.name}</p>
                    <img
                      className="images"
                      src={user.avatar_url}
                      alt={user.username}
                    ></img>
                    <button className="button" onClick={() => setUser(user)}>
                      Select User
                    </button>
                  </li>
                );
            })}
       </ul>
       </div>
    )
}

export default Users