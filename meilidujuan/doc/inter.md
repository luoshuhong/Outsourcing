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
	String url;     //����
	String des;     //����
	Date   addDate; //���ʱ��
	int    type;    //���� 0��ͼƬ  1����Ƶ
	int    groupId; //'������id    0:����� ������ʾ����ͼƬid'
   ```
##���²���
####url: 
   ```
     ip:port/article
   ``` 
####model:
   ```
    int id;
	String title;   //����
	String digest;  //ժҪ
	String content; //��������
	String auhor;   //����
	Date   addDate; //���ʱ��
   ```
##��������
####url: 
   ```
     ip:port/order
   ``` 
####model:
   ```
    int id;
	String orderName; //��������
	String userName;  //�û�����
	int    userSex;   //�û��Ա�
	int    usePhone;  //�û��绰
	int    userQQ;	  //�û�QQ
	String userCity;  //����
   ```
##�⳵����
####url: 
   ```
     ip:port/rentCar
   ``` 
####model:
   ```
    int id;
	String imgUrl;    //ͷ���ַ
	String des;       //����
	int    price;     //���--> ����Ǯһ��
	int    capacity;  //���� --> ����
	Date   addDate;
   ```
   
##��Ʒ·�߲���
####url: 
   ```
     ip:port/route
   ``` 
####model:
   ```
    int id;
	String imgUrl; //ͼƬ��ַ
	String des;    //����
	int    days;   //����
	int    price;  //���Ž��
   ```
   
##���η�ɲ���
####url: 
   ```
     ip:port/tourGuide
   ``` 
####model:
   ```
    int id;
	String imgUrl;       //ͷ���ַ
	String introduction; //����
	int    price;        //���--> ����Ǯһ��
	String workYears;    //��������
   ```
   
##�ʴ����
####url: 
   ```
     ip:port/aq
   ``` 
####model:
   ```
    int id;
	String question;  //����
	String answer;    //��
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


 