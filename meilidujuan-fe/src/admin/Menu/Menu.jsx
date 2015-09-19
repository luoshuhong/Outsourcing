/**
 Menu
 15/9/19
 */
    define(function(require){
        var React = require("react");
        var ReactRouter = require("react-router");
        var Link = ReactRouter.Link;

        var Menu = React.createClass({
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
                return (<div className="Menu">
                    <Link to="plan">路线管理</Link>
            {/*<Link to="rentcar">租车管理</Link>*/}
                    <Link to="leader">导游管理</Link>
                    <Link to="faq">FAQ管理</Link>
                </div>)
            }
        });
        return Menu;
    });

