/**
 * Created by liunickluck on 15/7/9.
 */
define(['react','jquery'],function(React,$){
    var Moment = React.createClass({
        getInitialState:function(){
            return {};
        },
        render:function(){
            return(<div className="moment-item list-group-item">
                <img src={this.props.picturePath} className="img-responsive"/>
                <span className="title">{this.props.title}</span>
            </div>);
        }
    });
    return Moment;
});