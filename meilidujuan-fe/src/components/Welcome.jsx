/**
 * Created by liunickluck on 15/5/28.
 */
//@require common/style/mui.min.css
define(['react', 'jquery','react-router'], function (React, $,ReactRouter) {
    var Welcome = React.createClass({
        componentWillMount: function () {

        },
        componentDidMount: function () {
        },
        render: function () {
            return (
                <div id="welcome-ctn">
                    <ul className="mui-table-view mui-grid-view mui-grid-9">
                        <li className="mui-table-view-cell mui-media mui-col-xs-4">
                            <a href="#">
                                <span className="mui-icon mui-icon-home"></span>
                                <div className="mui-media-body">Home</div>
                            </a>
                        </li>
                        <li className="mui-table-view-cell mui-media mui-col-xs-4">
                            <a href="#">
                                <span className="mui-icon mui-icon-sms"><span className="mui-badge">5</span></span>
                                <div className="mui-media-body">Email</div>
                            </a>
                        </li>
                        <li className="mui-table-view-cell mui-media mui-col-xs-4">
                            <a href="#">
                                <span className="mui-icon mui-icon-calendar"></span>
                                <div className="mui-media-body">Calendar</div>
                            </a>
                        </li>
                        <li className="mui-table-view-cell mui-media mui-col-xs-4">
                            <a href="#">
                                <span className="mui-icon mui-icon-chat"></span>
                                <div className="mui-media-body">Chat</div>
                            </a>
                        </li>
                        <li className="mui-table-view-cell mui-media mui-col-xs-4">
                            <a href="#">
                                <span className="mui-icon mui-icon-category"></span>
                                <div className="mui-media-body">Sort</div>
                            </a>
                        </li>
                        <li className="mui-table-view-cell mui-media mui-col-xs-4">
                            <a href="#">
                                <span className="mui-icon mui-icon-map"></span>
                                <div className="mui-media-body">Map</div>
                            </a>
                        </li>
                        <li className="mui-table-view-cell mui-media mui-col-xs-4">
                            <a href="#">
                                <span className="mui-icon mui-icon-search"></span>
                                <div className="mui-media-body">Search</div>
                            </a>
                        </li>
                        <li className="mui-table-view-cell mui-media mui-col-xs-4">
                            <a href="#">
                                <span className="mui-icon mui-icon-phone"></span>
                                <div className="mui-media-body">Phone</div>
                            </a>
                        </li>
                        <li className="mui-table-view-cell mui-media mui-col-xs-4">
                            <a href="#">
                                <span className="mui-icon mui-icon-cog"></span>
                                <div className="mui-media-body">Setting</div>
                            </a>
                        </li>
                    </ul>
                </div>);
        }
    });
    return Welcome;
});

