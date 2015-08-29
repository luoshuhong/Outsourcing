/**
 * Created by liunickluck on 15/5/27.
 */
    define(['react','components/ContactList.jsx','components/ContactForm.jsx'],function(React,ContactList,ContactForm){
        var ContactBox = React.createClass({
            componentDidMount:function(){
            },
            render:function(){
                return(
                    <div className={"contactBox"}>
                        <ContactForm/>
                        <ContactList/>
                    </div>);
            }
        });
        return ContactBox;
    });
