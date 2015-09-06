/**
 * Created by liunickluck on 15/7/16.
 */
define(['jquery','backbone'],function($,Backbone){
    var _instance;
    var Model = Backbone.Model.extend({
        idAttribute:'musicId',
        defaults:{
            src:'',
            icon:'',
            duration:'',
            artist:''
        }
    });
    return {
        getInstance:function(){
            if(!_instance){
                _instance = new Model();
            }
            return _instance;
        },
        Model:Model
    }
});