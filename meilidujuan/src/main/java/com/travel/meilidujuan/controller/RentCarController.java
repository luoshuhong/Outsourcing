package com.travel.meilidujuan.controller;

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
import com.travel.meilidujuan.model.RentCar;
import com.travel.meilidujuan.model.TourGuide;
import com.travel.meilidujuan.service.RentCarService;
import com.travel.meilidujuan.util.RequestUtils;

@Controller
@RequestMapping("/rentCar")
public class RentCarController {
	@Autowired
	private RentCarService rentCarService;
	
	@RequestMapping(method=RequestMethod.POST)
    @ResponseBody
    public String add(HttpServletRequest request, HttpServletResponse response){
		try {
			RentCar rentCar = this.wrap(request);
			if (this.rentCarService.add(rentCar)) {
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
			RentCar rentCar = this.wrap(request);
			if (this.rentCarService.add(rentCar)) {
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
			RentCar rentCar = this.wrap(request);
			if (this.rentCarService.add(rentCar)) {
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
			RentCar rentCar = this.wrap(request);
			List<Map<String, Object>> list = this.rentCarService.query(rentCar);
			if (null != list) {
				return RequestUtils.successReturn(JSONArray.toJSONString(list).toString());
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
	 */
	private RentCar wrap(HttpServletRequest request) {
		RentCar rentCar = new RentCar();
		rentCar.setImgUrl(RequestUtils.getValue(request, "imgUrl", ""));
		rentCar.setDes(RequestUtils.getValue(request, "des", ""));
		rentCar.setAddDate(new Date());
		rentCar.setCapacity(Integer.valueOf(RequestUtils.getValue(request, "capacity", "0")));
		rentCar.setPrice(Integer.valueOf(RequestUtils.getValue(request, "price", "0")));
		return rentCar;
	}
	
	
}
