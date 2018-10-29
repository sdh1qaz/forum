package com.my.blog.website.controller.user;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.my.blog.website.model.Pages;
import com.my.blog.website.model.Vo.ItemVo;
import com.my.blog.website.service.IItemVoService;

/**
 * @ClassName： ItemController
 * @Author: dhSu
 * @Description: 对ItemVo增删改查
 * @Date:Created in 2018年10月28日
 */
@RequestMapping("user/items")
@RestController
public class ItemController {
	//private static final Logger LOGGER = LoggerFactory.getLogger(ItemController.class);
	
	@Resource
	private IItemVoService iItemVoService;
	
	//返回所有的待办数据
	@RequestMapping(value = "/getItems", method = RequestMethod.POST)
	public Pages<ItemVo> getItems(HttpServletRequest request){
		//String id = request.getParameter("id");
		String limit = request.getParameter("limit");
		String nowPage = request.getParameter("nowPage");
		// String order = request.getParameter("order");
		List<ItemVo> items = iItemVoService.getAllItems();
		// 当前页数
		int nowPaged = Integer.parseInt(null == nowPage ? "1" : nowPage);
		// 每页显示页数
		int limitd = Integer.parseInt(null == limit ? "10" : limit);
		Pages<ItemVo> pages = new Pages<>();
		// 开始分页,参数1为请求第几页,参数2为请求条数
		PageHelper.startPage(nowPaged, limitd);
		// 取记录总条数
		PageInfo<ItemVo> pageInfo = new PageInfo<>(items);
		int total = (int) pageInfo.getTotal();
		pages.setSuccess(true);
		pages.setMsg("共查询出" + total + "条数据!");
		pages.setRecords(items);
		pages.setTotal(total);
		pages.setStatus(0);
		return pages;
	}
}
