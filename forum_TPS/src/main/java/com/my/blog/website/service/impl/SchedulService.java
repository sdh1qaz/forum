package com.my.blog.website.service.impl;

import java.util.Iterator;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.my.blog.website.dao.OptionVoMapper;
import com.my.blog.website.model.Vo.ContentVo;
import com.my.blog.website.model.Vo.OptionVo;

/**
 * @ClassName： SchedulService
 * @Author: dhSu
 * @Description: 定时任务
 * @Date:Created in 2019年5月8日
 */
@Component
@Configurable
@EnableScheduling
public class SchedulService {
	private static final Logger LOGGER = LoggerFactory.getLogger(SchedulService.class);
	
	@Resource
	private HistoryQueue<ContentVo> histQ;
	
	@Autowired
	private OptionVoMapper optionVoDao;
	
	//每1分钟将队列中的文章id插入数据库中
	@Scheduled(cron = "0 0/1 * * * ? ")
	public void updateQueue() {
		LOGGER.info("定时任务：浏览历史列表中的文章cid更新到数据库开始。。。");
		//遍历队列
		Iterator<ContentVo> iterator = histQ.iterator();
		//历史文章cid的字符串，以-间隔
		StringBuffer cidStr = new StringBuffer();
		while (iterator.hasNext()) {
			ContentVo c = iterator.next();
			cidStr.append(c.getCid() + "-");
		}
		//将cidStr更新到数据库中
		OptionVo op = new OptionVo();
		op.setName("history_cid_list");
		op.setValue(cidStr.toString());
		optionVoDao.updateByPrimaryKeySelective(op);
		LOGGER.info("定时任务：浏览历史列表中的文章cid更新到数据库完成。。。");
	}
}
