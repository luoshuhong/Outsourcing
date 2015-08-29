/**
 * Created by liunickluck on 15/5/29.
 */
/**
 * Created by liunickluck on 15/5/27.
 */
    define(['react','components/Evaluate.jsx'],function(React,Evaluate){
        var EvaluateList = React.createClass({
            getInitialState:function(){
                return {};
            },
            setList:function(list){
                this.setState({list:list});
            },
            update:function(){
                var list=[];
                for(var i=0;i<Math.floor(Math.random()*10);i++){
                    list.push({
                        author:i+"小",
                        content:'这是第'+i+'个评论啊'
                    });
                }
                this.setList(list);
            },
            componentDidMount:function(){
                this.update();
            },
            render:function(){
                return(<ul className="evaluate-list">
            {
            this.state.list&&this.state.list.map(function(item){
                return <Evaluate author={item.author}>{item.content}</Evaluate>
            })
                }
                </ul>);
            }
        });
        return EvaluateList;
    });