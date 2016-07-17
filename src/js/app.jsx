import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';


import {Hello} from './hello.jsx';
import {Hi} from './hi.jsx';

let App = React.createClass({
    render () {
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul role="nav">
                    <li><Link to="/hello">HELLO</Link></li>
                    <li><Link to="/hi">HI</Link></li>
                </ul>
                
                {this.props.children}
            </div>
        );
    }
});

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Hello}/>
            <Route path="/hello" component={Hello}/>
            <Route path="/hi" component={Hi}/>
        </Route>
    </Router>
), document.getElementById('app'));