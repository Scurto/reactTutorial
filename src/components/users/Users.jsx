import React from 'react';
import css from "./Users.module.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : 'https://i.stack.imgur.com/nbSKY.png'}/>
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

                                props.toggleIsFollowingInProgress(true, u.id);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/` + u.id, {withCredentials: true, headers: {'API-KEY' : '382354d6-c04e-478a-b623-652838360af2'}}).then(resp => {
                                    if (resp.data.resultCode === 0) {
                                        props.unfollow(u.id);
                                    }
                                    props.toggleIsFollowingInProgress(false, u.id);
                                });
                            }}>UnFollow</button> :
                            <button disabled={props.followingInProgress.some(id => id===u.id)} onClick={() => {
                                props.toggleIsFollowingInProgress(true, u.id);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/` + u.id, null, {withCredentials: true, headers: {'API-KEY' : '382354d6-c04e-478a-b623-652838360af2'}}).then(resp => {
                                    if (resp.data.resultCode === 0) {
                                        props.follow(u.id);
                                    }
                                    props.toggleIsFollowingInProgress(false, u.id);
                                });
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