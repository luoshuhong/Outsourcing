package com.travel.meilidujuan.dao;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.jdbc.core.support.JdbcDaoSupport;

import com.travel.meilidujuan.model.TourGuide;
import com.travel.meilidujuan.util.CommonUtils;

/**
 * 导游
 * @author  Luoshuhong
 * @Company  
 * 2015年9月6日
 */
public class TourGuideDao extends JdbcDaoSupport implements DaoInter<TourGuide> {
//	   CREATE TABLE `tb_tour_guide` (
//	  `id` int(11) NOT NULL auto_increment,
//	  `img_url` varchar(512) default NULL COMMENT '头像图片地址',
//	  `introduction` varchar(255) default NULL COMMENT '1024',
//	  `price` int(5) default '0' COMMENT '多少钱一天',
//	  `work_years` varchar(20) default NULL COMMENT '工作年限',
	@Override
	public boolean add(TourGuide t) {
		String insertSql = "insert into tb_tour_guide(img_url,introduction,price,work_years) "
				+ "values(?,?,?,?)";
		return 1 == this.getJdbcTemplate().update(insertSql, 
				new Object[]{t.getImgUrl(), t.getIntroduction(), t.getPrice(), t.getWorkYears()});
	}
	@Override
	public boolean update(TourGuide t) {
		String setStr = " set "; 
		if (!StringUtils.isEmpty(t.getImgUrl())) {
			setStr = CommonUtils.addConnectors(setStr, "img_url", t.getImgUrl(), ",");
		}
		if (!StringUtils.isEmpty(t.getIntroduction())) {
			setStr = CommonUtils.addConnectors(setStr, "introduction", t.getIntroduction(), ",");
		}
		if (0 != t.getPrice()) {
			setStr = CommonUtils.addConnectors(setStr, "price", Integer.valueOf(t.getPrice()), ",");
		}
		if (!StringUtils.isEmpty(t.getWorkYears())) {
			setStr = CommonUtils.addConnectors(setStr, "work_years", t.getWorkYears(), ",");
		}
		
		String updateSql = "update tb_tour_guide " + setStr + " where id = ?";
		return 1 == this.getJdbcTemplate().update(updateSql, new Object[]{t.getId()});
	}

	@Override
	public List<Map<String,Object>> query(TourGuide t) {
		String where = " where "; 
		if (0 < t.getId()) {
			where = CommonUtils.addConnectors(where, "id", new Integer(t.getId()), "and");
		}
		if (!StringUtils.isEmpty(t.getIntroduction())) {
			where = CommonUtils.addConnectorsLike(where, "introduction", "%" + t.getIntroduction().trim() + "%", "and");
		}
		if (0 != t.getPrice()) {
			where = CommonUtils.addConnectors(where, "price", Integer.valueOf(t.getPrice()), "and");
		}
		if (!StringUtils.isEmpty(t.getWorkYears())) {
			where = CommonUtils.addConnectors(where, "work_years", t.getWorkYears(), "and");
		}
		if (6 > where.trim().length()) {
			where = "";
		}
		String selectSql = "select id as id, img_url as imgUrl, introduction as introduction,"
				+ "price as price, work_years as workYears from tb_tour_guide " + where + " order by id desc";
		return this.getJdbcTemplate().queryForList(selectSql);
	}

	@Override
	public boolean del(int id) {
		String delSql = "delete from tb_tour_guide where id = ?";
		return 1 == this.getJdbcTemplate().update(delSql, new Object[]{id});
	}
	
}
