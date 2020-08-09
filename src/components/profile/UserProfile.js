import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../Redux/store';
import { userUpdated } from '../Redux/actionCreators';
import NavigationBar from '../sharedComponents/NavigationBar';
import axiosAPI from '../Axios/axios'
import './css/UserProfile.css'


class UserProfile extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: this.props.username,
            email: this.props.email,
            password: this.props.password
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const updateUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        // api call
        axiosAPI.put("/update-user", updateUser)
            .then(res => {
                const {status, data} = res;
                const {msg, user} = data;
                console.log(`status: ${status}, msg: ${msg}`);
                store.dispatch(userUpdated(user.username, user.email, user.password));
            })
            .catch(err => {
                const {status, data} = err.response;
                console.log(`status: ${status}, msg: ${data.msg}`);
            });
    }

    render() {
		return (
            <React.Fragment>

                <NavigationBar />
                <div className="container-main">
                    <h1>User Profile</h1>

                    <form className="form" onSubmit={ this.onSubmit }>

                        <input type="text" name="username" readOnly
                            placeholder={ this.props.username }
                            onChange={ this.onChange } />

                        <input type="email" name="email" 
                            placeholder={ this.props.email }
                            onChange={ this.onChange } />

                        <input type="password" name="password" 
                            placeholder={ this.props.password }
                            onChange={ this.onChange } />

                        <button type="submit" >Update</button>
                            
                    </form>
                </div>
                
            </React.Fragment>      
		);
  	}
}

const mapStateToProps = state => {
    return {
        username: state.username,
        email: state.email,
        password: state.password
    }
}


export default connect(mapStateToProps)(UserProfile);