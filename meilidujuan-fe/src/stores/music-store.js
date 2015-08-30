/**
 * Created by liunickluck on 15/8/22.
 */
define(['reflux','actions/music-action','collections/MusicCollection'],function(Reflux,MusicActions,MusicCollection){
    var col = MusicCollection.getInstance();
    var MusicStore = Reflux.createStore({
        init:function(){
            this.listenTo(MusicActions.getMusics,'onGetMusics')
        },
        onGetMusics:function(){
            var _this = this;
            col.fetch({
                dataType:'jsonp',
                success:function(res){
                    _this.trigger(res);
                }
            });
        }
    });
    return MusicStore;
});