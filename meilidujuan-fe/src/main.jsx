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
        "components/Contact/ContactForm.jsx",
        "components/BestPlan/BestPlan.jsx",
        "components/Order/OrderForm.jsx",
        "components/Leader/Leader.jsx",
        "components/RentCar/RentCar.jsx",
        "components/PictureFlow/PictureFlow"
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
               ContactForm,
               BestPlan,
               OrderForm,
               Leader,
               RentCar,
               PictureFlow
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
                    <Route path="order/:id/:name" name="order" handler={OrderForm}/>
                    //<Route path="profile" name="profile" handler={Profile}/>
                    <Route path="notes" name="notes" handler={NoteBox}/>
                    <Route path="login" name="login" handler={LoginBox}/>
                    <Route path="contactus" name="contactus" handler={ContactForm}/>
                    <Route path="leaders" name="leaders" handler={Leader}/>
                    <Route path="faq" name="faq" handler={FaqBox}/>
                    <Route path="rentcar" name="rentcar" handler={RentCar}/>
                    <Route path="activity" name="activity" handler={PictureFlow}/>
                </Route>
        );
        ReactRouter.run(routes, ReactRouter.HashLocation, function (Handler) {
            React.render(<Handler/>, document.body);
        });
        return Main;
    });

