define(['jquery'],function($){
    var serverDomain="http://server.aawooo.com:8080";

    var STORE={

        /**ajax发送封装*/
        ajaxSend:function(actionUrl,params,callback){
            params=params||{};
            params.keyRefer="aawooo";
            $.ajax({
                url:actionUrl,
                data:params||{},
                async:false,
                dataType:"jsonp",
                jsonpCallback:"callback",
                success:function(data){
                    callback&&callback(data);
                }
            });
        },
        /*序列串转为json*/
        serializerToJson:function(serializerString){
            var keyMapsArray=serializerString.split("&");
            var json={};
            keyMapsArray&&keyMapsArray.forEach(function(keyMap){
                var key_value=keyMap.split("=");
                json[key_value[0]]=key_value[1];
            });
            return json;
        },
        storeActions:{
            "addArticleAction":serverDomain+"/articleAction!addArticle.action",
            "checkLoginAction":serverDomain+"/userAction!checkLogin.action",
            "addUserAction":serverDomain+"/userAction!addUser.action",
            "queryArticlesAction":serverDomain+"/articleAction!queryArticles.action",
            "queryTopArticles":serverDomain+"/articleAction!queryArticles.action",
            "queryTopPictures":serverDomain+"/pictureAction!queryPictures.action",
            "queryTopMusics":serverDomain+"/musicAction!queryTopMusics.action",
            "queryTopVideos":serverDomain+"/videoAction!queryTopVideos.action",
            "queryVideoPath":"http://10.6.192.97:8080"+"/videoAction!getVideoPath.action",
            "queryTopNotices":serverDomain+"/noticeAction!queryNotices.action",
            "queryTopApps":serverDomain+"/appAction!queryApps.action",
            "queryUserInfo":serverDomain+"/oauthAction!getUserInfo.action",
            "addVideo":serverDomain+"/videoAction!addVideo.action",
            "queryOnlineGames":serverDomain+"/gameAction!queryGames.action",
            "queryJokers":serverDomain+"/jokerAction!queryJokers.action",
            "queryNotes":serverDomain+"/noteAction!queryNotes.action",
            "getCheckCode":serverDomain+"/userAction!getCheckCodeImage.action",
            "checkCodeAction":serverDomain+"/userAction!verifyVCodeAction.action"
        },

        /**登录验证*/
        checkLogin:function(form,callback){
            var action=serverDomain+"/userAction!checkLogin.action";
            var params=$(form).serialize();
            STORE.ajaxSend(action,params,callback)
        },
        /**添加文章*/
        addArticle:function(form,callback){
            var action=serverDomain+"/articleAction!addArticle.action";
            var params=$(form).serialize();
            STORE.ajaxSend(action,params,callback)
        },
        /**检索article,可以按author，title，content检索*/
        queryArticles:function(form,callback){
            var action=STORE.storeActions.queryArticlesAction;
            var params=$(form).serialize()||{};
            STORE.ajaxSend(action, params, callback);
        },
        /**检索article,可以按author，title，content检索*/
        queryTopArticles:function(callback){
            var action=STORE.storeActions.queryTopArticles;
            STORE.ajaxSend(action,{},callback);
        },
        queryTopPictures:function(paras,callback){
            var action=STORE.storeActions.queryTopPictures;
            STORE.ajaxSend(action,{ps:paras.ps},callback);
        },
        queryTopMusics:function(callback){
            var action=STORE.storeActions.queryTopMusics;
            STORE.ajaxSend(action,{ps:50},callback);
        },
        queryTopVideos:function(paras,callback){
            var action=STORE.storeActions.queryTopVideos;
            STORE.ajaxSend(action,{ps:paras.ps},callback);
        },
        queryVideoPath:function(paras,callback){
            var action=STORE.storeActions.queryVideoPath;
            STORE.ajaxSend(action,{webfrom:paras.webfrom,linkurl:paras.linkurl},callback);
        },
        queryTopNotices:function(paras,callback){
            var action=STORE.storeActions.queryTopNotices;
            STORE.ajaxSend(action,{ps:paras.ps},callback);
        },
        queryTopApps:function(paras,callback){
            var action=STORE.storeActions.queryTopApps;
            STORE.ajaxSend(action,{ps:paras.ps},callback);
        },
        getUserInfo:function(paras,callback){
            var action=STORE.storeActions.queryUserInfo;
            STORE.ajaxSend(action,paras,callback);
        },
        addVideo:function(paras,callback){
            var action=STORE.storeActions.addVideo;
            STORE.ajaxSend(action,paras,callback);
        },
        queryTopGames:function(paras,callback){
            var gameModel={
                id:0,
                gameId:"",
                name:"",
                developer:"",
                type:"1"
            };
            var data=_.extend(gameModel,paras);
            var action=STORE.storeActions.queryOnlineGames;
            STORE.ajaxSend(action,data,callback);
        },
        queryJokers:function(paras,callback){
            var action=STORE.storeActions.queryJokers;
            STORE.ajaxSend(action,{ps:paras.ps,type:"1"},callback);
        },
        queryNotes:function(callback){
            var action=STORE.storeActions.queryNotes;
            STORE.ajaxSend(action,{},callback);
        },
        getCheckCode:function(callback){
            var action=STORE.storeActions.getCheckCode;
            STORE.ajaxSend(action,{},callback);
        },
        checkVCode:function(paras,callback){
            var action=STORE.storeActions.checkCodeAction;
            STORE.ajaxSend(action,{checkCode:paras.checkCode,secret:paras.secret},callback);
        }

    }
    return STORE;
});