package com.travel.meilidujuan.dao;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.jdbc.core.support.JdbcDaoSupport;

import com.travel.meilidujuan.model.Image;
import com.travel.meilidujuan.util.CommonUtils;

/**
 * 图片服务
 * @author  Luoshuhong
 * @Company  
 * 2015年9月6日
 */
public class ImageDao extends JdbcDaoSupport implements DaoInter<Image>{
	@Override
	public boolean add(Image t) {
		String insertSql = "insert into tb_image(url,des,add_date,type,group_id)"
				+ "values(?,?,?,?,?)";
		return 1 == this.getJdbcTemplate().update(insertSql, 
				new Object[]{t.getUrl(),t.getDes(),t.getAddDate(),t.getType(),t.getGroupId()});
	}
	@Override
	public boolean del(int id) {
		String delSql = "delete from tb_image where id = ?";
		return 1 == this.getJdbcTemplate().update(delSql, new Object[]{id});
	}
	@Override
	public List<Map<String,Object>> query(Image t) {
		String where = " where "; 
		if (0 < t.getId()) {
			where = CommonUtils.addConnectors(where, "id", new Integer(t.getId()), "and");
		}
		if (0 < t.getType()) {
			where = CommonUtils.addConnectors(where, "type", new Integer(t.getType()), "and");
		}
		if (0 < t.getGroupId()) {
			where = CommonUtils.addConnectors(where, "group_id", new Integer(t.getGroupId()), "and");
		}
		if (6 > where.trim().length()) {
			where = "";
		}
		
		String selectSql = "select id as id, url as url, des as des,"
				+ "add_date as addDate, type as type, group_id as groupId from tb_image " + where + " order by id desc";
		return this.getJdbcTemplate().queryForList(selectSql);
	}
	@Override
	public boolean update(Image t) {
		String setStr = " set "; 
		if (!StringUtils.isEmpty(t.getUrl())) {
			setStr = CommonUtils.addConnectors(setStr, "url", t.getUrl(), ",");
		}
		if (!StringUtils.isEmpty(t.getDes())) {
			setStr = CommonUtils.addConnectors(setStr, "des", t.getDes(), ",");
		}
		if (0 < t.getType()) {
			setStr = CommonUtils.addConnectors(setStr, "type", new Integer(t.getType()), ",");
		}
		if (0 < t.getGroupId()) {
			setStr = CommonUtils.addConnectors(setStr, "group_id", new Integer(t.getGroupId()), ",");
		}
		
		String updateSql = "update tb_image " + setStr + " where id = ?";
		return 1 == this.getJdbcTemplate().update(updateSql, new Object[]{t.getId()});
	}
	
	
}
