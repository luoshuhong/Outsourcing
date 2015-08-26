package com.travel.meilidujuan.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;

@Controller
@RequestMapping("/user")
public class UserController {
	
	@RequestMapping("/add")
    @ResponseBody
    public String add(HttpServletRequest request, HttpServletResponse response){
		JSONObject job = new JSONObject();
		String data = request.getParameter("data");
        job.put("result", "success");
        System.out.println("---add");
        return job.toJSONString();
    }
	
	@RequestMapping("/del")
    @ResponseBody
    public String del(HttpServletRequest request, HttpServletResponse response){
		JSONObject job = new JSONObject();
		String data = request.getParameter("data");
        job.put("result", "success");
        System.out.println("---del");
        return job.toJSONString();
    }
	
	@RequestMapping("/update")
    @ResponseBody
    public String update(HttpServletRequest request, HttpServletResponse response){
		JSONObject job = new JSONObject();
		String data = request.getParameter("data");
        job.put("result", "success");
        System.out.println("---update");
        return job.toJSONString();
    }
	
	@RequestMapping("/query")
    @ResponseBody
    public String query(HttpServletRequest request, HttpServletResponse response){
		JSONObject job = new JSONObject();
		String data = request.getParameter("data");
        job.put("result", "success");
        System.out.println("---query");
        return job.toJSONString();
    }
}
