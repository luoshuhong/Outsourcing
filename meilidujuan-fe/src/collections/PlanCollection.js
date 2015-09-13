/**
 * Created by liunickluck on 15/9/13.
 */
define(function(require){
    var Backbone = require("backbone");
    var apiMap = require("apiMap");
    var instance;
    var Collection = Backbone.Collection.extend({
        url:apiMap.plan,
        parse:function(res){
            return res.object;
        }
    });
    return {
        getInstance:function(){
            if(!instance){
                instance = new Collection();
            }
            return instance;
        }
    }
});