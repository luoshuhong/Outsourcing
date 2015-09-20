package com.travel.meilidujuan.controller;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.travel.meilidujuan.model.AnswerQuestion;
import com.travel.meilidujuan.service.AnswerQuestionService;
import com.travel.meilidujuan.util.RequestUtils;

@Controller
@RequestMapping("/aq")
public class AnswerQuestionController {
	@Autowired
	private AnswerQuestionService answerQuestionService;
	
	@RequestMapping(method=RequestMethod.POST)
    @ResponseBody
    public String add(HttpServletRequest request, HttpServletResponse response){
		try {
			AnswerQuestion answerQuestion = this.wrap(request);
			if (this.answerQuestionService.add(answerQuestion)) {
				return RequestUtils.successReturn("");
			} else {
				return RequestUtils.failReturn("fail");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return RequestUtils.failReturn(e.getMessage());
		} finally {
		}
    }
	
	@RequestMapping(method=RequestMethod.DELETE)
    @ResponseBody
    public String del(HttpServletRequest request, HttpServletResponse response){
		try {
			AnswerQuestion answerQuestion = this.wrap(request);
			if (this.answerQuestionService.add(answerQuestion)) {
				return RequestUtils.successReturn("");
			} else {
				return RequestUtils.failReturn("fail");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return RequestUtils.failReturn(e.getMessage());
		} finally {
		}
    }
	
	@RequestMapping(method=RequestMethod.PATCH)
    @ResponseBody
    public String update(HttpServletRequest request, HttpServletResponse response){
		try {
			AnswerQuestion answerQuestion = this.wrap(request);
			if (this.answerQuestionService.add(answerQuestion)) {
				return RequestUtils.successReturn("");
			} else {
				return RequestUtils.failReturn("fail");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return RequestUtils.failReturn(e.getMessage());
		} finally {
		}
    }
	
	@RequestMapping(method=RequestMethod.GET)
    @ResponseBody
    public String query(HttpServletRequest request, HttpServletResponse response){
		try {
			AnswerQuestion answerQuestion = this.wrap(request);
			List<Map<String, Object>> list = this.answerQuestionService.query(answerQuestion);
			if (null != list) {
				return RequestUtils.successReturn(JSONArray.toJSONString(list));
			} else {
				return RequestUtils.successReturn("");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return RequestUtils.failReturn(e.getMessage());
		} finally {
		}
    }
	
	/**
	 * 封装请求model
	 * @param request
	 * @return
	 * @throws IOException 
	 */
	private AnswerQuestion wrap(HttpServletRequest request) throws IOException {
		JSONObject requestJob = RequestUtils.getJsonRequest(request);
		AnswerQuestion answerQuestion = new AnswerQuestion();
		answerQuestion.setQuestion(RequestUtils.getValue(requestJob, "question", ""));
		answerQuestion.setAnswer(RequestUtils.getValue(requestJob, "answer", ""));
		return answerQuestion;
	}
}
