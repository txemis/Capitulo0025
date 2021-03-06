//var React = require('react');
//var ReactDOM = require('react-dom');

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App'

//ReactDOM.render(React.createElement('h1', null, 'Hello from react!'), document.getElementById('root'));
//ReactDOM.render(<h1>Hello from ES6!</h1>, document.getElementById('root'));

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default;
        ReactDOM.render(
            <BrowserRouter>
                <App />
            </BrowserRouter>,
            document.getElementById('root')
        );
    } );
}
