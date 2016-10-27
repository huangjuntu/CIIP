$(function() {
//	序号从0~15开始,对应index的if0~15，一一对应，共16个
	var companys = [
		["http://127.0.0.1/test/1014/shkjw_main.html"],//0  数据中心
		["http://127.0.0.1/test/1014/yyy_main.html"],//1  双创空间
		["http://127.0.0.1/test/1014/lxsh_main.html"],//2  云应用商店
		["http://www.q-map.com.cn:8280/TaoPuSmartCity"],//3  智能制造
		["http://127.0.0.1/test/1014/zhld_main.html"],//4  智能路灯网
		["http://127.0.0.1/test/1014/spsy_main.html"],//5  智慧溯源
		["http://127.0.0.1/test/1014/ZHJT-index.html"],//6  岸基监视雷达
		["http://127.0.0.1/test/1014/gdjt_main.html"],//7  智慧轨交
		["http://127.0.0.1/test/1014/lxsh_main.html"],//8  乐行上海
		["http://127.0.0.1/test/1014/ydxs_main.html"],//9  智慧教育
		["http://127.0.0.1/test/1014/zhsw_main.html"],//10  智慧供水
		["http://127.0.0.1/test/1014/zhsw_main.html"],//11  园区水质管理
		["http://127.0.0.1/test/1014/gbw_main.html"],//12  智慧广播网
		["http://127.0.0.1/test/1014/tcc_main.html"],//13  智能停车场
		["http://127.0.0.1/test/1014/hxgf_main.html"],//14  商业不动产
		["http://127.0.0.1/test/1014/hxzq_main.html"],//15  非银行金融
		//点击右下动画后的桃浦科技地址		
		["http://www.4399.com"],//16  桃浦科技智慧城管理系统
		//点击右侧图标地址链接
		["http://www.baidu.com"],//17  桃浦科技城 地图
		["http://www.baidu.com"],//18  金领之都  地图
		["http://www.baidu.com"],//19  上海  地图
		["http://www.baidu.com"],//20  银川  地图
		["http://www.baidu.com"]//21  仪电总部  地图
		
	];
	$(".desk_left_bottom_one").click(function() {
		$(".desk_left_bottom_one").removeClass("background1");
		$(this).addClass("background1");
		var herf = $(this).attr("src");
		$(".iframe_fa").show();
		
		$("#icon_iframw").attr("src", herf);
		
		$(".icon").removeClass("white");
		$(".img_icon").each(function() {
			$(this).attr("src", $(this).attr("src1"));
		});
	})
	

	$('a.icon').not(".icon_not").click(function(event) {//每个图标点击
		event.preventDefault();
		$(".desk_left_bottom_one").removeClass("background1");//两个icon图标 点击后加入背景色
		$(".logo2").hide();
		$(".iframe_fa").show();
		$(".icon").removeClass("white");
		$(this).addClass("white");
		$(".img_icon").each(function() {
			$(this).attr("src", $(this).attr("src1"));
		})
		$(this).find("img").attr("src", $(this).find("img").attr("src2"));
		
//公司链接 点击
		var x = $(this).attr('href');
		var y=x.substring(2);//截取字符串
		$("#icon_iframw").attr("src", companys[y]);
		
	});
	
//右侧地图图片点击
	$('.map-img').click(function(event) {//地图图标
		$(".logo2").hide();
		$(".iframe_fa").show();
		
//为什么要show/hide？因为自己跳转过去了，也没有显示出来，下面其他的用的是a标签
		var x = $(this).attr('href');
		var y = x.substring(2);//截取字符串
		$("#icon_iframw").attr("src", companys[y]);
		
	});
	
//右下侧：桃浦科技智慧城管理系统 点击
	$('.show-pic a').click(function(event) {//地图图标
		var x = $(this).attr('href');
		var y = x.substring(2);
		$("#icon_iframw").attr("src", companys[y]);
		
	});


//地图的点击
//	$(".map-img").click(function(){
//		var href1=$(this).attr('href');
//		$(".logo2").hide();
//		$(".iframe_fa").show();
//		$("#icon_iframw").attr("src", href1);
//	});
//新增加交通三项
$('#leap5-1 .a,#leap5-1 .b,#leap5-1 .c').css("opacity","0");
	$("#leap5").mouseover(function(event) {
		//		event.preventDefault();
		$("#leap5").css("display", "none");
		$("#leap5-1").css("display", "block");
//		$(".copy5").css("display", "block");
		setTimeout(function() {
			$('#leap5-1 .a').css("opacity","1");
			$('#leap5-1 .a').addClass("animated bounceInLeft");
			setTimeout(function() {
				$('#leap5-1 .b').css("opacity","1");
				$('#leap5-1 .b').addClass("animated bounceInLeft");
				setTimeout(function() {
					$('#leap5-1 .c').css("opacity","1");
					$('#leap5-1 .c').addClass("animated bounceInLeft");

				}, 500);
			}, 500);
		}, 200);
	});
	$('#leap5-1').mouseleave(function() {
		//		clearTimeout(t);
		//		t = setTimeout(zoomIn, 400);
		$("#leap5-1").css("display", "none");
		$("#leap5").css("display", "block");
	});
//	新增加智慧园区两项

	//新增加仪电云三项
$('#leap1-1 .a,#leap1-1 .b,#leap1-1 .c').css("opacity","0");
	$("#leap1").mouseover(function(event) {
		//		event.preventDefault();
		$("#leap1").css("display", "none");
		$("#leap1-1").css("display", "block");
//		$(".copy1").css("display", "block");
		setTimeout(function() {
			$('#leap1-1 .a').css("opacity","1");
			$('#leap1-1 .a').addClass("animated bounceInLeft");
			setTimeout(function() {
				$('#leap1-1 .b').css("opacity","1");
				$('#leap1-1 .b').addClass("animated bounceInLeft");
				setTimeout(function() {
					$('#leap1-1 .c').css("opacity","1");
					$('#leap1-1 .c').addClass("animated bounceInLeft");

				}, 500);
			}, 500);
		}, 200);
	});
	$('#leap1-1').mouseleave(function() {
		//		clearTimeout(t);
		//		t = setTimeout(zoomIn, 400);
		$("#leap1-1").css("display", "none");
		$("#leap1").css("display", "block");
	});
	//	新增加智慧水务两项
	$('#leap7-1 .a,#leap7-1 .b').css("opacity","0");
	$("#leap7").mouseover(function(event) {
		console.log("122");
		//		event.preventDefault();
		$("#leap7").css("display", "none");
		$("#leap7-1").css("display", "block");
//		$(".copy7").css("display", "block");
		setTimeout(function() {
			$('#leap7-1 .a').css("opacity","1");
			$('#leap7-1 .a').addClass("animated bounceInLeft");
			setTimeout(function() {
				$('#leap7-1 .b').css("opacity","1");
				$('#leap7-1 .b').addClass("animated bounceInLeft");
			}, 500);
		}, 200);
	});
	$('#leap7-1').mouseleave(function() {
		$("#leap7-1").css("display", "none");
		$("#leap7").css("display", "block");
	});
	//	新增加智慧建筑两项
	$('#leap8-1 .a,#leap8-1 .b').css("opacity","0");
	$("#leap8").mouseover(function(event) {
		console.log("122");
		//		event.preventDefault();
		$("#leap8").css("display", "none");
		$("#leap8-1").css("display", "block");
//		$(".copy8").css("display", "block");
		setTimeout(function() {
			$('#leap8-1 .a').css("opacity","1");
			$('#leap8-1 .a').addClass("animated bounceInLeft");
			setTimeout(function() {
				$('#leap8-1 .b').css("opacity","1");
				$('#leap8-1 .b').addClass("animated bounceInLeft");
			}, 500);
		}, 200);
	});
	$('#leap8-1').mouseleave(function() {
		$("#leap8-1").css("display", "none");
		$("#leap8").css("display", "block");
	});
//	后面两个icon的设定
		$(function() {
			$(".add1").click(function() {
				$(".icon-1").css("display", "block");
				$(".add1").css("display", "none");
				$(".add2").css("display", "block");
				$(".add2-1").css("display","none");
			});

//			$(".add2").click(function() {
//				$(".add2").css("opacity", 0.4);
//				$("#show1").css("display", "none");
//				alert("已达上限哦");
//
//			});
		})
})