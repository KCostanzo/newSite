import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Spinner from 'react-spinner';

// import MyRoutes from './routes';
import Todos from './todos';

class Root extends React.Component {

  render() {
    return(
		<BrowserRouter>
			<Route path='/' component={Todos}/>
		</BrowserRouter>
    );
  }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
