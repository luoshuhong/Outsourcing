package com.travel.meilidujuan.service;

import java.util.List;
import java.util.Map;

public interface ServiceInter<T> {
	public boolean add(T t);
	public boolean update(T t);
	public List<Map<String,Object>> query(T t);
	public boolean del(int id);
}
