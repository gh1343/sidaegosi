$(document).ready(function() {
	sublistMenuApplygo();

	$(".cs-center-inquery").click(function() {
		if(!$('#topLoginChk').val()){
			alert("로그인이 필요한 페이지 입니다 \n\n로그인후 이용해주세요");
			onLoginForm();
			return false;
		}else{

		}
	});

	function sublistMenuApplygo(){
		$('.snb-list .apply-go a').on("click", function(e){

			e.preventDefault();
			var top = $("#apply_area").offset().top - 50;
			$('body,html').animate({
				scrollTop: top
			},300);

		});
	}

	// 컨텐츠 탭 [시작]
	$(".tab-wrap .tab-content").hide();
	$(".tab-wrap .tab-content.selected").show();

	$(".tab-wrap .tab-menu a").click(function(){
		var jqThis = $(this);
		var jqAnchors = jqThis.parents('.tab-menu').find("a");
		//var jqContents = jqThis.parents('.tab-wrap').children(".tab-content");
		var jqContents = jqThis.parent().parent().parent().children(".tab-content");
		var saTargetId = jqThis.attr("href").split("#");
		var sTargetId = (saTargetId.length > 1)? saTargetId[1] : null;
		var jqTarget = null;

		if (sTargetId === null){
			return true;
		}

		if (jqContents.length === 0){
			//jqContents = jqThis.parents('.tab-wrap').find(".tab-content");
			jqContents = jqThis.parent().parent().parent().children().children(".tab-content");
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
	// 컨텐츠 탭 [종료]

	//수험정보 서브탭
	 $('.exam_menu li a').on('click',function(){
		 var tabId = $(this).attr('href');
		  event.preventDefault();

			$(this).parent().addClass('selected');
			$(this).parent('li').siblings().removeClass('selected');
			$(tabId).siblings().removeClass('selected');
			$(this).parents('.exam_txt ').find(tabId).addClass('selected');

	 });
})
