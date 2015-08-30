/**
 main
 15/8/28
 */
define(function (require) {

    var React = require("react");

    var main = React.createClass({
        getInitialState: function () {
            return {};
        },
        componentWillMount: function () {
            //console&&console.log('component will mount');
        },
        componentDidMount: function () {
            //console&&console.log('component did mount');
        },
        componentWillUpdate: function () {
            //console&&console.log("componentWillUpdate");  
        },
        componentDidUpdate: function () {
            //console&&console.log('component did update');
        },
        componentWillUnmount: function () {
            //console&&console.log('component will unmount');
        },
        render: function () {
            return ( < div
            className = "main" > < / div >
            )
        }
    });
    return main;
});
