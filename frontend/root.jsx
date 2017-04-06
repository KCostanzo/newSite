import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';

class Root extends React.Component {

	// timer() {
	// 	const dateObj = new Date();
	// 	return (
	// 		<div>
	// 			{this.updateSeconds()}
	// 		</div>
	// 		);
	// }

  render() {

    return(
      <div>
        React running!
		<Clock/>
      </div>
    );
  }

}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
