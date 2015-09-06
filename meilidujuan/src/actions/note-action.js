/**
 * Created by liunickluck on 15/7/23.
 */
define(['reflux'],function(Reflux){
    var NoteActions = Reflux.createActions([
        'createNote',
        'getNotes',
        'getNote',
        'updateNote',
        'deleteNote'
    ]);
    return NoteActions;
});