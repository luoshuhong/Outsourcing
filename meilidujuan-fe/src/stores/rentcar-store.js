/**
 * Created by liunickluck on 15/8/22.
 */
    var Reflux = require("reflux");
    var RentCarActions = require("actions/rentcar-action");
    var RentCarCollection = require("collections/RentCollection");
    var col = RentCarCollection.getInstance();

    var RentCarStore = Reflux.createStore({
        init:function(){
            this.listenTo(RentCarActions.getCars,'onGetCars')
        },
        onGetCars:function(){
            var _this = this;
            col.fetch({
                dataType:'jsonp',
                success:function(res){
                    _this.trigger(res.toJSON());
                }
            });
        }
    });
    module.exports = RentCarStore;