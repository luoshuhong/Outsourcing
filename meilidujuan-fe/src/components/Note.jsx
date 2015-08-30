/**
 Note
 15/8/8
 */
define(function (require) {

    var React = require("react");
    var NoteAction = require("actions/note-action");
    var NoteStore = require("stores/note-store");

    var Note = React.createClass({
        getInitialState: function () {
            return {};
        },
        componentWillMount: function () {
            //console&&console.log('component will mount');
        },
        componentDidMount: function () {
            //console&&console.log('component did mount');
        },
        componentWillUpdate: function () {
            //console&&console.log("componentWillUpdate");  
        },
        componentDidUpdate: function () {
            //console&&console.log('component did update');
        },
        componentWillUnmount: function () {
            //console&&console.log('component will unmount');
        },
        onClickItemHandler:function(event){
            NoteAction.getNote({
                noteId:this.props.noteId
            });
        },
        render: function () {
            return (<p className="mui-ellipsis">
                <a href="javascript:void(0)" onClick={this.onClickItemHandler}>
                    {this.props.title}
                    {this.props.submitTime}
                </a></p>)
        }
    });
    return Note;
});
