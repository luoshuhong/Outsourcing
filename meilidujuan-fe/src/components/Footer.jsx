/**
 * Created by liunickluck on 15/5/28.
 */
define(['react', 'jquery', 'collections/FooterCollection', 'eventMgr','react-router'], function (React, $, FooterCollection, EventModelCP,ReactRouter) {
    var Link = ReactRouter.Link;
    var eventMgr = EventModelCP.getInstance();

    var Footer = React.createClass({
        getInitialState: function () {
            this.collection = FooterCollection.getInstance();
            return {
                list: [
                    {id: 1, label: 'WeChat', link: '#react'},
                    {id: 2, label: 'Contacts', link: '#contact'},
                    {id: 3, label: 'Discovery', link: '#moment'},
                    {id: 4, label: 'Me', link: '#me'}]
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
                    <ul>
                        {
                        this.state.list && this.state.list.map(function (item) {
                            return(<li data-id={item.id} className={that.state.cur==item.id?"selected":""} onClick={that.clickItemHandler}><a href={item.link}>{item.label}</a></li>)
                        })
                            }
                    </ul>
                </div>);
        }
    });
    return Footer;
});

