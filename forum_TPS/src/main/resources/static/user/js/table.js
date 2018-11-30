/**
 * 表格初始化，使用bootstrap-table.js插件
 */

var $table = $('#tb_items');

// bootstrapTable使用中文
$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);

// 防止表头与表格不对齐
$(window).resize(function() {
	$table.bootstrapTable('resetView');
});

$(function() {
	// 解析出请求参数
	tableInit();
	$('#tb_items').bootstrapTable('hideLoading');

})

// 初始化Table
function tableInit() {
	// 先销毁表格
	$table.bootstrapTable('destroy');

	$table.bootstrapTable({
		// 请求地址
		url : 'items/getItems',
		// 请求方式
		method : 'post',
		// 请求内容类型
		contentType : "application/x-www-form-urlencoded",
		// 数据类型
		dataType : "json",
		// table高度，如果没有设置height属性，表格自动根据记录条数觉得表格高度
		//height : '900',
		// 是否显示行间隔色
		striped : true,
		// 是否启用排序
		sortable : true,
		// 排序方式
		sortOrder : "asc",
		// 是否使用缓存
		cache : false,
		// 每行的唯一标识
		uniqueId : "id",
		// 指定工具栏
		toolbar : "#toolbar",
		// 显示隐藏列
		showColumns : true,
		// 显示刷新按钮
		showRefresh : false,
		// 切换显示样式
		showToggle : false,
		// 显示Table脚部
		showFooter : false,
		// 是否显示详细视图
		cardView : false,
		// 是否显示父子表
		detailView : true,
		// detail格式化
		detailFormatter : genderDetail,
		// 是否显示分页
		pagination : true,
		// 是否显示分页按钮
		showPaginationSwitch : true,
		// 是否启用点击选中行
		clickToSelect : false,
		// 最少要显示的列数
		minimumCountColumns : 2,
		// cell没有值时显示
		undefinedText : '',
		// 分页方式：client客户端分页，server服务端分页
		sidePagination : "server",
		// 每页的记录行数
		pageSize : 7,
		// 初始化加载第1页，默认第1页
		pageNumber : 1,
		// 可供选择的每页的行数
		pageList : "[100, 25, 50, 80, 100]",
		paginationFirstText : "首页",
		paginationPreText : "上一页",
		paginationNextText : "下一页",
		paginationLastText : "末页",
		buttonsClass : 'default',
		iconsPrefix : 'glyphicon',
		queryParams : queryParams,
		icons : {
			paginationSwitchDown : 'glyphicon-collapse-down icon-chevron-down',
			paginationSwitchUp : 'glyphicon-collapse-up icon-chevron-up',
			refresh : 'glyphicon-refresh icon-refresh',
			toggle : 'glyphicon-list-alt icon-list-alt',
			columns : 'glyphicon-th icon-th',
			detailOpen : 'glyphicon-plus icon-plus',
			detailClose : 'glyphicon-minus icon-minus'
		},
		columns : [
		{
			title : '待办事项',
			field : 'cont',
			width : 300,
			align : 'left',
			valign : 'middle'
		},{
			title : '优先级',
			field : 'priority',
			width : 80,
			align : 'center',
			valign : 'middle'
		}, {
			title : '和谁有关',
			field : 'person',
			align : 'center',
			valign : 'middle'
		}, {
			title : '备注',
			field : 'deadLine',
			align : 'center',
			width : 120,
			valign : 'middle'
		}, {
			title : '创建时间',
			field : 'creatTime',
			width : 120,
			align : 'center',
			valign : 'middle'
		}, 
		{
			title : '提醒时间',
			field : 'remindTime',
			width : 120,
			align : 'center',
			valign : 'middle'
		},{
			title : '操作',
			field : 'operate',
			align : 'center',
			events : operateEvents,
			formatter : genderOpt,
		} ],
		responseHandler : function(res) {
			var obj = {
					"total" : res.total,//总条数
					"rows" : format(res.records),//ItemVo列表
			};
			return obj;
		},
		onLoadSuccess : function() {
			// 加载成功时执行
			console.log("加载成功!");
		},
		onLoadError : function() {
			// 加载失败时执行
			layer.msg("加载失败!", {
				icon : 2,
				time : 2000
			});
		},
		formatLoadingMessage : function() {
			// 正在加载
			return "无符合条件的记录";
		},
		formatNoMatches : function() {
			// 没有匹配的结果
			return '无符合条件的记录';
		}
	})
}

// 生成详细视图
function genderDetail(index, row) {
	var html = [];
	$.each(row, function(key, value) {
		html.push('<p><b>' + key + ':</b> ' + value + '</p>');
	});
	return html.join('');
}

// 生成序号
function genderIndex(value, row, index) {
	return index + 1;
}

// 替换delete数据为文字
function genderDel(value, row, index) {
	if (value == null || value == undefined) {
		return "-";
	} else if (value == 1) {
		return "已删除";
	} else if (value == 0) {
		return "正常";
	}
}

Date.prototype.formatDate = function(fmt)   
{ //author: meizz   
  var o = {   
    "M+" : this.getMonth()+1,                 //月份   
    "d+" : this.getDate(),                    //日   
    "H+" : this.getHours(),                   //小时   
    "m+" : this.getMinutes(),                 //分   
    "s+" : this.getSeconds(),                 //秒   
    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
    "S"  : this.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}

//处理rows中的日期，Integer转化为字符串日期
function format(rows){
	var size = rows.length;
	var temp;
	var temp1;
	for(i = 0;i < size; i++){
		temp = rows[i].creatTime;
		temp1 = rows[i].remindTime;
		rows[i].creatTime = new Date(temp*1000).formatDate("yyyy-MM-dd HH:mm:ss");
		if(temp1)
			rows[i].remindTime = new Date(temp1*1000).formatDate("yyyy-MM-dd HH:mm:ss");
	}
	return rows;	
}

// 每行表格中的编辑和删除标志
function genderOpt() {
	return [ '<a id="edit" href="javascript:void(0)" title="编辑">',
			'<i class="glyphicon glyphicon-pencil"></i>', '</a>  ',
			'<a id="remove" href="javascript:void(0)" title="删除">',
			'<i class="glyphicon glyphicon-trash"></i>', '</a>' ].join('');
}

// 修改，删除表格中的数据表记录
window.operateEvents = {
	'click #edit' : function(e, value, row, index) {
		editData(row);
	},
	'click #remove' : function(e, value, row, index) {
		delData(row.itemId);
	}
};

// 查询条件与分页数据
function queryParams(params) {
	// 排序方式
	params.order = "modify_time desc";
	// 第几页
	params.nowPage = this.pageNumber;
	// 传递csfBusinessCode
	return params;
}