/**
 * Created by liunickluck on 15/5/27.
 */
    define(['react','components/Faq/FaqList.jsx','react-router'],function(React,FaqList,ReactRouter){
        var CommentBox = React.createClass({
            render:function(){
                return(
                    <div className={"commentBox"}>
                        Hello, world! I am a CommentBox.
                        <h1>comments</h1>
                        <FaqList/>
                    </div>);
            }
        });
        return CommentBox;
    });