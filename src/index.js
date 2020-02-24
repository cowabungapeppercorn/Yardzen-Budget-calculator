import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import seeds from './seeds';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider as BudgetProvider } from './context/BudgetContext';


window.seed = seeds;

ReactDOM.render(<BudgetProvider><App /></BudgetProvider>, document.getElementById('root'));

serviceWorker.unregister();
