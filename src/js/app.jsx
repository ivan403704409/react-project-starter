import React from 'react';
import ReactDOM from 'react-dom';

import {Hello} from './hello.jsx';

let App = React.createClass({
    render() {
        return (
            <div className="abc">
                <Hello />
            </div>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('app'));