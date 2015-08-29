/**
 * Created by liunickluck on 15/5/27.
 */
    define(['react','components/Contact.jsx','stores/contact-store'],function(React,Contact,ContactStore){
        var ContactList = React.createClass({
            getInitialState:function(){
                return {};
            },
            onChange:function(){
                this.setList(ContactStore.getAll());
            },
            setList:function(list){
                this.setState({list:list});
            },
            componentDidMount: function() {
                ContactStore.addChangeListener(this.onChange);
            },
            componentWillUnmount: function() {
                ContactStore.removeChangeListener(this.onChange);
            },
            render:function(){
                return(<ul className="list-group">
            {
            this.state.list&&this.state.list.map(function(item){
                return <Contact id={item.id} icon={item.icon} author={item.author} address={item.address} name={item.name}>{item.name}</Contact>
            })
                }
                </ul>);
            }
        });
        return ContactList;
    });
