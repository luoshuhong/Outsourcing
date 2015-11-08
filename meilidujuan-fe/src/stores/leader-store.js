/**
 * Created by liunickluck on 15/8/22.
 */
    var Reflux = require("reflux");
    var PlanActions = require("actions/plans-action");
    var PlanCollection = require("collections/PlanCollection");
    var col = PlanCollection.getInstance();
    var apiMap = require("apiMap");
    var $ = require("jquery");
    $.support.cors = true;
    $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
        options.crossDomain ={
            crossDomain: true
        };
        options.xhrFields = {
           // withCredentials: true
        };
    });
    var PlanStore = Reflux.createStore({
        init:function(){
            console.log("PlanStore 初始化====");
        },
        listenables:PlanActions,
        onGetPlans:function(){
            var _this = this;
            col.fetch({
                url:apiMap.plan,
                success:function(res){
                    _this.trigger(res.toJSON());
                }
            });
        },
        onCreatePlan:function(data){
            col.add(data).save();
        }
    });
    module.exports = PlanStore;