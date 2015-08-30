/**
 Slider
 15/8/30
 */
define(function (require) {

    var React = require("react");

    var Slider = React.createClass({
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
            return (<div className="Slider">
                <img src="http://server.aawooo.com:8080/streamAction!getWebStream.action?url=http://p1.pichost.me/640/23/1461078.jpg"/>
            </div>)
        }
    });
    return Slider;
});
