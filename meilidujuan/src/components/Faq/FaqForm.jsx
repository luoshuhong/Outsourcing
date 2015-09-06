/**
 * Created by liunickluck on 15/5/27.
 */
    define(['react'],function(React){
        var CommentForm = React.createClass({
            getInitialState:function(){
                return {
                    icon:"http://p13.tuanimg.com/imagev2/zhaoshang/720x480.9cc5727c78c0d0c6850dbda37bee9ba1.312x208.jpg.webp",
                    name:"红小豆[买1斤赠1斤]",
                    description:"该商品参与了公益宝贝计划，卖家承诺每笔成交将为爱心包裹贫困儿童关爱行动捐赠0.02元。该商品已累积捐赠1666笔。善款用途简介：爱心包裹项目关爱贫困地区或灾区儿童，美术包让他们的童年不再是单调的黑白色，温暖包让他们的冬天不再瑟瑟发抖。100元1个美术包，200元1个温"
                }
            },
            render:function(){
                return(<div className="commentForm">
                    <div className="icon">
                        <img src={this.state.icon}/>
                    </div>
                    <span className="name">{this.state.name}</span>
                    <div className="description">{this.state.description}</div>
                    <div className="action-ctn">
                        <button className="btn-add-car">加入购物车</button>
                        <button className="btn-buy">立即购买</button>
                    </div>
                </div>);
            }
        });
        return CommentForm;
    });
