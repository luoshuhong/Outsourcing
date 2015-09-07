package com.travel.meilidujuan.dao;

import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.support.JdbcDaoSupport;

import com.travel.meilidujuan.model.Route;

/**
 * 旅游路线
 * @author  Luoshuhong
 * @Company  
 * 2015年9月6日
 */
public class RouteDao extends JdbcDaoSupport implements DaoInter<Route> {

	@Override
	public boolean add(Route t) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean update(Route t) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<Map<String,Object>> query(Route t) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean del(int id) {
		// TODO Auto-generated method stub
		return false;
	}
	
}
