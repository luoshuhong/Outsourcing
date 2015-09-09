/**
 RentCar
 15/8/30
 */
define(function (require) {

    var React = require("react");

    var RentCar = React.createClass({
        getInitialState: function () {
            return {};
        },
        componentWillMount: function () {
            //console&&console.log('component will mount');
        },
        componentDidMount: function () {
            //console&&console.log('component did mount');
        },
        componentWillUnmount: function () {
            //console&&console.log('component will unmount');
        },
        render: function () {
            return (<div className="RentCar">租车服务</div>)
        }
    });
    return RentCar;
});
