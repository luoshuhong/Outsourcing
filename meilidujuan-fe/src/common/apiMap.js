/**
 * Created by liunickluck on 15/7/16.
 */
define([],function(){
    var serverDomain = "http://ssh.com:8080";
    var map={
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
            "checkCodeAction":serverDomain+"/userAction!verifyVCodeAction.action",
            "getWebStream":serverDomain+"/streamAction!getWebStream.action",
            "createNote":serverDomain+"/noteAction!addNote.action",
            "plan":serverDomain+"/plan",
            "rentCar":serverDomain+"/rentCar"
        };
    return map;
});