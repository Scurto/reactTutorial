import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import css from './Profile.module.css';
import {getUserProfile, getUserStatus, savePhoto, updateUserStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.authorizedUserId !== this.props.authorizedUserId) {
            let userId = this.props.match.params.userId;
            if (!userId) {
                userId = this.props.authorizedUserId;
                if (!userId) {
                    this.props.history.push('/login')
                }
            }

            this.props.getUserProfile(userId);
            this.props.getUserStatus(userId);
        }
    }

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        let isOwner = this.props.profile && (this.props.profile.userId === this.props.authorizedUserId);

        return (
            <div className={css.content}>
                <Profile {...this.props} isOwner={isOwner} profile={this.props.profile}
                         status={ this.props.status } updateUserStatus={ this.props.updateUserStatus } savePhoto={this.props.savePhoto}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);