/**
 PictureFlow
 15/8/30
 */
define(function (require) {

    var React = require("react");

    var PictureFlow = React.createClass({
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
                        url:'http://static.panoramio.com/photos/large/47856922.jpg',
                        title:'西藏服务点'
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
        },
        render: function () {
            return (<div className="PictureFlow">
            {this.state.list&&this.state.list.map(function(picture){

            })}
            </div>)
        }
    });
    return PictureFlow;
});
