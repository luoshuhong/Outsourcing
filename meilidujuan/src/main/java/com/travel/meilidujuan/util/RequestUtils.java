package com.travel.meilidujuan.util;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;

import com.alibaba.fastjson.JSONObject;

/**
 * 
 * 处理相关的公共操作
 * @author Luoshuhong
 * @Company  
 * 2015年8月29日
 *
 */
public class RequestUtils {
	
	/**
	 * 
	 * @param job
	 * @param key
	 * @param defValue
	 * @return
	 */
	public static String getValue(HttpServletRequest request, String key, String defValue) {
		String value = request.getParameter(key);
		System.out.println("--key:" + key + ", value=" + value);
		return null == value ? defValue : value;
	}
	
	/**
	 * 
	 * @param job
	 * @param key
	 * @param defValue
	 * @return
	 */
	public static String getValue(JSONObject job, String key, String defValue) {
		String value = "";
		if (null == job) {
			return defValue;
		} 
		if (!job.containsKey(key)) {
			return defValue;
		} else {
			value = job.getString(key);
		}
		
		System.out.println("--key:" + key + ", value=" + value);
		return StringUtils.isEmpty(value) ? defValue : value;
	}
	/**
	 * 请求转换成json 数据
	 * @param request
	 * @return
	 * @throws IOException
	 */
	public static JSONObject getJsonRequest(HttpServletRequest request) throws IOException {
		BufferedReader reader = request.getReader();
		String line = reader.readLine();
		StringBuffer sb = new StringBuffer("");
		while(!StringUtils.isEmpty(line)) {
			sb.append(line);
			line = reader.readLine();
		}
		return JSONObject.parseObject(sb.toString());
	}
	
	/**
	 * 组装返回值
	 * {
     *   status:xxx,  //success：成功  fail:失败 
     *  msg:xxx      //说明 status=success时错误原因   
   	 *	}
	 * @return
	 */
	public static String successReturn(String data) {
		JSONObject job = new JSONObject();
		job.put("status", "success");
		job.put("msg", "success");
		if (!StringUtils.isEmpty(data)) {
			job.put("data", data);
		}
		return job.toJSONString();
	}
	
	public static String failReturn(String errMsg) {
		JSONObject job = new JSONObject();
		job.put("status", "fail");
		job.put("msg", errMsg);
		return job.toJSONString();
	}
	
//	public static Map<String,Object> getReqParam(HttpServletRequest request) {
//		request.getParameterMap();
//		return null;
//	}
}
