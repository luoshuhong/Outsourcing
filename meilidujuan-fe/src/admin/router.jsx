/**
 router
 15/9/19
 */
    define(function(require){
        var React = require("react");
        var ReactRouter = require("react-router");
        var Route = ReactRouter.Route;
        var AdminMain = require("./AdminMain.jsx");
        var Plan = require("./Plan/Plan.jsx");
        var Leader = require("./Leader/Leader.jsx");
        var Faq = require("./FAQ/FAQ.jsx");

        var router = (<Route path="/" handler={AdminMain}>
            <Route name="plan" path="plan" handler={Plan}/>
            <Route name="leader" path="leader" handler={Leader}/>
            <Route name="faq" path="faq" handler={Faq}/>
        </Route>);
        ReactRouter.run(router, ReactRouter.HashLocation, function (Handler) {
            React.render(<Handler/>, document.getElementById("adminApp"));
        });
         return router;
    });

