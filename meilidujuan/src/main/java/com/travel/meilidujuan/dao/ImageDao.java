package com.travel.meilidujuan.dao;

import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.support.JdbcDaoSupport;

import com.travel.meilidujuan.model.Image;

/**
 * 图片服务
 * @author  Luoshuhong
 * @Company  
 * 2015年9月6日
 */
public class ImageDao extends JdbcDaoSupport implements DaoInter<Image>{
	@Override
	public boolean add(Image t) {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public boolean del(int id) {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public List<Map<String,Object>> query(Image t) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public boolean update(Image t) {
		// TODO Auto-generated method stub
		return false;
	}
	
	
}
