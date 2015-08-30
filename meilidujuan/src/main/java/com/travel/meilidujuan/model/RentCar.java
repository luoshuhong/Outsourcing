package com.travel.meilidujuan.model;

import java.util.Date;

/**
 * 租车服务描述
 * @author Luoshuhong
 * @Company 
 * 2015年8月22日
 *
 */
public class RentCar {
//	CREATE TABLE `tb_rent_car` (
//			  `id` int(11) NOT NULL auto_increment,
//			  `img_url` varchar(512) default NULL COMMENT '图片地址',
//			  `des` varchar(255) default NULL COMMENT '描述',
//			  `price` int(5) default '0' COMMENT '多少钱一天',
//			  `capacity` int(3) default '0' COMMENT '容量/几座',
//			  `add_date` datetime default '0000-00-00 00:00:00' COMMENT '添加时间',
//			  PRIMARY KEY  (`id`)
//			) ENGINE=MyISAM DEFAULT CHARSET=latin1;
	private int id;
	private String imgUrl;    //头像地址
	private String des;       //描述
	private int    price;     //金额--> 多少钱一天
	private int    capacity;  //容量 --> 几座
	private Date   addDate;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	public String getDes() {
		return des;
	}
	public void setDes(String des) {
		this.des = des;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getCapacity() {
		return capacity;
	}
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
	public Date getAddDate() {
		return addDate;
	}
	public void setAddDate(Date addDate) {
		this.addDate = addDate;
	}
	
}	
