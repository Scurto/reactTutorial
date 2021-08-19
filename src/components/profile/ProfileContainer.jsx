import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import css from './Profile.module.css';
import {getUserProfile} from "../../redux/profileReducer";
import withRouter from "react-router-dom/es/withRouter";
import {Redirect} from "react-router-dom";

class ProfileContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        this.props.getUserProfile(userId);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>

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
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    getUserProfile
})(WithUrlDataContainerComponent);