#��̨�ӿ��ĵ�

---
##�û�����
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
	int type;//0:��ͨ�û�  1:�����û�
   ```
##ͼƬ����
####url: 
   ```
     ip:port/image
   ``` 
####model:
   ```
    int id;
   ```
--- 
##�ӿڷ���ֵ����
####����/ɾ��/���·���ֵ����
   ```
   {
      status:xxx,  //success���ɹ�  fail:ʧ�� 
      msg:xxx      //˵�� status=successʱ����ԭ��   
   }
   ```   
##��ѯ����ֵ����
   ```
   {
      status:xxx,  //success���ɹ�  fail:ʧ�� 
      msg:xxx      //˵�� status=successʱ����ԭ�� 
      data:[{key1:value1,..},...]      //json����
   }
   ```   


 