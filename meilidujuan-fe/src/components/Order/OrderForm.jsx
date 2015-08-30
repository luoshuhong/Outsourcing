/**
 OrderForm
 15/8/30
 */
define(function (require) {

    var React = require("react");
    var $ = require("jquery");
    var utils = require("utils");
    var OrderForm = React.createClass({
        getInitialState: function () {
            return {};
        },
        componentDidMount: function () {
            //console&&console.log('component did mount');
        },
        componentWillUnmount: function () {
            //console&&console.log('component will unmount');
        },
        onClickSubmitHandler:function(){
            var form = $(this.getDOMNode()).find(".ticket-form");
            var formData = utils.serializerToJson(form.serialize());
            console.log("提交订单信息",formData);
        },
        render: function () {
            return (<div className="OrderForm">
                <h5 className="title">请详细填写您的信息，我们会及时与您取得联系</h5>
                <form className="form-horizontal ticket-form">
                    <div className="form-group">
                        <label className="col-sm-2">名称</label>
                        <div className="col-sm-10">
                            <input name="ticketName" type="text" className="form-control" readonly="readonly" value={this.props.params.name}/>
                        </div>
                    </div>
                    <input name="ticketId" type="hidden" value={this.props.params.id}/>
                    <input name="ticketFrom" type="hidden" value={this.props.params.from}/>
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
                </form>
            </div>)
        }
    });
    return OrderForm;
});
