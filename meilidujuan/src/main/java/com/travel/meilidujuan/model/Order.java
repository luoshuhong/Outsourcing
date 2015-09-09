package com.travel.meilidujuan.model;

/**
 * 订单描述
 * @author Luoshuhong
 * @Company 
 * 2015年8月22日
 *
 */
public class Order {
//	CREATE TABLE `tb_order` (
//			  `id` int(11) NOT NULL,
//			  `order_name` varchar(100) NOT NULL COMMENT '名称',
//			  `user_name` varchar(50) NOT NULL COMMENT '用户名',
//			  `user_sex` int(1) default '0' COMMENT '性别 0：男 1：女',
//			  `user_phone` int(11) default NULL COMMENT '联系方式',
//			  `user_qq` int(15) default NULL COMMENT 'qq',
//			  `user_city` varchar(50) default NULL COMMENT '城市',
//			  PRIMARY KEY  (`id`)
//			) ENGINE=MyISAM DEFAULT CHARSET=latin1;
	private int id;
	private String orderName; //订单名称
	private String userName;  //用户名称
	private int    userSex;   //用户性别
	private int    userPhone;  //用户电话
	private int    userQQ;	  //用户QQ
	private String userCity;  //城市
	
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
	public String getOrderName() {
		return orderName;
	}
	public void setOrderName(String orderName) {
		this.orderName = orderName;
	}
	public int getUserSex() {
		return userSex;
	}
	public void setUserSex(int userSex) {
		this.userSex = userSex;
	}
	public int getUserPhone() {
		return userPhone;
	}
	public void setUserPhone(int userPhone) {
		this.userPhone = userPhone;
	}
	public int getUserQQ() {
		return userQQ;
	}
	public void setUserQQ(int userQQ) {
		this.userQQ = userQQ;
	}
	public String getUserCity() {
		return userCity;
	}
	public void setUserCity(String userCity) {
		this.userCity = userCity;
	}
}	
