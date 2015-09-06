package com.travel.meilidujuan.dao;

import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.support.JdbcDaoSupport;

import com.travel.meilidujuan.model.Article;

/**
 * 文章
 * @author  Luoshuhong
 * @Company  
 * 2015年9月6日
 */
public class ArticleDao extends JdbcDaoSupport implements DaoInter<Article> {
	@Override
	public boolean add(Article t) {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public boolean del(int id) {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public List<Map<String,Object>> query(Article t) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public boolean update(Article t) {
		// TODO Auto-generated method stub
		return false;
	}
	
}
