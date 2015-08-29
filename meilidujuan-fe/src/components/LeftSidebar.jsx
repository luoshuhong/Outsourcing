/**
 LeftSidebar
 15/8/13
 */
define(function (require) {

    var React = require("react");

    var LeftSidebar = React.createClass({
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
        handlerHref:function(event){
            console.log("点击事件",event.target.href);
            location.href=event.target.href;
            event.stopPropagation();
        },
        render: function () {
            return (<aside id="offCanvasSide" className="mui-off-canvas-left">
                <ul className="mui-table-view mui-table-view-chevron mui-table-view-inverted">
                    <li className="mui-table-view-cell mui-navigate-right">
                        <a  href="http://www.aawooo.com" target="_blank" onClick={this.handlerHref}>
                            小圈社区
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-navigate-right">
                        <a href="/#/musics" target="_blank" onClick={this.handlerHref}>
                            乐活
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-navigate-right">
                        <a href="mailto:ibuyer_server@aawooo.com" target="_blank" onClick={this.handlerHref}>
                            联系我们
                        </a>
                    </li>
                </ul>
            </aside>)
        }
    });
    return LeftSidebar;
});
