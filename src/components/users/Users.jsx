import css from "../users/Users.module.css";
import * as axios from 'axios';
import React from "react";

class Users extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(resp => {
            this.props.setUsers(resp.data.items);
            this.props.setTotalUsersCount(resp.data.totalCount)
        })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(resp => {
            this.props.setUsers(resp.data.items);
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i=1; i < pagesCount+1; i++) {
            pages.push(i);
        }

        return <div>

            <div>
                {pages.map(p => {
                   return <span className={this.props.currentPage === p && css.selectedPage} onClick={(e) => {this.onPageChange(p)}}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
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