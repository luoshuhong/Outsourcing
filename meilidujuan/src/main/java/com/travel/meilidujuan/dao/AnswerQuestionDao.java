package com.travel.meilidujuan.dao;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.jdbc.core.support.JdbcDaoSupport;

import com.travel.meilidujuan.model.AnswerQuestion;
import com.travel.meilidujuan.util.CommonUtils;

/**
 * 问答
 * @author  Luoshuhong
 * @Company  
 * 2015年9月6日
 */
public class AnswerQuestionDao extends JdbcDaoSupport implements DaoInter<AnswerQuestion> {
//	  `id` int(11) NOT NULL,
//	  `question` varchar(200) NOT NULL COMMENT '问题',
//	  `answer` varchar(1024) NOT NULL COMMENT '答案',
	@Override
	public boolean add(AnswerQuestion t) {
		String insertSql = "insert into tb_answer_question(question,answer) values(?,?)";
		return 1 == this.getJdbcTemplate().update(insertSql, 
				new Object[]{t.getQuestion(), t.getAnswer()});
	}
	
	@Override
	public boolean del(int id) {
		String delSql = "delete from tb_answer_question where id = ?";
		return 1 == this.getJdbcTemplate().update(delSql, new Object[]{id});
	}
	
	@Override
	public List<Map<String,Object>> query(AnswerQuestion t) {
		String where = " where "; 
		if (!StringUtils.isEmpty(t.getAnswer())) {
			where = CommonUtils.addConnectors(where, "answer", t.getAnswer(), "and");
		}
		if (!StringUtils.isEmpty(t.getQuestion())) {
			where = CommonUtils.addConnectors(where, "question", t.getQuestion(), "and");
		}
		
		String selectSql = "select id as id, answer as answer,"
				+ "question as question  from tb_user " + where + " order by id desc";
		return this.getJdbcTemplate().queryForList(selectSql);
	}
	
	@Override
	public boolean update(AnswerQuestion t) {
		String setStr = " set "; 
		if (!StringUtils.isEmpty(t.getAnswer())) {
			setStr = CommonUtils.addConnectors(setStr, "answer", t.getAnswer(), ",");
		}
		if (!StringUtils.isEmpty(t.getQuestion())) {
			setStr = CommonUtils.addConnectors(setStr, "question", t.getQuestion(), ",");
		}
		
		String updateSql = "update tb_answer_question " + setStr + " where id = ?";
		return 1 == this.getJdbcTemplate().update(updateSql, new Object[]{t.getId()});
	}
	
	
	
}
