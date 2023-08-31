$(document).ready(function(){
	tabMenu();
	rightSectionMove();
	

	//$('.ois-btn-more').hide();
	$('.ois-btn-more').on('click',function(){
		var pEle =$(this).closest('.order-info-item');
		if(pEle.hasClass('open')){
			pEle.removeClass('open').addClass('close');
			$('.ois-plus-list-wrap').addClass('list-close').removeClass('open');
			$('.ois-btn-more1').removeClass('selected');
		}else if(pEle.hasClass('close')){
			pEle.removeClass('close').addClass('open');
		}
	});


	//주문 정보 보기 추가 S: 230424 sd_work_pj
	$(".order_infor_more").click(function(){
		if($(this).hasClass("on")) {
			$('.order_infor_more').css({'background':'url("/_skin/sidae/images/sdedu/common/icon_img.png")','background-position':'-12px -67px'});
			$('.order-info-item').css('display','block');
			//$('.order-info-item').stop().slideDown(500);
			$(this).addClass("off").removeClass("on");
		} else {
			$('.order_infor_more').css({'background':'url("/_skin/sidae/images/sdedu/common/icon_img.png")','background-position':'-150px -67px'});
			$('.order-info-item').css('display','none');
			//$('.order-info-item').stop().slideUp(500);
			$(this).addClass("on").removeClass("off");
		}
	});

	//우측 할인 금액 버튼 아코디언 추가 S: 230424 sd_work_pj
	$('.order-item.order-item-sale .order-item-title i').click(function(){
		if($(this).hasClass("on")) {
			$(this).css('transform','rotate(0)');
			
			if( parseInt(uncomma($('.tt_movie').text())) != 0 ){//0원이 아닌경우 노출
				$('.copon_line').css('display','flex');
			}else if( parseInt(uncomma($('.none_cash').text())) != 0 ){
				$('.none_history').css('display','none');
			}else if( parseInt(uncomma($('.play_cash').text())) != 0 ){
				$('.play_history').css('display','flex');
			}else if( parseInt(uncomma($('.mock_cash').text())) != 0 ){
				$('.mock_history').css('display','flex');
			}else if( parseInt(uncomma($('.book_cash').text())) != 0 ){
				$('.book_history').css('display','flex');
			}

			//$('.order-info-item').stop().slideDown(500);
			$(this).addClass("off").removeClass("on");
		} else {
			$(this).css('transform','rotate(-180deg)');
			$('.copon_line,.money_use').css('display','none');
			//$('.order-info-item').stop().slideUp(500);
			$(this).addClass("on").removeClass("off");
		}
	});

	//우측 할인 금액 버튼 아코디언 추가 S: 230424 sd_work_pj
	$('.order-form-right .topic_box1 i').click(function(){
		if($(this).hasClass("on")) {
			$(this).css('transform','rotate(0)');
			$('.order-item').css('display','flex');
			$('.copon_line,.money_use').css('display','flex');
			//$('.order-info-item').stop().slideDown(500);
			$(this).addClass("off").removeClass("on");
		} else {
			$(this).css('transform','rotate(-180deg)');
			$('.order-item').css('display','none');
			$('.copon_line,.money_use').css('display','none');
			//$('.order-info-item').stop().slideUp(500);
			$(this).addClass("on").removeClass("off");
		}
	});

	//우측 할인 금액 버튼 아코디언 추가 S: 230424 sd_work_pj
	$('.order-form-right .topic_box2 i').click(function(){
		if($(this).hasClass("on")) {
			$(this).css('transform','rotate(0)');
			$('.order-item').css('display','flex');
			$('.copon_line,.money_use').css('display','flex');
			//$('.order-info-item').stop().slideDown(500);
			$(this).addClass("off").removeClass("on");
		} else {
			$(this).css('transform','rotate(-180deg)');
			$('.order-item').css('display','none');
			$('.copon_line,.money_use').css('display','none');
			//$('.order-info-item').stop().slideUp(500);
			$(this).addClass("on").removeClass("off");
		}
	});

	$('.blue_btn').each(function(){
			$(this).on('click',function(){
				$(this).parent('.order-info-item').toggleClass('on');
				$(this).toggleClass('selected');
				//console.log(listH)
			   $(this).parent('.order-info-item').find('.ois-plus-list-wrap').removeClass('on');
			    $(this).parent('.order-info-item').find('.ois-btn-more1').removeClass('selected');
			});
	});

//상품이 1개일떄는 주문정보버튼 가리기
var productListCnt =$('.ois-list').children('li.border_bot').length;
	//console.log(productListCnt);
	if( productListCnt == 1){
		$('.ois-list').children('li.border_bot').parent().parent().find('.blue_btn').hide();
		$('.ois-list').children('li.border_bot').css({
				'border':'none'
			})
	}else{

		$('.ois-list').children('li.border_bot').parent().parent().find('.blue_btn').show();
	}

//border없앱 
var borderNone = $('.ois-list').find('.ois-plus-list').length;
if( borderNone == 0){
	$('.border_bot').css({
		'border': 'none',
		'margin-bottom':'0px',
		'padding-bottom':'0px',
		'line-height':'24px'
	})
}
//border없앱


 //포함상품 리스트 열고 닫기

$('.ois-btn-more1').each(function(eq){
	$(this).addClass('more_btn' + eq);
	
	//추가 상품이 없으면 버튼 숨김
	 var listCnt = 	$(this).parent().find('.ois-plus-list-wrap').find('li').length;
	// console.log(listCnt);
	 if(listCnt == 0){
		 $(this).hide();
	 }

	
	//해당상품 열기
	$(this).on('click',function(){
		var pEle =$(this).parent().find('.ois-plus-list-wrap');
		//var pEle =$(this).parent().children('.ois-plus-list-wrap');
		var list_li_book =  $('.list_book li');
		var list_li_mock = $('.list_mock li');
		var od_id = $(this).attr('id');

		$(this).toggleClass('selected');
		
		//자식 개수 새기
		var book_cnt =$('.'+od_id).find('.bookcate').length;
		var mock_cnt =$('.'+od_id).find('.mockcate').length;
		
		//도서/ 모의고사 포함상품 갯수 입력
		$(this).parent().find('.plus_book_cnt').html(book_cnt);
		$(this).parent().find('.plus_mock_cnt').html(mock_cnt);
		
		pEle.toggleClass('on'); // 열기열기열기열기

		//포함상품 조건 추가 :S 230425 sd_work_pj :: 레이아웃이 바껴셔 넣었습니다.
		if(pEle.hasClass('on')){
			$(this).parent().find('.plus_list_all_wrap').css('display','block');
		}else{
			$(this).parent().find('.plus_list_all_wrap').css('display','none');
		}


		//전체가 닫혀있을때 포함상품 클릭하면 전체 열기
		if($(this).parent().parent().parent().parent().hasClass('on')){
				$(this).parent().parent().parent().parent().removeClass('on');
				$(this).parent().parent().parent().parent().find('.blue_btn').addClass('selected');
		}else{

		}

		//포함상품 카운트 맨 위에것만 나오게 하기 이거 없으면 줄줄이 다나옴
		$('.ois-plus-list-wrap.' + od_id).children().children('.bookcate').eq(0).css('display','block');
		$('.ois-plus-list-wrap.' + od_id).children().children('.mockcate').eq(0).css('display','block');

	})
})		


	$('.term-more').on('click',function(){
		var items = $('.term-item');
		var pEle =$(this).closest('.term-item');
		if(pEle.hasClass('open')){
			pEle.removeClass('open').addClass('close');
		}else if(pEle.hasClass('close')){
			items.removeClass('open').addClass('close');
			pEle.removeClass('close').addClass('open');
		}
	})


	$('#term_all').on('change',function(){
		if($(this).is(':checked')){
			$("input[name='nomember_agree']").prop("checked", true);
			$("input[name='mb_agree2']").prop("checked", true);
			$("input[name='mb_agree3']").prop("checked", true);
			$("input[name='mb_agree4']").prop("checked", true);
		}else{
			$("input[name='nomember_agree']").prop("checked", false);
			$("input[name='mb_agree2']").prop("checked", false);
			$("input[name='mb_agree3']").prop("checked", false);
			$("input[name='mb_agree4']").prop("checked", false);
		}
	})

	$(".agr").on('change',function(){
		var itemLength = $(".agr").length;
		var checkedLength = $(".agr:checked").length;
		if(checkedLength == itemLength){
			$('#term_all').prop("checked", true);
		}else{
			$('#term_all').prop("checked", false);
		}
	})

	$("input[name='term_agree']").on('change',function(){
		var itemLength = $("input[name='term_agree']").length;
		var checkedLength = $("input[name='term_agree']:checked").length;
		if(checkedLength == itemLength){
			$('#term_all').prop("checked", true);
		}else{
			$('#term_all').prop("checked", false);
		}

	})
	$('.erro-view button').on('click',function(){
		$('.erro-view-wrap').hide();
		$('.erro-view-wrap-bg').hide();
	})

	$('#btn_erro').on('click',function(){
		$('.erro-view-wrap').show();
		$('.erro-view-wrap-bg').show();
	})
		

	$('.booktx-view button').on('click',function(){
		$('.booktx-view-wrap').hide();
		$('.erro-view-wrap-bg').hide();
	})
	$('#btn_special').on('click',function(){
		$('.booktx-view-wrap').show();
		$('.erro-view-wrap-bg').show();
	})

	//쿠폰 팝업 오픈 sd_work_pj
	$('.order-discount-item.coupon .ds_coupon .choice').on('click',function(){

		var have_coupon = $('#main_coupon input').length;
		var cp_id_lock = $('#main_coupon input').data('cp_id') == 232;
		if(have_coupon == 0 || $('#prChk').val() == 1 && !cp_id_lock){
			alert('적용 할 수 있는 쿠폰이 없습니다');
		}else{
			$('.coupon_popup').show();
		}
	});

    //적립금 팝업 오픈 sd_work_pj
	$('.order-discount-item.cash .ds_coupon .choice').on('click',function(){
		var have_cash = parseInt( $('#od_mem_cash').val() );
		var asasasa= $('.cash_kind').attr('data-it_price') < 5000;
		//console.log(have_cash);
		if( have_cash < 5000){
			alert('적립금은 5,000원 이상부터 사용할 수 있습니다.');
		}else if( parseInt($('#cart_movie_tprice').val()) - parseInt(uncomma($('#it_cc_1').text())) - 300 < 5000 && (!$('#cart_movie_tprice2') || !$('#cart_b_tprice')) ){
			alert('적립금은 5,000원 이상부터 사용할 수 있습니다.');
			console.log('asaaas');
		}else if( asasasa == true){
			alert('적립금은 5천원 이상의 상품에 사용할 수 있습니다.');
		}
		else{
			$('.cash_pop').show();
		}
		//maxcash();
		//$('.cash_pop').show();
	});

	//할인 쿠폰 취소버튼 S: 230425 sd_work_pj
	$('.coupon_popup .cencle_btn').on('click', function(){
		var parentId = $(this).parents('.coupon_popup').attr('id');
		popCencle(parentId);

		if( $('.tc_coupon').text() == '0' ){

			// location.reload();
		}

	});


	

	//쿠폰 하단 최종할인 버튼 이벤트sd_work_pj
	$('#dis_coupon').click(function(){
		var cart_movie_tprice = $('#cart_movie_tprice').val();
		var tt_dis = DelComma( $('.tt_dis').text() );//할인 총금액
		var parentId = $(this).parents('.coupon_popup').attr('id');
		

		
		if( parseInt(tt_dis) >= parseInt(cart_movie_tprice) ){//할인금액이 동영상 상품 금액보다 높거나 같을 시
			alert('할인금액이 상품 금액보다 높거나 같을 시 사용 되지 않습니다.' );
			
		}else{
	 		popSend(parentId);
		}
		//maxcash();
		//$('#it_cc_cash_all').text('0');
	});

	//소득공제 팝업 이벤트 sd_work_pj
	// $('.order-button.profit').on('click', function(){
	// 	$('.profitpop').show();
	// });
	$('.close_pop').on('click', function(){
		var parentId = $(this).parents('.profitpop');
		parentId.hide();	
	});

	//결제수단 클릭시 스타일변경 S: 230426 sd_work_pj
	$('.payment-item').each(function(){
		$(this).on('change',function(){
			//$(this).find('label').css('outline','2px solid #003ac4');
			//$(this).find('input[type=checkbox]:checked').siblings('label').css('outline','2px solid #003ac4');
			$(this).siblings().find('label').css('outline','none');
			$(this).siblings().find('input').prop('checked',false);
		});
	});

	//인풋값 최종할인 금액으로 보내기 sd_work_pj
	$("#dsp_cash").on("propertychange keyup paste input click", function(){
		if( $('.cash_kind').is(':checked') == false ){
			alert('상품을 먼저 선택해주세요.');
		}
		var cash_put = $(this).val();
		$('.final_cash').text( numchk(cash_put));
		
	});

	

});





