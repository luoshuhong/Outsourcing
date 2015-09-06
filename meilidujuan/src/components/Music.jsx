/**
 * Created by liunickluck on 15/7/9.
 */
define(['react','jquery'],function(React,$){


    var Moment = React.createClass({
        getInitialState:function(){
            return {};
        },
        onClickPlayHandler:function(event){
            var src = $(event.target).parents(".music-item").attr("data-src");
        },
        render:function(){
            var that = this;
            return(<div className="music-item" data-src={this.props.src}>
                <img src={this.props.icon} className="mui-media-object mui-pull-left"/>
                <a href="javascript:void(0)" onClick={that.onClickPlayHandler}>
                <div className="basic-info mui-media-body">
                    {this.props.artist}
                    <p className="mui-ellipsis">{this.props.name}</p>
                </div>
                </a>
            </div>);
        }
    });
    return Moment;
});