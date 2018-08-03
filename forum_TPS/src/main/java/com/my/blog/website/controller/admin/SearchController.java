package com.my.blog.website.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @ClassName： SearchController
 * @Author: dhSu
 * @Description: 文章题目关键词搜索
 * @Date:Created in 2018年8月3日
 */
@Controller()

public class SearchController {
	@RequestMapping("admin/search")
    public String listSearchResut() {
    	String result = "";
    	return result;
    }
}
