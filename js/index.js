$(function() {
	$(".desk_left_bottom_one").click(function() {
		$(".desk_left_bottom_one").removeClass("background1");
		$(this).addClass("background1");
		var herf = $(this).attr("src");
		$(".iframe_fa").show();
		$("#icon_iframw").attr("src", herf);
		$(".icon").removeClass("white");
		$(".img_icon").each(function() {
			$(this).attr("src", $(this).attr("src1"));
		})
	})
	

	$('a.icon').not(".icon_not").click(function(event) {//每个图标点击
		event.preventDefault();
		$(".desk_left_bottom_one").removeClass("background1");//两个icon图标 点击后加入背景色
		
		var herf = $(this).attr('href');//得到当前的href
		$(".logo2").hide();
		$(".iframe_fa").show();
		$("#icon_iframw").attr("src", herf);
		
		
		$(".icon").removeClass("white");
		$(this).addClass("white");
		$(".img_icon").each(function() {
			$(this).attr("src", $(this).attr("src1"));
		})
		$(this).find("img").attr("src", $(this).find("img").attr("src2"));
	});

//地图的点击
	$(".map-img").click(function(){
		var href1=$(this).attr('href');
		$(".logo2").hide();
		$(".iframe_fa").show();
		$("#icon_iframw").attr("src", href1);
	})
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