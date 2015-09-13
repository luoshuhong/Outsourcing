/**
 * Created by liunickluck on 15/5/28.
 */
//@require common/style/mui.min.css
define(function (require) {
    var React = require('react'),
        $=require('jquery'),
        ReactRouter=require('react-router');
    var Slider = require("components/Slider/Slider");
    var BestPlan = require("components/BestPlan/BestPlan");
    var Seperator = require("components/Seperator/Seperator");
    var Welcome = React.createClass({
        componentWillMount: function () {

        },
        componentDidMount: function () {
        },
        render: function () {
            return (
                <div id="welcome-ctn">
                    <Slider/>
                    <Seperator datatitle="精选线路"/>
                    <BestPlan/>
                </div>);
        }
    });
    return Welcome;
});

