/**
 * Created by liunickluck on 15/6/3.
 */
(function(){
    /*序列串转为json*/
    var serializerToJson = function(serializerString){
        var keyMapsArray=serializerString.split("&");
        var json={};
        keyMapsArray&&keyMapsArray.forEach(function(keyMap){
            var key_value=keyMap.split("=");
            if(json[key_value[0]]&&(Object.prototype.toString.call(json[key_value[0]]).toLowerCase()!='[object array]')){
                json[key_value[0]]=[json[key_value[0]]];
                json[key_value[0]].push(decodeURIComponent(key_value[1]));
            }else if(json[key_value[0]]&&(Object.prototype.toString.call(json[key_value[0]]).toLowerCase()==='[object array]')){
                json[key_value[0]].push(decodeURIComponent(key_value[1]));
            }else{
                json[key_value[0]]=decodeURIComponent(key_value[1]);
            }
        });
        return json;
    };
     var jsonToSerializer=function(json){
        var keys = Object.keys(json);
        var result = "";
        for(var i=0;i<keys.length;i++){
            if(i==0||i==keys.length-1){
                result+=keys[i]+'='+encodeURIComponent(json[keys[i]]);
            }else{
                result+='&'+keys[i]+'='+encodeURIComponent(json[keys[i]])+'&';
            }
        }
        return result;
    };
    /*获取URL中的参数*/
    var getUrlParameter = function (name, targetUrl){
        var url = targetUrl || location.href;

        //去掉hash
        if(url.indexOf('#') > -1){
            url = url.slice(0, url.indexOf('#'));
        }

        var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
        var paraObj = {}
        for (i = 0; j = paraString[i]; i++) {
            paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
        }
        var returnValue = paraObj[name.toLowerCase()];
        if (typeof (returnValue) == "undefined") {
            return "";
        } else {
            return window.decodeURIComponent(returnValue);
        }
    };
//检测移动设备
    var checkMobile = function(){
        var ua = navigator.userAgent;ua = ua ? ua.toLowerCase().replace(/-/g, "") : "";
        if (ua.match(/(Android)/i)){return "android";}
        if (ua.match(/(iPhone|iPod)/i)){return "iphone";}
        if (ua.match(/(iPad)/i)){return "ipad";}
        if (ua.match(/(Windows Phone)/i)){return "windows phone"}//windows phone
        if (ua.match(/(Symbian)/i)){return "symbian"}//塞班
        if (ua.match(/(Nokia)/i)){return "nokia"}//塞班
        if (ua.match(/(PlayBook)/i)){return "playbook"}//黑莓playbook
        if (ua.match(/(BB)/i)){return "blackberry"}//黑莓
        if (ua.match(/(KFAPWI)/i)){return "kindlefire"}//kindle
        //UC Browser
        if (ua.match(/(U;)/i)){if (ua.match(/(Adr)/i)){return "android";}}
        if (ua.match(/(U;)/i)){if (ua.match(/(iPh)/i)){return "iphone";}}
        if (ua.match(/(U;)/i)){if (ua.match(/(iPd)/i)){return "ipad";}}
        return "";
    };

    if(typeof define=="function"&&define.amd){
        define([],function(){
            return {
                serializerToJson:serializerToJson,
                jsonToSerializer:jsonToSerializer,
                getParameter:getUrlParameter,
                checkMobile:checkMobile
            }
        });
    }else if(typeof module=='object'&&exports){
        exports = {
            serializerToJson:serializerToJson,
            jsonToSerializer:jsonToSerializer,
            getParameter:getUrlParameter,
            checkMobile:checkMobile
        }
    }else{
        utils = {
            serializerToJson:serializerToJson,
            jsonToSerializer:jsonToSerializer,
            getParameter:getUrlParameter,
            checkMobile:checkMobile
        }
    }
}).call(this)