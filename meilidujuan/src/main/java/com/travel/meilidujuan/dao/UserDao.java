package com.travel.meilidujuan.dao;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.jdbc.core.support.JdbcDaoSupport;

import com.travel.meilidujuan.model.User;
import com.travel.meilidujuan.util.CommonUtils;

/**
 * 用户
 * @author  Luoshuhong
 * @Company  
 * 2015年8月22日
 *
 */
public class UserDao extends JdbcDaoSupport implements DaoInter<User> {
	public boolean add(User user) {
		String insertSql = "insert into tb_user(user_name,user_pwd,user_nickname,type) values(?,?,?,?)";
		return 1 == this.getJdbcTemplate().update(insertSql, 
				new Object[]{user.getUserName(), user.getUserPwd(), user.getUserNickname(), user.getType()});
	}
	
	@Override
	public boolean del(int id) {
		String delSql = "delete from tb_user where id = ?";
		return 1 == this.getJdbcTemplate().update(delSql, new Object[]{id});
	}
	
	@Override
	public List<Map<String,Object>> query(User t) {
		String where = " where "; 
		//用户名
		if (!StringUtils.isEmpty(t.getUserName())) {
			where = CommonUtils.addConnectors(where, "user_name", t.getUserName(), "and");
		}
		//用户类型
		if (0 == t.getType() || 1 == t.getType()) {
			where = CommonUtils.addConnectors(where, "type", new Integer(t.getType()), "and");
		}
		//昵称
		if (!StringUtils.isEmpty(t.getUserNickname())) {
			where = CommonUtils.addConnectors(where, "user_nickname", t.getUserNickname(), "and");
		}
		
		if (6 > where.trim().length()) {
			where = "";
		}
		
		String selectSql = "select id as id, user_name as userName,"
				+ "type as type ,user_nickname as userNickname  from tb_user " + where + " order by id desc";
		return this.getJdbcTemplate().queryForList(selectSql);
//		List<User> result = new ArrayList<User>();
//		for (Map<String,Object> map : list) {
//			User user = new User();
//			user.setUserName(map.get("user_name").toString());
//			user.setType(Integer.valueOf(map.get("type").toString()));
//			user.setUserNickname(map.get("user_nickname").toString());
//			result.add(user);
//		}
		
//		return list;
	}
	
	@Override
	public boolean update(User t) {
		String setStr = " set "; 
		//用户名
		if (!StringUtils.isEmpty(t.getUserName())) {
			setStr = CommonUtils.addConnectors(setStr, "user_name", t.getUserName(), ",");
		}
		//用户类型
		if (0 == t.getType() || 1 == t.getType()) {
			setStr = CommonUtils.addConnectors(setStr, "type", new Integer(t.getType()), ",");
		}
		//密码
		if (!StringUtils.isEmpty(t.getUserPwd())) {
			setStr = CommonUtils.addConnectors(setStr, "user_pwd", t.getUserPwd(), ",");
		}
		//昵称
		if (!StringUtils.isEmpty(t.getUserNickname())) {
			setStr = CommonUtils.addConnectors(setStr, "user_nickname", t.getUserNickname(), ",");
		}
		
		String updateSql = "update tb_user " + setStr + " where id = ?";
		return 1 == this.getJdbcTemplate().update(updateSql, new Object[]{t.getId()});
	}
	
}
