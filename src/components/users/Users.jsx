import React from 'react';
import css from "./Users.module.css";
import {NavLink} from "react-router-dom";
import Paginator from "../common/paginator/Paginator";

let Users = (props) => {

    return <div>
        <div>
            <Paginator currentPage={props.currentPage} onPageChange={props.onPageChange} totalItemsCount={props.totalUsersCount} pagesSize={props.pageSize}/>
        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : 'https://i.stack.imgur.com/nbSKY.png'} className={css.mainPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.status}
                    </div>
                    <div>
                        {u.followed ? <button disabled={props.followingInProgress.some(id => id===u.id)} onClick={() => {
                                props.unFollow(u.id);
                            }}>UnFollow</button> :
                            <button disabled={props.followingInProgress.some(id => id===u.id)} onClick={() => {
                                props.follow(u.id);
                            }
                                // 382354d6-c04e-478a-b623-652838360af2
                            }>Follow</button>}
                    </div>
                </div>
            )
        }
    </div>
}

export default Users;