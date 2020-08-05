import React, { Component } from 'react';
import NavigationBar from '../sharedComponents/NavigationBar';
import './css/UserProfile.css'


class UserProfile extends Component {

    render() {
		return (
            <React.Fragment>

                <NavigationBar />
                <div className="container-main">
                    <h1>User Profile</h1>

                    <form className="form">

                        <input type="text" name="username" placeholder="pramod_0098"/>
                        <input type="email" name="email" placeholder="pramod@gmail.com"/>
                        <input type="password" name="password" placeholder="reactApp"/>
                        <button type="submit" >Update</button>
                            
                    </form>
                </div>
                
            </React.Fragment>      
		);
  	}
}



export default UserProfile;