import css from "../users/Users.module.css";
import * as axios from 'axios';
import React from "react";

const UsersOld = (props) => {



    if (props.usersPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(resp => {
            props.setUsers(resp.data.items);
        })
    }

    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.status}
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => props.unfollow(u.id)}>UnFollow</button> : <button onClick={() => props.follow(u.id)}>Follow</button>}

                        {/*<button onClick={() => console.log(u.id)}>Follow</button>*/}
                    </div>
                </div>
            )
        }
    </div>

};

export default UsersOld;