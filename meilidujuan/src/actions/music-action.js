/**
 * Created by liunickluck on 15/8/22.
 */
define(['reflux'],function(Reflux){
    var MusicAction = Reflux.createActions([
        'getMusics',
        'deleteMusic',
        'updateMusic'
    ]);
    return MusicAction;
});