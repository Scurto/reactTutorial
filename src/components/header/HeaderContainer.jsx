import React from "react";
import Preloader from "../common/Preloader";
import Users from "../users/Users";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/authReducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props}></Header>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);