/**
 * Created by liunickluck on 15/5/29.
 */
    define(['react'],function(React){
        var Contact = React.createClass({
            render:function(){
                return(<li className='contact-item list-group-item'>
                    <span className="icon">
                        <img src={this.props.icon}/>
                    </span>
                    <span className="name">
                {this.props.name}
                    </span>
                    <span className="address">
                {this.props.address}
                    </span>
                </li>);
            }
        });
        return Contact;
    });
