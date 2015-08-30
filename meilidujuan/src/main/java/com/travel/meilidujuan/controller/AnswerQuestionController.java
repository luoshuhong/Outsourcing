package com.travel.meilidujuan.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;

@Controller
@RequestMapping("/aq")
public class AnswerQuestionController {
	
	@RequestMapping(method=RequestMethod.POST)
    @ResponseBody
    public String add(HttpServletRequest request, HttpServletResponse response){
		JSONObject job = new JSONObject();
		String data = request.getParameter("data");
        job.put("result", "success---add");
        System.out.println("---add");
        return job.toJSONString();
    }
	
	@RequestMapping(method=RequestMethod.DELETE)
    @ResponseBody
    public String del(HttpServletRequest request, HttpServletResponse response){
		JSONObject job = new JSONObject();
		String data = request.getParameter("data");
        job.put("result", "success---del");
        System.out.println("---del");
        return job.toJSONString();
    }
	
	@RequestMapping(method=RequestMethod.PATCH)
    @ResponseBody
    public String update(HttpServletRequest request, HttpServletResponse response){
		JSONObject job = new JSONObject();
		String data = request.getParameter("data");
        job.put("result", "success---update");
        System.out.println("---update");
        return job.toJSONString();
    }
	
	@RequestMapping(method=RequestMethod.GET)
    @ResponseBody
    public String query(HttpServletRequest request, HttpServletResponse response){
		JSONObject job = new JSONObject();
		String data = request.getParameter("data");
		System.out.println(request.getParameterMap());
        job.put("result", "success---query");
        System.out.println("---query");
        return job.toJSONString();
    }
}
