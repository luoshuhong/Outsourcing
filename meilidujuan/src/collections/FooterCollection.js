/**
 * Created by liunickluck on 15/7/16.
 */
(function(root,factory){
    if(typeof define =='function'&&define.amd){
        define(['jquery',"models/FooterModel",'backbone'],function($,ModelCP,Backbone){
            return factory($,ModelCP,Backbone);
        });
    }else if(module&&module.exports){
        var $ =require("jquery");
        var ModelCP = require("models/FooterModel");
        var Backbone = require("backbone");
        exports.getInstance=factory($,ModelCP,Backbone);
    }else{
        root.getInstance = factory($,ModelCP,Backbone);
    }
})(this,function($,ModelCP,Backbone){
    var _instance;
    var Collection = Backbone.Collection.extend({
        model:ModelCP.Model,
        url:'http://aawooo.com/node/footer',
        parse:function(res){
            return res.data;
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
})
