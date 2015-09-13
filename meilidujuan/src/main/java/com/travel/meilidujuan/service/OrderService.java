package com.travel.meilidujuan.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travel.meilidujuan.dao.DaoInter;
import com.travel.meilidujuan.model.Order;
@Service
public class OrderService  implements ServiceInter<Order> {
	@Autowired
	private DaoInter<Order> orderDao;
	
	@Override
	public boolean add(Order t) {
		return orderDao.add(t);
	}
	@Override
	public boolean del(int id) {
		return orderDao.del(id);
	}
	
	
	@Override
	public List<Map<String, Object>> query(Order t) {
		return orderDao.query(t);
	}
	
	@Override
	public boolean update(Order t) {
		return orderDao.update(t);
	}
	
}
