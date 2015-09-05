/**
 PictureFlow
 15/8/30
 */
define(function (require) {

    var React = require("react");
    var Reflux = require("reflux");
    var ActivityStore = require("stores/activities-store");
    var ActivityActions = require("actions/activities-action");
    var Seperator = require("components/Seperator/Seperator.jsx");
    var PictureFlow = React.createClass({
        mixins:[Reflux.listenTo(ActivityStore,'onActivitiesStatusChange')],
        getInitialState: function () {
            return {
                list:[]
            };
        },
        onActivitiesStatusChange:function(res){
          console.log("activities  数据变化：",res);
            this.setState({
                list:res
            });
        },
        componentWillMount: function () {
            //console&&console.log('component will mount');
        },
        componentDidMount: function () {
            //console&&console.log('component did mount');
            ActivityActions.getActivities();
        },
        render: function () {
            var i=0;
            return (<div className="PictureFlow">
                <Seperator datatitle="活动图片"/>
            {this.state.list&&this.state.list.map(function(picture){
                i++;
               return <div className={i%5==1?"pic-li m-size":"pic-li"}>
                   <img src={picture.picturePath}/>
                   <div className="title-bg"/>
                   <a href="javascript:void(0)" className="title">{picture.title}</a>

                   <div className="description-bg"/>
                   <a href="javascript:void(0)" className="description">{picture.description||'美丽的香格里拉, 迷人的梅里雪山，稻城亚丁欢迎您...'}</a>
               </div>
            })}
            </div>)
        }
    });
    return PictureFlow;
});
