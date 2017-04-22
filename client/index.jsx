// import App from './client/components/App.js';

// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('app')
// );

// ReactDOM.render(<App />, document.getElementById('app'));



import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return <h1>Hello</h1>
  }
}

ReactDOM.render(<Hello/>, document.getElementById('app'));
