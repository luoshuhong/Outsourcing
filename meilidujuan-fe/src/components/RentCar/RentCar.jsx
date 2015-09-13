/**
 RentCar
 15/8/30
 */
define(function (require) {

    var React = require("react");
    var RentCarActions = require("actions/rentcar-action");
    var RentCarStores = require("stores/rentcar-store");
    var Reflux = require("reflux");
    var Seperator = require("components/Seperator/Seperator");
    var Router = require("react-router");
    var Link = Router.Link;
    var RentCar = React.createClass({
        mixins:[Reflux.listenTo(RentCarStores,"onRentCarStoreChangeHandler")],
        onRentCarStoreChangeHandler:function(res){
            console.log("rent car result:",res);
        },
        getInitialState: function () {
            return {};
        },
        componentWillMount: function () {
            //console&&console.log('component will mount');
        },
        componentDidMount: function () {
            //console&&console.log('component did mount');
            RentCarActions.getCars()
        },
        componentWillUnmount: function () {
            //console&&console.log('component will unmount');
        },
        render: function () {
            return (<div className="RentCar">
                <Seperator datatitle="租车服务"/>
            <div className="title">自驾9天租车特价(赠送超级全险+中文导航+4G电话卡)</div>
            <div className="basic-info">
                <div className="pics"><img src="http://pic5.58cdn.com.cn/p1/big/n_t0a1b0c9584157800c950a.jpg"/></div>
                <div className="tags">
                    <ul>
                        <li className="car-model">JEEP大切诺基</li>
                        <li><label>座位：</label>6</li>
                        <li><label>车龄：</label>3年</li>
                        <li><label>动力：</label>汽油</li>
                        <li><label>车险：</label>各类保险齐全</li>
                        <li><label>可租时长：</label>不限</li>
                    </ul>
                    <div className="booking-unit">
                        <div className="book-cell enable clearfix">
                            <div className="price-unit">
                                <span className="price">¥<em className="fontYaHei">时价</em></span>
                            </div>
                            <div id="booking" className="book-btn book-now fontYaHei">
                                <Link to="order" params={{id:1234,name:'JEEP大切诺基'}}> 报名参加</Link>
                            </div>
                            </div>
                        </div>
                </div>

            </div>
            <div className="detail clearfix">
                预订及退改规则：
                1、产品所供车型为雪佛兰斯帕可/ Jeep大切诺基 (或同车型组车辆)，实际车型以当地门店资源为准
                2、如实际需要租车时间大于9天，请在取车后与租车公司协商延长，产生费用需另行支付
                3、本套餐不可与惠租车其他渠道优惠同时使用
                4、本产品付款后，未预约租车订单的，可以与供应商协商退款
                5、由于本产品资源特殊，一经预约租车订单，无法退改，请确定行程后下单

            </div>

            </div>)
        }
    });
    return RentCar;
});
