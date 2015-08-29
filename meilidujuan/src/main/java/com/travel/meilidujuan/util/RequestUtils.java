package com.travel.meilidujuan.util;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

/**
 * 
 * 处理相关的公共操作
 * @author Luoshuhong
 * @Company  
 * 2015年8月29日
 *
 */
public class RequestUtils {
	
	public static Map<String,Object> getReqParam(HttpServletRequest request) {
		request.getParameterMap();
		return null;
	}
}
