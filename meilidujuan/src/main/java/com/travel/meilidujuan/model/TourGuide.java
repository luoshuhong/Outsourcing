package com.travel.meilidujuan.model;


/**
 * 导游 描述
 * @author Luoshuhong
 * @Company 
 * 2015年8月22日
 *
 */
public class TourGuide {
//	CREATE TABLE `tb_tour_guide` (
//			  `id` int(11) NOT NULL auto_increment,
//			  `img_url` varchar(512) default NULL COMMENT '头像图片地址',
//			  `introduction` varchar(255) default NULL COMMENT '1024',
//			  `price` int(5) default '0' COMMENT '多少钱一天',
//			  `work_years` varchar(20) COMMENT '工作年限',
//			  PRIMARY KEY  (`id`)
//			) ENGINE=MyISAM DEFAULT CHARSET=latin1;
	
	private int id;
	private String imgUrl;       //头像地址
	private String introduction; //描述
	private int    price;        //金额--> 多少钱一天
	private String workYears;    //工作年限
	
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
	public String getIntroduction() {
		return introduction;
	}
	public void setIntroduction(String introduction) {
		this.introduction = introduction;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getWorkYears() {
		return workYears;
	}
	public void setWorkYears(String workYears) {
		this.workYears = workYears;
	}
	
}	
