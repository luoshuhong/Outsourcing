package com.travel.meilidujuan.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travel.meilidujuan.dao.DaoInter;
import com.travel.meilidujuan.model.RentCar;
@Service
public class RentCarService  implements ServiceInter<RentCar> {
	@Autowired
	private DaoInter<RentCar> rentCarDao;
	
	@Override
	public boolean add(RentCar t) {
		return rentCarDao.add(t);
	}
	@Override
	public boolean del(int id) {
		return rentCarDao.del(id);
	}
	
	
	@Override
	public List<Map<String, Object>> query(RentCar t) {
		return rentCarDao.query(t);
	}
	
	@Override
	public boolean update(RentCar t) {
		return rentCarDao.update(t);
	}
	
}
