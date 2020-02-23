import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import seeds from './seeds';
import 'bootstrap/dist/css/bootstrap.min.css';

window.seed = seeds;

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
