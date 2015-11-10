package com.travel.meilidujuan.util;

import redis.clients.jedis.Jedis;

import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

/**
 * Created by liujintao on 15/11/4.
 */
public class RedisUtil {
    private String auth ="";
    private String host="";
    private int port=6379;
    private Properties configProperty;
    private static Jedis _instance=null;
    private RedisUtil(){
        configProperty = new Properties();
        try {
            configProperty.load(this.getClass().getClassLoader().getResourceAsStream("config.properties"));
            this.auth = configProperty.getProperty("redisAuth");
            this.host = configProperty.getProperty("redisHost");
            if(configProperty.getProperty("redisPort")!=null){
                this.port = Integer.parseInt(configProperty.getProperty("redisPort"));
            }
            this._instance = new Jedis(this.host,this.port);
            this._instance.auth(this.auth);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    public static Jedis getInstance(){
        if(_instance==null){
            new RedisUtil();
        }
        return _instance;
    }
    public static void main(String[]args){
        Jedis client = RedisUtil.getInstance();
        Map test = new HashMap();
        test.put("name","liujintao");
        test.put("age","26");
        test.put("address", "beijing");
        client.set("testKey","test");
        System.out.println(client.get("testKey"));
    }
}
