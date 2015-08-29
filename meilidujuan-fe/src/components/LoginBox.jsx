/**
 LoginBox
 15/7/29
 */
(function(root,factory){
    if(typeof define=='function'&&define.amd){
        define(['jquery','react','templates/login.form.hbs','stores/login-store'],function($,React,LoginFormTpl,LoginStore){
            return factory($,React,LoginFormTpl,LoginStore);
        });
    }else if(module&&module.exports){
        var React = require("react");
        var LoginFormTpl = require("templates/login.form.hbs");
        var LoginStore = require("stores/login-store");
        var $ = require("jquery");
        module.exports = factory($,React,LoginFormTpl,LoginStore);
    }else{
        var React = root.React;
        var LoginFormTpl = root.LoginFormTpl;
        var $ = root.$;
        LoginStore = root.LoginStore;
        root.LoginBox = factory($,React,LoginFormTpl,LoginStore);
    }
})(this,function($,React,LoginFormTpl,LoginStore){
    var Login = React.createClass({

        getInitialState: function () {
            return {};
        },
        componentWillMount: function () {
            console && console.log('component will mount');
        },
        componentDidMount: function () {
            //console&&console.log('component did mount');
            var content = this.getDOMNode();
            $(content).html(LoginFormTpl());
            $(content).delegate(".change-check-code",'click',$.proxy(this.refreshVCode,this));
            $(content).delegate(".j-verify-vcode",'blur',$.proxy(this.veryfyVCode,this));
            $(content).delegate(".loginBtn",'click',$.proxy(this.onClickSubmitHandler,this));
        },
        componentWillUpdate: function () {
            //console&&console.log("componentWillUpdate");
        },
        componentDidUpdate: function () {
            //console&&console.log('component did update');
        },
        componentWillUnmount: function () {
            //console&&console.log('component will unmount');
        },
        veryfyVCode:function(){
          console.log("开始验证");
        },
        refreshVCode:function(){
            var loginForm = this.getDOMNode();
            LoginStore.getCheckCode(function(res){
                loginForm.find(".checkCodeImg").attr("src",res.imageSrc);
                loginForm.find("input[name=secret]").val(res.secret);
            });
        },
        onClickSubmitHandler:function(){
            var loginForm = $(this.getDOMNode());
            loginForm.find(".login-form").submit();
        },
        render: function () {
            return (
            <div className="login-ctn" id="login-ctn">
            </div>
            );
        }
    });
    return Login;
});
