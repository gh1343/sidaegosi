	//TOday 카운트
	$('.count_number').counterUp({
		delay: 30,
		time: 2000,
	});

$(document).ready(function(){

	if (window.location.pathname == "/member/member_join_step2.php"){
		$(".sky_unfold").css("display","none");
	}
	// if (window.location.pathname == "/member/member_join_step1.php" || window.location.pathname == "/member/member_join_step2.php"){
	// 	$(".sky_unfold").css("display","none");
	// }
	$('select.select').each(function(){
		var title = $(this).attr('title');
		if( $('option:selected', this).val() != ''  ) title = $('option:selected',this).text();
		$(this)
			.css({'z-index':10,'opacity':0,'-khtml-appearance':'none'})

			.change(function(){
				val = $('option:selected',this).text();
				$(this).next().text(val);
			});
	});
	$('.togle_category_popkon').click(function(){
		$(".new_top_navi").hide();
		$(".new_top_navi_2015").toggle();
	});
	$('.site_map_btn').on('click',function(){
			event.preventDefault();
		$('.main_menu_wrap').fadeIn(100);
	});

	//스크롤 위치 구하기
	if($('.top_navi_new').length > 0){
		$( window ).scroll( function() {
			//console.log("dddddddddd");
			var scrollTop = $(window).scrollTop();
			var naviTop =$('.top_navi_new').offset().top; //128임
			//var popTop = $('.main_right_wrap').offset().top; //헤드가 붙어있으면 471 헤드가 fix되면 405

			//메인 상당메뉴
			if(scrollTop > naviTop){
				$('.top_navi_new').addClass('active');
			}else if(scrollTop < 128){
				$('.top_navi_new').removeClass('active');
			}
		});
	}


	//검색 Fn
	$('.search_txt ').on('focus',function(){
		$('.best_search').slideDown(300);
	});

	$('html').on('click',function(e){
		if($('.total_search_wrap').has(e.target).length === 0){
			$('.best_search').slideUp(300);
		}
	});


	//전체메뉴
	$("#togle_category").on('click', function(){
		$('.main_menu_wrap').fadeIn(100);
		$('.scroll').each(function(){
			var selA = $('.scroll').find('a.selected');
			var scrTop = selA.parents('.scroll').offset().top;

			var layerH =  $('.main_list_wrap').height();
			console.log("선택자 이름: " + selA.text());
			console.log("dddddddddddd--------전체높이" +layerH );
			console.log("aaaaaaaaaaaaaa------스크롤되야되야되는 높ㅇ디" + scrTop);

			$('.main_list_wrap').animate({
				scrollTop: ( scrTop - 229  ) +'px'
			},300);
		})
	})

	$(".main_menu_title .main_close").on('click' , function(){
		$('.main_list_wrap').animate({
				scrollTop: 0
			},5);
		$(this).parents('.main_menu_wrap').fadeOut(100);

	})

	//탭메뉴 스크롤 이동
	$('.main_tab ul li').each(function(){
		$(this).children('a').on('click', function(){
			var thisClass = $(this).attr('data_bind');
		if(thisClass == 'popkonlist'){
			var Top = 0;
		}else if(thisClass == 'eventlist'){
				var Top = 1160;
		}else if (thisClass == 'cslist'){
			var Top = 1506;
		}
		$('.main_list_wrap').animate({
				scrollTop: Top
			},300);
		$(this).addClass('selected');
		$(this).parent('li').siblings().children('a').removeClass('selected');
		})

	})
	$('.main_list_wrap' ).scroll(function () {
			var scrollValue = $('.main_list_wrap' ).scrollTop();
			console.log(scrollValue);
		if( scrollValue < 1019){
			$('.main_tab ul li a').removeClass('selected');
			$('.main_tab ul li').eq(0).children('a').addClass('selected');
		}else if( scrollValue < 1406){
			$('.main_tab ul li a').removeClass('selected');
			$('.main_tab ul li').eq(1).children('a').addClass('selected');
		}else if(scrollValue > 1505  ){
			$('.main_tab ul li a').removeClass('selected');
			$('.main_tab ul li').eq(2).children('a').addClass('selected');
		}
	});
});
