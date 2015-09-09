/**
 * Created by liunickluck on 15/5/27.
 */
    define(['react'],function(React){
        var Faq = React.createClass({
            getInitialState:function(){
                console.log(this.props);
                return {};
            },
            render:function(){
                return(<li className='faq-item list-group-item'>
                    <div className="author">
                       问： {this.props.keyName}
                    </div>
                    <div className="shared-ctn">
                        答：{this.props.value}
                    </div>
                </li>);
            }
        });
        return Faq;
    });
