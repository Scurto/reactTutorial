import css from "../users/Users.module.css";
import * as axios from 'axios';
import * as React from "react";

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(resp => {
            props.setUsers(resp.data.items);
        })
    }

    render() {
        return <div>
            {
                this.props.usersPage.users.map(u => <div key={u.id}>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => this.props.unfollow(u.id)}>UnFollow</button> : <button onClick={() => this.props.follow(u.id)}>Follow</button>}

                            {/*<button onClick={() => console.log(u.id)}>Follow</button>*/}
                        </div>
                    </div>
                )
            }
        </div>
    }
}

export default Users;