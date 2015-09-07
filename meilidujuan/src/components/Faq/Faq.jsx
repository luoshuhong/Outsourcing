/**
 * Created by liunickluck on 15/5/27.
 */
    define(['react','jquery'],function(React,$){
        var Faq = React.createClass({
            componentDidMount:function(){
                var _this = this;
                this.timer = setTimeout(function(){
                    var now =  new Date();
                    _this.setState({time:now.getHours()+' hours ago'});
                },100);
            },
            getInitialState:function(){
                return {time:Date.now()};
            },
            render:function(){
                return(<li className='comment-item list-group-item'>
                    <span className="author">
                {this.props.author} 分享了一个链接
                    </span>

                    <div className="shared-ctn">
                        <img className="icon" src={this.props.icon||'http://aawooo.com/images/aawooo_wx.jpg'} height="30" width="30"/>
                        <span className="desciption">{this.props.children}</span>
                    </div>
                    <div className="updateTime">{this.state.time}</div>
                </li>);
            }
        });
        return Faq;
    });
