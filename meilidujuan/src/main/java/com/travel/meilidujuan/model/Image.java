package com.travel.meilidujuan.model;

import java.util.Date;

/**
 * 图片/视频描述
 * @author Luoshuhong
 * @Company 
 * 2015年8月22日
 *
 */
public class Image {
//	CREATE TABLE `tb_image` (
//			  `id` int(11) NOT NULL auto_increment,
//			  `url` varchar(512) default NULL COMMENT '图片地址',
//			  `des` varchar(255) default NULL COMMENT '描述',
//			  `add_date` timestamp NOT NULL default '0000-00-00 00:00:00' COMMENT '添加时间',
//			  `type` int(2) default '0' COMMENT '类型 0：图片 1：视频',
//			  PRIMARY KEY  (`id`)
//			) ENGINE=MyISAM DEFAULT CHARSET=latin1;
	private int id;
	private String url;     //链接
	private String des;     //描述
	private Date   addDate; //添加时间
	private int    type;    //类型 0：图片  1：视频
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getDes() {
		return des;
	}
	public void setDes(String des) {
		this.des = des;
	}
	public Date getAddDate() {
		return addDate;
	}
	public void setAddDate(Date addDate) {
		this.addDate = addDate;
	}
}	
