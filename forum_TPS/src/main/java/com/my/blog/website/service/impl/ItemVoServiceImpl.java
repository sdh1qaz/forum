package com.my.blog.website.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.my.blog.website.dao.ContentVoMapper;
import com.my.blog.website.dao.ItemVoMapper;
import com.my.blog.website.model.Vo.ItemVo;
import com.my.blog.website.service.IItemVoService;

/**
 * @ClassName： ItemVoServiceImpl
 * @Author: dhSu
 * @Description: IItemVoService的实现类
 * @Date:Created in 2018年10月22日
 */
@Service
public class ItemVoServiceImpl implements IItemVoService{
	
	@Resource
	private ItemVoMapper itemDao;
	/**
	 * 查询待办返回多条数据
	 * @param p 当前页
	 * @param limit 每页条数
	 * @return ContentVo
	 */
	public PageInfo<ItemVo> getItems(Integer p, Integer limit){
		PageHelper.startPage(p, limit);
		List<ItemVo> items = itemDao.selectAll();
		return new PageInfo<>(items);
	}

}
