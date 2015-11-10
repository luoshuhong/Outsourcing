package com.travel.meilidujuan.controller;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.travel.meilidujuan.util.RedisUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.travel.meilidujuan.model.Route;
import com.travel.meilidujuan.service.RouteService;
import com.travel.meilidujuan.util.RequestUtils;
import redis.clients.jedis.Jedis;

@Controller
@RequestMapping("/route")
public class RouteController {
	@Autowired
	private RouteService routeService;
	private Jedis cache = RedisUtil.getInstance();

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
			e.printStackTrace();
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
			e.printStackTrace();
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
			e.printStackTrace();
			return RequestUtils.failReturn(e.getMessage());
		} finally {
		}
    }
	
	@RequestMapping(method=RequestMethod.GET)
    @ResponseBody
    public String query(HttpServletRequest request, HttpServletResponse response){
		try {
            List<Map<String, Object>> list =null;
			Route route = this.wrap(request);
            if(cache.get("route")==null||"".equals(cache.get("route"))){
                list = this.routeService.query(route);
                cache.set("route",JSONArray.toJSONString(list));
                cache.expire("route",60*60*24);
                if (null != list) {
                    return RequestUtils.successReturn(JSONArray.toJSONString(list));
                } else {
                    return RequestUtils.successReturn("");
                }
            }else{
                JSONArray jsonObject = JSONArray.parseArray(cache.get("route"));
                System.out.println("从缓存中取数据");
                if (null != jsonObject) {
                    return RequestUtils.successReturn(JSONArray.toJSONString(jsonObject));
                } else {
                    return RequestUtils.successReturn("");
                }
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
	private Route wrap(HttpServletRequest request) throws IOException {
		JSONObject requestJob = RequestUtils.getJsonRequest(request);
		Route route = new Route();
		route.setImgUrl(RequestUtils.getValue(requestJob, "imgUrl", ""));
		route.setDes(RequestUtils.getValue(requestJob, "des", ""));
		route.setDays(Integer.valueOf(RequestUtils.getValue(requestJob, "days", "0")));
		route.setPrice(Integer.valueOf(RequestUtils.getValue(requestJob, "price", "0")));
        route.setName(RequestUtils.getValue(requestJob,"name",""));
        route.setLeader(RequestUtils.getValue(requestJob,"leader",""));
		return route;
	}
}
