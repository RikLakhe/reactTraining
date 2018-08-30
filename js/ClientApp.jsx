import React from 'react';

var render = require('react-dom').render;

const App = () => (< div className='app' > < div className='landing' > < h1 > Svideo < /h1> <input type='text' placeholder='Search' /> < a > or Browse ALL < /a> < /div > < /div>
);

render( <
        App />, document.getElementById('app'));