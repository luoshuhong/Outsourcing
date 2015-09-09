/**
 Leader
 15/8/30
 */
define(function (require) {

    var React = require("react");
    var LeaderItem = React.createClass({
        renderIntro:function(){
            if(this.props.introduction.length<150){
                return this.props.introduction;
            }else{
                return <span>{this.props.introduction.substring(0,149)+'...'}<a>more</a></span>
            }
        },
        render:function(){
            return (<div className="LeaderItem">
                <div className="img-ctn">
                    <img src={this.props.img}/>
                </div>
                <div className="basic-info">
                    <div className="name head-title">姓名：{this.props.name}</div>
                    <div className="experience head-title">工作年限:{this.props.experience}</div>
                    <div className="introduction">
                      <span className="head-title">自我介绍：</span>{this.props.introduction}
                    </div>
                </div>
            </div>);
        }
    });
    var Leader = React.createClass({
        getInitialState: function () {
            return {
                list:(function(){
                    var list=[];
                    for(var i=0;i<5;i++){
                        list.push({
                            img:'http://server.aawooo.com:8080/streamAction!getWebStream.action?url=http://p1.pichost.me/640/24/1471595.jpg',
                            experience:'16个月',
                            name:'格桑卓玛',
                            introduction:"导游这个行业改变了我的性格，从内向收敛，转到外向活泼，从事旅游十几年让自己的生活变得充实，让自己变得快乐，也带给周边的人快乐，是我最开心的事导游这个行业改变了我的性格，从内向收敛，转到外向活泼，从事旅游十几年让自己的生活变得充实，让自己变得快乐，也带给周边的人快乐，是我最开心的事导游这个行业改变了我的性格，从内向收敛，转到外向活泼，从事旅游十几年让自己的生活变得充实，让自己变得快乐，也带给周边的人快乐，是我最开心的事"
                        });
                    }
                    return list;
                })()
            };
        },
        render: function () {
            console.log(this.state.list);
            return (<div className="Leader">
            {this.state.list&&this.state.list.map(function(leader){
                return <LeaderItem {...leader}/>
            })}
            </div>)
        }
    });
    return Leader;
});
