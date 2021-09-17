import React from "react";
import Preloader from "../common/Preloader";
import Users from "../users/Users";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";


class HeaderContainer extends React.Component {

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

export default connect(mapStateToProps, {logout})(HeaderContainer);