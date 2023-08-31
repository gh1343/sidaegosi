
join_common = {
	run : function(){
		var inter_scroll;
		this.slide.containter.set(1);
		this.slide.term();
		this.slide.protector_degree();
		this.slide.choice();
		this.slide.pw_rule();
		this.check_action.circle_radio();
		this.check_action.all_agree();
		this.check_action.input_txt_chk();
	},
	slide : {
		containter : {
			prePageCnt : function(a){
				var b;
				(a ==1) ? b=2 : b=1;
				return b;
			},
			direction : function(a,b){
				var c =[];
				if(a > b){
					c[0]=true;
					c[1]=-1200;
				}else{
					c[0]=false;
					c[1]=0;
				}
				return c;
			},
			set :function (crrentNum){
				var preNum = this.prePageCnt(crrentNum);
				var preEle = $('.join-content'+preNum);
				var crrentEle = $('.join-content'+crrentNum);
				preEle.css("height",crrentEle.height());
				crrentEle.removeAttr("style");
			},
			animate : function(crrentNum){
				var preNum = this.prePageCnt(crrentNum);
				this.set(crrentNum);
				var direction = this.direction(crrentNum,preNum);
				$('.join-wrap').animate({"margin-left":direction[1]},200,function(){
					join_common.slide.inter_scroll(direction[0]);
				});

				$("body, html").scrollTop(0);
			}
		},

		term: function(){

			//sd_work_pj
			$('.cancel_button').click(function(){
				var termText = $('.term_text_wrap').find('div.term_text');
				var termTitle = $('.term_text_wrap').find('div.term_title');
				$('.term_text_wrap').hide();
				$('.right_part').removeClass('on');
				termTitle.removeClass('on');
				termText.removeClass('on');
				$('.term_text_wrap').removeClass('on');
				$('.term_text').removeClass('on');
				$('.term_bg').css("display","none");
			});

			$('.right_part').click(function() {
				var termText = $('.term_text_wrap').find('div.term_text');
				var termTitle = $('.term_text_wrap').find('div.term_title');
				var x = $(this).parents().index()-1;

				console.log(x);

				$('.term_text_wrap').css("display","block");
				//sd_work_pj
				$('.term_bg').css("display","block");
				if(!$(this).is('.on')){
					$('.right_part').removeClass('on');

					// $('.term_text_wrap').css({
					// 	'position': 'absolute',
					// 	'top': 'calc(50% - 35%)',
					// 	'width': '95%',
					// 	'left': '2.5%',
					// 	'height': '500px',
					// 	'background': '#fff',
					// 	'z-index': '999999',
					// 	'overflow': 'auto',
					// 	'border': '2px solid'
					// });
					$('.term_text').hide();
					$('.term'+x).show();

					$(this).addClass('on');
					termTitle.addClass('on');
					$('.term'+x).addClass('on');
					//termText.addClass('on');
					$('.term_text_wrap').addClass('on');
				}else{
					$('.term_text_wrap').removeClass('on');
					// $('.term_text_wrap').animate({
					// 	height:"0px"
					// });
					$('.term_text').hide();
					$('.right_part').removeClass('on');
					termTitle.removeClass('on');
					termText.removeClass('on');
					$(this).removeClass('on');
				}

			});
		},
		protector_degree: function(){
			$(".mb_birth select").on("change", function() {
				var syear = $("#mb_birth_year option:selected").val(), smonth = $("#mb_birth_month option:selected").val(), sdate = $("#mb_birth_day option:selected").val();
				var today = new Date();
				var birthDate = new Date(syear, smonth, sdate);
				var age = today.getFullYear() - birthDate.getFullYear();
				var m = today.getMonth()+1 - birthDate.getMonth();

				if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
					age--;
				}

				if(syear!='' && smonth!='' && sdate!='') {
					if(age<14) {
						alert("만 14세 미만은 회원가입 하실 수 없습니다.");
						$("#mb_birth_year option:eq(0)").prop("selected",true);
						$("#mb_birth_month option:eq(0)").prop("selected",true);
						$("#mb_birth_day option:eq(0)").prop("selected",true);
					}
				}

				if( !syear || !smonth || !sdate){
					$('.item_right.flex-box').css('border','1px solid red');
				}else{
					$('.item_right.flex-box').css('border','1px solid #dbdbdb');
				}

			});
		},
		choice : function(){
			$(".choice_list_btn").click(function() {
				if ($(".choice_list").css("display") == "none") {
					$(".choice_list").slideDown();
					$(".choice_list_img").css("height", "130px");
					$(".choice_list_btn").hide();
				}
			})
		},
		pw_rule : function(){
			$('.password .password_rule_btn').click(function() {
				$('.password_popup').show();
			});
			$(".password_popup button").click(function() {
				$(".password_popup").hide();
			})
		},
		inter_scroll : function(pChk){

			var mChk = false;
			var inter_navi_fixed_padding= 60; //fixed navi를위한 padding값
			var currentLoc = $(window).scrollTop();
			$('.inter_nav_btn').click(function(){
				mChk = true;
				var loc_id = $(this).attr('data-id');
				var loc = $("#"+loc_id).offset().top;
				$('.inter_nav_btn').removeClass('on');
				$(this).addClass('on');
				$('html,body').stop().clearQueue().animate({scrollTop:loc-inter_navi_fixed_padding},500,function(){
					mChk = false;
				})
			});

			// 관심분야 대분류 offset.top값 > 배열
			var topData = [];
			var navBtn = $('.inter_data');
			var inter_data_i = 0;
			$('.inter_data').each(function(){
				topData[inter_data_i] = $(this).offset().top;
				inter_data_i++;
			});

			var section = $('.inter_section')
			var sectionTop = section.offset().top;
			var sectionBottom = $(document).height() - section.height();

			function fixedScroll(currentLoc){
				currentLoc += inter_navi_fixed_padding;
				for(var j=0; j <= topData.length ; j++){
					if(currentLoc > topData[j] && currentLoc < topData[j+1]){
						$('.inter_nav_fixed').find('.inter_nav_btn').removeClass('on').eq(j).addClass('on');
					}
				}
			};

			function fixedShow(currentLoc){
				if(currentLoc > sectionTop && currentLoc < sectionBottom){
					$('.inter_nav_fixed').show();
				}else{
					$('.inter_nav_fixed').hide();
				}
			};

			if(pChk){
				fixedScroll(currentLoc);

				fixedShow(currentLoc);

				$(window).on("scroll",function() {
					currentLoc = $(window).scrollTop();
					fixedShow(currentLoc);
					if(!mChk){
						fixedScroll(currentLoc);
					}
				});

			}else{

				$(window).off("scroll");

			}
			return false;
		}
	},
	check_action : {
		circle_radio : function(){
			$('.term_degree [type="checkbox"].circle_radio').click(function() {
				var jqThis = $(this);

				if(jqThis.hasClass("agree1") || jqThis.hasClass("agree2")){
					$(".onclick_degree input[type='radio']").prop("checked", false);
					$("#"+jqThis.attr("for")).prop("checked", true);
					return false;
				}
				if($(".agree_ness:checked").length == "3" && $("#agree8").prop("checked") == true && $("#agree6").prop("checked") == true){
				//if($(".agree_ness:checked").length == "3" && $(".agree_cho").prop("checked")==true){

					$("#agree1").prop("checked", false);
					$("#agree2").prop("checked", true);

				}else if($(".agree_ness:checked").length == "3" && $(".agree_cho").prop("checked")==false){
					$("#agree1").prop("checked", true);
					$("#agree2").prop("checked", false);

				}else{
					$("#agree1").prop("checked", false);
					$("#agree2").prop("checked", false);
				}
				//문자수신동의 체크해제시 컨펌 2021/7/28 추가
				if($(this).attr('id')=='agree6' && !$(this).is(":checked")) {
					if(!confirm("수신 미동의 시 3,000원 추가 할인 쿠폰과\n서비스, 이벤트 혜택 알림을 받을 수 없습니다.\n서비스 · 이벤트 정보 수신을 미동의 하시겠습니까?")) {
						return false;
					}
				}

			});

			$(".protector_degree .circle_radio").click(function(){
				var jqThis = $(this);
				$(".protector_degree #parent_re").val(jqThis.val()).removeClass("n");
			});



			$('.choice_list .join_route .circle_radio').click(function() {
				var jqThis = $(this);

				if ($('#join_etc').is(":checked")) {
					$('#join_etc_txt').removeAttr('readonly').removeClass("readonly");
				} else {
					$('#join_etc_txt').attr('readonly', true).addClass("readonly").val('');
				}
			});

		},
		all_agree : function(){
			$(".onclick_degree [type='radio']").click(function(){
				// 전체선택 클릭시
				var jqThis = $(this);
				var jqId = jqThis.attr("id");

				$(".onclick_degree [type='radio']").prop("checked", false);

				if($(".agree_ness:checked").length != "3"){
					$('.agree_cho').prop("checked", true);
					$('.agree_ness').prop("checked", true);
					jqThis.prop("checked", true);
				}else{
					$('.agree_cho').prop("checked", false);
					$('.agree_ness').prop("checked", false);
					jqThis.prop("checked", false);
				}
			});

		},
		input_txt_chk : function(){
			var str;
			var msg;
			var color;
			$("#reg_mb_id").on('blur', function(e) {

				var str = $("#reg_mb_id").val();
				var lengthChk, strChk;
				var result = "";
				lengthChk = (str.length >= 6 && str.length <= 12) ? true : false;
				strChk = str_chk(str, /[^a-z|^0-9\_]/);

				if (!lengthChk || !strChk) {
					msg = "6~12자 영문 소문자, 숫자 조합";
					// msg = "아이디는 공백없이 6~12자 사이의 영문 소문자, 숫자만 사용가능합니다.";
					color = "n";
					result = "id";
					$(this).parent().siblings('.text_alert').removeClass('y n').addClass(color).text(msg);
					//sd_work_pj
					$('#reg_mb_id').parent().css('border','1px solid #d91a1a');
					msg = "";
				} else {
					$.post("/member/ajax_memIdChk.php", {
						chkMemId : str
					}, function(result) {
						if (result == 0) {
							msg = "사용할 수 있는 아이디 입니다.";
							color = "y";
							$('#reg_mb_id').parent().css('border','1px solid #dbdbdb');
						} else {
							msg = "이미 사용중인 아이디입니다.";
							color = "n";
							result = "id";
							$('#reg_mb_id').parent().css('border','1px solid #d91a1a');
						}
						$("#reg_mb_id").parent().siblings('.text_alert').removeClass('y n').addClass(color).addClass(result).text(msg)
						msg = "";
					});
				}
			}).on("keyup", function() {


				var str = $("#reg_mb_id").val();
				var lengthChk, strChk;
				var result = "";
				lengthChk = (str.length >= 6 && str.length <= 12) ? true : false;
				strChk = str_chk(str, /[^a-z|^0-9\_]/);

				if (!lengthChk || !strChk) {
					msg = "6~12자 영문 소문자, 숫자 조합";
					//msg = "아이디는 공백없이 6~12자 사이의 영문 소문자, 숫자만 사용가능합니다.";
					color = "n";
					result = "id";
					$(this).parent().siblings('.text_alert').removeClass('y n').addClass(color).text(msg);
					$('#reg_mb_id').parent().css('border','1px solid #d91a1a');
					msg = "";
				} else {
					$.post("/member/ajax_memIdChk.php", {
						chkMemId : str
					}, function(result) {
						if (result == 0) {
							msg = "사용할 수 있는 아이디 입니다.";
							color = "y";
							$('#reg_mb_id').parent().css('border','1px solid #dbdbdb');
						} else {
							msg = "이미 사용중인 아이디입니다.";
							color = "n";
							result = "id";
							$('#reg_mb_id').parent().css('border','1px solid #d91a1a');
						}
						$("#reg_mb_id").parent().siblings('.text_alert').removeClass('y n').addClass(color).addClass(result).text(msg)
						msg = "";
					});
				}

			});

			//패스워드
			function pw_chk() {
				var str = $("#mb_password").val();
				var lengthChk = false;
				var rangeChk=true;
				var chk = 0;
				var range = 1;
				lengthChk = (str.length >= 8 && str.length <= 20) ? true : false;

				for(i=0;i < str.length; i++){
					if(i == str.length-1){ break;};

					if(str.substring(i,i+1) != str.substring(i+1,i+2) ){
						range = 0;
					}else{
						range++;
					}

					if(range > 3){
						rangeChk = false;
						break;
					}
				}

				var result = "";

				

				if(str.search(/[0-9]/) != -1 ) chk+=1;
				if(str.search(/[a-z]/)  != -1 ) chk+=1;
				// if(str.search(/[A-Z]/)  != -1 ) chk+=1;
				if(str.search(/[!@#$%^&*()?_~]/g)  != -1  ) chk+=1;

				if (!lengthChk || chk < 3 || !rangeChk) {
					msg = "영문+숫자+특수문자 조합 (8자리 이상)";
					// msg = "8~20자의 영문, 숫자, 특수문자를 사용해주세요.";
					color = "n";
					result = "pw";
					$('#mb_password').parent().css('border','1px solid #d91a1a');
					
					
				}else{
					msg = "사용할 수 있는 비밀번호 입니다.";
					// msg = "비밀번호 사용이 가능합니다.";
					color = "y";
					$('#mb_password').parent().css('border','1px solid #dbdbdb');
				}

				
				return [msg, color, result];
			}


			$("#mb_password").on('keyup', function() {
				$(this).parent().siblings('.text_alert').removeClass('y n').addClass(pw_chk()[1]).text(pw_chk()[0]);
				var textAlert = $("#mb_password_re").parent().siblings('.text_alert');
				if ($(this).val() == $('#mb_password_re').val()) {
					msg = "비밀번호가 일치합니다.";
					textAlert.addClass('y');
					textAlert.text(msg);
					$('#mb_password').parent().css('border','1px solid #dbdbdb');
				} else {
					textAlert.removeClass('n').removeClass("y").removeClass("pc");
					
				}
				//연속 4글자 test
				var str = $('#mb_password').val();
				for (i=0; i<str.length; i++){
					var CodeNum = str.charAt(i);
					var Codes = (CodeNum+CodeNum+CodeNum+CodeNum);
					if ( str.indexOf(Codes) >-1) {
						//$('#mb_password').attr('maxlength','4');
						$('#mb_password').parent().siblings('.text_alert').html('연속된 숫자 문자(4개 이상)는 제한');
						$('#mb_password').val('');
					
						//msg = "연속된 숫자 문자(4개이상)는 제한";
						
						//result = "co";
						// $('#mb_password').parent().css('outline','1px solid #d91a1a');
						
					}
					
				}

				//msg = "";
			});

			//비밀번호 일치
			$("#mb_password_re").on('keyup', function() {
				var msg;
				var textAlert = $(this).parent().siblings('.text_alert');
				textAlert.removeClass('y n');

				//sd_work_pj
				if ( $('#mb_password_re').val() == '' ) {
					msg = "비밀번호를 확인해주세요";
					textAlert.addClass('n').addClass("pc");
					$('#mb_password_re').parent().css('border','1px solid #d91a1a');
				}else if(  $('#mb_password').val() != $('#mb_password_re').val()){
					msg = "비밀번호가 일치하지 않습니다.";
					//msg = "현재 입력한 비밀번호와 일치하지 않습니다.";
					textAlert.addClass('n').addClass("pc");
					$('#mb_password_re').parent().css('border','1px solid #d91a1a');
				}else {
					msg = "비밀번호가 일치합니다.";
					textAlert.addClass('y');
					$('#mb_password_re').parent().css('border','1px solid #dbdbdb');
				}
				
				/*
				if ($('#mb_password').val() != $('#mb_password_re').val()) {
					msg = "현재 입력한 비밀번호와 일치하지 않습니다.";
					textAlert.addClass('n').addClass("pc");
				} else {
					msg = "비밀번호가 일치합니다.";
					textAlert.addClass('y');
				}
				*/
				$(this).parent().siblings('.text_alert').text(msg);
			});
			
			$("#mb_name").on('keyup', function(e) {
				var content = $(this).val();
				var textAlert = $(this).parent().siblings('.text_alert');
				
				var data = name_chk($("#mb_name").val());
				$(this).parent().siblings('.text_alert').removeClass('y n').addClass(data[1]).text(data[0]);
				// if ($(this).val().length > 13) {
				// 	$(this).val($(this).val().substr(0, 13));
				// 	//$(this).val($(this).val().substring(0, 13));
				// }
				// else{
				// 	textAlert.addClass('n').addClass("pc");
				// }
				msg = "";
				
			});
			

			//이름
			function name_chk(name) {
				var lengthChk = false;
				var strChk;
				var str_large;

				lengthChk = (name.length >= 2 && name.length <= 13) ? true : false;
				strChk = str_chk(name, /[^가-힣]/);
				str_large = str_chk(name, /[^ㄱ-ㅎ| ㅏ-ㅣ]/);

				var result = "";
				if (!lengthChk) {
					msg = "2자 이상 입력해주세요.";
					color = "n";
					result = "nm";
					$('#mb_name').parent().css('border','1px solid #d91a1a');
					if( name.length > 12){
						msg = "";
						$('#mb_name').parent().css('border','1px solid #dbdbdb');
					}
				}else if (lengthChk && !strChk) {
					msg = "표준 한글을 입력해주세요.";
					color = "n";
					$('#mb_name').parent().css('border','1px solid #d91a1a');
				} else {
					msg = "";
					color = "y";
					$('#mb_name').parent().css('border','1px solid #dbdbdb');
				}
				return [msg, color];
			}

			

			function str_chk(str, check) {
				var result = check.test(str);
				return !result
			}

			function num_chk() {
				if (event.keyCode < 48 || event.keyCode > 57) {
					event.returnValue = false;
				}
			}
			
			//보호자동의
			$("#protector_name").on('keyup', function() {
				var data = name_chk($("#protector_name").val());
				$(this).parent().siblings('.text_alert').removeClass('y n').addClass(data[1]).text(data[0]);
				msg = "";
			});
		},
		inter_chk :function(){
			$(".inter_list").find("li").each(function() {
				if($("#inter_choice").text() == $(this).text()) {
					$(this).find(".i_check").trigger("click");
				}
			});

		}
	}

}
//드론 교육원용 회원가입 타입 체크
//드론 교육원은 관심 과목 선택 없이 넘어가야함  20187.03.21 조재훈
var type_chk = '';
$(document).ready(function() {

	var now_date;

	$(".show-company-info").click(function(e) {
		onopen();
		return false;
	});

	var onopen = function(){
		var url ="http://www.ftc.go.kr/info/bizinfo/communicationViewPopup.jsp?wrkr_no=1058752478";
		window.open(url, "communicationViewPopup", "width=750, height=700;");
		return false;
	}

	if (window.location.pathname == "/member/member_join_step1.php" || window.location.pathname == "/member/member_join_step2.php"){
		$(".head").css("display","none");
		$(".header").css("display","none");
	}

	//시대드론 교육원 추가로 인해 작업함 2018.03.21 조재훈
	$("[name='memfav']").val('');

	if (window.location.hostname == "www.sidaedrone.co.kr"){
		//type_chk = 'drone';
		$(".fav_list").css("display","none");//자격증
		$("[name='memfav']").val('시대드론교육원');
	}

	var target = '/popkon';
	var join_txt ="시대에듀";
	if (window.location.hostname == "www.sidaedrone.co.kr"){
		g4_path = "";
		var chk = 0;
		target = '/';
		join_txt = "시대드론교육원";
	}

	$(".inter_data").css("display","none");

	//자격증
	$('.fav_1').click(function(e) {
		$('.fav_menu span').removeClass('active');
		$(this).addClass('active');
		$(".inter_data").css("display","none");
		$("#inter01").css("display","block");
		//sd_work_pj
		$('.cho_group_list1').css('display','block');
		$(".cho_group_list2, .cho_group_list3, .cho_group_list4, .cho_group_list5, .cho_group_list6").css("display","none");
		$('.consonant').css('display','flex');
		$('.consonant li:first-child').addClass('active');
		$('.consonant li').not(':first-child').removeClass('active');
	});
	//공무원
	$('.fav_2').click(function(e) {
		$('.fav_menu span').removeClass('active');
		$(this).addClass('active');
		$(".inter_data").css("display","none");
		$("#inter02").css("display","block");
		$('.consonant').hide();
	});
	//독학사
	$('.fav_3').click(function(e) {
		$('.fav_menu span').removeClass('active');
		$(this).addClass('active');
		$(".inter_data").css("display","none");
		$("#inter03").css("display","block");
		$('.consonant').hide();
	});
	//취업
	$('.fav_4').click(function(e) {
		$('.fav_menu span').removeClass('active');
		$(this).addClass('active');
		$(".inter_data").css("display","none");
		$("#inter05").css("display","block");
		$('.consonant').hide();
	});

	//학력.학위
	$('.fav_5').click(function(e) {
		$('.fav_menu span').removeClass('active');
		$(this).addClass('active');
		$(".inter_data").css("display","none");
		$("#inter04").css("display","block");
		$('.consonant').hide();
	});

	//AI모의고사
	$('.fav_6').click(function(e) {
		$('.fav_menu span').removeClass('active');
		$(this).addClass('active');
		$(".inter_data").css("display","none");
		$("#inter06").css("display","block");
		$('.consonant').hide();
	});

	//온라인 모의고사
	$('.fav_7').click(function(e) {
		$('.fav_menu span').removeClass('active');
		$(this).addClass('active');
		$(".inter_data").css("display","none");
		$("#inter07").css("display","block");
		$('.consonant').hide();
	});


	//sd_work_pj
	$('.consonant li').click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});

	//sd_work_pj 초성그룹 셀렉트
	$('.cho_group1').click(function(){
		$('.cho_group_list1').show();
		$('.cho_group_list2').hide();
		$('.cho_group_list3').hide();
		$('.cho_group_list4').hide();
		$('.cho_group_list5').hide();
		$('.cho_group_list6').hide();
	});
	$('.cho_group2').click(function(){
		$('.cho_group_list1').hide();
		$('.cho_group_list2').show();
		$('.cho_group_list3').hide();
		$('.cho_group_list4').hide();
		$('.cho_group_list5').hide();
		$('.cho_group_list6').hide();
	});
	$('.cho_group3').click(function(){
		$('.cho_group_list1').hide();
		$('.cho_group_list2').hide();
		$('.cho_group_list3').show();
		$('.cho_group_list4').hide();
		$('.cho_group_list5').hide();
		$('.cho_group_list6').hide();
	});
	$('.cho_group4').click(function(){
		$('.cho_group_list1').hide();
		$('.cho_group_list2').hide();
		$('.cho_group_list3').hide();
		$('.cho_group_list4').show();
		$('.cho_group_list5').hide();
		$('.cho_group_list6').hide();
	});
	$('.cho_group5').click(function(){
		$('.cho_group_list1').hide();
		$('.cho_group_list2').hide();
		$('.cho_group_list3').hide();
		$('.cho_group_list4').hide();
		$('.cho_group_list5').show();
		$('.cho_group_list6').hide();
	});
	$('.cho_group6').click(function(){
		$('.cho_group_list1').hide();
		$('.cho_group_list2').hide();
		$('.cho_group_list3').hide();
		$('.cho_group_list4').hide();
		$('.cho_group_list5').hide();
		$('.cho_group_list6').show();
	});

	// 이부분이  가입 버튼
	//var jqThis = $(this);

	//if(jqThis.attr("id")=="join_go"){
	$('#join_go').click(function(e) {

		if(stepSubmit()){

			var mb_name = $("[name='mb_name']").val();
			var mb_id = $("[name='mb_id']").val();
			var mb_hp = $("[name='mb_hp0']").val() + "-" + $("[name='mb_hp1']").val() + "-" + $("[name='mb_hp2']").val();;
			var fav_id = $("[name='fav_id']").val();
			var svs = $("[name='svs']").val();
			var mb_sms = $('.necessary_items input[name^=mb_sms]').val();
			var agree_stat = $(".memberJoinOne [name='agree_stat']").val();

			var memberJoinTwo = $(".memberJoinTwo");

			var cfcResult = "";
			$.ajax({
				type : "POST",
				url : g4_path + "/member/ajax_pPassChk_N.php",
				success : function(result) {
					cfcResult = result;
				},
				async:false
			});


			if(true || cfcResult == "OK"){
				//alert("mb_sms = "+mb_sms+"");
				//alert("agree_stat = "+agree_stat+"");
				//return false;

				$.ajax({
					type : "POST",
					url : g4_path + "/member/ajax_joinstep_form2_update_renew.php",
					//url : g4_path + "/member/ajax_joinstep_form2_update.php",
					data : {"mb_name": mb_name, "mb_id": mb_id, "mb_hp" : mb_hp, "mb_sms" : mb_sms, "agree_stat" : agree_stat},
					success : function(result) {
						if(result == "FAIL"){
							alert("인증 휴대폰 정보가 일치하지 않습니다.");
							window.location.reload();
							return false;
						} else {
							var answer;
							answer = confirm("회원 가입을 진행하시겠습니까?");
							if(answer == true){
								memberJoinTwo.submit();
							} else {
								return false;
							}
						}
					},
					async:false
				});

			}else{
				alert("휴대전화 본인 인증 후 가입완료 됩니다.");
				return false;
			}

		}
	});

	$('#join_cancle').click(function(){
		alert("임시저장 한 데이터는 유지됩니다.");

		join_common.slide.containter.animate(1);
		$("#kcaptcha_image").trigger("click");
		$("#auto_prevent_txt").val("");
		$(".memberJoinOne").find("[name='w']").val("u");

	});

	// 지인추천 팝업
	$(".close-pop").click(function(e){
		e.preventDefault();
		$(".fixed-event-pop").hide();
	});

	$(".show-evt-info").click(function(e){
		e.preventDefault();
		$(".fixed-event-pop").show();
	});

	join_common.run();


	//휴대전화 인증 횟수
	var clickLimitN = 0;
	//일반회원가입
	var clickLimitP = 0;
	//보호자동의
	var agreeNo = 0;
	//휴대전화 인증번호
	var pChkTimer = "";
	//타이머
	var pType = "pt";
	//보호자, 일반 (default = 일반)
	var chkCount = 0;
	//인증번호요청 취합
	var overthat = 0;
	//인증요청 5회이상
	//휴대폰 인증




///////////////////////////
// 보호자 동의 인증 부분  시작 //
///////////////////////////
	$(document).on("click", "#pChk", function(e) {
		e.preventDefault();
		var jqThis = $(this);
		var jqTarget = jqThis.parent();

		pType = "pt";

		chkCount = clickLimitP;

		var phoneNumber = $(".pt_hp").val() + "-" + $("[name='pt_hp1']").val() + "-" + $("[name='pt_hp2']").val();
		//휴대전화번호 취합

		if ($("[name='pt_hp1']").val().length < 3) {

			alert("휴대폰 번호를 정확히 입력해주세요");

			$("[name='pt_hp1']").focus();
			$('.cell_ph .item_right').css('border','1px solid #d91a1a');
			return false;

		}

		if ($("[name='pt_hp2']").val().length < 4) {

			alert("휴대폰 번호를 정확히 입력해주세요");

			$("[name='pt_hp2']").focus();
			$('.cell_ph .item_right').css('border','1px solid #d91a1a');
			return false;

		}

		if (countChk(chkCount, "")) {

			overthat = 1;

		}

		if (phoneNumber.indexOf('--') > 0) {

			alert("휴대전화번호를 다시 입력해주세요.");

			return false;

		}


		if (overthat == '0') {
			$.post(g4_path + "/member/ajax_pCertification_P.php", {
				phoneNumber : phoneNumber
			}, function(pChk) {

				if (pChk == 'already') {

					alert("이미 가입된 휴대 전화번호 입니다. 다른 휴대전화번호를 입력하세요.");

					return false;

				} else if (pChk == 'interception') {

					alert("차단된 휴대전화번호 입니다. 다른 휴대전화번호를 입력하세요. ");

					return false;

				} else {

					alert(phoneNumber + " 입력하신 번호로 인증 번호가 발송되었습니다.\n\n일정 시간 내에 문자 메세지가 도착 하지 않을시에\n\n대표번호 : 1600-3600 으로 연락 주시기 바랍니다.");

					jqThis.closest(".necessary_items").find(".protector_right .timeWrap").css("background-color", "#fff");
					jqThis.closest(".necessary_items").find(".protector_right .timeWrap .code_txt").attr("disabled", false).attr("readonly",false).css("background-color", "#fff");
					jqThis.closest(".necessary_items").find(".protector_right #pCertify").css("display", "inline");
					clickLimitP++;


					jqTarget.find(".code_txt").focus();
				}

				jqTarget.find(".code_timer").show();

				var count = 180;
				//제한시간 3분
				var timer = "";

				clearInterval(pChkTimer);

				pChkTimer = setInterval(function() {

					count--;

					var min = 0;
					var second = count % 60;

					if (count >= 60) {

						min = Math.floor(count / 60);

					}

					if (second < 10) {

						second = "0" + second;

					}

					if (count == 0) {

						clearInterval(pChkTimer);

						alert("인증시간이 초과 되었습니다. 인증번호를 다시 요청해주세요.");

						jqTarget.find(".code_timer").text("3:00");
						jqTarget.find(".code_timer").hide();
						jqThis.closest(".necessary_items").find(".protector_right .timeWrap").css("background-color", "rgb(229, 229, 229)");
						jqThis.closest(".necessary_items").find(".protector_right .timeWrap .code_txt").attr("disabled", true).attr("readonly",true).val("").css("background-color", "rgb(229, 229, 229)");
						jqThis.closest(".necessary_items").find(".protector_right #pCertify").css("display", "none");

						return false;

					}

					timer = min + ":" + second;

					jqTarget.find(".code_timer").text(timer);

				}, 1000);

			});
		}
	});
///////////////////////////
// 보호자 동의 인증 부분  끝 //
///////////////////////////



///////////////////////////
// 일반 인증 부분  시작 //
///////////////////////////
	$(document).on("click", "#nChk", function(e) {

		var chk_name = $("#mb_name").val();
		var chk_usingname = $("#mb_name").parent().siblings('.text_alert');
		var chk_pwd = $("#mb_password").val();
		var chk_pwd_re = $("#mb_password_re").val();
		var chk_id = $("#reg_mb_id").val();
		var chk_years = $("#mb_birth_year").val();
		var chk_month = $("#mb_birth_month").val();
		var chk_bday = $("#mb_birth_day").val();


		//console.log("M - " + chk_month + " // " +"D - " + chk_bday);

		if(!chk_id || $('[for="reg_mb_id"]').siblings('.text_alert').hasClass('n') == true){
			alert("아이디를 입력해주세요");
			$("[name='mb_id']").focus();
			return false;
		}

		if( !chk_pwd || $("#mb_password").parent().siblings('.text_alert').hasClass('n') == true){
			alert("비밀번호를 확인해주세요");
			$("#mb_password").parent().css('border','1px solid #d91a1a');
			$("[name='mb_password']").focus();
			return false;
		}else{
			$("#mb_password").parent().css('border','1px solid #dbdbdb');
		}

		if( !chk_pwd_re || $("#mb_password_re").parent().siblings('.text_alert').hasClass('n') == true){
			alert("비밀번호가 일치하지 않습니다");
			$("#mb_password_re").parent().css('border','1px solid #d91a1a');
			$("[name='mb_password_re']").focus();
			return false;
		}else{
			$("#mb_password_re").parent().css('border','1px solid #dbdbdb');
		}

		if((chk_usingname.hasClass('n')) == true || !chk_name){
			alert('이름을 입력해주세요.');
			$("#mb_name").parent().css('border','1px solid #d91a1a');
			$("[name='mb_name']").focus();
			return false;
		}else{
			$("#mb_name").parent().css('border','1px solid #dbdbdb');
		}
		
		// if( (chk_usingname.hasClass('y')) == true ){
		// 	$("#mb_name").parent('.item_right').css('border','1px solid #dbdbdb');
		// 	return false;
		// }

		if ( chk_years == "" || chk_month == "" || chk_bday == ""){
			alert("생년월일을 선택해 주세요");
			$("#mb_birth_year").focus();
			$('.item_right.flex-box').css('border','1px solid #d91a1a');
			return false;
		}else{
			$('.item_right.flex-box').css('border','1px solid #dbdbdb');
		}


		chk_bday = Number(chk_bday);
		if (chk_month == "2"){
			if (chk_bday > 28){
				alert("생년월일을 선택해 주세요");
				return false;
			}
		} else if (chk_month == "4" || chk_month == "6" || chk_month == "9" || chk_month == "11"){
			if (chk_bday > 30){
				alert("생년월일을 선택해 주세요");
				return false;
			}
		}

		e.preventDefault();
		var jqThis = $(this);
		var jqTarget = jqThis.parent();
		var jqGrandParent = jqTarget.parent();

		pType = "mb";
		chkCount = clickLimitN;

		var phoneNumber = $("[name='mb_hp0']").val() + "-" + $("[name='mb_hp1']").val() + "-" + $("[name='mb_hp2']").val();


		if ($("[name='mb_hp1']").val().length < 3) {

			alert("휴대폰 번호를 정확히 입력해주세요");

			$("[name='mb_hp1']").focus();
			$('.cell_ph .item_right').css('border','1px solid #d91a1a');
			return false;

		}else{
			$('.cell_ph .item_right').css('border','none');
		}

		if ($("[name='mb_hp2']").val().length < 4) {

			alert("휴대폰 번호를 정확히 입력해주세요");

			$("[name='mb_hp2']").focus();
			$('.cell_ph .item_right').css('border','1px solid #d91a1a');
			return false;

		}else{
			$('.cell_ph .item_right').css('border','none');
		}

		if (countChk(chkCount, "")) {

			overthat = 1;

		}


		if (phoneNumber.indexOf('--') > 0) {

			alert("휴대전화번호를 다시 입력해주세요.");

			return false;

		}
		//보호자 번호 일반번호 체크
		var p_hp = $("[name='p_hp']").val();
		if( phoneNumber == p_hp ){
			alert("법정대리인의 번호와 회원의 번호는 동일할 수 없습니다.");
			return false;
		}


		if (overthat == '0') {
			$.post(g4_path + "/member/ajax_pCertification_N.php", {
				phoneNumber : phoneNumber
				,chkName : chk_name
			}, function(pChk) {

				pChks = pChk.split("^");
				console.log(pChks);
				if (pChks[0] == 'already') {
					//여기안쑴
					if(pChks[3]=='0'){
						$(".modalyong .textboxs p").html('이미 가입한 이력이 있습니다.<br> - ID : '+pChks[1]+'<br><br>로그인 페이지로 이동하시겠습니까?');
						$(".btns2").show();
						$("#bback").show();

					}else if(pChks[3]=='naver'){
						$(".modalyong .textboxs p").html('네이버 간편회원으로 가입한 이력이 있습니다.<br>가입시 등록한 ID로  로그인 하실 수 있습니다.<br><br> - ID : '+pChks[1]+'<br><br>로그인 페이지로 이동하시겠습니까?');
						$(".btns2").show();
						$("#bback").show();
					}else if(pChks[3]=='kakao'){
						$(".modalyong .textboxs p").html('카카오 간편회원으로 가입한 이력이 있습니다.<br>가입시 등록한 ID로  로그인 하실 수 있습니다.<br><br> - ID : '+pChks[1]+'<br><br>로그인 페이지로 이동하시겠습니까?');
						$(".btns2").show();
						$("#bback").show();
					}else{
						alert("이미 가입된 휴대 전화번호 입니다. 다른 휴대전화번호를 입력하세요.");
					}

					return false;

				} else if (pChks[0] == 'interception') {

					alert("차단된 휴대전화번호 입니다. 다른 휴대전화번호를 입력하세요. ");

					return false;

				} else if (pChks[0] == 'etcError') { // 20221206 추가 sd_kshbx

					alert(pChks[1]);

					return false;

				} else {
					var br_agent = navigator.userAgent.toLowerCase();
					//if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (br_agent.indexOf("msie") != -1) ){
					alert("인증번호가 발송되었습니다.\n문자 메세지가 도착하지 않을시 1600-3600 으로 연락 주시기 바랍니다.");
					//}
					//생년월일 수정 못하게 하기
					$('.mb_birth').find('#mb_birth_year, #mb_birth_month, #mb_birth_day').addClass('no_select');
					$('.mb_birth').addClass('select_baria');

					//이름 수정 ㄴㄴ
					$('#mb_name').attr("disabled", false).attr("readonly", true).css("background-color", "#e5e5e5");
					$('#reg_mb_id').attr("readonly", true);
					$('#reg_mb_id').css({"background-color": "#e5e5e5","pointer-events":"none","user-select":"none"});

					jqThis.parent().find(".code").css({'display':'flex','z-index':'2'});
					jqThis.parent().find(".code").show();
					jqThis.parent().find(".code .timeWrap").css("background-color", "#fff");
					jqThis.parent().find(".code .timeWrap .code_txt").attr("readonly", false).attr("disabled", false).css("background-color", "#fff");
					jqThis.parent().find(".code #pCertify").css("display", "inline");
					var thisVal = jqGrandParent.find("#mb_hp").val();
					jqGrandParent.find("#mb_hp").after("<input type='text' id='mb_hp' name='mb_hp0' class='phone_num mb_hp' maxlength='3' value='" + thisVal + "' readonly='readonly' style='background-color : #e5e5e5;''>");
					jqGrandParent.find("#mb_hp").eq(0).remove();
					jqGrandParent.find("#mb_hp1").attr("disabled", false).attr("readonly", true).css("background-color", "#e5e5e5");
					jqGrandParent.find("#mb_hp2").attr("disabled", false).attr("readonly", true).css("background-color", "#e5e5e5");

					
					jqGrandParent.find("#nChk").remove();
					jqGrandParent.find("#mb_hp2").after(" <input type='button' class='chk_btn1 pUpdate' value='취소' name='pUpdate' id='pUpdate'>");
					//jqGrandParent.find("#mb_hp2").after(" <input type='button' class='chk_btn1 pUpdate' value='취소' name='pUpdate' id='pUpdate' style='margin-left: 3px;'>");
					jqGrandParent.find(".Chk_notice").css('display','block');
					$('.mail_degree').css('margin-top','0');


					clickLimitN++;

					jqTarget.find(".code_txt").focus();
				}

				jqTarget.find(".code_timer").show();
				// [S] 통신사 서버 점검으로 인해 sms 전송 오류 공지 문구 삽입 조재훈.20171128
				now_date = $("[name='now_date']").val();
				if (now_date >= "2020-01-18 22:59:59" && now_date < "2020-01-19 05:00:00")
				{
					jqTarget.find(".notice_sms").show();
				}
				// [E] 통신사 서버 점검으로 인해 sms 전송 오류 공지 문구 삽입 조재훈.20171128
				var count = 180;
				//제한시간 3분
				var timer = "";

				clearInterval(pChkTimer);

				pChkTimer = setInterval(function() {

					count--;

					var min = 0;
					var second = count % 60;

					if (count >= 60) {

						min = Math.floor(count / 60);

					}

					if (second < 10) {

						second = "0" + second;

					}

					if (count == 0) {

						clearInterval(pChkTimer);

						alert("인증시간이 초과 되었습니다. 인증번호를 다시 요청해주세요.");


						jqThis.parent().find(".code .timeWrap .code_txt").attr("disabled", true).attr("readonly",true).val("").css("background-color", "rgb(229, 229, 229)");
						jqThis.parent().find(".code .timeWrap").css("background-color", "rgb(229, 229, 229)");
						jqThis.parent().find(".code #pCertify").hide();
						jqGrandParent.find(".Chk_notice").hide();

						jqTarget.find(".code_timer").text("3:00");
						jqTarget.find(".code_timer").hide();
						// [S] 통신사 서버 점검으로 인해 sms 전송 오류 공지 문구 삽입 조재훈.20171128
						jqTarget.find(".notice_sms").hide();
						// [E] 통신사 서버 점검으로 인해 sms 전송 오류 공지 문구 삽입 조재훈.20171128

						$(".necessary_items .code").hide();
						$("#pUpdate").remove();


						$('#mb_name').attr("readonly", false).css("background-color", "#ffffff");
						$('#reg_mb_id').attr("readonly", false).css("background-color", "#ffffff");
						$('.mb_birth').find('#mb_birth_year, #mb_birth_month, #mb_birth_day').removeClass('no_select');
						$('.mb_birth').removeClass('select_baria');


						/*
                        jqGrandParent.find("#mb_hp option").eq(0).attr("selected", "selected").attr("readonly", false).css("background-color", "#ffffff");
                        jqGrandParent.find("#mb_hp1").val("").attr("readonly", false).css("background-color", "#ffffff");
                        jqGrandParent.find("#mb_hp2").val("").attr("readonly", false).css("background-color", "#ffffff");
                        */


						jqGrandParent.find("#mb_hp").after("<select title='' id='" + pType + "_hp' class='" + pType + "_hp' name='" + pType + "_hp0'><option value='010' selected='selected'>010</option>	<option value='011'>011</option><option value='016'>016</option><option value='017'>017</option><option value='018'>018</option><option value='019'>019</option></select>");
						jqGrandParent.find("#mb_hp").eq(0).remove();
						jqGrandParent.find("#mb_hp1").attr("readonly", false).css("background-color", "#ffffff");
						jqGrandParent.find("#mb_hp2").attr("readonly", false).css("background-color", "#ffffff");
						$("#mb_hp2").after("<input type='button' class='chk_btn1' value='인증번호요청' name='nChk' id='nChk'>");
						//$("#mb_hp2").after("<input type='button' class='chk_btn1' value='인증번호요청' name='nChk' id='nChk' style='margin-left: 5px;'>");
						

						return false;

					}

					timer = min + ":" + second;

					jqTarget.find(".code_timer").text(timer);

				}, 1000);




			});
		}
	});

	// $('#mb_birth_year, #mb_birth_month, #mb_birth_day').on('change',function(){	
	// 	if( $('#mb_birth_year option:selected') && $('#mb_birth_month option:selected') && $('#mb_birth_day option:selected')){
	// 		$('.item_right.flex-box').css('border','none');
	// 		console.log('1');
	// 	}else{
	// 		$('.item_right.flex-box').css('border','1px solid #d91a1a');
	// 		console.log('2');
	// 	}

	// 	//$('.item_right.flex-box').css('border','1px solid #d91a1a');
	// });

	$('#mb_hp1, #mb_hp2').on('keyup',function(){
		if( $('#mb_hp2').val().length == 4 && ($('#mb_hp1').val().length == 3 || $('#mb_hp1').val().length == 4)){
			$('.cell_ph .item_right').css('border','none');
			$('.chk_btn1').css('opacity','1');
		}else{
			$('.cell_ph .item_right').css('border','1px solid #d91a1a');
			$('.chk_btn1').css('opacity','0.5');
		}
	});

	
///////////////////////////
// 일반 인증 부분  끝 //
///////////////////////////

	//인증받기
	$("[name='pCertify']").on("click", function() {

		var jqThis = $(this);
		var jqParent = jqThis.parent();
		var jqGrandParent = jqParent.parent();
		var jqCodeTarget = jqParent.find(".code_txt");
		var insertNo = jqCodeTarget.val();
		var mb_hp = $("[name='mb_hp0']").val() + "-" + $("[name='mb_hp1']").val() + "-" + $("[name='mb_hp2']").val();
		var mb_id = $("[name='mb_id']").val().replace(/ /g, '');

		if (!jqThis.hasClass("success")) {

			pType = "mb";

			chkCount = clickLimitN;//clickLimitP;

			countChk(chkCount, 'complete');

			//$.post(g4_path + "/member/ajax_pComplete_P.php",
			$.post(g4_path + "/member/ajax_pComplete_N.php",
				{
					insertNo : insertNo,
					mb_hp : mb_hp,
					mb_id : mb_id
				}, function(result) {
					console.log(mb_id);
					console.log(result);
					if (result == 'OK') {

						clearInterval(pChkTimer);
						/*************************
						 * 이부분에 1차  저장 level 1로
						 **************************/

						// 이부분이  1차 전화번호 인증후 처리
						//$('.next_btn').click(function(e) {
						//드론교육원 도메인 확인


						if (window.location.hostname == "www.sidaedrone.co.kr"){
							type_chk = 'drone';
						}

						var jqThis = $(this);
						var favChk = $("#inter_choice").text();
						var svs = $("[name='svs']").val();
						/*
                        if(jqThis.attr("id")=="join_go"){
                            if(stepSubmit()){
                        */
						$.ajax({
							type: 'post',
							url: './ajax_joinstep_form_update.php?svs='+svs,
							data: $('.memberJoinOne').serialize(),
							success: function (result) {
								if(result=="OK"){
									//드론 교육원 회원가입일경우
									if (type_chk == 'drone'){
										//var memberJoinTwo = $(".memberJoinTwo");
										//memberJoinTwo.submit();
									} else {
										//join_common.slide.containter.animate(2);
									}
								}else{
									alert(result); //###..
									return false;
								}
							}
						});


						alert("인증이 완료되었습니다.");


						$("[name='chk_certify']").val("1");

						//jqCodeTarget.css("text-align", "center");

						jqThis.parent(".code").find(".text_alert").addClass("y");
						$(".chk_btn2").val("인증완료");
						//$(".chk_btn2").removeClass("skip");
                        // $("#pUpdate, .chk_btn2").css({
                        //     "pointer-events" : "none"
                        // });
						/*
                        $("#pUpdate").val("인증완료");
                        $("#pUpdate").css({
                            "pointer-events" : "none"
                        });
                        */
						//$(".code").hide();



						var thisVal = jqGrandParent.find("#mb_hp").val();
						jqGrandParent.find("#mb_hp").after("<input type='text' id='mb_hp' name='mb_hp0' class='phone_num mb_hp' maxlength='3' value='" + thisVal + "' readonly='readonly' style='background-color : #e5e5e5;''>");

						jqGrandParent.find("#mb_hp").eq(0).remove();

						jqGrandParent.find("#mb_hp1").attr("disabled", false).attr("readonly", true).css("background-color", "#e5e5e5");
						jqGrandParent.find("#mb_hp2").attr("disabled", false).attr("readonly", true).css("background-color", "#e5e5e5");

						jqGrandParent.find("#pChk").remove();
						jqGrandParent.find(".Chk_notice").hide();

						//jqGrandParent.find("#mb_hp2").after("<input type='button' class='chk_btn1 pUpdate' value='번호수정' name='pUpdate' id='pUpdate' style='margin-left: 3px;'>");


						//jqParent.find("#pCertify").attr("readonly", true);
						jqParent.find("#pCertify").css("pointer-events", 'none');
						//jqParent.find("#pCertify").addClass("skip");
						jqParent.find(".timeWrap").css("background-color", "#e5e5e5");
						jqParent.find(".code_txt").attr("readonly", true).css("background-color", "#e5e5e5");
						jqParent.find(".code_timer").text("3:00");
						jqParent.find(".code_timer").css("display", "none");
						// [S] 통신사 서버 점검으로 인해 sms 전송 오류 공지 문구 삽입 조재훈.20171128
						jqParent.find(".notice_sms").css("display", "none");
						// [E] 통신사 서버 점검으로 인해 sms 전송 오류 공지 문구 삽입 조재훈.20171128
						var mb_hp = thisVal +"-"+ $("#mb_hp1").val() +"-"+ $("#mb_hp2").val();
						$(".joinForm").find("[name='mb_hp']").val(mb_hp);
						jqThis.addClass("success");
						$('.Chk_notice').hide();
						$('.mail_degree').css('margin-top','12px');

					} else if(result == "fFAIL"){

						jqCodeTarget.val("");
						jqCodeTarget.focus();

						alert("인증번호 요청 후 다시 시도해 주시기 바랍니다.");

						return false;

					} else if (insertNo.length < 5 || !insertNo) {

						alert("인증번호를 입력해주세요.");

						jqCodeTarget.val("");
						jqCodeTarget.focus();

						return false;
					}else if(result == "nousedid"){

						$('#reg_mb_id').val("");
						$('#reg_mb_id').focus();

						alert("중복되는 아이디입니다. 다른아이디를 입력해주세요");

						return false;

					}
					else {

						var pChks = result.split("^");
						if (pChks[0] == 'already'){
							if(pChks[3]=='0'){
								$(".modalyong .textboxs p").html('이미 가입한 이력이 있습니다.<br> - ID : '+pChks[1]+'<br><br>로그인 페이지로 이동하시겠습니까?');
								$(".btns2").show();
								$("#bback").show();

							}else if(pChks[3]=='naver'){
								$(".modalyong .textboxs p").html('네이버 간편회원으로 가입한 이력이 있습니다.<br>가입시 등록한 ID로  로그인 하실 수 있습니다.<br><br> - ID : '+pChks[1]+'<br><br>로그인 페이지로 이동하시겠습니까?');
								$(".btns2").show();
								$("#bback").show();
							}else if(pChks[3]=='kakao'){
								$(".modalyong .textboxs p").html('카카오 간편회원으로 가입한 이력이 있습니다.<br>가입시 등록한 ID로  로그인 하실 수 있습니다.<br><br> - ID : '+pChks[1]+'<br><br>로그인 페이지로 이동하시겠습니까?');
								$(".btns2").show();
								$("#bback").show();
							}else{
								alert("이미 가입된 휴대 전화번호 입니다. 다른 휴대전화번호를 입력하세요.");
							}
							//$('.chk_btn1.pUpdate').click();
							return false;

						}else{
							alert("인증번호가 일치하지 않습니다. 다시 확인해주세요.");

							jqCodeTarget.val("");
							jqCodeTarget.focus();

							return false;
						}
					}

				});

		}

	});

	//번호수정
	//동적이벤트 선언
	$(document).on("click", ".pUpdate", function() {

		var jqThis = $(this);
		var mode = jqThis.attr("data-id");
		var jqParent = jqThis.parent();
		var jqGrandParent = jqParent.parent();
		var jqTarget = jqParent.find(".code_txt");
		var cancleAlert = confirm("취소하시겠습니까?");

		if(!cancleAlert){
			return false;
		}else{

			pType = "mb";
			jqThis.closest(".necessary_items").find(".item_right #nChk").attr("disabled", false);
			jqThis.closest(".necessary_items").find(".item_right #pCertify").attr("disabled", false);

			$.post(g4_path + "/member/ajax_pUpdate_P.php", function(result) {
				if (result == 'OK') {
					jqGrandParent.find("#" + pType + "_hp").after("<select title='' id='" + pType + "_hp' class='" + pType + "_hp' name='" + pType + "_hp0'><option value='010' selected='selected'>010</option>	<option value='011'>011</option><option value='016'>016</option><option value='017'>017</option><option value='018'>018</option><option value='019'>019</option></select>");
					jqGrandParent.find("#" + pType + "_hp").eq(0).remove();

					jqGrandParent.find("#" + pType + "_hp option").eq(0).attr("selected", "selected").attr("readonly", false).css("background-color", "#ffffff");
					jqGrandParent.find("#" + pType + "_hp1").val("").attr("readonly", false).css("background-color", "#ffffff");
					jqGrandParent.find("#" + pType + "_hp2").val("").attr("readonly", false).css("background-color", "#ffffff");

					jqParent.find("#pUpdate").remove();
					jqParent.find("#" + pType + "_hp2").after("<input type='button' class='chk_btn1' value='인증번호요청' name='nChk' id='nChk'>");
					//jqParent.find("#" + pType + "_hp2").after("<input type='button' class='chk_btn1' value='인증번호요청' name='nChk' id='nChk' style='margin-left: 5px;'>");


					jqParent.find(".code").hide();
					jqTarget.parent(".timeWrap").css("background-color", "#e5e5e5");
					clearInterval(pChkTimer);

					jqTarget.val("").attr("readonly", true).css({"background-color":"#e5e5e5", "text-align" :"left"});
					//$(".code_timer").text("3:00");
					$(".code_timer").hide();
					jqTarget.parent().parent().find(".text_alert").removeClass("y");
					jqGrandParent.find("#pCertify").attr("readonly", true).hide();

					jqParent.find(".chk_btn2").removeClass("success");
					jqParent.find("#pCertify").removeClass("skip");
					$(".Chk_notice").hide();

					//생년월일 수정 못하게 하기
					$('.mb_birth').find('#mb_birth_year, #mb_birth_month, #mb_birth_day').removeClass('no_select');
					$('.mb_birth').removeClass('select_baria');

					//이름 수정 ㄴㄴ
					$('#mb_name').attr("readonly", false).css("background-color", "#ffffff");
					$('#reg_mb_id').attr("readonly", false).css("background-color", "#ffffff");

					$('#pCertify').css('pointer-events','initial');

				}
			});
		}
	});

	//이메일

	$("#emailSel").on("change", function() {

		var jqThis = $(this);
		var thisVal = jqThis.val();

		if (thisVal == '') {
			$("#email2").val('');
			$("#email2").attr("readOnly", false).css("background-color", "#fff");
		} else {

			$("#email2").val(thisVal);
			$("#email2").attr("readOnly", true).css("background-color", "#e5e5e5");

		}

	});

	//신규추천
	$("#search_push_mem").click(function(e) {
		e.preventDefault();
		var jqPushMbId = $("[name='mem_push_id']"), jqPsuhMbName = $("[name='mem_push_name']");

		if (!jqPushMbId.val() || !jqPsuhMbName.val()) {
			alert("추천할 아이디와 이름을 모두 입력 해 주세요.");
			return false;
		}

		$.post("/member/ajax_chk_push_member.php", {
			push_mb_id : jqPushMbId.val(),
			push_mb_name : jqPsuhMbName.val()
		}, function(result) {
			switch(result) {
				case "full" :
					alert("이미 5명의 신규 회원이 추천했습니다.\n\n추천 횟수는 최대 5명으로 제한됩니다.");
					break;
				case "no_mem" :
					alert("존재하지 않는 회원이거나 정상적인 인증을 받은 회원이 아닙니다.\n\n이름 및 아이디를 다시 한번 확인해 주세요.");
					break;
				case "ok" :
					alert("확인이 완료되었습니다.\n\n할인 쿠폰은 회원가입 완료 후 마이페이지에서 확인해 보실 수 있습니다.");
					jqPushMbId.css("background", "#e5e5e5").prop("readonly", true);
					jqPsuhMbName.css("background", "#e5e5e5").prop("readonly", true);
					break;
			}
		});
	});

	//[선택항목]
	$(".choice_list.items #join_etc").on("change", function() {
		$("[name='join_etc_txt']").removeAttr('readonly');

	});


	//[관심분야]
	$(".inter_list").find("li").each(function() {
		if($("#inter_choice").text() == $(this).text()) {
			$(this).find(".i_check").trigger("click");
			$(this).addClass("on");
			return false;//추천 관심분야 처리때문에 제일먼저 걸리고 나가기 hss
		}
	});

	$(".i_check").click(function(e){
		var jqVal = $(this).val();
		$(".inter_list").find("li").removeClass("on");
		$(this).parents("li").addClass("on");
		$("[name='memfav']").val(jqVal);

		$("#inter_choice").text(jqVal);
		$("#memfav").val(jqVal);


		$(this).parent().children('.profit').show();
		$(this).parent().siblings().children('.profit').hide();

		// var asasasa= $(this).parents('.inter_list').siblings().find('input').val();
		// console.log(asasasa);
		// if( jqVal == $(this).parents('.inter_list').siblings().find('input').val()){
		// 	console.log('asasasasas');
		// }
	});

	$("body").click(function(e){
		if(!$(e.target).hasClass("chHre") && $(e.target).attr("id")!="chHref"){
			$(".i_list_area").hide();
			$("#i_search").val('');
		}
		return true;
	});

	$("#i_search").on("keyup",function(event){
		var keywd = $("#i_search").val();
		var strlen = fc_chk_byte(keywd);
		var onFocus = false;

		if(strlen>=2){
			keywd = $.trim(keywd);

			if(keywd && event.keyCode!=46 && event.keyCode!=35 && event.keyCode!=36 && event.keyCode!=16 && event.keyCode!=40 && event.keyCode!=38 && event.keyCode!=13) {
				$.ajax("./ajax_get_favlist_sch.php?keywd="+encodeURIComponent(keywd),{
					type:"get",
					data:{},
					dataType:"json",
					success:function(json) {
						display_list(json);
					},
					error:function(xhr,error,code) {

						if(error=='parsererror') {
							//파싱에러면 우리가 직접 파싱을 해주면 됩니다.
							//xhr.responseText는 원래 글자
							var json = eval(xhr.responseText);

							alert(json);
							//display_list(json);

						}else {
							alert("서버에서 에러가 발생하였습니다");
						}

					}
				});
			}

			if($(".i_list_area").css("display") === "block" && event.keyCode > 36 && event.keyCode < 41){
				var liIndex = 0;
				var maxLen = $(".i_list_area").find("li").length;

				$(".i_list_area").find("li").each(function(index){
					var liThis = $(this);
					if(liThis.hasClass("focus-key") === true){
						liIndex = index;
						onFocus = true;
					}
				});

				if(event.keyCode === 40 && onFocus === true && liIndex < (maxLen - 1)){
					liIndex += 1;
				}

				if(event.keyCode === 38 && liIndex > 0){
					liIndex -= 1;
				}

				$(".i_list_area").find("li").removeClass("focus-key");
				$(".i_list_area").find("li").eq(liIndex).addClass("focus-key");
				$(this).val($(".i_list_area").find("li").eq(liIndex).children().text());

			}

			if(event.keyCode === 13){
				var jqVal = $("#i_search").val();
				$(".inter_list").find(".i_check").each(function() {
					if($(this).val() == jqVal){
						$(this).trigger('click');
						$(".i_list_area").hide();
						return false
					}
				});
			}
		} else {
			$(".i_list_area").hide();
		}
	});

	$(document).on("click",".i_list_area #append_list .s_btn",function(){
		var jqVal = $(this).text();
		$(".inter_list").find(".i_check").each(function() {
			if($(this).val() == jqVal){
				$(this).trigger('click');
				$(".i_list_area").hide();
				return false
			}
		});
	});
	//[관심분야]




});



