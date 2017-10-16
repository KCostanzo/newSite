import React from 'react';
import { BrowserRouter,Route } from 'react-router';
import Spinner from 'react-spinner';

import Todos from './todos.jsx';

export default class myTodoApp extends React.Component {

	render() {
		// const {user} = this.state;

			// <Spinner/> : 
			// (user === undefined) ?
					// user ? 
					// <Todos user={user} /> :
					// <Redirect to='/login' />

				// <Route path='/todos' render={() => (
						
				// 	)} />

		// return (
		// 	<BrowserRouter >
		// 		<Route path='/' component={Todos}/>
		// 	</BrowserRouter>
		// );
		return(
			<Todos/>
			)
	}
}