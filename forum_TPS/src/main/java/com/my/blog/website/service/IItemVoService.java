package com.my.blog.website.service;

import com.github.pagehelper.PageInfo;
import com.my.blog.website.model.Vo.ItemVo;

/**
 * @ClassName： IItemService
 * @Author: dhSu
 * @Description:
 * @Date:Created in 2018年10月22日
 */

public interface IItemVoService {
	
	/**
	 * 查询待办返回多条数据
	 * @param p 当前页
	 * @param limit 每页条数
	 * @return ContentVo
	 */
	PageInfo<ItemVo> getItems(Integer p, Integer limit);

}
