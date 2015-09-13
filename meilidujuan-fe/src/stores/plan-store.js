/**
 * Created by liunickluck on 15/8/22.
 */
    var Reflux = require("reflux");
    var PlanActions = require("actions/plans-action");
    var PlanCollection = require("collections/PlanCollection");
    var col = PlanCollection.getInstance();

    var PlanStore = Reflux.createStore({
        init:function(){
            this.listenTo(PlanActions.getPlans,'onGetPlans')
        },
        onGetPlans:function(){
            var _this = this;
            col.fetch({
                dataType:'jsonp',
                success:function(res){
                    _this.trigger(res.toJSON());
                }
            });
        }
    });
    module.exports = PlanStore;