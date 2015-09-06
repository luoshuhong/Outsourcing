//@require base.less
define(['react',
        'components/Header/Header.jsx',
        'components/Footer/Footer.jsx',
        'components/faq/FaqBox.jsx',
        'components/MusicList.jsx',
        'components/Profile.jsx',
        'components/MomentList.jsx',
        'components/Welcome.jsx',
        'react-router',
        'components/LoginBox.jsx',
        "components/NoteBox.jsx",
        "components/LeftSidebar.jsx",
        "components/Contact/ContactForm.jsx",
        "components/BestPlan/BestPlan.jsx"
    ],function(React,
               Header,
               Footer,
               FaqBox,
               MusicList,
               Profile,
               MomentList,
               Welcome,
               ReactRouter,
               LoginBox,
               NoteBox,
               LeftSidebar,
               ContactForm,
               BestPlan
    ){
        var Route = ReactRouter.Route;
        var DefaultRoute = ReactRouter.DefaultRoute;
        var RouteHandler = ReactRouter.RouteHandler;

        var Main = React.createClass({
            componentDidMount:function(){
            },
            render:function(){
                return (
                <div className="wraper">
                        <Header/>
                        <div id="react-ctn">
                                    <RouteHandler/>
                        </div>
                        <Footer/>
                </div>
                );
            }
        });
        var routes = (
                <Route path="/" handler={Main}>
                    <DefaultRoute handler={Welcome}/>
                    <Route path="bestplan" name="bestplan" handler={BestPlan}/>
                    <Route path="musics" name="musicList" handler={MusicList}/>
                    //<Route path="profile" name="profile" handler={Profile}/>
                    <Route path="notes" name="notes" handler={NoteBox}/>
                    <Route path="login" name="login" handler={LoginBox}/>
                    <Route path="contactus" name="contactus" handler={ContactForm}/>
                    <Route path="faq" name="faq" handler={FaqBox}/>
                </Route>
        );
        ReactRouter.run(routes, ReactRouter.HashLocation, function (Handler) {
            React.render(<Handler/>, document.body);
        });
        return Main;
    });
