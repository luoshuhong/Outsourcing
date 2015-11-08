/**
 * Created by liunickluck on 15/9/5.
 */
var Reflux=require("reflux");
var PlanActions = Reflux.createActions([
    'getPlans',
    'createPlan'
]);
module.exports = PlanActions;