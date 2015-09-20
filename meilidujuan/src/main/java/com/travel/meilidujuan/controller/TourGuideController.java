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
import com.travel.meilidujuan.model.TourGuide;
import com.travel.meilidujuan.service.TourGuideService;
import com.travel.meilidujuan.util.RequestUtils;

@Controller
@RequestMapping("/tourGuide")
public class TourGuideController {
	@Autowired
	private TourGuideService tourGuideService;
	
	@RequestMapping(method=RequestMethod.POST)
    @ResponseBody
    public String add(HttpServletRequest request, HttpServletResponse response){
		try {
			TourGuide tourGuide = this.wrap(request);
			if (this.tourGuideService.add(tourGuide)) {
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
			TourGuide tourGuide = this.wrap(request);
			if (this.tourGuideService.add(tourGuide)) {
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
			TourGuide tourGuide = this.wrap(request);
			if (this.tourGuideService.add(tourGuide)) {
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
			TourGuide tourGuide = this.wrap(request);
			List<Map<String, Object>> list = this.tourGuideService.query(tourGuide);
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
	private TourGuide wrap(HttpServletRequest request) {
		TourGuide tourGuide = new TourGuide();
		tourGuide.setImgUrl(RequestUtils.getValue(request, "imgUrl", ""));
		tourGuide.setIntroduction(RequestUtils.getValue(request, "introduction", ""));
		tourGuide.setWorkYears(RequestUtils.getValue(request, "workYears", ""));
		tourGuide.setPrice(Integer.valueOf(RequestUtils.getValue(request, "price", "0")));
		return tourGuide;
	}
	
	
	
}
