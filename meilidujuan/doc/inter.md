#后台接口文档

---
##用户操作
####url: 
   ```
     ip:port/user
   ``` 
####model:
   ```
    int id;
	String userName;
	String userPwd;
	String userNickname;
	int type;//0:普通用户  1:超级用户
   ```
##图片操作
####url: 
   ```
     ip:port/image
   ``` 
####model:
   ```
    int id;
	String url;     //链接
	String des;     //描述
	Date   addDate; //添加时间
	int    type;    //类型 0：图片  1：视频
	int    groupId; //'所属组id    0:组封面 其他表示封面图片id'
   ```
##文章操作
####url: 
   ```
     ip:port/article
   ``` 
####model:
   ```
    int id;
	String title;   //标题
	String digest;  //摘要
	String content; //正文内容
	String auhor;   //作者
	Date   addDate; //添加时间
   ```
##订单操作
####url: 
   ```
     ip:port/order
   ``` 
####model:
   ```
    int id;
	String orderName; //订单名称
	String userName;  //用户名称
	int    userSex;   //用户性别
	int    usePhone;  //用户电话
	int    userQQ;	  //用户QQ
	String userCity;  //城市
   ```
##租车操作
####url: 
   ```
     ip:port/rentCar
   ``` 
####model:
   ```
    int id;
	String imgUrl;    //头像地址
	String des;       //描述
	int    price;     //金额--> 多少钱一天
	int    capacity;  //容量 --> 几座
	Date   addDate;
   ```
   
##精品路线操作
####url: 
   ```
     ip:port/route
   ``` 
####model:
   ```
    int id;
	String imgUrl; //图片地址
	String des;    //描述
	int    days;   //几天
	int    price;  //跟团金额
   ```
   
##导游风采操作
####url: 
   ```
     ip:port/tourGuide
   ``` 
####model:
   ```
    int id;
	String imgUrl;       //头像地址
	String introduction; //描述
	int    price;        //金额--> 多少钱一天
	String workYears;    //工作年限
   ```
   
##问答操作
####url: 
   ```
     ip:port/aq
   ``` 
####model:
   ```
    int id;
	String question;  //问题
	String answer;    //答案
   ```
--- 
##接口返回值定义
####增加/删除/更新返回值定义
   ```
   {
      status:xxx,  //success：成功  fail:失败 
      msg:xxx      //说明 status=success时错误原因   
   }
   ```   
##查询返回值定义
   ```
   {
      status:xxx,  //success：成功  fail:失败 
      msg:xxx      //说明 status=success时错误原因 
      data:[{key1:value1,..},...]      //json数组
   }
   ```   


 