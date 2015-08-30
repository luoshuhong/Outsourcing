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
                    <div className="header-nav-ctn"><Nav/></div>
                </header>);
            }
        });
        return Header;
    });
