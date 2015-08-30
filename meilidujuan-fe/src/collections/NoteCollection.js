/**
 * Created by liunickluck on 15/8/8.
 */
define(["backbone","apiMap",'eventMgr'],function(Backbone,apiMap,EventCP){
    var _instance;
    var eventMgr = EventCP.getInstance();

    var Collection = Backbone.Collection.extend({
        url:apiMap.queryNotes,
        parse:function(res){
            if(res.code==-1){
                console.log("用户未登录");
                eventMgr.trigger("logout");
                return null;
            }else{
                return res.object;
            }

        }
    });
    return {
        getInstance:function(){
            if(!_instance){
                _instance = new Collection();
            }
            return _instance;
        }
    };
});