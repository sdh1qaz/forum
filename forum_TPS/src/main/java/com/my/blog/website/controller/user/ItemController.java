
package com.my.blog.website.controller.user;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Queue;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.my.blog.website.model.Pages;
import com.my.blog.website.model.Vo.ContentVo;
import com.my.blog.website.model.Vo.ItemVo;
import com.my.blog.website.service.IItemVoService;
import com.my.blog.website.service.impl.HistoryQueue;


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
	
	//返回所有待办
	@RequestMapping(value = "/getItems", method = RequestMethod.POST)
	public Pages<ItemVo> getItems(HttpServletRequest request){
		String limit = request.getParameter("limit");
		String nowPage = request.getParameter("nowPage");
		
		// 当前页数
		int nowPaged = Integer.parseInt(null == nowPage ? "1" : nowPage);
		// 每页显示页数
		int limitd = Integer.parseInt(null == limit ? "10" : limit);
		Pages<ItemVo> pages = new Pages<>();
		// 开始分页,参数1为请求第几页,参数2为请求条数
		PageHelper.startPage(nowPaged, limitd);
		List<ItemVo> items = iItemVoService.getAllItems();
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
	
	//增加一条待办
	@RequestMapping(value = "/insertItem", method = RequestMethod.POST)
	public String addItem(ItemVo itemVo,HttpServletRequest request) {
		itemVo.setCont(request.getParameter("cont"));//待办内容
		itemVo.setPriority(request.getParameter("priority"));//待办优先级
		itemVo.setDeadLine(request.getParameter("deadLine"));//截止时间
		itemVo.setPerson(request.getParameter("person"));//干系人
		itemVo.setRemindTime(Integer.parseInt(request.getParameter("remindTime")));//提醒时间
		//生成时间戳  创建时间
		itemVo.setCreatTime(new Integer((int)(System.currentTimeMillis() / 1000)));
		int result = iItemVoService.insert(itemVo);
		System.out.println("*******************" + result);
		if(result != -1)
			return "success";
		else
			return "fail";
	}
	
	//删除一条待办
	@RequestMapping(value = "/deleteItem", method = RequestMethod.POST)
	public String deleteItem(HttpServletRequest request) {
		Integer itemId = new Integer(request.getParameter("itemId"));
		int result = iItemVoService.deleteByItemId(itemId);
		if(result != -1)
			return "success";
		else
			return "fail";
	}
	
	//更新一条待办
	@RequestMapping(value = "/updateItem", method = RequestMethod.POST)
	public String updateItem(ItemVo itemVo,HttpServletRequest request) {
		itemVo.setCont(request.getParameter("cont"));//待办内容
		itemVo.setDeadLine(request.getParameter("deadLine"));//截止时间
		itemVo.setPerson(request.getParameter("person"));//干系人
		itemVo.setPriority(request.getParameter("priority"));
		String tmp = request.getParameter("remindTime");
		if (tmp!=null && !"".equals(tmp)) 
			itemVo.setRemindTime(Integer.parseInt(tmp));//提醒时间
		else
			itemVo.setRemindTime(null);
		int result = iItemVoService.updateByItemId(itemVo);
		if(result != -1)
			return "success";
		else
			return "fail";
	}
	
	//是否有待办
	@RequestMapping(value = "/isHasItems", method = RequestMethod.GET)
	public String isHasItems() {
		List<ItemVo> items = iItemVoService.getAllItems();
		int size = items.size();
		if(size == 0)
			return "nothing";
		StringBuilder sb = new StringBuilder();
		int count = 1;
		for(int i = 0;i < size;i++) {
			ItemVo itemVo = items.get(i);
			if("高".equals(itemVo.getPriority())) {
				if(count == 1)
					sb.append("您有以下优先级为高的事情要做：\n\n");
				sb.append(count + "." + itemVo.getCont() + "；\n");
				count += 1;
				
			}
			else
				continue;
		}
		if(sb.length() == 0)
			sb.append("您有待办需处理！");
		return sb.toString();
	}
	
	//返回快要到期的提醒
	@RequestMapping(value = "/getDueItems", method = RequestMethod.GET)
	public String getDueItems() {
		List<ItemVo> items = iItemVoService.getAllItems();
		StringBuilder sb = new StringBuilder();
		
		long now = System.currentTimeMillis() / 1000;
		int size = items.size();
		int count = 1;
		for(int i = 0;i < size;i++) {
			ItemVo itemVo = items.get(i);
			if(itemVo.getRemindTime() == null)
				continue;
			else if(itemVo.getRemindTime() - now < 3600*24*3) {
				sb.append(count + ". " + itemVo.getCont() + "\n");
				count += 1;
			}
		}
		if(sb.length() != 0) {
			sb.insert(0, "您该做以下事情了：\n\n");
		}else
			sb.append("nothing");
		return sb.toString();
	}
	
}
