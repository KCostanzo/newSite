import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Spinner from 'react-spinner';

import MyRoutes from './routes';
import Todos from './todos';

class Root extends React.Component {

  render() {
  	console.log('in root render');

    return(
    	<div>
    		<MyRoutes/>
    	</div>
    );
  }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});


// const express = require('express')
// const app = express()

// app.use(express.static('public'));

// app.get('/', function (req, res) {
//   res.send('/index.html');
// })

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })