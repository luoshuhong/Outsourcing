package com.travel.meilidujuan.model;

/**
 * 精品路线描述
 * @author Luoshuhong
 * @Company 
 * 2015年8月22日
 *
 */
public class Route {
//	CREATE TABLE `tb_route` (
//			  `id` int(11) NOT NULL auto_increment,
//			  `img_url` varchar(512) default NULL COMMENT '图片地址',
//			  `des` varchar(255) default NULL COMMENT '描述',
//			  `days` int(3) default '1' COMMENT '多少天',
//			  `price` int(5) default '0' COMMENT '跟团金额',
//            'name' varchar(100),
//            'leader' varchar(50),
//			  PRIMARY KEY  (`id`)
//			) ENGINE=MyISAM DEFAULT CHARSET=latin1;
	private int id;
	private String imgUrl; //图片地址
	private String des;    //描述
	private int    days;   //几天
	private int    price;  //跟团金额

    private String leader;
    private String name;
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
	public int getDays() {
		return days;
	}
	public void setDays(int days) {
		this.days = days;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public String getLeader() {
        return leader;
    }

    public void setLeader(String leader) {
        this.leader = leader;
    }

}	
