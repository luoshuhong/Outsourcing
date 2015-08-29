/**
 * Created by liunickluck on 15/7/9.
 */
    define(['react',"components/ContactBox.jsx",'react-router'],function(React,ContactBox,ReactRouter){

        var Profile = React.createClass({
            getInitialState:function(){
                return {};
            },
            render:function(){
                return(<div className="profile-ctn">
                    <ContactBox/>
                </div>);
            }
        });
        return Profile;
    });
