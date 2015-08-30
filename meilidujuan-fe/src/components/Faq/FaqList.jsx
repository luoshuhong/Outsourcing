define(['react','jquery','components/Faq/Faq.jsx'],function(React,$,Faq){
    var CommentList = React.createClass({
        getInitialState:function(){
            return {
                list:(function(){
                    var list=[];
                    for(var i=0;i<50;i++){
                        list.push({

                            'keyName':i+" 问题",
                            'value':'这是第'+i+'问题的答案'
                        });
                    }
                    return list;
                })()
            };
        },
        componentDidMount:function(){
        },
        render:function(){
            return(<ul className="FaqList list-group">
            {
            this.state.list&&this.state.list.map(function(item){
                console.log(item);
                return <Faq {...item}/>
            })
                }
            </ul>);
        }
    });
    return CommentList;
});
