/*var test_list = [
		"亲测可用的ajax代码模板",
		"ajax中回调函数不执行",
		"文档加载完就执行 ajax代码",
		"数据库密码加密方法",
		"$(function ()什么意思",
		"解决html中文乱码",
		"高效遍历列表list ArrayList",
		"springboot向前台返回json格式的array数组",
		"Missing artifact net.sf.json-lib:json-lib:jar:2.4",
		"讯飞maven库里增加jar包联系谁？",
		"input输入框自动提示",
		"云桌面被锁了怎么办",
		"接手四川",
		"中移新git怎样查自己在项目的权限",
		"新git怎样查自己在项目的权限",
		"c盘临时目录tomcat-docbase.xxxxxxx.8080",
		"springboot配置",
		"springboot的内置tomcat每次启动的项目目录docbase都不一样 上传文件后重启找不到",
		"各种浏览器清除缓存的方法",
		"button按钮按下响应方法",
		"按回车搜索，button按钮回车方法",
		"登辉出的面试题",
		"dos命令行全屏",
		"Telnet连接到主机后输入命令不显示",
		"DOS命令查看局域网所有IP和对应mac",
		"java HttpServletRequest获取客户端ip和端口port",
		"springboot:在线生成banner",
		"广西 接口测试映射ip",
		"测试云桌面账号密码",
		"enum 枚举类代码例子",
		"@Bean(initMethod = \"init\", destroyMethod = \"close\")",
		"@RequestMapping的6个基本用法",
		"@requestMapping链接中带有{}的作用？映射方法@GetMapping",
		"抽象类是不是一定要有抽象方法？",
		"JavaBean，POJO，VO，DTO",
		"讯飞总部财务会计联系方式 报销",
		"用枚举 enum实现完美单例 解决并发问题",
		"voltaile有什么作用",
		"新对话dcm dics 集成csf接口平台经验教训",
		"linux ~表示什么？",
		"linux:文件复制",
		"linux:文件移动",
		"linux:查看PATH环境变量",
		"江西tps web层启动脚本解释 tps_start.sh",
		"java打包命令  jar",
		"System.setProperty(\"cmos.system.id\", \"uvn_tps_gx\")的作用 java -Dcmos.system.id=uvn_tps_gx jvm设置系统变量属性",
		"<body th:class=\"${is_post}?'':'bg-grey'\"> thymeleaf学习笔记",
		"windows命令行下管理进程 dos 端口占用",
		"什么是环境变量？windows linux",
		"scp命令 linux文件传输 本地服务器与远程服务器（同一网段内）相互传输文件",
		"mysql 模糊查询语句 sql",
		"mysql 字段timestamp与current_timestamp时间戳",
		"解决mysql表中中文乱码的方法",
		"mysql变更密码的命令行方法",
		"[Err] 1406 - Data too long for column 'name' at row 1",
		"mysql命令行下运行sql脚本的方法",
		"mysql免安装版心得",
		"linux：查看文件内容 less 查日志能用上",
		"查看文件类型 是目录？是shell脚本？",
		"linux：相对路径名",
		"linux：绝对路径名",
		"linux命令：更改当前工作目录",
		"linux命令：列出文件目录",
		"linux 查看当前工作目录",
		"linux ls -l  ll 文件列表含义 -rw-r--r-- root root",
		"SQL UNIQUE  key约束",
		"存储过程快速插入大批量数据 MyISAM InnoDB",
		"Mysql数据库之auto_increment",
		"java中statement的详细用法",
		"java中Date与String的转换",
		"mysql的jdbc driver的maven依赖",
		"Eclipse格式化整个项目",
		"当创建对象时",
		"操作系统和Web服务器那点事儿",
		"tts中包含英文双引号导致ivr挂机",
		"本地构建构建分支或者tag",
		"linux查找文件  find",
		"mysql  孤表 删除表成功，再创建说已存在  drop  table already exists",
		"查看Eclipse中的提交记录",
		"java异常体系图",
		"java util.Date转换成sql.Date",
		"代码 得到当前方法的名字",
		"代码 字符串与整形转换",
		"一段话中所有数字前加[n2]",
		"数据库字符串替换",
		"什么是shell",
		"linux 回到根目录",
		"linux回到上一次所在的目录",
		"linux 查看操作系统版本",
		"解释下图中的java虚拟机参数，开发环境启动core.jar  control.jar",
		"linux：删除一个目录",
		"linux实用命令",
		"《java编程思想》读书笔记",
		"客户端获取服务基本信息为空 csf异常",
		"rel=\"stylesheet\"什么意思",
		"获取一个对象的类名",
		"取得一个类的全部实现接口 反射",
		"取得一个类的父类 反射",
		"获取一个类的全部构造方法",
		"eclispe中maven build中的final memory是什么意思",
		"csf接入渠道权限不足",
		"mybatis中的namespqce是做什么用的",
		"<input>文本框关闭自动提示",
		"mybatis 动态sql 动态传表名",
		"${ } 与 #{ } 的区别",
		"mybatis防止sql注入 # $",
		"mybatis学习",
		"java学习教程",
		"字符串中的（）替换不掉",
		"新git gitlab git新账号",
		"设置html背景图片",
		"获取地址栏中的参数",
		"改变<h1>标签中的值h1 h2 h3 h4",
		"mysql数据类型和java中类型对应",
		"换行符(\\n)替换为明文显示(\\n) \\n \\\\n \\\\\\\\",
		"bat命令启动各种浏览器",
		"陈丹婷4a开发测试服务器",
		"防掉线脚本网址自动刷新",
		"用键盘选定",
		"正则表达式匹配包含几个关键词的字符串，匹配任意字符串",
		"@echo off是什么意思",
		"火眼不掉线功能实现",
		"欢迎访问论坛",
		"\\target\\classes\\META-INF\\MANIFEST.MF 什么作用？",
		"Eclipse 中的 run configuraturation 详解",
		"导航系统组件架构",
		"能力平台和导航平台之间的关系",
		"git merge 中出现 DIRTY_INDEX ",
		"IVR是什么东东",
		"现有的生产云桌面账号密码",
		"git图标问号加号星号什么意思",
		"git地址",
		"郑州本地部署core包的192.168.117.23",
		"maven多模块项目热部署方法 tps",
		"restriction on required library 'C:\\Program Files\\Java\\jre1.8.0_121\\lib\\ext\\nashorn.jar'",
		"excel中某一列3-5-123替换第一个“-”为“#”", "HTTP 400 错误 - 请求无效 (Bad request)",
		"\\r\\n  \\n  \\r 有什么区别", "还怕日报忘填吗？windows的计划任务用起来",
		"<a href=\"#comments\" >是什么意思", "input表单去掉按回车自动提交功能",
		"TPS系统生产数据库脚本备份回退脚本规范", "TPS组员联系方式", "进不去导航播报系统繁忙", "cac缺少一个进程怎么办",
		"张大胖的socket", "sql语句积累", "thymeleaf 学习笔记", "我是一个Java class",
		"搞懂了这几点，你就学会了Web编程", "Java 帝国之建造者模式", "Eclipse常用快捷键", "我是一个线程",
		"什么是RESTful api 服务？", "java获得访问者ip，为什么获得的值是ip \"0:0:0:0:0:0:0:1\"",
		"try里面return，finally里面的操作 影响不影响最终结果？", "论坛怎样上传图片？？？",
		"8080端口被占用程序启动不了解决办法", "构建", "测试环境查看日志", "项目中用到的linux命令", "查看日志常用vi命令",
		"set  session  autocommit=0 的作用？", "查看数据库占用的端口", "理解四套环境",
		"业务处理系统控制层结构疑问", "洛阳开发环境查看日志和操作数据库", "登录火眼查看生产日志",
		"查日志 用 /关键字   和 grep 关键字  app.log的区别", "TPS项目中用到的注解和其作用" ];*/

