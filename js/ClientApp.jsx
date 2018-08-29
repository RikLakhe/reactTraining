import React from 'react';

var render = require('react-dom').render;


var ce = React.createElement;

const MyTitle = props => {
    const style = {
        color: props.color
    };
    return ( <
        div >
        <
        h1 style = {
            style
        } > {
            props.title
        } <
        /h1> < /
        div >
    );
};

var MyFirstComponent = function() {
    return ( <
        div id = "my-first-component" >
        <
        MyTitle title = "hello"
        color = "pink" / > < MyTitle title = "hello"
        color = "pink" / > < MyTitle title = "heasdfllo"
        color = "pink" / > < MyTitle title = "heasdfllo"
        color = "pink" / > < MyTitle title = "heasdfasllo"
        color = "pink" / > < MyTitle title = "helasdflo"
        color = "pink" / > < /div>
    )
};

const App = () => ( <
    div className = "app" >
    <
    div className = "landing" >
    <
    h1 > svideo < /h1> <
    input type = "text"
    placeholder = "Search" / >
    <
    a > or Browse All < /a> < /
    div > <
    /div>
);

render( < App / > ,
    document.getElementById("app")
);