package com.travel.meilidujuan.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travel.meilidujuan.dao.DaoInter;
import com.travel.meilidujuan.model.User;

@Service
public class UserService  implements ServiceInter<User> {
	@Autowired
	private DaoInter<User> userDao;
	
	@Override
	public boolean add(User t) {
		return userDao.add(t);
	}
	@Override
	public boolean del(int id) {
		return userDao.del(id);
	}
	
	
	@Override
	public List<Map<String, Object>> query(User t) {
		return userDao.query(t);
	}
	
	@Override
	public boolean update(User t) {
		return userDao.update(t);
	}
	
}
