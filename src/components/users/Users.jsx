import css from "../users/Users.module.css";

import React from "react";

const Users = (props) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {id: 1, photoURL: '', followed: false, fullName: 'User1', status: 'status1'},
            {id: 2, photoURL: '', followed: false, fullName: 'User2', status: 'status2'},
            {id: 3, photoURL: '', followed: false, fullName: 'User3', status: 'status3'},
            {id: 4, photoURL: '', followed: false, fullName: 'User4', status: 'status4'}
        ]);
    }

    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                    <div>
                        {u.fullName}
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

export default Users;