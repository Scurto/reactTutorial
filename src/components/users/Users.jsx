import React from 'react';
import css from "./Users.module.css";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i=1; i < pagesCount+1; i++) {
        pages.push(i);
    }

    return <div>

        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && css.selectedPage} onClick={(e) => {
                    props.onPageChange(p)
                }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.status}
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => props.unfollow(u.id)}>UnFollow</button> :
                            <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
                </div>
            )
        }
    </div>
}

export default Users;