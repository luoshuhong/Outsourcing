/**
 PlanItem
 15/8/30
 */
define(function (require) {

    var React = require("react");
    var ReactRouter = require("react-router");
    var Link = ReactRouter.Link;
    var PlanItem = React.createClass({
        render:function(){
            return(<div className="PlanItem">
                <div className="img-ctn">
                    <img src={this.props.img}/>
                    <span className="price">{this.props.price}</span>
                    <span className="duration"><span className="sp">{this.props.duration}</span>天</span>
                    <span className="name">{this.props.name}</span>
                </div>
                <div className="info-box">
                    <p className="description">{this.props.description}</p>
                    <div className="leader"><i className="glyphicon glyphicon-user"></i>&nbsp;&nbsp;<a href="javascript:void(0)">{this.props.leader}</a></div>
                    <div className="actions">
                        <div className="btn btn-success btn-xs">
                           <Link to="order" params={this.props}> 报名参加</Link>
                        </div>
                    </div>
                </div>
            </div>)
        }
    });
    return PlanItem;
});
