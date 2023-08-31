$(document).ready(function() {
	//lazyFn();
	//도서 카테고리 전체보기
	$('.cate_btn').each(function() {
		$(this).on('click', function(e) {
			e.preventDefault();
			var clickIndex = $(this).attr('data-index');
			var subNavNum = $('.nav_sub' + clickIndex);
			var collpseNav = $('#collapse_nav00' + clickIndex);
			var gnbList = collpseNav.children('li');
			var gnbLen = gnbList.length;
			var arr = [];
			var sum = 0;
			var $width = $(window).width();

			$('.wrap-category-block').hide();
			$(this).parents('div').siblings().find('.cate_btn').removeClass('selected');
			$('.sub_list').removeClass('show').hide();

			subNavNum.show();
			if ($(this).hasClass('selected')) {
				$(this).removeClass('selected');
				collpseNav.hide();
			} else {
				$(this).addClass('selected');
				collpseNav.show();
			}
		})
	})

	$('.sub_list li').each(function() {
		$(this).children('a').on('click', function() {
			$('.sub_list li a').removeClass('selected');
			$(this).addClass('selected');
			$('.wrap-category-block').css('display', 'table');
		})
	})
	// 공통 팝업 js [시작]
	$('.show_name').each(function() {
		$(this).on('click', function(e) {
			e.preventDefault();
			var popId = $(this).attr('href');
			$('body').css({
				'overflow' : 'hidden'
			}).addClass('stop-scrolling');

			if ($(popId).find('img').length > 0) {//해당 팝업에 이미가 있는지 확인하고 레이지 실행
				lazyFn();
			}
			$(popId).fadeIn();

			if (popId == '#popkon_list_pop') {
				widthOuto();
			}; 

			//동영상 과정별 클릭시 해당 과정 바로 열어주기
			if ($(this).hasClass('popkon_cate_type')) {
				var thisName = $(this).text();
				$(popId + ' .nav_deps1 li a:contains(' + thisName + ')').trigger("click");
			};


			if(popId == '#book_list_pop'){
				const subGnb = $('#nav_main_cate a[href="#collapse_nav001"]');
				subGnb.trigger('click');
			}
		});
	});

	// $(".book_slick").on("init", function(event , slick){
	// 	console.log('ddddd')
	// 	$('.book_slick').show();
	// 	$('.book_slick').get(0).slick.setPosition();
	//   });


	$('.banner_pop_close').on('click', function() {
		$(this).parents('.banner_popup').hide();
		$('body').css({
			'overflow' : 'auto'
		}).removeClass('stop-scrolling');
	})
	$('.book_cate_close').on('click', function() {
		$(this).parents('.wrap-category-block').css('display', 'none');
		$('.nav_sub1 ul li a').removeClass('selected');
		$('body').css({
			'overflow' : 'auto'
		}).removeClass('stop-scrolling');
	})
	// 공통 팝업 js [끝]

	//리스트 arrow 공통 [시작]
	$('.arrow').each(function() {
		if ($(this).hasClass('arrow_up') == true) {
			$(this).parent('.info_tit').siblings('.info_txt').hide();
		}
		$(this).on('click', function() {
			$(this).toggleClass('arrow_down arrow_up');
			/*추가된 사항 : 주문내역 부분 아코디언 버튼 눌렀을때 아래로 자동 포커싱 기능 넣었습니다. 20221212*/
			$(this).parent('.info_tit').siblings('.info_txt').slideToggle();
			$('html,body').animate({scrollTop:$(this).offset().top}, 500);
			/*추가된 사항 : 주문내역 부분 아코디언 버튼 눌렀을때 아래로 자동 포커싱 기능 넣었습니다. 20221212*/
			/*원본 S: */
			//$(this).parent('.info_tit').siblings('.info_txt').slideToggle();
			/*원본 E: */
		})
	})
	// 리스트 arrow 공통 [끝]

	//상세보기에서 db값 가져올때 빈값없애기
	$('.info_txt ').children('p').each(function() {
		var noTxt = $(this).text();
		if (noTxt == '') {
			$(this).hide();
		}
	})

	// 메인에 있는 동영상 전체 카테고리 보기
	$('.popkon_array li').each(function(){
		$(this).children('a').on('click',function(e){
			var tabId = $(this).attr('href');
				e.preventDefault();
				$('body').addClass('stop-scrolling');
				$(this).addClass('selected');
				$(this).parent('li').siblings().children('a').removeClass('selected');
				$(tabId).addClass('selected');
				$(tabId).siblings('.popkon_list').removeClass('selected');
		})
	})

	/*메인 이벤트배너*/
	$('.event_banner').slick({
		slide : 'li',
		dots : true,
		dotsClass : 'custom_paging',
		infinite : true,
		autoplay : true,
		autoplaySpeed : 3000,
		slidesToShow : 1,
		slidesToScroll : 1,
		centerMode : false,
		arrows : false,
		pauseOnFocus: false,
		customPaging : function(slider, i) {
			return (i + 1) + '/' + slider.slideCount;
		}
	});



	/*인기검색어*/
	$('.best_search_list').slick({
		slide : 'li',
		dots : false,
		infinite : true,
		autoplay : true,
		autoplaySpeed : 3000,
		slidesToShow : 1,
		slidesToScroll : 1,
		centerMode : false,
		arrows : true,
		vertical : true,
	});

	/*수강후기 -- 얘는 이제 안써요*/
	// $('.review_slide').slick({
	// 	slide : 'li',
	// 	appendDots : $('.review_paging'),
	// 	dots : true,
	// 	//dotsClass: 'review_paging',
	// 	infinite : false,
	// 	slidesToShow : 1.5,
	// 	slidesToScroll : 1,
	// 	centerMode : false,
	// 	arrows : false,
	// 	vertical : false,
	// 	adaptiveHeight : true,
	// 	customPaging : function(slider, i) {
	// 		return (i + 1) + '/' + slider.slideCount;
	// 	},
	// 	responsive : [// 반응형 웹 구현 옵션
	// 	{
	// 		breakpoint : 561,
	// 		settings : {
	// 			slidesToShow : 1.5
	// 		}
	// 	}]
	// });

	/*뉴수강후기 */
	var review_slide2 = new Swiper('#review_slide', {
	      slidesPerView: 'auto',
	      spaceBetween: '3%',
	    //   pagination: {
	    //     el: '.swiper-pagination',
	    //     clickable: true,
	    //   },
	      autoHeight: true,
	});


	// 이달의 추천상품
	var recommand_slideWrap = new Swiper('.recommand_slideWrap', {
		spaceBetween:10,
		slidesPerView: '3.3',
		pagination: {
		el: '.scroll_bar',
		type: 'progressbar',
		draggable: true,
		},
	});

	/*탑 메뉴*/
	var nav_swiper = new Swiper('.swiper_nav', {
		slidesPerView : 'auto',
		spaceBetween : 25,
		pagination : {
			el : '.swiper-pagination',
			clickable : true,
		},
		breakpoints : {
			
			480 : {
				spaceBetween : 30,
			},
			640 : {
				spaceBetween : 40,
			},
			768 : {
				spaceBetween : 45,
			},
			1024 : {
				spaceBetween : 50,
			},
		},
	});

	/*도서 중간에 있는 이슈도서 등등 탭 슬라이드*/
	var cate_nav = new Swiper('.cate_nav', {
		slidesPerView : 'auto',
		spaceBetween : 0,
		pagination : {
			el : '.swiper-pagination',
			clickable : true,
		},
		observer : true,
		observeParents : true,
		breakpoints : {
			640 : {
				spaceBetween : 10,
			},
			768 : {
				spaceBetween : 20,
			},
			1024 : {
				spaceBetween : 25,
			},
		},
	});

	// 탭 메뉴 공통 [시작]
	$(".tab-wrap .tab-content").hide();
	$(".tab-wrap .tab-content.selected").show();

	$(".tab-wrap .tab-menu a").click(function() {
		var jqThis = $(this);
		var jqAnchors = jqThis.parent().parent().find("a");
		var jqHref = $(this).attr('href');
		var jqContents = jqThis.parents('.tab-wrap').children(".tab-content");
		var sTargetId = jqThis.attr("data-id");
		var jqTarget = null;

		if (jqThis.hasClass("on-ready") === true) {
			alert("준비중 입니다.");
			return false;
		}

		if (jqContents.length === 0) {
			jqContents = jqThis.parents('.tab-wrap').children(".tab-content");
		}
		jqAnchors.removeClass("selected");
		jqThis.addClass("selected");
		jqContents.hide();

		//undefined떠서 탭선택이안됨처리 hss
		if (sTargetId == undefined) {
			jqTarget = $(jqThis.attr("href"));
		} else {
			jqTarget = $("#" + sTargetId);
		}

		jqTarget.css("visibility", "visible");
		jqTarget.show();

		if (jqHref == '#popkon_gov' || jqHref == '#popkon_lec') {
			widthOuto();
			//카테고리 overflow 되게 하기.. shwo가 된 이후에 실행시켜야됨
		}

		if (jqTarget.find('.book_slick').length > 0) {
			jqTarget.find('.book_slick').slick('setPosition');
		}
		return false;
	});
	//탭메뉴 공통 [끝]


	//기기 알림 팝업 창 Y or N 230801
	$('.n_btn').click(function(){
		$('.device_alram_pop').hide();
	});
});
//document [End]

