import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import css from './Profile.module.css';
import {setUserProfile} from "../../redux/profileReducer";
import * as axios from "axios";

class ProfileContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/11`).then(resp => {
            console.log(resp.data)
            this.props.setUserProfile(resp.data);
        })
    }

    render() {
        return (
            <div className={css.content}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        // profilePage: state.profilePage,
        // posts: state.profilePage.posts,
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer);