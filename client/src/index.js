import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import NotFound  from './components/NotFound';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './store'
import { Route , BrowserRouter as Router,Switch} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Provider store={ store }>
    <Router>
        <Switch>

        <Route exact path="/" component={App} />
        <Route path="/user/register" component={Register}/>
        <Route path="/user/login" component={Login} />
        <Route path="/user/checkout" component={Cart} />

        <Route component={ NotFound} />

        </Switch>
        
    </Router>
    </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();
