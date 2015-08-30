define(['react','jquery','components/Faq/Faq.jsx'],function(React,$,Comment){
    var CommentList = React.createClass({
        getInitialState:function(){
            return {};
        },
        setList:function(list){
            this.setState({list:list});
        },
        update:function(){
            var list=[];
            for(var i=0;i<50;i++){
                list.push({
                    author:i+" author",
                    description:'这是第'+i+'个人'
                });
            }
            this.setList(list);
        },
        componentDidMount:function(){
            this.update();
        },
        render:function(){
            return(<ul className="commentList list-group">
                <Comment author="Pete Hunt">This is one comment</Comment>
                <Comment author="Jordan Walke">This is *another* comment</Comment>
            {
            this.state.list&&this.state.list.map(function(item){
                return <Comment author={item.author}>{item.description}</Comment>
            })
                }
            </ul>);
        }
    });
    return CommentList;
});
