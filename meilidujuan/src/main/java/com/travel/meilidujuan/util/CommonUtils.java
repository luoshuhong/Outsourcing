package com.travel.meilidujuan.util;

/**
 * 一些公共方法
 * @author Luoshuhong
 * @Company 
 * 2015年9月6日
 */
public class CommonUtils {
	
	/**
	 * 拼接sql 语句
	 * @param str
	 * @param key
	 * @param value
	 * @param symbol
	 * @return
	 */
	public static String addConnectors(String str, String key, Object value, String symbol) {
		if (6 < str.trim().length()) {
			str = str + " " + symbol;
		}
		
		if (value instanceof Integer || value instanceof Double
				|| value instanceof Short || value instanceof Float ) {
			str = str + " " + key + " = "+ value;
		} else {
			str = str + " " + key + " = '"+ value + "'";
		}
		
		return str;
	}
	
	/**
	 * 拼接sql 语句
	 * @param str
	 * @param key
	 * @param value
	 * @param symbol
	 * @return
	 */
	public static String addConnectorsLike(String str, String key, Object value, String symbol) {
		if (6 < str.trim().length()) {
			str = str + " " + symbol;
		}
		
		str = str + " " + key + " like '"+ value + "'";
		
		return str;
	}
	
	public static void main(String[] args) {
		String sql = "set name=xx";
		System.out.println(addConnectors(sql, "id", new Integer(12), ","));
	}
	
}
