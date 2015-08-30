/**
 NoteBox
 15/8/8
 */
define(['react','components/NoteList.jsx','components/NoteForm.jsx','stores/note-store'],function(React,NoteList,NoteForm,NoteStore){
    var NoteBox = React.createClass({
        getInitialState: function () {
            return {
                view:'list'
            };
        },
        onChange:function(action){
            console.log("接受到change",action);
            if(action.actionType=="GET_NOTE"){
                var model = NoteStore.get(action.data.noteId);
                this.replaceState(model.toJSON());
                this.setState({view:"edit"});
            }
        },
        componentWillMount: function () {
            console&&console.log('component will mount');
        },
        componentDidMount: function () {
            console&&console.log('component did mount');
            NoteStore.addChangeListener(this.onChange);
        },
        componentWillUpdate: function () {
            //console&&console.log("componentWillUpdate");
        },
        componentDidUpdate: function () {
            //console&&console.log('component did update');
        },
        componentWillUnmount: function () {
            //console&&console.log('component will unmount');
            NoteStore.removeChangeListener(this.onChange);
        },
        render: function () {
            return (<div className="note-box">
                <NoteForm noteId={this.state.noteId} title={this.state.title} content={this.state.content} uid={this.state.uid}/>
                <NoteList/>
            </div>)
        }
    });
  return NoteBox;
});