/**
 BestPlan
 15/8/30
 */
define(function (require) {

    var React = require("react");
    var PlanItem = require("./PlanItem.jsx");
    var BestPlan = React.createClass({
        getInitialState: function () {
            return {
                list:(function(){
                    var list=[];
                    for(var i=0;i<20;i++){
                        list.push({
                            id:i,
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
