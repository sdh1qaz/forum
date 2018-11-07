package com.my.blog.website.service;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.annotations.Param;

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
	 * @return PageInfo<ItemVo>
	 */
	PageInfo<ItemVo> getItems(Integer p, Integer limit);
	
	/**
	 * 查询所有待办
	 * @return List<ItemVo>
	 */
	List<ItemVo> getAllItems();
	
	/**
	 * 新增一条待办
	 * @return int
	 */
	int insert(ItemVo itemVo);
	
	/**
	 * 删除一条待办
	 * @return int
	 */
	int deleteByItemId(Integer itemId);
	
	/**
	 * 更新一条待办
	 * @return int
	 */
	int updateByItemId(@Param("itemVo") ItemVo itemVo);

}
