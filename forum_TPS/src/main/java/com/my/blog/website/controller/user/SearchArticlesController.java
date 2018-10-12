package com.my.blog.website.controller.user;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.my.blog.website.service.IContentService;

import net.sf.json.JSONArray;

/**
 * @ClassName： SearchArticlesController
 * @Author: dhSu
 * @Description:
 * @Date:Created in 2018年10月11日
 */
@RestController
public class SearchArticlesController {
	
	@Resource
	private IContentService contentService;
	/**
	 * 搜索框自动提示
	 * 
	 * @param String keyword
	 * @return arry
	 */
	@RequestMapping("user/titles")
	public Object getSearchResults(String keyword) {
		List<String> list = contentService.getTitles(keyword);
		JSONArray arry = JSONArray.fromObject(list);
		return arry.toString();
	}

}
