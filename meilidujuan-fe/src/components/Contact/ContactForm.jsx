/**
 * Created by liunickluck on 15/7/9.
 */
    define(['react',"actions/contact-action","stores/contact-store",'jquery'],function(React,ContactAction,ContactStore,$){
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
            onClickSaveHandler:function(){
                var form = $(this.getDOMNode());
                var name = form.find("input[name=name]").val();
                var address = form.find("input[name=address]").val();
                var description = form.find("textarea[name=description]").val();
                ContactAction.createContact({name:name,address:address,description:description});
            },
            render:function(){
                return(<form className="form contactForm">
                        <div className="form-group">
                            <label for="name">姓名：</label>
                            <input name="name" type="text" id="name" className="form-control" placeholder="姓名"/>
                        </div>
                        <div className="form-group">
                            <label for="address">地址：</label>
                            <input name="address" type="text" id="address" className="form-control" placeholder="地址"/>
                        </div>
                        <div className="form-group">
                            <label for="description">介绍：</label>
                            <textarea name="description" id="description" className="form-control" placeholder="介绍"></textarea>
                        </div>
                        <div className="form-group">
                            <a href="javascript:void(0)" onClick={this.onClickSaveHandler}>保存</a>
                        </div>
                    </form>);
            }
        });
        return ContactForm;
    });
