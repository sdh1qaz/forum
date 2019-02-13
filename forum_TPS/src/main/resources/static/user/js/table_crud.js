// 刷新页面
function refresh() {
	$table.bootstrapTable('refresh');
}

// 新增按钮点击事件
$("#btn_add").on("click", function() {
	$('#addAndUpdateLabel').text("新增待办");
	$('#txt_type').val("add");
	$('#addAndUpdate').modal({
		// 点击ESC键,模态窗口即会退出。
		keyboard : true
	});
});

// 刷新按钮点击事件
$("#btn_refresh").on("click", function() {
	refresh();
});

// 切换视图按钮点击事件
$("#btn_toggleview").on("click", function() {
	$table.bootstrapTable('toggleView');
});

// 显隐分页按钮点击事件
$("#btn_togglepage").on("click", function() {
	$table.bootstrapTable('togglePagination');
});

// 跳转按钮点击事件
$("#btn_selectpage").on("click", function() {
	var pageNum = 3;
	$table.bootstrapTable('selectPage', pageNum);
});

// 清除弹窗原数据
$("#addAndUpdate").on("hidden.bs.modal", function() {
	$('#txt_type').val("");
	$('#text').val("");
	$('#person').val("");
	$('#deadLine').val("");
	$('#creatTime').val("");
	$('#cont').val("");
	$('#remindTime').val("");
	//$("input[name='priority'][type=radio]").removeAttr("checked");//radio单选框不选中
	//$("input:radio[name="priority"]").attr("checked",false);
});

// 删除除一行按钮点击事件
function delData(id) {
	layer.confirm('itemId=' + id + '的数据?', {
		icon : 3,
		title : '提示'
	}, function() {
		$.ajax({
			url : 'items/deleteItem',
			method : 'post',
			contentType : "application/x-www-form-urlencoded",
			// 阻止深度序列化，向后台传送数组
			traditional : true,
			data : {
				itemId : id
			},
			success : function(res) {
				if (res == 'success') {
					layer.msg('删除成功', {
						icon : 1,
						time : 1000
					});
				} else {
					layer.msg('删除失败', {
						icon : 2,
						time : 1000
					});
				}
				refresh();
			}
		})
	});
}

// 编辑按钮点击事件
function editData(row) {
	// 向模态框中传值
	$('#itemId').val(row.itemId);// 待办id
	$('#cont').val(row.cont);// 事项内容
	$('#deadLine').val(row.deadLine);// 要求完成时间
	$('#person').val(row.person);// 干系人
	$('#remindTime').val(row.remindTime);// 干系人
	$("input[name='priority'][type=radio][value='" + row.priority + "']").attr("checked",true);
	$('#addAndUpdateLabel').text("修改待办");

	// 显示模态窗口
	$('#addAndUpdate').modal({
		// 点击ESC键,模态窗口即会退出。
		keyboard : true
	});
}

//编辑或保存 弹窗保存按钮事件
$("#btn_add_update_submit")
		.off()
		.on(
				'click',
				function() {
					var itemId = $('#itemId').val(), cont = $(
							'#cont').val(),priority = $('input[name="priority"]:checked').val(),
							deadLine = $('#deadLine').val(), person = $(
							'#person').val(), txt_type = $('#txt_type').val(),remindTime=$('#remindTime').val();
					if(remindTime){
						remindTime = new Date(remindTime).getTime()/1000;
					}

					// 验证数据，待办内容不能为空
					if (!cont) {
						layer.msg('请填写待办内容!', {
							icon : 2,
							time : 1000
						});
						return false;
					}
					
					var url;
					if (txt_type == 'add') {
						url = 'items/insertItem';
					} else {
						url = 'items/updateItem';
					}
					$.ajax({
						url : url,
						method : 'post',
						dataType : 'text',//返回纯文本字符串 
						contentType : "application/x-www-form-urlencoded",
						data : {
							itemId : itemId,
							priority : priority,
							cont : cont,
							deadLine : deadLine,
							person : person,
							remindTime : remindTime
						},
						// 阻止深度序列化，向后台传送数组
						traditional : true,
						success : function(res) {
							if (res == 'success') {
								layer.msg('保存成功', {
									icon : 1,
									time : 1000
								});
							} else {
								layer.msg('保存失败', {
									icon : 2,
									time : 1000
								});
							}
							refresh();
						}
					})
				});