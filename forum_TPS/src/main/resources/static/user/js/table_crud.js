// 刷新页面
function refresh() {
	$table.bootstrapTable('refresh');
}

// 查询按钮点击事件
$("#btn_search").on("click", function() {
	refresh();
});

// 清空条件按钮点击事件
$("#btn_clean_search").on("click", function() {
	$('#csfBusinessCode').val("");
});

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

});

// 删除除一行按钮点击事件
function delData(id) {
	layer.confirm('id=' + id + '的数据?', {
		icon : 3,
		title : '提示'
	}, function() {
		$.ajax({
			url : '/curd/deleteCsfBusi',
			method : 'post',
			contentType : "application/x-www-form-urlencoded",
			// 阻止深度序列化，向后台传送数组
			traditional : true,
			data : {
				csfBusPro : tb_current,
				csfBusinessId : csfBusinessId
			},
			success : function(res) {
				if (res.returnCode == 0) {
					layer.msg('删除成功', {
						icon : 1,
						time : 2000
					});
				} else {
					layer.msg('删除失败', {
						icon : 2,
						time : 2000
					});
				}
				refresh();
			}
		})
	});
}

// 编辑数据，编辑按钮点击事件
function editData(row) {
	// 向模态框中传值
	$('#csf_business_code').val(row.csfBusinessCode);
	$('#in_params_template').val(row.inParamsTemplate);
	$('#mock_data').val(row.mockData);
	$('#csf_business_id').val(row.csfBusinessId);
	$('#addAndUpdateLabel').text("修改记录");

	// 显示模态窗口
	$('#addAndUpdate').modal({
		// 点击ESC键,模态窗口即会退出。
		keyboard : true
	});
}

// 修改或新增一条记录，弹窗保存按钮出发
$("#btn_add_update_submit")
		.off()
		.on(
				'click',
				function() {
					var csfBusinessCode = $('#csf_business_code').val(), inParamsTemplate = $(
							'#in_params_template').val(), mockData = $(
							'#mock_data').val(), csfBusinessId = $(
							'#csf_business_id').val(), txt_type = $('#txt_type')
							.val();

					// 验证数据
					if (!csfBusinessCode) {
						layer.msg('请填写csf_business_code!', {
							icon : 2,
							time : 1500
						});
						return false;
					}
					if (!inParamsTemplate) {
						layer.msg('请填写in_params_template!', {
							icon : 2,
							time : 1500
						});
						return false;
					}
					if (!mockData) {
						layer.msg('请填写mock_data!', {
							icon : 2,
							time : 1500
						});
						return false;
					}
					var url;
					if (txt_type == 'add') {
						url = '/curd/insertCsfBusi';
					} else {
						url = '/curd/updateCsfBusi';
					}
					$.ajax({
						url : url,
						method : 'post',
						contentType : "application/x-www-form-urlencoded",
						data : {
							csfBusinessCode : csfBusinessCode,
							inParamsTemplate : inParamsTemplate,
							mockData : mockData,
							csfBusinessId : csfBusinessId,
							csfBusPro : tb_current
						},
						// 阻止深度序列化，向后台传送数组
						traditional : true,
						success : function(res) {
							if (res.returnCode == 0) {
								layer.msg('保存成功', {
									icon : 1,
									time : 1500
								});
							} else {
								layer.msg('保存失败', {
									icon : 2,
									time : 1500
								});
							}
							refresh();
						}
					})
				});