var old_value = "";
var highlightindex = -1; // 高亮
// 自动完成
function AutoComplete(auto, search, mylist) {
	if ($("#" + search).val() != old_value || old_value == "") {
		var autoNode = $("#" + auto); // 缓存对象（弹出框）
		var carlist = new Array();
		var n = 0;
		old_value = $("#" + search).val();
		for (i in mylist) {
			if (mylist[i].indexOf(old_value) >= 0) {
				carlist[n++] = mylist[i];
			}
		}
		if (carlist.length == 0) {
			autoNode.hide();
			return;
		}
		autoNode.empty(); // 清空上次的记录
		for (i in carlist) {
			var wordNode = carlist[i]; // 弹出框里的每一条内容
			var newDivNode = $("<div>").attr("id", i); // 设置每个节点的id值
			newDivNode
					.attr("style",
							"font:14px/25px arial;padding:0 8px;cursor: pointer;text-align: left; ");
			newDivNode.html(wordNode).appendTo(autoNode); // 追加到弹出框
			// 鼠标移入高亮，移开不高亮
			newDivNode.mouseover(function() {
				if (highlightindex != -1) { // 原来高亮的节点要取消高亮（是-1就不需要了）
					autoNode.children("div").eq(highlightindex).css(
							"background-color", "white");
				}
				// 记录新的高亮节点索引
				highlightindex = $(this).attr("id");
				$(this).css("background-color", "#ebebeb");
			});
			newDivNode.mouseout(function() {
				$(this).css("background-color", "white");
			});
			// 鼠标点击文字上屏
			newDivNode.click(function() {
				// 取出高亮节点的文本内容
				var comText = autoNode.hide().children("div")
						.eq(highlightindex).text();
				highlightindex = -1;
				// 文本框中的内容变成高亮节点的内容
				$("#" + search).val(comText);
				window.location.href = '/user/search?keyword=' + comText;
			})
			if (carlist.length > 0) { // 如果返回值有内容就显示出来
				autoNode.show();
			} else { // 服务器端无内容返回 那么隐藏弹出框
				autoNode.hide();
				// 弹出框隐藏的同时，高亮节点索引值也变成-1
				highlightindex = -1;
			}
		}
	}
	// 点击页面隐藏自动补全提示框
	document.onclick = function(e) {
		var e = e ? e : window.event;
		var tar = e.srcElement || e.target;
		if (tar.id != search) {
			if ($("#" + auto).is(":visible")) {
				$("#" + auto).css("display", "none")
			}
		}
	}
}
$(function() {
	old_value = $("#search-inp").val();

	/*
	 * $("#search_text").focus(function () { if ($("#search_text").val() == "") {
	 * AutoComplete("auto_div", "search_text", test_list); } });
	 */
	$("#search-inp").keyup(function() {
		AutoComplete("auto_div", "search-inp", test_list);
	});
});