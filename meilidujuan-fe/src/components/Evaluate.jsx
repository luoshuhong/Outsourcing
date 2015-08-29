define(['react'],function(React){
    var Evaluate = React.createClass({
        render:function(){
            return(<li className='evaluate-item'>
                <span className="author">
                {this.props.author}
                </span>
            &nbsp;:&nbsp;
                <span className="evaluate-ctn">
                {this.props.children}
                </span>
            </li>);
        }
    });
    return Evaluate;
});
