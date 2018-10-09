package com.my.blog.website.controller;

import com.my.blog.website.model.Vo.UserVo;
import com.my.blog.website.utils.TaleUtils;
import com.my.blog.website.utils.MapCache;
import javax.servlet.http.HttpServletRequest;

/**
 * @ClassName： CheckIdcardPojo
 * 
 * @Author: dhSu
 * @Description:检查身份证信息
 * @Date:Created in 14:25 2018/02/19
 */
public abstract class BaseController {

	public static String THEME = "themes/default";

	protected MapCache cache = MapCache.single();

	/**
	 * 主页的页面主题
	 * 
	 * @param String viewName
	 * @return String
	 * @throws 
	 */
	public String render(String viewName) {
		return THEME + "/" + viewName;
	}

	public BaseController title(HttpServletRequest request, String title) {
		request.setAttribute("title", title);
		return this;
	}

	public BaseController keywords(HttpServletRequest request, String keywords) {
		request.setAttribute("keywords", keywords);
		return this;
	}

	/**
	 * 获取请求绑定的登录对象
	 * 
	 * @param String viewName
	 * @return String
	 * @throws 
	 */
	public UserVo user(HttpServletRequest request) {
		return TaleUtils.getLoginUser(request);
	}

	public Integer getUid(HttpServletRequest request) {
		return this.user(request).getUid();
	}

	public String render_404() {
		return "comm/error_404";
	}

}
