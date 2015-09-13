package com.travel.meilidujuan.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travel.meilidujuan.dao.DaoInter;
import com.travel.meilidujuan.model.Article;
@Service
public class ArticleService  implements ServiceInter<Article> {
	@Autowired
	private DaoInter<Article> articleDao;
	
	
	@Override
	public boolean add(Article t) {
		return articleDao.add(t);
	}
	@Override
	public boolean del(int id) {
		return articleDao.del(id);
	}
	
	
	@Override
	public List<Map<String, Object>> query(Article t) {
		return articleDao.query(t);
	}
	
	@Override
	public boolean update(Article t) {
		return articleDao.update(t);
	}
	
}
