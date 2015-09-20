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
import com.travel.meilidujuan.model.Order;
import com.travel.meilidujuan.service.OrderService;
import com.travel.meilidujuan.util.RequestUtils;

@Controller
@RequestMapping("/order")
public class OrderController {
	@Autowired
	private OrderService orderService;
	
	@RequestMapping(method=RequestMethod.POST)
    @ResponseBody
    public String add(HttpServletRequest request, HttpServletResponse response){
		try {
			Order order = this.wrap(request);
			if (this.orderService.add(order)) {
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
			Order order = this.wrap(request);
			if (this.orderService.add(order)) {
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
			Order order = this.wrap(request);
			if (this.orderService.add(order)) {
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
			Order order = this.wrap(request);
			List<Map<String, Object>> list = this.orderService.query(order);
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
	private Order wrap(HttpServletRequest request) throws IOException {
		JSONObject requestJob = RequestUtils.getJsonRequest(request);
		Order order = new Order();
		order.setOrderName(RequestUtils.getValue(requestJob, "orderName", ""));
		order.setUserName(RequestUtils.getValue(requestJob, "userName", ""));
		order.setUserSex(Integer.valueOf(RequestUtils.getValue(requestJob, "userSex", "0")));
		order.setUserPhone(Integer.valueOf(RequestUtils.getValue(requestJob, "userPhone", "0")));
		order.setUserQQ(Integer.valueOf(RequestUtils.getValue(requestJob, "userQQ", "0")));
		order.setUserCity(RequestUtils.getValue(requestJob, "userCity", "0"));
		return order;
	}
}
