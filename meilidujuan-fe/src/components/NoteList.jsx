/**
 NoteList
 15/8/8
 */
define(function (require) {

    var React = require("react");
    var NoteStore = require("stores/note-store");
    var Note = require("components/Note.jsx");

    var $ = require("jquery");

    var NoteList = React.createClass({
        getInitialState: function () {
            return {};
        },
        componentWillMount: function () {
            //console&&console.log('component will mount');
        },
        componentDidMount: function () {
            //console&&console.log('component did mount');
            var _this=this;
            NoteStore.getAll(function(res){
                console.log(res);
                _this.setState({
                    list:res.toJSON()
                });
            });
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
        render: function () {
            var _this = this;
            return (<ul className="NoteList mui-table-view">
            {
                this.state.list&&this.state.list.map(function(note){
                    return <li className="mui-table-view-cell">
                            <Note title={note.title} submitTime={note.submitTime} noteId={note.noteId}/>
                        </li>
                })
                }
            </ul>)
        }
    });
    return NoteList;
});
