/**
 AdminMain
 15/9/19
 */
    define(function(require){
        var React = require("react");
        var ReactRouter = require("react-router");
        var RouteHandler = ReactRouter.RouteHandler;

        var Menu = require("./Menu/Menu.jsx");

        var AdminMain = React.createClass({
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
                return (<div className="AdminMain">
                    <Menu/>
                    <RouteHandler/>
                </div>)
            }
        });
        return AdminMain;
    });

