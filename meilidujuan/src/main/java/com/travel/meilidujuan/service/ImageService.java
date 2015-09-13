package com.travel.meilidujuan.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travel.meilidujuan.dao.DaoInter;
import com.travel.meilidujuan.model.Image;
@Service
public class ImageService  implements ServiceInter<Image> {
	@Autowired
	private DaoInter<Image> imageDao;
	
	@Override
	public boolean add(Image t) {
		return imageDao.add(t);
	}
	@Override
	public boolean del(int id) {
		return imageDao.del(id);
	}
	
	
	@Override
	public List<Map<String, Object>> query(Image t) {
		return imageDao.query(t);
	}
	
	@Override
	public boolean update(Image t) {
		return imageDao.update(t);
	}
	
}
