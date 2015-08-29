/**
 NoteForm
 15/8/8
 */
    define(function(require){

        var React = require("react");
        var $ = require("jquery");
        var utils = require("utils");
        var NoteAction = require("actions/note-action");

        var NoteForm = React.createClass({
            getInitialState: function () {
                return {};
            },
            componentDidMount: function () {
                //console&&console.log('component did mount');
            },
            componentDidUpdate: function () {
                //console&&console.log('component did update');
            },
            componentWillUnmount: function () {
                //console&&console.log('component will unmount');
            },
            onClickSaveHandler:function(){
                var submitObj = utils.serializerToJson($(this.getDOMNode()).serialize());
                if(this.props.noteId){
                    NoteAction.updateNote(submitObj);
                }else{
                    NoteAction.createNote(submitObj);
                }
            },
            render: function () {
                return (<form className="form note-form">
                    <input type="hidden" name="noteId" value={this.props.noteId}/>
                    <div className="form-group">
                        <label for="title">标题：</label>
                        <input name="title" type="text" id="title" className="form-control" value={this.props.title} placeholder="标题"/>
                    </div>
                    <div className="form-group">
                        <label for="content">内容：</label>
                        <textarea name="content" id="content" value={this.props.content} className="form-control" placeholder="内容"></textarea>
                    </div>
                    <div className="form-group center-block text-center">
                        <a href="javascript:void(0)" className="btn btn-primary" onClick={this.onClickSaveHandler}>保存</a>
                    </div>
                </form>)
            }
        });
        return NoteForm;
    });
