package com.travel.meilidujuan.dao;

import java.sql.Timestamp;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.jdbc.core.support.JdbcDaoSupport;

import com.travel.meilidujuan.model.Article;
import com.travel.meilidujuan.util.CommonUtils;

/**
 * 文章
 * @author  Luoshuhong
 * @Company  
 * 2015年9月6日
 */
public class ArticleDao extends JdbcDaoSupport implements DaoInter<Article> {
	@Override
	public boolean add(Article t) {
		String insertSql = "insert into tb_article(title,digest,content,author,add_date) "
				+ "values(?,?,?,?,?)";
		return 1 == this.getJdbcTemplate().update(insertSql, 
				new Object[]{t.getTitle(),t.getDigest(),t.getContent(),t.getAuhor(),
				new Timestamp(t.getAddDate().getTime())});
	}
	@Override
	public boolean del(int id) {
		String delSql = "delete from tb_article where id = ?";
		return 1 == this.getJdbcTemplate().update(delSql, new Object[]{id});
	} 
	@Override
	public List<Map<String,Object>> query(Article t) {
		String where = " where "; 
		if (0 < t.getId()) {
			where = CommonUtils.addConnectors(where, "id", new Integer(t.getId()), "and");
		}
		if (!StringUtils.isEmpty(t.getTitle())) {
			where = CommonUtils.addConnectorsLike(where, "title", "%" + t.getTitle().trim() + "%", "and");
		}
		if (!StringUtils.isEmpty(t.getAuhor())) {
			where = CommonUtils.addConnectorsLike(where, "author", "%" + t.getAuhor().trim() + "%", "and");
		}
		if (!StringUtils.isEmpty(t.getDigest())) {
			where = CommonUtils.addConnectorsLike(where, "digest", "%" + t.getDigest().trim() + "%", "and");
		}
		if (6 > where.trim().length()) {
			where = "";
		}
		
		String selectSql = "select id as id, title as title, add_date as addDate,"
				+ "digest as digest, content as content, author as author  from tb_article " + where + " order by id desc";
		return this.getJdbcTemplate().queryForList(selectSql);
	}
	
	@Override
	public boolean update(Article t) {
		String setStr = " set "; 
		if (!StringUtils.isEmpty(t.getTitle())) {
			setStr = CommonUtils.addConnectors(setStr, "title", t.getTitle(), ",");
		}
		if (!StringUtils.isEmpty(t.getAuhor())) {
			setStr = CommonUtils.addConnectors(setStr, "author", t.getAuhor(), ",");
		}
		if (!StringUtils.isEmpty(t.getDigest())) {
			setStr = CommonUtils.addConnectors(setStr, "digest", t.getDigest(), ",");
		}
		
		String updateSql = "update tb_article " + setStr + " where id = ?";
		return 1 == this.getJdbcTemplate().update(updateSql, new Object[]{t.getId()});
	}
}
