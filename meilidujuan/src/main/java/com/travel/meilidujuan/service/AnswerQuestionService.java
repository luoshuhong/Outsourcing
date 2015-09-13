package com.travel.meilidujuan.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travel.meilidujuan.dao.DaoInter;
import com.travel.meilidujuan.model.AnswerQuestion;

@Service
public class AnswerQuestionService  implements ServiceInter<AnswerQuestion> {
	@Autowired
	private DaoInter<AnswerQuestion> answerQuestionDao;
	
	@Override
	public boolean add(AnswerQuestion t) {
		return answerQuestionDao.add(t);
	}
	@Override
	public boolean del(int id) {
		return answerQuestionDao.del(id);
	}
	
	
	@Override
	public List<Map<String, Object>> query(AnswerQuestion t) {
		return answerQuestionDao.query(t);
	}
	
	@Override
	public boolean update(AnswerQuestion t) {
		return answerQuestionDao.update(t);
	}
}
