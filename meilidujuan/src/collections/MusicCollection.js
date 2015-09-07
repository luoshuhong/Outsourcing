/**
 * Created by liunickluck on 15/7/16.
 */
define(['jquery',"models/MusicModel",'backbone','apiMap'],function($,ModelCP,Backbone,apiMap){
    var _instance;
    var Collection = Backbone.Collection.extend({
        model:ModelCP.Model,
        url:apiMap.queryTopMusics,
        parse:function(res){
            var list=[];
            res.object.forEach(function(item){
                item.icon=apiMap.getWebStream+"?url="+item.icon;
                item.src=apiMap.getWebStream+"?url="+item.src;
                list.push(item);
            });
            return list;
        }
    });
    return {
        getInstance:function(){
            if(!_instance){
                _instance = new Collection();
            }
            return _instance;
        }
    }
});