//로그인창이동
function fack_go_url(){
	location.replace('/member/login.php?wr_id=&svs=popkon');
	location.href='/member/login.php?wr_id=&svs=popkon';
}
function countChk(count, pType) {
	if (pType == "complete") {
		if (count == 0) {
			//alert("먼저 인증번호 요청을 해주시기 바랍니다.");
			return true;
		}

	} else {
		if (count > 4) {
			alert("인증 번호를 5회 요청 하였습니다.\n\n새로고침후 다시 시도해주세요.");
			return true;
		}
	}
}

//중복클릭방지
var doublepChk = false;
function doubleSubmitCheck() {
	if (doubleSubmitFlag) {
		return doubleSubmitFlag;
	} else {
		doubleSubmitFlag = true;
		return false;
	}
}

//중복클릭방지
function stepSubmit(e) {
	var mem_id = $("#reg_mb_id").val();
	var pass_1 = $("#mb_password").val();
	var pass_2 = $("#mb_password_re").val();
	var mb_name = $("#mb_name").val();
	var fav_chk = $("[name='memfav']").val();
	var chk_cer = $("[name='chk_certify']").val();


	//chk_cer = 1;

	//console.log("chk_cer = " + chk_cer);

	var agreeChk = "";
	var okChk = false;

	var idx = 0;
	var target;
	$('.necessary_items .okChk').each(function(){
		//$(this).css("border-color", "#d6d6d6");

		if ($(this).val() == "") {
			if(idx == 0){
				target = $(this);
			}
			idx++;
			//$(this).css("border-color", "red");
		}
	});

	// if(idx > 0){
		
	// 	alert("입력이 되지 않은 칸이 있습니다");
	// 	target.focus();
	// 	return false;

	// }

	if ($('#mb_password').val() != $('#mb_password_re').val()) {
		msg = "비밀번호가 일치하지 않습니다.";
		// msg = "현재 입력한 비밀번호와 일치하지 않습니다.";
		$("#mb_password_re").next(".text_alert").removeClass("y").addClass('n').addClass("pc");

	}

	var msg = "";
	var jqTarget;
	$(".necessary_items .text_alert.eff").each(function(){
		var jqThis = $(this);
		var targetId = jqThis.attr("data-id");

		if(jqThis.hasClass("n")){

			jqTarget = jqThis.parent().find(".okChk");
			switch(targetId){
				case "id" :
					msg = "아이디를 입력해주세요";
					jqTarget.val("");
					break;
				case "pw" :
					msg = "비밀번호를 확인해주세요";
					jqTarget.val("");
					$('#mb_password').parent().css('border','1px solid #d91a1a')
					break;
				case "pc" :
					msg = "비밀번호가 일치하지 않습니다";
					jqTarget.val("");
					break;
				case "np" :
					msg = "보호자 이름이 올바르지 않습니다. 다시 확인해주세요.";
					jqTarget.val("");
					break;
				case "nc" :
					msg = "보호자 법적관계를 선택 해주세요.";
					jqTarget.val("");
					jqTarget = jqThis.parent().find(".protector_right #protector_f");
					break;
				case "nm" :
					msg = "이름을 입력해주세요";
					jqTarget.val("");
					break;
			}
			return false;
		}else if( jqThis.hasClass("n") == false && jqThis.hasClass("y") == false ){
			jqTarget = jqThis.parent().find(".okChk");
			switch(targetId){
				case "id" :
					msg = "아이디를 입력해주세요";
					jqTarget.val("");
					break;
				case "pw" :
					msg = "비밀번호를 확인해주세요";
					jqTarget.val("");
					$('#mb_password').parent().css('border','1px solid #d91a1a');
					break;
				case "pc" :
					msg = "비밀번호가 일치하지 않습니다";
					jqTarget.val("");
					$('#mb_password_re').parent().css('border','1px solid #d91a1a');
					break;
				case "nm" :
					msg = "이름을 입력해주세요";
					jqTarget.val("");
					$('#mb_name').parent().css('border','1px solid #d91a1a');
					break;
				case "np" :
					msg = "보호자 이름이 올바르지 않습니다. 다시 확인해주세요.";
					jqTarget.val("");
					break;
				case "nc" :
					msg = "보호자 법적관계를 선택 해주세요.";
					jqTarget.val("");
					jqTarget = jqThis.parent().find(".protector_right #protector_f");
					break;
			}
			return false;
		}
	});

	if(msg != ""){
		alert(msg);
		jqTarget.focus();
		return false;
	}
	var phoneNumber = $(".mb_hp").val() + "-" + $("[name='mb_hp1']").val() + "-" + $("[name='mb_hp2']").val();
	var parentNumber =  $(".pt_hp").val() + "-" + $("[name='pt_hp1']").val() + "-" + $("[name='pt_hp2']").val();
	if (phoneNumber.indexOf('--') > 0) {
		afterNumber = "";
	}

	var emailAgree = $(".necessary_items input[name^=mb_sms]:checked").length;

	//시대드론 교육원 에외처리
	if (window.location.hostname == "www.sidaedrone.co.kr"){
		emailAgree = 1;
	}

	if ( $("#mb_birth_year").val() == "" || $("#mb_birth_month").val() == "" || $("#mb_birth_day").val() == ""){
		alert("생년월일을 선택해 주세요");
		$('.item_right.flex-box').css('border','1px solid #d91a1a');
		$("#mb_birth_year").focus();
		return false;
	}else{
		$('.item_right.flex-box').css('border','1px solid #dbdbdb');
	}

	// $('.birth_each > select.okChk').each(function(){
	// 	if (!$(this).is(":checked")) {}
	// });

	$('.agree_ness').each(function() {
		if (!$(this).is(":checked")) {
			agreeChk = "n";
			return false;
		}
	});

	if (agreeChk == 'n') {
		/*추가된 사항: 가입하기 눌렀을때 약관동의 미동의시 포커싱 되게 하기 S:*/
		var top = $(".onclick_degree").offset().top;
		alert('약관에 동의해 주세요');
		$('body,html').animate({
			scrollTop: top - 20
		},300);
		/*추가된 사항: 가입하기 눌렀을때 약관동의 미동의시 포커싱 되게 하기 E:*/
		/*원본 S: */
		//alert('시대교육 이용약관에 모두 동의해 주셔야 합니다.');
		//$(".onclick_degree #agree1").focus();
		/*원본 E: */
		return false;

	}

	//if (window.location.hostname == "www.sidaedrone.co.kr"){
	if (chk_cer != "1"){
		alert("휴대폰 인증이 필요합니다.");
		$('.cell_ph .item_right').css('border','1px solid #d91a1a');
		//if (window.location.hostname == "www.sidaedrone.co.kr"){
		//$("[name='err_chk']").css("border-color", "red");
		//$('.err_chk').css("border-color", "red");
		//}
		/*추가된 사항: 인증번호 미인증 후 가입하기 누를시 포커싱 S:*/
		var top = $(".cell_ph").offset().top;
		$('body,html').animate({
			scrollTop: top
		},300);
		/*추가된 사항: 인증번호 미인증 후 가입하기 누를시 포커싱 E:*/
		return false;
	}
	//}
	if (fav_chk == ""){
		alert("관심분야를 선택해주세요");
		$('.fav_1.only, .cho_group1').addClass('active');
		$('.consonant').css('display','flex');
		$('#inter01').show();
		$('.cho_group_list2, .cho_group_list3, .cho_group_list4, .cho_group_list5, .cho_group_list6').hide();
		return false;
	}
	/*
		var wr_key = document.getElementById("auto_prevent_txt");

		if (wr_key.value == "") {

			alert("자동등록방지 숫자를 입력해주세요.");
			$("#auto_prevent_txt").focus();
			return false;

		}

		if (!check_kcaptcha(wr_key)) {
			$("#auto_prevent_txt").focus();
			return false;
		}
	*/
	//이용약관 value
	if ($(".memberJoinOne #agree5").is(":checked")) {
		$(".memberJoinOne [name='mb_agree2']").val("1");
	}

	if ($(".memberJoinOne #agree6").is(":checked")) {
		$('.necessary_items input[name^=mb_sms]').val("1");
	} else {
		$('.necessary_items input[name^=mb_sms]').val("0");
	}

	if ($(".memberJoinOne #agree8").is(":checked")) {
		$(".memberJoinOne [name='agree_stat']").val("Y");
	} else {
		$(".memberJoinOne [name='agree_stat']").val("N");
	}

	if ($(".memberJoinOne #agree9").is(":checked")) {
		$(".memberJoinOne [name='mb_agree3']").val("1");
	} else {
		$(".memberJoinOne [name='mb_agree3']").val("0");
	}

	if ($(".memberJoinOne #agree3").is(":checked")) {
		$(".memberJoinOne [name='mb_agree1']").val("1");
	}

	// 인증확인
	//나이체크
	var birthYear = $("#mb_birth_year").val();
	var chkMode = "N";
	if (birthYear > "2004") {
		chkMode = "P";
	} else {
		chkMode = "N";
	}

	//cfcResult랑 cfcMsg가 밖으로 안나옴...수정 하승수
	var cfcResult="";

	if(chkMode == "P"){

		$.ajax({
			type : "POST",
			url : g4_path + "/member/ajax_pPassChk_P.php",
			success : function(result) {
				cfcResult = result;
			},
			async:false
		});

	}

	//보호자 동의 번호랑 같은지 체크
	if (parentNumber == phoneNumber) {

		alert("법정대리인의 번호와 회원의 번호는 동일할 수 없습니다.");
		$("[name='mb_hp1']").focus();
		return false;

	}

	if($("#email1").val()){
		if($("#email2").val()){
			var mb_email = $("#email1").val() + "@" + $("#email2").val();
		}else{
			var mb_email = $("#email1").val();
		}
	}else{
		var mb_email = "";
	}

	$("[name='mb_email']").val(mb_email);

	return true;
}