//메인 도서 리스트 불러오기 [시작]
function bookslickFn() {
	/*예약판매 신간도서*/
	$('#new_book_list').slick({
		slide : 'li',
		appendDots : $('.newbook_paging'),
		dots : true,
		infinite : false,
		autoplay : false,
		slidesToShow : 2,
		slidesToScroll : 2,
		centerMode : false,
		arrows : true,
		// lazyLoad : 'ondemand',
		//lazyLoadBuffer : 0,
		customPaging : function(slider, i) {
			return (i + 1) + '/' + Math.round((slider.slideCount / 2));
		}
	});

	$('.new_lec_list').slick({
		slide : 'li',
		appendDots : $('.new_lec_paging'),
		dots : true,
		infinite : false,
		autoplay : false,
		slidesToShow : 1,
		slidesToScroll : 1,
		centerMode : false,
		arrows : true,
		//lazyLoad : 'ondemand',
		//lazyLoadBuffer : 0,
		customPaging : function(slider, i) {
			return (i + 1) + '/' + slider.slideCount;
		}
	});

	$('#itssu_book').slick({
		slide : 'li',
		//dotsClass: 'custom_paging',
		appendDots : $('.itssubook_paging'),
		dots : true,
		infinite : false,
		autoplay : false,
		slidesToShow : 2,
		slidesToScroll : 2,
		centerMode : false,
		arrows : true,
		//lazyLoad : 'ondemand',
		//lazyLoadBuffer : 0,
		customPaging : function(slider, i) {
			return (i + 1) + '/' + Math.round((slider.slideCount / 2));
		}
	});

	$('#recommned_book').slick({
		slide : 'li',
		//dotsClass: 'custom_paging',
		appendDots : $('.recommned_paging'),
		dots : true,
		infinite : false,
		autoplay : false,
		slidesToShow : 2,
		slidesToScroll : 2,
		centerMode : false,
		arrows : true,
		//lazyLoad : 'ondemand',
		//lazyLoadBuffer : 0,
		customPaging : function(slider, i) {
			return (i + 1) + '/' + Math.round((slider.slideCount / 2));
		}
	});

	$('#lecbest_book').slick({
		slide : 'li',
		//dotsClass: 'custom_paging',
		appendDots : $('.lecbest_paging'),
		dots : true,
		infinite : false,
		autoplay : false,
		slidesToShow : 2,
		slidesToScroll : 2,
		centerMode : false,
		arrows : true,
		//lazyLoad : 'ondemand',
		//lazyLoadBuffer : 0,
		customPaging : function(slider, i) {
			return (i + 1) + '/' + Math.round((slider.slideCount / 2));
		}
	});

	$('#govbest_book').slick({
		slide : 'li',
		//dotsClass: 'custom_paging',
		appendDots : $('.govbest_paging'),
		dots : true,
		infinite : false,
		autoplay : false,
		slidesToShow : 2,
		slidesToScroll : 2,
		centerMode : false,
		//lazyLoad : 'ondemand',
		//lazyLoadBuffer : 0,
		arrows : true,
		customPaging : function(slider, i) {
			return (i + 1) + '/' + Math.round((slider.slideCount / 2));
		}
	});
}

