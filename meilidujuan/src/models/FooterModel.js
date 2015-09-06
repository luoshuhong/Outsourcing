/**
 * Created by liunickluck on 15/7/16.
 */
(function(root,factory){
    if(typeof define =='function'&&define.amd){
        define(['jquery','backbone'],function($,Backbone){
            return factory($,Backbone);
        });
    }else if(module&&module.exports){
        var $ =require("jquery");
        var Backbone = require("backbone");
        module.exports=factory($,Backbone);
    }else{
        root.getInstance = factory($,ModelCP,Backbone);
        root.Model = Model
    }
})(this,function($,Backbone){
        var _instance;
        var Model = Backbone.Model.extend({
            defaults:{

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
})