//[관심분야]
function display_list(json) {
	var html = "";
	$("#append_list").children().remove();

	if(json){
		if(json.length>0) {
			$(".i_list_area").show();
		} else {
			$(".i_list_area").hide();
		}
		$(json).each(function(index) {
			html += "<li><span class='s_btn'>"+json[index]+"</span></li>";
		});
		$("#append_list").append(html);


	}else{
		$(".i_list_area").hide();
	}
}

function fc_chk_byte(obj_name) {
	var ls_str     = obj_name; // 이벤트가 일어난 컨트롤의 value 값
	var li_str_len = ls_str.length;  // 전체길이
	// 변수초기화
	var i           = 0;  // for문에 사용
	var li_byte     = 0;  // 한글일경우는 2 그밗에는 1을 더함
	var li_len      = 0;  // substring하기 위해서 사용
	var ls_one_char = ""; // 한글자씩 검사한다
	var ls_str2     = ""; // 글자수를 초과하면 제한할수 글자전까지만 보여준다.
	for(i=0; i< li_str_len; i++){
		// 한글자추출
		ls_one_char = ls_str.charAt(i);
		// 한글이면 2를 더한다.
		if(escape(ls_one_char).length > 4){
			li_byte = li_byte+2;
		}else{// 그외의 경우는 1을 더한다.
			li_byte++;
		}
		// 전체 크기가 li_max를 넘지않으면
	}

	return li_byte;

}

function goLink() {
	var frm = document.link_form;

	if(frm.link.value != "") {
		window.open(frm.link.value);
	}
}
//[관심분야]
