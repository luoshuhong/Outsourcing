package com.travel.meilidujuan.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;

@Controller
@RequestMapping("/user")
public class UserController {
	
	@RequestMapping(method=RequestMethod.POST)
//	@RequestMapping("/add")
    @ResponseBody
    public String add(HttpServletRequest request, HttpServletResponse response){
		JSONObject job = new JSONObject();
		String data = request.getParameter("data");
        job.put("result", "success---add");
        System.out.println("---add");
        return job.toJSONString();
    }
	
	@RequestMapping(method=RequestMethod.DELETE)
//	@RequestMapping("/del")
    @ResponseBody
    public String del(HttpServletRequest request, HttpServletResponse response){
		JSONObject job = new JSONObject();
		String data = request.getParameter("data");
        job.put("result", "success---del");
        System.out.println("---del");
        return job.toJSONString();
    }
	
	@RequestMapping(method=RequestMethod.PATCH)
//	@RequestMapping("/update")
    @ResponseBody
    public String update(HttpServletRequest request, HttpServletResponse response){
		JSONObject job = new JSONObject();
		String data = request.getParameter("data");
        job.put("result", "success---update");
        System.out.println("---update");
        return job.toJSONString();
    }
	
	@RequestMapping(method=RequestMethod.GET)
//	@RequestMapping("/query")
    @ResponseBody
    public String query(HttpServletRequest request, HttpServletResponse response){
		JSONObject job = new JSONObject();
		String data = request.getParameter("data");
        job.put("result", "success---query");
        System.out.println("---query");
        return job.toJSONString();
    }
}