import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './components/authentication/LoginForm';
import UserInfo from './components/home/UserInfo';
import './App.css';

class App extends Component {  

    lodeComponent = () => {
        return this.props.isLoggedIn ? <UserInfo /> : <LoginForm />;
    }

    render() {

        return (
                <div className="App">
                    <Router>

                        <Switch>
                            <Route exact path="/">
                                {this.lodeComponent()}
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
        username: state.username,
        isLoggedIn: state.isLoggedIn
    };
}


export default connect(mapStateToProps)(App);
