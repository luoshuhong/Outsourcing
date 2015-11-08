package com.travel.meilidujuan.dao;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.jdbc.core.support.JdbcDaoSupport;

import com.travel.meilidujuan.model.Route;
import com.travel.meilidujuan.util.CommonUtils;

/**
 * 旅游路线
 * @author  Luoshuhong
 * @Company  
 * 2015年9月6日
 */
public class RouteDao extends JdbcDaoSupport implements DaoInter<Route> {
	@Override
	public boolean add(Route t) {
		String insertSql = "insert into tb_route(img_url,des,price,days) "
				+ "values(?,?,?,?)";
		return 1 == this.getJdbcTemplate().update(insertSql, 
				new Object[]{t.getImgUrl(),t.getDes(),t.getPrice(),t.getDays()});
	}

	@Override
	public boolean update(Route t) {
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
		if (0 != t.getDays()) {
			setStr = CommonUtils.addConnectors(setStr, "days", Integer.valueOf(t.getDays()), ",");
		}
        if (!StringUtils.isEmpty(t.getLeader())) {
            setStr = CommonUtils.addConnectorsLike(setStr, "leader", "%" + t.getLeader(),",");
        }
        if (!StringUtils.isEmpty(t.getName())) {
            setStr = CommonUtils.addConnectorsLike(setStr, "name", "%" + t.getName(),",");
        }
		String updateSql = "update tb_route " + setStr + " where id = ?";
		return 1 == this.getJdbcTemplate().update(updateSql, new Object[]{t.getId()});
	}

	@Override
	public List<Map<String,Object>> query(Route t) {
		String where = " where "; 
		if (0 < t.getId()) {
			where = CommonUtils.addConnectors(where, "id", new Integer(t.getId()), "and");
		}
		if (!StringUtils.isEmpty(t.getDes())) {
			where = CommonUtils.addConnectorsLike(where, "des", "%" + t.getDes().trim() + "%", "and");
		}
		if (0 != t.getPrice()) {
			where = CommonUtils.addConnectors(where, "price", Integer.valueOf(t.getPrice()), "and");
		}
		if (0 != t.getDays()) {
			where = CommonUtils.addConnectors(where, "capacity", Integer.valueOf(t.getDays()), "and");
		}
        if (!StringUtils.isEmpty(t.getLeader())) {
            where = CommonUtils.addConnectorsLike(where, "leader", "%" + t.getLeader().trim() + "%", "and");
        }
        if (!StringUtils.isEmpty(t.getName())) {
            where = CommonUtils.addConnectorsLike(where, "name", "%" + t.getName().trim() + "%", "and");
        }
		if (6 > where.trim().length()) {
			where = "";
		}
		String selectSql = "select id as id, img_url as imgUrl, des as des,"
				+ "price as price, days as days,name as name,leader as leader from tb_route " + where + " order by id desc";
		return this.getJdbcTemplate().queryForList(selectSql);
	}

	@Override
	public boolean del(int id) {
		String delSql = "delete from tb_route where id = ?";
		return 1 == this.getJdbcTemplate().update(delSql, new Object[]{id});
	}
	
}
