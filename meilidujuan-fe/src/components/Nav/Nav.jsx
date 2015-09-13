/**
 Nav
 15/8/30
 */
define(function (require) {

    var React = require("react");
    var NavItem = React.createClass({
        render:function(){
            return <a href={this.props.path} className="NavItem" data-id={this.props.id}>{this.props.label}</a>
        }
    });
    var Nav = React.createClass({
        getInitialState: function () {
            return {
                list:[{
                    label:'首页',
                    path:'/#/',
                    id:1
                },{
                    label:'精品线路',
                    path:'/#/bestplan',
                    id:2
                },{
                    label:'活动图片',
                    path:'/#/activity',
                    id:3
                },{
                    label:'租车服务',
                    path:'/#/rentcar',
                    id:4
                },{
                    label:'领队风采',
                    path:'/#/leaders',
                    id:5
                },{
                    label:'旅客问答',
                    path:'/#/faq',
                    id:6
                },{
                    label:'联系我们',
                    path:'/#/contactus',
                    id:7
                }]
            };
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
            return (<div className="Nav">
            {this.state.list&&this.state.list.map(function(navItem){
                return <NavItem {...navItem}/>
            })}
            </div>)
        }
    });
    return Nav;
});
