    define(['react','react-router'], function(React,ReactRouter){
        var Routes = ReactRouter.Routes;
        var Route = ReactRouter.Route;
        var Main = require("main.jsx");
        var Music = require("components/MusicList.jsx");
        var Comments = require("components/CommentList.jsx");
        var Login = require("components/LoginBox.jsx");
        var NoteBox = require("components/NoteBox.jsx");
        var routes = (
            <Routes locaion="hash">
                <Route path="/" handler={Main}>
                    <Route path="musics" name="musicList" handler={Music}/>
                    <Route path="pictures" name="pictureList" handler={Comments}/>
                    <Route path="login" name="login" handler={Login}/>
                    <Route path="note" name="note" handler={NoteBox}/>
                </Route>
             </Routes>
        );
        return routes;
    });

