/**
 BestPlan
 15/8/30
 */
define(function (require) {

    var React = require("react");
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
                        <a className="btn btn-success btn-xs" href="javascript:void(0)">报名参加</a>
                    </div>
                </div>
            </div>)
        }
    });
    var BestPlan = React.createClass({
        getInitialState: function () {
            return {
                list:(function(){
                    var list=[];
                    for(var i=0;i<20;i++){
                        list.push({
                            img:'http://www.djyaa.com/uploads/2013/02/1360115501-oN20rb.jpg',
                            name:'梅里雪山5天3页深度游',
                            price:'5888元',
                            description:'彩云之南，一个梦幻的国度，曾无数次在我的脑海中勾勒：天边的彩霞，五彩斑斓的花朵，娇脆欲滴的苍林，成群的牛羊，还有那朴实的牧民~~。',
                            duration:'2',
                            leader:'梅里杜鹃'
                        });
                    }
                    return list;
                })()
            };
        },
        componentWillMount: function () {
            //console&&console.log('component will mount');
        },
        componentWillUnmount: function () {
            //console&&console.log('component will unmount');
        },
        render: function () {
            return (<div className="BestPlan">
            {this.state.list&&this.state.list.map(function(plan){
                return <PlanItem {...plan}/>
            })}
            </div>)
        }
    });
    return BestPlan;
});
