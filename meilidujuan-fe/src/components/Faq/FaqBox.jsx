/**
 * Created by liunickluck on 15/5/27.
 */
    define(['react','components/Faq/FaqList.jsx','react-router'],function(React,FaqList,ReactRouter){
        var CommentBox = React.createClass({
            render:function(){
                return(
                    <div className={"FaqBox"}>
                        <h1>旅客问答</h1>
                        <FaqList/>
                    </div>);
            }
        });
        return CommentBox;
    });