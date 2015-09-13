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
import com.travel.meilidujuan.model.Image;
import com.travel.meilidujuan.service.ImageService;
import com.travel.meilidujuan.util.RequestUtils;

@Controller
@RequestMapping("/image")
public class ImageController {
	@Autowired
	private ImageService imageService;
	
	@RequestMapping(method=RequestMethod.POST)
    @ResponseBody
    public String add(HttpServletRequest request, HttpServletResponse response){
		try {
			Image image = this.wrap(request);
			if (this.imageService.add(image)) {
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
			Image image = this.wrap(request);
			if (this.imageService.add(image)) {
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
			Image image = this.wrap(request);
			if (this.imageService.add(image)) {
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
			Image image = this.wrap(request);
			List<Map<String, Object>> list = this.imageService.query(image);
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
	private Image wrap(HttpServletRequest request) {
		Image image = new Image();
		image.setUrl(RequestUtils.getValue(request, "imgUrl", ""));
		image.setDes(RequestUtils.getValue(request, "des", ""));
		image.setAddDate(new Date());
		image.setType(Integer.valueOf(RequestUtils.getValue(request, "type", "0")));
		image.setGroupId(Integer.valueOf(RequestUtils.getValue(request, "groupId", "0")));
		return image;
	}
}
