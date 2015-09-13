/**
 * Created by liunickluck on 15/7/23.
 */
define(['eventMgr','jquery','reflux','actions/contact-action'],function(EventCP,$,Reflux,ContactActions){
    var eventMgr = EventCP.getInstance();
    var contacts=[];
    var ContactStore =Reflux.createStore({
        init:function(){
          console.log("ContactStore初始化");
            this.listenTo(ContactActions.getContacts,'onGetContacts');
            this.listenTo(ContactActions.sendEmail,'onSendEmail');
        },
        onGetContacts:function(res){
            console.log("Contact Components中接搜到 contact数据变化",res);
        },
        emitChange:function(){
            eventMgr.trigger("change");
        },
        addChangeListener:function(callback){
            eventMgr.on("change",callback)
        },
        removeChangeListener:function(callback){
            eventMgr.off("change",callback);
        },
        get:function(){
            return contacts[0];
        },
        getAll:function(){
          return contacts;
        },
        getDefault:function(){
            return {}
        },
        onSendEmail:function(data){
            var _this = this;
            $.ajax({
                url:'http://aawooo.com/node/mail',
                type:"post",
                data:data,
                success:function(res){
                    _this.trigger(res);
                }
            });
        }
    });
    return ContactStore;
});