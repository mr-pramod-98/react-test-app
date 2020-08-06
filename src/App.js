import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './components/authentication/LoginForm';
import SignUpForm from './components/authentication/SignUpForm';
import UserProfile from './components/profile/UserProfile';
import UserInfo from './components/home/UserInfo';
import './App.css';

class App extends Component {  

    autenticateUser = () => {
        return this.props.isLoggedIn ? <Redirect to="/home" />: <LoginForm />;
    }

    autenticateUserToAccessHome = () => {
        return this.props.isLoggedIn ? <UserInfo />: <Redirect to="/" />;
    }

    autenticateUserToAccessProfile = () => {
        return this.props.isLoggedIn ? <UserProfile />: <Redirect to="/" />;
    }

    render() {

        return (
            <div className="App">
                <Router>

                    <Switch>
                        <Route exact path="/" >
                            { this.autenticateUser() }
                        </Route>
                        <Route path="/home" >
                            { this.autenticateUserToAccessHome() }
                        </Route>
                        <Route path="/sign-up" component={SignUpForm} />
                        <Route path="/user-profile" >
                            { this.autenticateUserToAccessProfile() }
                        </Route>
                        <Route>
                            Page Not Found
                        </Route>
                    </Switch>
                               
                    </Router>
                    
                </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    };
}


export default connect(mapStateToProps)(App);
