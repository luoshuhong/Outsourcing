/**
 * Created by liunickluck on 15/7/9.
 */
    define(function(require){
        var React = require('react');
        var ContactAction = require("actions/contact-action");
        var ContactStore = require("stores/contact-store");
        var $ =require('jquery');
        var mailTpl=require("templates/MailTpl");
        var ContactForm = React.createClass({
            getInitialState:function(){
                return ContactStore.getDefault();
            },
            onChange: function() {
                this.setState(ContactStore.get());
            },
            componentDidMount: function() {
                ContactStore.addChangeListener(this.onChange);
            },
            componentWillUnmount: function() {
                ContactStore.removeChangeListener(this.onChange);
            },
            onClickSubmitHandler:function(){
                var form = $(this.getDOMNode());
                var name = form.find("input[name=name]").val();
                var address = form.find("input[name=address]").val();
                var description = form.find("textarea[name=description]").val();
                var email = form.find("input[name=email]").val();
                var qq = form.find("input[name=qq]").val();
                var phone = form.find("input[name=phone]").val();
                var content =mailTpl({name:name,address:address,qq:qq,phone:phone,email:email});
               ContactAction.sendEmail({from:"626501614@qq.com",subject:'来自梅里杜鹃',contentType:"text/html",content:content,to:'梅里杜鹃'});
                alert("感谢您与我们联系，我们将会有专门人员与您取得联系，祝您愉快");
            },
            render:function(){
                return(<form className="form-horizontal ContactForm">
                    <h5 className="title">请详细填写您的信息，我们会及时与您取得联系</h5>
                    <div className="form-group">
                        <label htmlFor="ticketFormName" className="col-sm-2">姓名：</label>
                        <div className="col-sm-10">
                            <input name="name" id="ticketFormName"  className="form-control" type="text" placeholder="您的姓名"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ticketFormPhone" className="col-sm-2">电话：</label>
                        <div className="col-sm-10">
                            <input name="phone" id="ticketFormPhone" className="form-control col-sm-10" type="text" placeholder="您的电话"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ticketFormQQ"  className="col-sm-2">QQ：</label>
                        <div className="col-sm-10">
                            <input name="qq" id="ticketFormQQ" className="form-control" type="text" placeholder="您的qq"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ticketFormEmail"  className="col-sm-2">Email：</label>
                        <div className="col-sm-10">
                            <input name="email" id="ticketFormEmail" className="form-control" type="text" placeholder="您的邮箱"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ticketFormCity"  className="col-sm-2">城市：</label>
                        <div className="col-sm-10">
                            <input name="city" id="ticketFormCity"  className="form-control" type="text" placeholder="您所在城市"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ticketFormGender" className="col-sm-2">性别：</label>
                        <div className="col-sm-10" name="gender">
                            <select className="form-control"  name="gender">
                                <option value="男">男</option>
                                <option value="女">女</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <a href="javascript:void(0)" className="btn btn-primary" onClick={this.onClickSubmitHandler}>
                            确定
                        </a>
                    </div>
                </form>);
            }
        });
        return ContactForm;
    });
