package com.travel.meilidujuan.dao;

import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.support.JdbcDaoSupport;

import com.travel.meilidujuan.model.Order;

/**
 * 订单服务
 * @author  Luoshuhong
 * @Company  
 * 2015年9月6日
 */
public class OrderDao extends JdbcDaoSupport implements DaoInter<Order> {
//	 `id` int(11) NOT NULL,
//	  `order_name` varchar(100) NOT NULL COMMENT '名称',
//	  `user_name` varchar(50) NOT NULL COMMENT '用户名',
//	  `user_sex` int(1) default '0' COMMENT '性别 0：男 1：女',
//	  `user_phone` int(11) default NULL COMMENT '联系方式',
//	  `user_qq` int(15) default NULL COMMENT 'qq',
//	  `user_city` varchar(50) default NULL COMMENT '城市',
	@Override
	public boolean add(Order t) {
		String insertSql = "insert into tb_order(order_name,user_name,user_sex,user_phone,user_qq,user_city)"
				+ "values(?,?,?,?,?,?)";
		return 1 == this.getJdbcTemplate().update(insertSql, 
				new Object[]{t.getOrderName(),t.getUserName(),t.getUserSex(),t.getUserPhone(),t.getUserQQ(),t.getUserCity()});
	}

	@Override
	public boolean update(Order t) {
		return false;
	}

	@Override
	public List<Map<String,Object>> query(Order t) {
		return null;
	}

	@Override
	public boolean del(int id) {
		return false;
	}
	
}