$(window).resize(function() {
	rightSectionMove();
});
$(window).scroll(function() {
	rightSectionMove();
});

function rightSectionMove(){
	var $orderFormRight = $("#order_form_right");
	var $moveObj = $("#order_form_right_inner");

	var sectionTop = $orderFormRight.offset().top;
	var sectionLeft = $orderFormRight.offset().left;
	
	var scrollTop = $(window).scrollTop();
	var scrollLeft = $(window).scrollLeft();
	scrollLeft = scrollLeft == '' ? 0 : scrollLeft;

	var orderBottom = $("#order_bottom").offset().top;
	var moveObjHeight = $moveObj.height();
	
	var sectionBottom = orderBottom-moveObjHeight-100;
	var leftPx = sectionLeft-scrollLeft;

	if (scrollTop > sectionTop && scrollTop < sectionBottom) {
		$moveObj.css({
			"position":"fixed",
			"top" : 0,
			"left" : leftPx
		});
	}else if(scrollTop >= sectionBottom){
		$moveObj.css({
			"position":"absolute",
			"top" : sectionBottom - sectionTop,
			"left": 0
		});
	}else{
		$moveObj.css({
			"position":"absolute",
			"top" : 0,
			"left": 0
		});
	}

}

function tabMenu(){
	$(".tab-wrap .tab-content").hide();
	$(".tab-wrap .tab-content.selected").show();

	$(".tab-wrap .tab-menu a").on("click",function(e){
		e.preventDefault();
		var jqThis = $(this);
		
		if(!jqThis.attr("href")){
			return false;
		}
		var wrap =  jqThis.closest('.tab-wrap');
		var jqAnchors = wrap.children('.tab-menu').find("a");
		var jqContents = wrap.children(".tab-content");
		var saTargetId = jqThis.attr("href").split("#");
		var sTargetId = (saTargetId.length > 1)? saTargetId[1] : null;
		var jqTarget = null;
		
		if (sTargetId === null){
			return true;
		}

		if (jqContents.length === 0){
			jqContents = jqThis.parent().parent().parent().children().children(".tab-content");
		}
		
		jqAnchors.removeClass("selected");
		jqThis.addClass("selected");
		jqContents.hide();
		jqTarget = $("#" + sTargetId);
		jqTarget.css("visibility", "visible");
		jqTarget.show();
	});
}
function numberOnly(event) {
	var code = event.keyCode;
	if (code > 47 && code < 58){return}
	if (code > 95 && code < 106) {return}
	if (event.ctrlKey || event.altKey) {return}
	if (code === 9 || code === 36 || code === 35 || code === 37 || code === 39 || code === 8 || code === 46) {return}
	event.preventDefault();
}

function numberCommas(obj) {
    obj.value = comma(uncomma(obj.value));
}

function comma(str) {
	str = String(str);
	return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function uncomma(str) {
	str = String(str);
	return str.replace(/[^\d]+/g, '');
}

//sd_work_pj
function popSend(parentId){
	$('#'+parentId).hide();
}

//팝업창 취소버튼 이벤트임 S: 230425 sd_work_pj
function popCencle(parentId){ 
	$('#'+parentId).hide();
	$('body').removeClass('stop-scrolling').css('overflow','auto');


}