//메인 도서 리스트 불러오기 [끝]
function lazyFn() {
	$('.lazy_img').lazyload({
		effect : "fadeIn",
		visibleOnly : true,
		threshold : 9999,
	}).trigger("lazyload");
}

//도서 강좌교재 팝업 [시작]
function bookapplyPopup(data, callback) {
	$('.apply_book').each(function() {
		$(this).click(function(e) {
			e.preventDefault();
			var thisitid = $(this).attr('data-itid');
			$('.apply_detail_pop .look_').addClass('look_' + thisitid);
			$('.look_' + thisitid).html('');
			console.log(data);
			$.post("/mobile/mb/make_main_book.php", {
				data : data,
				it_id : thisitid
			}, function(html) {
				$('.look_' + thisitid).append(html.applyListPop);
			}, 'json');

			$('.apply_detail_pop').css('display', 'table');
			$('.popup_bg').show();
		})
	})

	$('.popup_top span').on('click', function() {
		$(this).parents('.apply_detail_pop').css('display', 'none');
		$('.popup_bg').hide();
	})

	$('.popup_bg').on('click', function() {
		$(this).siblings('.apply_detail_pop').hide();
		$(this).hide();
	})
}

//도서 강좌교재 [끝]


function widthOuto(){
	$('.popkon_array').each(function(){
		var thisParent = $(this).parent('.nav_deps2');
		var gnbList = $(this).children('li');
		var gnbLen =gnbList.length;
		var arr = [];
		var sum = 0;
		var $width = $(window).width();
		gnbList.each(function(){
		   var listWidth = parseInt($(this).outerWidth()+20);
		   arr.push(listWidth);
		});
		for (var i = 0; i < gnbLen; i++) {
			sum += arr[i]
		};
		console.log(sum);
		console.log($width);
		var $width = $('body').width();
		if(sum > $width){
			thisParent.children('ul').css({
				'width' : (sum) + 'px'
			});
		}else{
			thisParent.children('ul').css({
				'width' :  'auto'
			});
		};
	})
}
