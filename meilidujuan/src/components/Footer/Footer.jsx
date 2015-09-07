/**
 * Created by liunickluck on 15/5/28.
 */
//@ require ./Footer.less
define(['react', 'jquery', 'collections/FooterCollection', 'eventMgr','react-router'], function (React, $, FooterCollection, EventModelCP,ReactRouter) {
    var Link = ReactRouter.Link;
    var eventMgr = EventModelCP.getInstance();

    var Footer = React.createClass({
        getInitialState: function () {
            this.collection = FooterCollection.getInstance();
            return {
                companyName:'云南梅里杜鹃国际旅行社有限公司',
                address:'云南省丽江市玉龙纳西族自治县',
                adminName:'樊逸',
                phone:'13811223344   18111223344',
                logoUrl:'http://aawooo.com/images/logo.jpg',
                qrcodeUrl:'http://aawooo.com/images/qrcode.jpg'
            }
        },
        componentWillMount: function () {

        },
        componentDidMount: function () {
            var _this = this;
            this.collection.fetch({
                success: function (data) {
                    _this.setState({list: data.toJSON()});
                }
            });
        },
        clickItemHandler: function (event) {
            var target = $(event.target).is("li") ? $(event.target) : $(event.target).parents("li");
            this.setState({cur: target.attr("data-id")});
            var cur;
            for (var i = 0; i < this.state.list.length; i++) {
                if (this.state.list[i]['id'] == target.attr("data-id")) {
                    cur = this.state.list[i];
                    break;
                }
            }
            eventMgr.trigger("change:footer", cur);
        },
        render: function () {
            var that = this;
            return (
                <div id="footer-ctn" className="footer">
                    <div className="logo">
                        <img src={this.state.logoUrl}/>
                    </div>
                    <div className="contactInfo">
                        <h5>{this.state.companyName}</h5>
                        <div className="item">
                            <label>地址：</label>{this.state.address}
                        </div>
                        <div className="item">
                            <label>联系人：</label>{this.state.adminName}
                        </div>
                        <div className="item">
                            <label>电话：</label>{this.state.phone}
                        </div>
                    </div>
                    <div className="qrcode">
                        <img src={this.state.qrcodeUrl}/>
                    </div>
                </div>);
        }
    });
    return Footer;
});

