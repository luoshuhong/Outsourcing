/**
 * Created by liunickluck on 15/9/5.
 */
/**
 * Created by liunickluck on 15/7/16.
 */
define(['jquery','backbone','apiMap'],function($,Backbone,apiMap){
    var _instance;
    var Collection = Backbone.Collection.extend({
        url:apiMap.queryTopPictures,
        parse:function(res){
            var list=[];
            res.object.forEach(function(item){
                item.icon=apiMap.getWebStream+"?url="+item.icon;
                item.picturePath=apiMap.getWebStream+"?url="+item.picturePath;
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