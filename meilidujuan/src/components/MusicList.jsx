define(['react','jquery','components/Music.jsx','stores/music-store','react-router','reflux','actions/music-action'],function(React,$,Music,MusicStore,ReactRouter,Reflux,MusicActions){
    var CommentList = React.createClass({
        mixins:[Reflux.listenTo(MusicStore,"onMusicDataStatusChange")],
        getInitialState:function(){
            var that = this;
            return {};
        },
        onMusicDataStatusChange:function(res){
            console.log("MusicList 接受到music数据变化",res);
            this.setState({
                list:res.toJSON()
            });
        },
        componentDidMount:function(){
            var that = this;
            MusicActions.getMusics();
        },
        render:function(){
            if(!this.state.list){
                return(<img src="react/css/loading.gif" className="img-responsive text-center"/>);
            }else if(this.state.list.length==0){
                return(<div className="empty-ctn text-center">空数据</div>);
            }
            return(<div><ul className="musicList mui-table-view">
            {
            this.state.list&&this.state.list.map(function(item){
                return <li className="mui-table-view-cell mui-media"><Music icon={item.icon} id={item.musicId} name={item.name} src={item.src} artist={item.artist}/></li>
            })
                }
            </ul><audio src={this.state.audio} autoplay="true"></audio>
            </div>);
        }
    });
    return CommentList;
});
