package com.travel.meilidujuan.controller;

import java.io.IOException;
import java.util.Date;
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
import com.travel.meilidujuan.model.Article;
import com.travel.meilidujuan.service.ArticleService;
import com.travel.meilidujuan.util.RequestUtils;

@Controller
@RequestMapping("/article")
public class ArticleController {
	@Autowired
	private ArticleService articleService;
	
	@RequestMapping(method=RequestMethod.POST)
    @ResponseBody
    public String add(HttpServletRequest request, HttpServletResponse response){
		try {
			Article article = this.wrap(request);
			if (this.articleService.add(article)) {
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
			Article article = this.wrap(request);
			if (this.articleService.add(article)) {
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
			Article article = this.wrap(request);
			if (this.articleService.add(article)) {
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
			Article article = this.wrap(request);
			List<Map<String, Object>> list = this.articleService.query(article);
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
	private Article wrap(HttpServletRequest request) throws IOException {
		JSONObject requestJob = RequestUtils.getJsonRequest(request);
		Article article = new Article();
		article.setTitle(RequestUtils.getValue(requestJob, "title", ""));
		article.setDigest(RequestUtils.getValue(requestJob, "digest", ""));
		article.setContent(RequestUtils.getValue(requestJob, "content", ""));
		article.setAuhor(RequestUtils.getValue(requestJob, "auhor", ""));
		article.setAddDate(new Date());
		return article;
	}
}
