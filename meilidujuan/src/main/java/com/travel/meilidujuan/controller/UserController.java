package com.travel.meilidujuan.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
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
import com.travel.meilidujuan.model.User;
import com.travel.meilidujuan.service.UserService;
import com.travel.meilidujuan.util.RequestUtils;

@Controller
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService userService;
	
	@RequestMapping(method=RequestMethod.POST)
    @ResponseBody
    public String add(HttpServletRequest request, HttpServletResponse response){
		try {
			User user = this.wrap(request);
			if (this.userService.add(user)) {
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
			User user = this.wrap(request);
			if (this.userService.del(user.getId())) {
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
			User user = this.wrap(request);
			if (this.userService.update(user)) {
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
			User user = this.wrap(request);
			List<Map<String, Object>> list = this.userService.query(user);
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
	
	public static void main(String[] args) {
		List<Map<String,String>> list = new ArrayList<Map<String,String>>();
		Map<String,String> map = new HashMap<String,String>();
		map.put("key0", "value0");
		map.put("key1", "value1");
		map.put("key2", "value2");
		Map<String,String> map1 = new HashMap<String,String>();
		map1.put("key0", "value0");
		map1.put("key1", "value1");
		map1.put("key2", "value2");
		Map<String,String> map2 = new HashMap<String,String>();
		map2.put("key0", "value0");
		map2.put("key1", "value1");
		map2.put("key2", "value2");
		list.add(map);
		list.add(map1);
		list.add(map2);
		System.out.println(JSONArray.toJSONString(list).toString());
	}
	
	/**
	 * 封装请求model
	 * @param request
	 * @return
	 * @throws IOException 
	 */
	private User wrap(HttpServletRequest request) throws IOException {
		JSONObject requestJob = RequestUtils.getJsonRequest(request);
		User user = new User();
		user.setUserName(RequestUtils.getValue(requestJob, "userName", ""));
		user.setUserPwd(RequestUtils.getValue(requestJob, "userPwd", ""));
		user.setUserNickname(RequestUtils.getValue(requestJob, "userNickname", ""));
		user.setType(Integer.valueOf(RequestUtils.getValue(requestJob, "type", "0")));
		return user;
	}
	
	
	
	
}
