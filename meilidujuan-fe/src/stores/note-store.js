/**
 * Created by liunickluck on 15/7/23.
 */
define(['eventMgr',"collections/NoteCollection",'reflux','actions/note-action'],function(EventCP,NoteCollection,Reflux,NoteActions){

    var noteCol = NoteCollection.getInstance();
    var apiMap = require("apiMap");
    var NoteStore = Reflux.createStore({
        init:function(){
            console.log("Note Store init ok");
            this.listenTo(NoteActions.createNote,"onCreateNote");
            this.listenTo(NoteActions.getNotes,"onGetNotes");
            this.listenTo(NoteActions.getNote,"onGetNote");
        },
        onCreateNote:function(note){
            noteCol.add(data).save({},{
                url:apiMap.createNote
            });
        },
        onGetNotes:function(){
            var _this = this;
            noteCol.fetch({
                dataType:'jsonp',
                success:function(res){
                    _this.trigger(res);
                }
            });
        },
        onGetNote:function(param){
            this.trigger(noteCol.findWhere({noteId:param.noteId}));
        }
    });
    return NoteStore;
});