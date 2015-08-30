package com.travel.meilidujuan.model;

import java.util.Date;

/**
 * 文章描述
 * @author Luoshuhong
 * @Company 
 * 2015年8月22日
 *
 */
public class Article {
//	CREATE TABLE `tb_article` (
//			  `id` int(11) NOT NULL,
//			  `title` varchar(50) NOT NULL COMMENT '标题',
//			  `digest` varchar(1024) NOT NULL COMMENT '摘要',
//			  `content` text COMMENT '文章正文',
//			  `author` varchar(255) default NULL,
//			  `add_date` timestamp NOT NULL default '0000-00-00 00:00:00' COMMENT '添加时间',
//			  PRIMARY KEY  (`id`)
//			) ENGINE=MyISAM DEFAULT CHARSET=latin1;
	private int id;
	private String title;   //标题
	private String digest;  //摘要
	private String content; //正文内容
	private String auhor;   //作者
	private Date   addDate; //添加时间
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDigest() {
		return digest;
	}
	public void setDigest(String digest) {
		this.digest = digest;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getAuhor() {
		return auhor;
	}
	public void setAuhor(String auhor) {
		this.auhor = auhor;
	}
	public Date getAddDate() {
		return addDate;
	}
	public void setAddDate(Date addDate) {
		this.addDate = addDate;
	}
}	
