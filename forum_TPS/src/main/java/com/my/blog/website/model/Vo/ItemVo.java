package com.my.blog.website.model.Vo;

import java.io.Serializable;

/**
 * @ClassName： ItemVo
 * @Author: dhSu
 * @Description:待办事项
 * @Date:Created in 2018年10月21日
 */

public class ItemVo implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 7289093439854542275L;
	private Integer itemId;//待办事项Id
	private String  cont;//待办事项内容
	private Integer deadLine;//截止时间
	private String person;//相关人
	private Integer creatTime;//创建时间
	
	public String getPerson() {
		return person;
	}
	public void setPerson(String person) {
		this.person = person;
	}
	public Integer getItemId() {
		return itemId;
	}
	public void setItemId(Integer itemId) {
		this.itemId = itemId;
	}
	public Integer getDeadLine() {
		return deadLine;
	}
	public void setDeadLine(Integer deadLine) {
		this.deadLine = deadLine;
	}
	public Integer getCreatTime() {
		return creatTime;
	}
	public void setCreatTime(Integer creatTime) {
		this.creatTime = creatTime;
	}
	public String getCont() {
		return cont;
	}
	public void setCont(String cont) {
		this.cont = cont;
	}
	
}
