/**
 * Created by liunickluck on 15/7/16.
 */
define(['backbone'],function(Backbone){
    var _instance;
    var Model = Backbone.Model.extend({});
    return {
        getInstance:function(){
            if(!_instance){
                _instance = new Model();
            }
            return _instance;
        }
    }
});