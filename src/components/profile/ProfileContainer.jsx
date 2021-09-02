import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import css from './Profile.module.css';
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import withRouter from "react-router-dom/es/withRouter";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Dialogs from "../dialogs/Dialogs";

class ProfileContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 13976;
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {


        return (
            <div className={css.content}>
                <Profile {...this.props} profile={this.props.profile} status={ this.props.status } updateUserStatus={ this.props.updateUserStatus }/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);