import { useEffect, useState } from "react"
import { getUsers } from "../api"

const Users = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then((users) => {
            setUsers(users)
        })
    }, [])

    return (
       <ul className="user-list">
            {users.map((user) => {
                return (
                    <li>
                        <p>Username: {user.username}</p>
                        <p>Name: {user.name}</p>
                        <img src={user.avatar_url} alt={user.username}></img>
                    </li>
                )
            })}
       </ul>
    )
}

export default Users