package com.travel.meilidujuan.dao;

import java.util.List;
import java.util.Map;

/**
 * 数据库操作  接口定义
 * @author  Luoshuhong
 * @Company  
 * 2015年8月22日
 *
 */
public interface DaoInter<T> {
	//增删改查 CRUD
	public boolean add(T t);
	public boolean update(T t);
//	public List<T> query(T t);List<Map<String,Object>>
	public List<Map<String,Object>> query(T t);
	public boolean del(int id);
}
