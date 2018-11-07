package com.my.blog.website.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.my.blog.website.model.Vo.ItemVo;

/**
 * @ClassName： ItemVoMapper
 * @Author: dhSu
 * @Description:操作ItemVo的dao
 * @Date:Created in 2018年10月21日
 */

public interface ItemVoMapper {
	//新增一条待办
	int insert(ItemVo itemVo);
	
	//查询所有待办
	List<ItemVo> selectAll();
	
	//删除一条待办
	int deleteByItemId(Integer itemId);
	
	//更新一条待办
	int updateByItemId(@Param("itemVo") ItemVo itemVo);
	
	
}
