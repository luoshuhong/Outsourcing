//@require base.less
define(['react',
        'components/Header.jsx',
        'components/Footer.jsx',
        'components/CommentBox.jsx',
        'components/MusicList.jsx',
        'components/Profile.jsx',
        'components/MomentList.jsx',
        'components/Welcome.jsx',
        'react-router',
        'components/LoginBox.jsx',
        "components/NoteBox.jsx",
        "components/LeftSidebar.jsx",
        'eventMgr',
        'mui'
    ],function(React,
               Header,
               Footer,
               CommentBox,
               MusicList,
               Profile,
               MomentList,
               Welcome,
               ReactRouter,
               LoginBox,
               NoteBox,
               LeftSidebar,
               EventCP,
               mui
    ){
        var Route = ReactRouter.Route;
        var DefaultRoute = ReactRouter.DefaultRoute;
        var RouteHandler = ReactRouter.RouteHandler;
        var eventMgr = EventCP.getInstance();

        var Main = React.createClass({
            componentDidMount:function(){
                eventMgr.on("logout",function(){
                    location.href="/#/login"
                })
                mui.init({
                    swipeBack: false
                });
                //侧滑容器父节点
                var offCanvasWrapper = mui('#offCanvasWrapper');
                //主界面容器
                var offCanvasInner = offCanvasWrapper[0].querySelector('.mui-inner-wrap');
                //菜单容器
                var offCanvasSide = this.refs.leftSidebar.getDOMNode();

                document.getElementById('offCanvasShow').addEventListener('tap', function() {
                    offCanvasWrapper.offCanvas('show');
                });
                mui(offCanvasSide).scroll();
                mui(offCanvasInner).scroll();
                mui('.mui-off-canvas-wrap').offCanvas('hide');
            },
            render:function(){
                return (
                <div className="wraper">
                        <Header/>
                        <div id="react-ctn">
                            <div className="mui-off-canvas-wrap mui-draggable" id="offCanvasWrapper">
                            <LeftSidebar ref="leftSidebar"/>
                            <div className="mui-content mui-inner-wrap mui-scroll-wrapper">
                                <div className="mui-scroll">
                                    <RouteHandler/>
                                </div>
                                <div className="mui-off-canvas-backdrop"></div>
                            </div>
                        </div>
                        </div>
                        <Footer/>
                </div>
                );
            }
        });
        var routes = (
                <Route path="/" handler={Main}>
                    <DefaultRoute handler={Welcome}/>
                    <Route path="moments" name="momentList" handler={MomentList}/>
                    <Route path="musics" name="musicList" handler={MusicList}/>
                    //<Route path="profile" name="profile" handler={Profile}/>
                    <Route path="notes" name="notes" handler={NoteBox}/>
                    <Route path="login" name="login" handler={LoginBox}/>
                </Route>
        );
        ReactRouter.run(routes, ReactRouter.HashLocation, function (Handler) {
            React.render(<Handler/>, document.body);
        });
        return Main;
    });

