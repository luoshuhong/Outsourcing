package com.travel.meilidujuan.dao;

import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.support.JdbcDaoSupport;

import com.travel.meilidujuan.model.TourGuide;

/**
 * 导游
 * @author  Luoshuhong
 * @Company  
 * 2015年9月6日
 */
public class TourGuideDao extends JdbcDaoSupport implements DaoInter<TourGuide> {

	@Override
	public boolean add(TourGuide t) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean update(TourGuide t) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<Map<String,Object>> query(TourGuide t) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean del(int id) {
		// TODO Auto-generated method stub
		return false;
	}
	
}
