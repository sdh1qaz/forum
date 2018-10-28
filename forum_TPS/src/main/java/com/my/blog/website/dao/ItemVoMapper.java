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
	
	int insert(ItemVo itemVo);
	
	List<ItemVo> selectAll();
	
	int deleteByItemId(String itemId);
	
	int updateByItemId(@Param("itemVo") ItemVo itemVo);
	
	
	
	

}
