package com.travel.meilidujuan.model;

/**
 * 
 * @author Luoshuhong
 * @Company 
 * 2015年8月22日
 *
 */
public class User {
	private int id;
	private String userName;
	private String userPwd;
	private String userNickname;
	private int type;//0:普通用户  1:超级用户
//	CREATE TABLE `tb_user` (
//		  `id` int(10) NOT NULL auto_increment COMMENT '主键',
//		  `user_name` varchar(50) default NULL COMMENT '用户名',
//		  `user_pwd` varchar(50) character set utf8 default NULL COMMENT '密码',
//		  `user_nickname` varchar(50) character set utf8 NOT NULL COMMENT '昵称',
//		  `type` int(2) default '0' COMMENT '用户类型 0：普通用户 1：超级用户',
//		  PRIMARY KEY  (`id`)
//		) ENGINE=MyISAM DEFAULT CHARSET=latin1;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserPwd() {
		return userPwd;
	}
	public void setUserPwd(String userPwd) {
		this.userPwd = userPwd;
	}
	public String getUserNickname() {
		return userNickname;
	}
	public void setUserNickname(String userNickname) {
		this.userNickname = userNickname;
	}
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
}	
