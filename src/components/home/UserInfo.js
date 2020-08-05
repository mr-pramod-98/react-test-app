import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormButton from '../authentication/FormButton';
import { userLoggedOut } from '../Redux/actionCreators';


class UserInfo extends Component {
    render() {
		return (
            <React.Fragment>
                <h1>Hello { this.props.username } :)</h1>
                <FormButton
                    type = { 'submit' }
                    value = { 'Logout' }
                    onClick = { () => this.props.userLoggedOut() }
                />  
            </React.Fragment>      
		);
  	}
}

const mapStateToProps = state => {
    return {
        username: state.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLoggedOut: () => dispatch(userLoggedOut())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);