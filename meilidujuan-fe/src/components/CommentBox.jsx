/**
 * Created by liunickluck on 15/5/27.
 */
    define(['react','components/CommentList.jsx','react-router'],function(React,CommentList,ReactRouter){
        var CommentBox = React.createClass({
            render:function(){
               // return (<div>欢迎来到React</div>);
                return(
                    <div className={"commentBox"}>
                        Hello, world! I am a CommentBox.
                        <h1>comments</h1>
                        <CommentList/>
                    </div>);
            }
        });
        return CommentBox;
    });