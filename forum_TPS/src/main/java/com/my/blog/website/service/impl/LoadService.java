package com.my.blog.website.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import com.my.blog.website.dao.ContentVoMapper;
import com.my.blog.website.dao.OptionVoMapper;
import com.my.blog.website.model.Vo.ContentVo;
import com.my.blog.website.model.Vo.OptionVo;

/**
 * @ClassName： LoadService
 * @Author: dhSu
 * @Description: 启动时任务
 * @Date:Created in 2019年5月8日
 */

@Service
public class LoadService implements CommandLineRunner{
	
	private static final Logger LOGGER = LoggerFactory.getLogger(LoadService.class);

	@Resource
	private HistoryQueue<ContentVo> histQ;
	
	@Autowired
	private OptionVoMapper optionVoDao;
	
	@Autowired
	private ContentVoMapper contentVoDao;
	
	//启动时加载数据库中的浏览历史cid到内存中
	@Override
	public void run(String... arg0) throws Exception {
		LOGGER.info("启动时时加载数据库中的浏览历史cid到内存开始。。。");
		//读取数据库中的浏览历史cid
		OptionVo op = optionVoDao.selectByPrimaryKey("history_cid_list");
		String[] cArr = op.getValue().split("-");
		List<ContentVo> opList = new ArrayList<>();
		for(String cid : cArr) {
			//获取文章对象
			ContentVo cont = contentVoDao.selectByPrimaryKey(Integer.valueOf(cid));
			opList.add(cont);
		}
		//文章列表添加队列
		histQ.addAll(opList);
		LOGGER.info("启动时时加载数据库中的浏览历史cid到内存结束。。。");
	}
}
