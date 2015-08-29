define(['react','jquery'],function(React,$){
        var Header = React.createClass({
            getInitialState:function(){
                return {
                    title:'我的空间'
                }
            },
            componentDidMount:function(){
            },
            onClickAddContact:function(){
            },
            render:function(){
                return(<header className="mui-bar mui-bar-nav">
                    <a id="offCanvasShow" href="javascript:void(0)" className="mui-icon mui-icon-bars mui-pull-left"></a>
                    <a className="mui-icon mui-icon-close mui-pull-right"></a>
                    <h1 className="mui-title">{this.state.title}</h1>
                </header>);
            }
        });
        return Header;
    });
