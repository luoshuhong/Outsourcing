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


 