define(['react','jquery','components/Moment.jsx'],function(React,$,Moment){
    var CommentList = React.createClass({
        getInitialState:function(){
            return {};
        },
        setList:function(list){
            this.setState({list:list});
        },
        update:function(){
            var _this = this;
            $.ajax({
                url:'http://server.aawooo.com:8080/pictureAction!queryPictures.action',
                dataType:'jsonp',
                data:{
                    ps:50
                },
                success:function(res){
                    _this.setList(res.object);
                }
            });
        },
        componentDidMount:function(){
            this.update();
        },
        render:function(){
            if(!this.state.list){
                return(<img src="react/css/loading.gif" className="img-responsive text-center"/>);
            }
            return(<ul className="commentList list-group">
            {
            this.state.list&&this.state.list.map(function(item){
                return <Moment picturePath={item.picturePath} id={item.pictureId} title={item.title}/>
            })
                }
            </ul>);
        }
    });
    return CommentList;
});
