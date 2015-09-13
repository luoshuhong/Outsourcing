package com.travel.meilidujuan.controller;

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
import com.travel.meilidujuan.model.Route;
import com.travel.meilidujuan.service.RouteService;
import com.travel.meilidujuan.util.RequestUtils;

@Controller
@RequestMapping("/route")
public class RouteController {
	@Autowired
	private RouteService routeService;
	
	@RequestMapping(method=RequestMethod.POST)
    @ResponseBody
    public String add(HttpServletRequest request, HttpServletResponse response){
		try {
			Route route = this.wrap(request);
			if (this.routeService.add(route)) {
				return RequestUtils.successReturn("");
			} else {
				return RequestUtils.failReturn("fail");
			}
		} catch (Exception e) {
			return RequestUtils.failReturn(e.getMessage());
		} finally {
		}
    }
	
	@RequestMapping(method=RequestMethod.DELETE)
    @ResponseBody
    public String del(HttpServletRequest request, HttpServletResponse response){
		try {
			Route route = this.wrap(request);
			if (this.routeService.add(route)) {
				return RequestUtils.successReturn("");
			} else {
				return RequestUtils.failReturn("fail");
			}
		} catch (Exception e) {
			return RequestUtils.failReturn(e.getMessage());
		} finally {
		}
    }
	
	@RequestMapping(method=RequestMethod.PATCH)
    @ResponseBody
    public String update(HttpServletRequest request, HttpServletResponse response){
		try {
			Route route = this.wrap(request);
			if (this.routeService.add(route)) {
				return RequestUtils.successReturn("");
			} else {
				return RequestUtils.failReturn("fail");
			}
		} catch (Exception e) {
			return RequestUtils.failReturn(e.getMessage());
		} finally {
		}
    }
	
	@RequestMapping(method=RequestMethod.GET)
    @ResponseBody
    public String query(HttpServletRequest request, HttpServletResponse response){
		try {
			Route route = this.wrap(request);
			List<Map<String, Object>> list = this.routeService.query(route);
			if (null != list) {
				return RequestUtils.successReturn(JSONArray.toJSONString(list).toString());
			} else {
				return RequestUtils.successReturn("");
			}
		} catch (Exception e) {
			return RequestUtils.failReturn(e.getMessage());
		} finally {
		}
    }
	
	
	/**
	 * 封装请求model
	 * @param request
	 * @return
	 */
	private Route wrap(HttpServletRequest request) {
		Route route = new Route();
		route.setImgUrl(RequestUtils.getValue(request, "imgUrl", ""));
		route.setDes(RequestUtils.getValue(request, "des", ""));
		route.setDays(Integer.valueOf(RequestUtils.getValue(request, "days", "0")));
		route.setPrice(Integer.valueOf(RequestUtils.getValue(request, "price", "0")));
		return route;
	}
}
