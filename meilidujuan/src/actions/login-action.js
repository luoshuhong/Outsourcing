/**
 * Created by liunickluck on 15/8/22.
 */
define(['reflux'],function(Reflux){
    var LoginActions = Reflux.createActions([
        'checkLogin',
        'logout'
    ]);
    return LoginActions;
});