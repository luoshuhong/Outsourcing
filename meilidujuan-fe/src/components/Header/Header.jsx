define(function(require){
        var React = require('react');
        var $ = require('jquery');
        var Nav = require("components/Nav/Nav.jsx");

        var Header = React.createClass({
            getInitialState:function(){
                return {
                    title:'我的空间'
                }
            },
            componentDidMount:function(){
            },
            render:function(){
                return(<header className="header">
                    <div className="pic">
                        <img src={__uri("../../css/top_banner.jpg?__sprite")}  alt=""/>
                    </div>
                    <img className="top_banner_bg" src={__uri("../../css/top_banner.jpg?__sprite")}/>
                    <div className="header-nav-ctn"><Nav/></div>
                    <div className="header-nav-bg"></div>
                </header>);
            }
        });
        return Header;
    });
