$(document).ready(function(){




	



/**
 * 메인 페이지 인기과정 ~ 공지사항&소식 S: 
*/


	//인기과정
	var bookinfo_swiper = new Swiper(".topic_wrap", {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			clickable: false,
			pagination: {
				el: ".topic_nav",
				clickable: true
			},
		autoplay: {
		delay: 2000,
		disableOnInteraction: true,
		}
	});

	$('.topic_wrap .swiper-slide').on('mouseover', function(){
		bookinfo_swiper.autoplay.stop();
	  });
	  $('.topic_wrap .swiper-slide').on('mouseout', function(){
		bookinfo_swiper.autoplay.start();
	  });
	//교육과정 탭 버튼
	$(".item .item-row").hide();
		$(".item .item-row.selected").show();

		$(".item .educate_catagory a").click(function(){
			var jqThis = $(this);
			var jqAnchors = jqThis.parents('.educate_catagory').find("a");
			var jqContents = jqThis.parents('.item').children(".item-row");
			var saTargetId = jqThis.attr("href").split("#");
			var sTargetId = (saTargetId.length > 1)? saTargetId[1] : null;
			var jqTarget = null;

			if (sTargetId === null){
				return true;
			}

			if (jqContents.length === 0){
				jqContents = jqThis.parents('.item').find(".item-row");
			}
			console.log(jqContents);
			jqAnchors.removeClass("selected");
			jqThis.addClass("selected");
			jqContents.hide();
			jqTarget = $("#" + sTargetId);
			jqTarget.css("visibility", "visible");
			jqTarget.show();

			return false;
		});


	//컨텐츠 이용자 수 카운트
	let isCounting = false; 
	const resetCounters = () => {
	const counters = document.querySelectorAll('.counter');
	counters.forEach(counter => {
		counter.innerText = '0';
	});
	isCounting = false;
	};

	window.addEventListener('scroll', () => {
	const counterContainer = document.querySelector('.counter-container');
	const containerTop = counterContainer.offsetTop;
	const containerHeight = counterContainer.offsetHeight;

	if (window.pageYOffset > containerTop - window.innerHeight && window.pageYOffset < containerTop + containerHeight) {
		if (!isCounting) { 
		const counters = counterContainer.querySelectorAll('.counter');
		const speed = 500;

		counters.forEach(counter => {
			const updateCount = () => {
			const target = +counter.dataset.target;
			const count = +counter.innerText.replace(',', '');
			const inc = target / speed;

			if (count < target) {
				counter.innerText = Math.ceil(count + inc).toLocaleString();
				setTimeout(updateCount, 1);
			} else {
				counter.innerText = target.toLocaleString();
			}
			};
			updateCount();
		});
		isCounting = true;
		}
	} else {
		resetCounters();
	}
	});
	
	
	//분야별 일타강사 & 전임교수
	var profess_wrap = new Swiper('.profess_wrap', {
		// autoplay: {
		// delay: 5000, //add
		// disableOnInteraction: false,
		// },
		
		//speed: 5000,
		touchRatio: 0,
		loop: true,
		initialSlide: 1,
		loopAdditionalSlides: 2,
		slidesPerView: 2,
		spaceBetween: 60,
		slidesPerGroup : 2,
		navigation: {
		prevEl: '.profess_wrap .prev',
		nextEl: '.profess_wrap .next',
		//clickable: true,
		
	},
		//allowTouchMove: true,//드래그 옵션
	});

	//분야별 일타강사 & 전임교수 텍스트 제어
	// $('.profess_wrap .swiper-slide').on('mouseenter', function(){
	// 	$(this).find('.txt_wrapper.original').css('animation','20s 0s linear infinite running txtrole1');
	// 	$(this).find('.txt_wrapper.clone').css('animation','20s 0s linear infinite running txtrole2');
    // });
    // $('.profess_wrap .swiper-slide').on('mouseleave', function(){
	// 	$(this).find('.txt_wrapper.original').css('animation','20s 0s linear infinite paused txtrole1');
    //     $(this).find('.txt_wrapper.clone').css('animation','20s 0s linear infinite paused txtrole2');
    // });

	//합격 인터뷰
	$('.animation_wrap > li').on('mouseenter', function(){
        $('.animation_wrap').css('animation','30s linear 0s infinite normal none paused animat');
        $(this).css({'transform':'translateY(-30px)','transition':'0.3s'});
    });
    $('.animation_wrap > li').on('mouseleave', function(){
        $('.animation_wrap').css('animation','30s linear 0s infinite normal none running animat');
        $(this).css({'transform':'translateY(0px)','transition':'0.3s'});
    });

	//합격생 명단 리스트
	$(".slider").not('.slick-initialized').slick();
	$('.pass_list').slick({
		slide: 'li',
		dots: false,
		arrows : false,
		autoplay:true,
		infinite: true,
		speed: 60000,
		autoplaySpeed:0,
		cssEase: 'linear',
		vertical : true,
	});

	//합격생 후기 리스트
	$('.hab_review_slide > .review_rolling').on('mouseenter', function(){
        $('.hab_review_slide').css('animation','500s linear 0s infinite normal none paused anihugi');
    });
    $('.hab_review_slide > .review_rolling').on('mouseleave', function(){
        $('.hab_review_slide').css('animation','500s linear 0s infinite normal none running anihugi');
    });


	/**
	 * 	freeMode : true, // 슬라이드 넘길 때 위치 고정 여부
	 *	autoHeight : true, // true로 설정하면 슬라이더 래퍼가 현재 활성 슬라이드의 높이에 맞게 높이를 조정합니다.
	 *	a11y : false, // 접근성 매개변수(접근성 관련 대체 텍스트 설정이 가능) - api문서 참고!
	 *	resistance : false, // 슬라이드 터치에 대한 저항 여부 설정
	 *	slideToClickedSlide : true, // 해당 슬라이드 클릭시 슬라이드 위치로 이동
	 *	centeredSlides : true, // true시에 슬라이드가 가운데로 배치
	 *	allowTouchMove : true, // false시에 스와이핑이 되지 않으며 버튼으로만 슬라이드 조작이 가능
	 *	watchOverflow : true, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정
	 *	slidesOffsetBefore : number, // 슬라이드 시작 부분 여백
	 *	slidesOffsetAfter : number, // 슬라이드 시작 부분 여백
	 *  // 오통ㄹㅇㄹㅇㄹ
	 * 	autoplay: {
	 *		delay: 5000, //add
     *		disableOnInteraction: false,
 	 *	},
	 * 
	 * 
	 */

	//모든 자격증 취업정보
	var recommand_slideWrap = new Swiper('.foundJob_slideWrap', {
		//speed: 5000,
		loop: true, //자동 루프
		loopedSlides:0,//
		paginationClickable: true,
		// spaceBetween: 10,
		slidesOffsetBefore: 50,
		//loopFillGroupWithBlank : true, //빈공간 채우기
		centeredSlides : true, 
		loopAdditionalSlides: 1,

		//.....
		slidesPerView: 'auto',
		// slidesPerGroup : 5,
		//.....

		pagination: {
			el: '.scroll_bar',
			type: 'progressbar',
			clickable: false,
		},

		navigation: {
			prevEl: '.foundJob_slideWrap .prev',
			nextEl: '.foundJob_slideWrap .next',
		},

		breakpoints: {
			320:{
				// slidesPerView: 5,
				// slidesPerGroup : 5,
				spaceBetween: 10,
				

				// slidesPerView: 'auto',
				// slidesPerGroup : 5,
		
			},
			// 768: { //브라우저가 768보다 클 때
			//   slidesPerView: 4,  
			//   slidesPerGroup : 4,
			//   //spaceBetween: 40,
			// },
			// 1024: {  //브라우저가 1024보다 클 때
			//   slidesPerView: 4, 
			//   slidesPerGroup : 4,
			//   //spaceBetween: 50,
			// },
			// 1500: {  //브라우저가 1024보다 클 때
			// 	slidesPerView: 4, 
			// 	slidesPerGroup : 4,
			// 	//spaceBetween: 50,
			//   },
			//   1600: {  //브라우저가 1024보다 클 때
			// 	slidesPerView: 4, 
			// 	slidesPerGroup : 4,
			// 	//spaceBetween: 50,
			//   },
		  },

	});










	$('.foundJob_slideWrap .swiper-slide ul li').on('mouseover', function(){
		$(this).css({'transform':'translateY(-30px)','transition':'0.3s'});
	});
	$('.foundJob_slideWrap .swiper-slide ul li').on('mouseout', function(){
		$(this).css({'transform':'translateY(0px)','transition':'0.3s'});
	});



/**
 * 메인 페이지 인기과정 ~ 공지사항&소식 E: 
*/


});




