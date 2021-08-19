import {connect} from "react-redux";
import React from "react";
import Login from "./Login";



class LoginContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return <Login></Login>
    }
}

let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {

})(LoginContainer);