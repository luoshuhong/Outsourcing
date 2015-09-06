package com.travel.meilidujuan.dao;

import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.support.JdbcDaoSupport;

import com.travel.meilidujuan.model.Order;

/**
 * 订单服务
 * @author  Luoshuhong
 * @Company  
 * 2015年9月6日
 */
public class OrderDao extends JdbcDaoSupport implements DaoInter<Order> {

	@Override
	public boolean add(Order t) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean update(Order t) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<Map<String,Object>> query(Order t) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean del(int id) {
		// TODO Auto-generated method stub
		return false;
	}
	
}
