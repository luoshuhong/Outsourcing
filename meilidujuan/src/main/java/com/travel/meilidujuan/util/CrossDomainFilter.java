package com.travel.meilidujuan.util;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;


/**
 * <p>Description: 运行跨域过滤器</p>
 * <p>Company:  </p>
 * @author luoshuhong
 * @date 2015-8-29 
 * @version 1.0
 */
public class CrossDomainFilter implements Filter {
	@Override
    public void destroy() {
        
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
            FilterChain chain) throws IOException, ServletException {
        HttpServletResponse httpResponse = (HttpServletResponse) response;
        httpResponse.setHeader("Access-Control-Allow-Origin","*");
        chain.doFilter(request, httpResponse);
    }

	public void init(FilterConfig arg0) throws ServletException {
		
	}
}