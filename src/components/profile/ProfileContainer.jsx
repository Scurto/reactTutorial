import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import css from './Profile.module.css';
import {getUserProfile} from "../../redux/profileReducer";
import withRouter from "react-router-dom/es/withRouter";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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


        return (
            <div className={css.content}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {
    getUserProfile
})(WithUrlDataContainerComponent);