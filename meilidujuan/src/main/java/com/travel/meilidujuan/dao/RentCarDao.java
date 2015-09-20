package com.travel.meilidujuan.dao;

import java.sql.Timestamp;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.jdbc.core.support.JdbcDaoSupport;

import com.travel.meilidujuan.model.RentCar;
import com.travel.meilidujuan.util.CommonUtils;


/**
 * 租车服务
 * @author  Luoshuhong
 * @Company  
 * 2015年9月6日
 */
public class RentCarDao extends JdbcDaoSupport implements DaoInter<RentCar> {
//	CREATE TABLE `tb_rent_car` (
//			  `id` int(11) NOT NULL auto_increment,
//			  `img_url` varchar(512) default NULL COMMENT '图片地址',
//			  `des` varchar(255) default NULL COMMENT '描述',
//			  `price` int(5) default '0' COMMENT '多少钱一天',
//			  `capacity` int(3) default '0' COMMENT '容量/几座',
//			  `add_date` datetime default '0000-00-00 00:00:00' COMMENT '添加时间',
	@Override
	public boolean add(RentCar t) {
		String insertSql = "insert into tb_rent_car(img_url,des,price,capacity,add_date) "
				+ "values(?,?,?,?,?)";
		return 1 == this.getJdbcTemplate().update(insertSql, 
				new Object[]{t.getImgUrl(),t.getDes(),t.getPrice(),t.getCapacity(),
				new Timestamp(t.getAddDate().getTime())});
	}

	@Override
	public List<Map<String,Object>> query(RentCar t) {
		String where = " where "; 
		if (0 < t.getId()) {
			where = CommonUtils.addConnectors(where, "id", new Integer(t.getId()), "and");
		}
		if (!StringUtils.isEmpty(t.getDes())) {
			where = CommonUtils.addConnectors(where, "des", t.getDes(), "and");
		}
		if (0 != t.getPrice()) {
			where = CommonUtils.addConnectors(where, "price", Integer.valueOf(t.getPrice()), "and");
		}
		if (0 != t.getCapacity()) {
			where = CommonUtils.addConnectors(where, "capacity", Integer.valueOf(t.getCapacity()), "and");
		}
		if (6 > where.trim().length()) {
			where = "";
		}
		String selectSql = "select id as id, img_url as imgUrl, des as des,"
				+ "price as price, capacity as capacity, add_date as addDate from tb_rent_car " + where + " order by id desc";
		return this.getJdbcTemplate().queryForList(selectSql);
	}
	
	@Override
	public boolean update(RentCar t) {
		String setStr = " set "; 
		if (!StringUtils.isEmpty(t.getImgUrl())) {
			setStr = CommonUtils.addConnectors(setStr, "img_url", t.getImgUrl(), ",");
		}
		if (!StringUtils.isEmpty(t.getDes())) {
			setStr = CommonUtils.addConnectors(setStr, "des", t.getDes(), ",");
		}
		if (0 != t.getPrice()) {
			setStr = CommonUtils.addConnectors(setStr, "price", Integer.valueOf(t.getPrice()), ",");
		}
		if (0 != t.getCapacity()) {
			setStr = CommonUtils.addConnectors(setStr, "capacity", Integer.valueOf(t.getCapacity()), ",");
		}
		
		String updateSql = "update tb_rent_car " + setStr + " where id = ?";
		return 1 == this.getJdbcTemplate().update(updateSql, new Object[]{t.getId()});
	}

	@Override
	public boolean del(int id) {
		String delSql = "delete from tb_rent_car where id = ?";
		return 1 == this.getJdbcTemplate().update(delSql, new Object[]{id});
	}
	

}
