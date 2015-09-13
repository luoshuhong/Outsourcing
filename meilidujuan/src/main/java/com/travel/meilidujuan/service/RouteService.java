package com.travel.meilidujuan.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travel.meilidujuan.dao.DaoInter;
import com.travel.meilidujuan.model.Route;
@Service
public class RouteService  implements ServiceInter<Route> {
	@Autowired
	private DaoInter<Route> routeDao;
	
	@Override
	public boolean add(Route t) {
		return routeDao.add(t);
	}
	@Override
	public boolean del(int id) {
		return routeDao.del(id);
	}
	
	
	@Override
	public List<Map<String, Object>> query(Route t) {
		return routeDao.query(t);
	}
	
	@Override
	public boolean update(Route t) {
		return routeDao.update(t);
	}
	
}
