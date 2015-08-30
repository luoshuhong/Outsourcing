/**
 Slider
 15/8/30
 */
define(function (require) {

    var React = require("react");
    var TouchSlide = require("TouchSlide");

    var SliderItem = React.createClass({
        render:function(){
            return (<li>
                <div className="pic">
                    <a href={this.props.url} target="_blank">
                        <img _src="http://aawooo.com/images/logo.jpg" src={this.props.url}/>
                    </a>
                </div>
                <div className="title">
                    <a href={this.props.url} target="_blank">{this.props.title}</a>
                </div>
                </li>);
        }
    });
    var Slider = React.createClass({
        getInitialState: function () {
            return {
                list:[
                    {
                        id:1,
                        url:'http://static.panoramio.com/photos/original/63692230.jpg',
                        title:'丽江洱海'
                    },
                    {
                        id:2,
                        url:'http://img1.imgtn.bdimg.com/it/u=356837486,2931730445&fm=21&gp=0.jpg',
                        title:'云南大理'
                    },
                    {
                        id:3,
                        url:'http://pic.qyer.com/album/user/1260/59/QEtTQh8OYkg/index/980x576c',
                        title:'肯尼亚之旅'
                    },
                    {
                        id:4,
                        url:'http://static.panoramio.com/photos/large/7444900.jpg',
                        title:'汉白玉'
                    }
                ]
            };
        },
        componentWillMount: function () {
            //console&&console.log('component will mount');
        },
        componentDidMount: function () {
            //console&&console.log('component did mount');
            TouchSlide({
                slideCell:"#picScroll-top",
                titCell:"#picScroll-top .hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
                mainCell:"#picScroll-top .bd ul",
                effect:"left",
                autoPlay:true,//自动播放
                autoPage:true, //自动分页
                switchLoad:"_src" //切换加载，真实图片路径为"src"
            });
        },
        componentWillUnmount: function () {
            //console&&console.log('component will unmount');
        },
        render: function () {
            return (<div className="Slider">
                <div className="picScroll-top" id="picScroll-top">
                <div className="hd">
                    <ul></ul>
                    <span className="pageState"></span>
                </div>
                <div className="bd">
                    <ul className="picList">
                    {this.state.list&&this.state.list.map(function(picture){
                        return <SliderItem {...picture}/>
                    })}
                    </ul>
                </div>
            </div>
                </div>)
        }
    });
    return Slider;
});
