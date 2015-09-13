package com.travel.meilidujuan.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travel.meilidujuan.dao.DaoInter;
import com.travel.meilidujuan.model.TourGuide;
@Service
public class TourGuideService  implements ServiceInter<TourGuide> {
	@Autowired
	private DaoInter<TourGuide> tourGuideDao;
	
	@Override
	public boolean add(TourGuide t) {
		return tourGuideDao.add(t);
	}
	@Override
	public boolean del(int id) {
		return tourGuideDao.del(id);
	}
	
	
	@Override
	public List<Map<String, Object>> query(TourGuide t) {
		return tourGuideDao.query(t);
	}
	
	@Override
	public boolean update(TourGuide t) {
		return tourGuideDao.update(t);
	}
	
}
