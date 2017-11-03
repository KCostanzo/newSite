import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hashHistory } from 'react-router';
import Spinner from 'react-spinner';

// import MyRoutes from './routes';
import Todos from './todos';

const myRoutes = (
		<Switch> 
			<Route path='/' component={Todos} />
		</Switch>
	);

class Root extends React.Component {

  render() {
  	console.log('in root render');

    return(
    	<div>
    		<Todos/>
    	</div>
    );
  }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});