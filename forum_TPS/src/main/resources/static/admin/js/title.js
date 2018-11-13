/**
 * 设置页面标题，文章管理，仪表盘。。
 */

/*
 * 函数功能：从href获得参数 sHref: http://www.artfh.com/arg.htm?arg1=d&arg2=re
 * sArgName:arg1, arg2 return: the value of arg. d, re
 */
function GetArgsFromHref(sHref, sArgName) {
	var args = sHref.split("?");
	var retval = "";

	if (args[0] == sHref) /* 参数为空 */
	{
		return retval; /* 无需做任何处理 */
	}
	var str = args[1];
	args = str.split("&");
	for (var i = 0; i < args.length; i++) {
		str = args[i];
		var arg = str.split("=");
		if (arg.length <= 1)
			continue;
		if (arg[0] == sArgName)
			retval = arg[1];
	}
	return retval;
}

$(function() {
	// 获取地址栏title文章标题
	var title = GetArgsFromHref(window.location.href, 'title');
	switch (title) {
	case 'wzgl':
		document.getElementById("navigation_title").innerHTML = '文章管理';
		break;
	case 'ybp':
		document.getElementById("navigation_title").innerHTML = '仪表盘';
		break;
	case 'fbwz':
		document.getElementById("navigation_title").innerHTML = '发布文章';
		break;
	case 'plgl':
		document.getElementById("navigation_title").innerHTML = '评论管理';
		break;
	case 'zzbq':
		document.getElementById("navigation_title").innerHTML = '作者标签';
		break;
	case 'wjgl':
		document.getElementById("navigation_title").innerHTML = '文件管理';
		break;
	case null :
		documen
	default:
		document.getElementById("navigation_title").innerHTML = '编辑文章';
	}
});