/**
 * Created by liunickluck on 15/8/1.
 */
/**
 * Created by liunickluck on 15/7/23.
 */
define(['eventMgr','common/AjaxUtil','reflux','actions/login-action'],function(EventCP,AjaxUtil,Reflux,LoginActions){
    var LoginStore =Reflux.createStore({
        init:function(){
          this.listenTo(LoginActions.checkLogin,'onCheckLogin');
          this.listenTo(LoginActions.logout,'onLogout');
        },
        onCheckLogin:function(res){
            console.log("接受到Login数据变化checkLogin",res);
        },
        onLogout:function(){
          console.log("logout .......");
        },
        getCheckCode:function(callback){
            AjaxUtil.getCheckCode(function(res){
                callback&&callback(res);
            });
        },
        veryfyCheckCode:function(param,callback){
            AjaxUtil.checkVCode(param,function(res){
                callback&&callback(res);
            });
        },
        getAll:function(){
            return [];
        },
        getDefault:function(){
            return {}
        }
    });
    return LoginStore;
});