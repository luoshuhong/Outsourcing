package com.travel.meilidujuan.dao;

import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.support.JdbcDaoSupport;

import com.travel.meilidujuan.model.RentCar;


/**
 * 租车服务
 * @author  Luoshuhong
 * @Company  
 * 2015年9月6日
 */
public class RentCarDao extends JdbcDaoSupport implements DaoInter<RentCar> {

	@Override
	public boolean add(RentCar t) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean update(RentCar t) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<Map<String,Object>> query(RentCar t) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean del(int id) {
		// TODO Auto-generated method stub
		return false;
	}
	

}
