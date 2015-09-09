/**
 * Created by liunickluck on 15/8/22.
 */
define(['reflux','actions/activities-action','collections/ActivityCollection'],function(Reflux,ActivityActions,ActivityCollection){
    var col = ActivityCollection.getInstance();
    var MusicStore = Reflux.createStore({
        init:function(){
            this.listenTo(ActivityActions.getActivities,'onGetActivities')
        },
        onGetActivities:function(){
            var _this = this;
            col.fetch({
                dataType:'jsonp',
                success:function(res){
                    _this.trigger(res.toJSON());
                }
            });
        }
    });
    return MusicStore;
});