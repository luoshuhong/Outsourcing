/**
 Plan
 15/9/19
 */
var React = require("react");

var Plan = React.createClass({
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
        return (<div className="Plan">Plan管理</div>)
    }
});
module.exports = Plan;
