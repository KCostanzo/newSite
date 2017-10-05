import { Redirect } from 'react-router';
import React from 'react';

export class Logout extends React.Component {

	render() {
		return (this.state.shouldRedirect ? 
				<Redirect to={'/login'} /> : 
				<a className='logout' onClick={this.logout.bind(this)}>Logout</a>
				);
	}

	logout() {
		logoutActions().then(() => {
			this.setState({shouldRedirect: true});
		});
	}

};