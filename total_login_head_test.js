(function ($) {
				//console.log("_skin/sidae/js/total~.js");
	totalLogin = {		

		_sdeduLogin : function(){
			//로그인 [시작]
			var SAVE_ID_NAME 	= "SdeduSaveId";
			var jqForm 			= $("#form_popkon");
			var jqChkSaveId 	= jqForm.find("input[name='save_id']");
			var jqMbId 			= jqForm.find("input[name='nc_jd']");
			var jqMbPw			= jqForm.find("input[name='nc_qm']"); /*2105 11 04 add by ssajae */
			var jqAdmin			= jqForm.find("input[name='adm_password']");
			var jqSSL 			= jqForm.find("input[name='ssl_chk_box']");
			var jqSvs 			= jqForm.find("input[name='svs']");
			var jqUrl 			= jqForm.find("input[name='url']");
			var sSavedId 		= get_cookie( SAVE_ID_NAME );
			var isSaved 		= (sSavedId !== undefined) && (sSavedId !== "");
			var jqLoginUrl		= window.location.pathname + window.location.search; 
			var jqSvs 			= jqLoginUrl.split("/")[1];			
			if (jqLoginUrl.indexOf("login.php") >- 1) {
				jqLoginUrl = jqSvs; 
			}			
			
			

			
			
			jqUrl.val(jqLoginUrl); 			
			 			
			try{
				if (isSaved === true){
					jqChkSaveId.get(0).checked = true;
					jqMbId.val( sSavedId );				
					jqMbId.parent().find("span").hide(); /*2105 11 04 add by ssajae */
				}						
				
				jqMbId.parent().find("span").click(function(){
					jqMbId.focus();
				});
				
				jqMbPw.parent().find("span").click(function(){
					jqMbPw.focus();
				});
			}catch(e){
				console.log(e);
			}						
			//console.log('3');
			jqMbId.blur(function(){
				var mParam = {
					mb_id: jqMbId.val()
				};				
				//alert('');
				$.post(/*"https://" + sDomain + */"/mobile/mb/ajax_adm_check.php", mParam,
					function(dataAll){
						var data = $.parseJSON(dataAll);						
						if (data.status.id === "1"){
							console.log('1');
							jqAdmin.parent().show();
						}
						else{
							console.log('2');
							jqAdmin.parent().hide();
						}
					}
				).fail(function(e){
					console.log(e);					
				});
			});					
			
			
			jqForm.submit(function(e){
				//var jqForm = $("#form_youthCounselorLogin");
				//var jqChkSaveId = jqForm.find("input[name='save_id']");
				
				if (jqChkSaveId.get(0).checked === true){
					set_cookie( SAVE_ID_NAME, jqMbId.val(), 30 );
				}
				

			
				var url_head = "http://";
				var url = window.location.host;	
				var info = url.split('.');
				if(info[0]!='www' && info[0]!='book' && info[0]!='life' && info[0]!='web1' && info[0]!='web2'){
					url = 'www.'+url;
				}	
				var ssl = jqSSL.is(":checked");
				if(ssl){
					url_head = "https://";					
					//alert(url_head+url);
				}
				//alert('processing');	
				//alert(url_head+url+"/member/login_check.php?cat_id="+cat_id);
				jqForm.attr( "action", url_head + url + "/member/login_check.php" );
			});
			
			
			/*2105 11 04 add by ssajae */
			jqMbId.on("focus",function(){
				jqMbId.parent().find("span").hide();
			});
			
			jqMbId.on("focusout",function(){
				if(jqMbId.val().length === 0) jqMbId.parent().find("span").show();
			});
			
			jqMbPw.on("focus",function(){
				jqMbPw.parent().find("span").hide();
			});
			
			jqMbPw.on("focusout",function(){
				if(jqMbPw.val().length === 0) jqMbPw.parent().find("span").show();
			});
			/*2105 11 04 add by ssajae */
			//로그인 [끝]			
		}
		
	};
	
	$(document).ready(function(e){
		totalLogin._sdeduLogin();	

		$('.btn-logout').click(function(e) {
			var result = confirm("로그아웃을 진행 하시겠습니까?");
			if(!result){					
				return false;
			}
		});


		//로그인 팝업
		$(".cs-center-inquery-total").click(function() {
			if(!$('#topLoginChk').val()){
				//alert("로그인이 필요한 페이지 입니다 \n\n로그인후 이용해주세요");
				onLoginForm(); 
				return false;
			}else{
			
			}
		});

		$(".login_chk_btn").click(function() {
			if(!$('#topLoginChk').val()){
				alert("로그인이 필요한 페이지 입니다 \n\n로그인후 이용해주세요");
				onLoginForm(); 
				return false;
			}else{
			
			}
		});


			//내강의실 메뉴 drop
			 //var slideList =  $('.myroom_menu');

			/**
			 * 원본 S: 
			$('.mymenu_btn').on('mouseover',function(){
				$('.myroom_menu').stop().slideUp(300)
				$('.myroom_menu').removeClass('on');
				$(this).siblings('.myroom_menu').stop().slideDown(300);
				$(this).siblings('.myroom_menu').addClass('on');
			});

			$('.member-btns').on('mouseleave',function(){
				$('.myroom_menu').stop().slideUp(300)
				$('.myroom_menu').removeClass('on');
			})
			* 원본 E: 
			*/

			//내강의실 호버
			$('.my_infor').on('mouseenter',function(){
				$('.myroom_menu').stop().slideUp(300);
				$('.myroom_menu').removeClass('on');
				$(this).find('.myroom_menu').stop().slideDown(300);
				$(this).find('.myroom_menu').addClass('on');
			}).on('mouseleave',function(){
				$(this).find('.myroom_menu').stop().slideUp(300);
				$(this).find('.myroom_menu').removeClass('on');
			});

				
			//도서 소개 동영상 유튜브 레이어 팝업:S
			$(".popupVideo a").click(function() {
				event.preventDefault();
			
			  $(".video-popup").addClass("reveal"),
			  $(".video-popup .video-wrapper").remove(),
			  $(".video-popup .video-content").append("<div class='video-wrapper'><iframe width='560' height='315' src= '"+ $(this).attr("href") + "' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")
			});
					
			$('.video-bg , .video-popup-closer').on('click',function(){
				$(".video-popup").removeClass("reveal");
				$(".video-popup .video-wrapper").remove();
				$('.video-wrapper iframe').attr({'src':''});
			});
			//도서 소개 동영상 유튜브 레이어 팝업:E


			/************************************* 푸시알림 관련 스크립트 S ************************************ */

			
			/**!!!!!!!!*********************알림 리스트 페이지 S ********************* */
			var list_alram = $('.list_alram > li');//리스트
			var alram_lec_update = $('.alram_lec_update').length;//강의업데이트
			var alram_data_err = $('.alram_data_err').length;//정오표
			var alram_data_gichul = $('.alram_data_gichul').length;//기출문제
			var alram_data_law = $('.alram_data_law').length;//최신개정법령
			var alram_data_prog = $('.alram_data_prog').length;//프로그램 자료실
			var alram_data_mp3 = $('.alram_data_mp3').length;//MP3 자료실
			var alram_data_d_room = $('.alram_data_d_room').length;//강의 자료실
			var alram_data_update = $('.alram_data_update').length;//도서 업데이트
			var alram_event = $('.alram_event').length;//이벤트
			var alram_cs_inquery = $('.alram_cs_inquery').length;//1:1문의 답변
			var alram_my_order = $('.alram_my_order').length;//결제(주문)완료, 주문취소
			var alram_lecture = $('.alram_lecture').length;//휴강안내
			var alram_free = $('.alram_free').length;//수강연장
			var alram_endclass = $('.alram_endclass').length;//수강종료
			var alram_cs_notice = $('.alram_cs_notice').length;//공지사항
			var alram_dcc_notice = $('.alram_dcc_notice').length;//최신뉴스
			var alram_dcc_sisa = $('.alram_dcc_sisa').length;//시사상식
			var alram_dcc_exam = $('.alram_dcc_exam').length;//시험일정

			var non_read_num = $('.readnon_number').text();//읽지 않은 알림 숫자

			var total_edu_source = alram_data_err + alram_data_gichul + alram_data_law + alram_data_prog + alram_data_mp3 + alram_data_d_room + alram_data_update;//학습자료
			var total_active_new = alram_cs_inquery + alram_my_order + alram_lecture + alram_free + alram_endclass + alram_cs_notice + alram_dcc_notice + alram_dcc_sisa;//활동/소식

			//헤더 알림 버튼
			$('.alram_icon').click(function(){
				$('.alram_pop, .alram_pop_bg').show();//팝업창, bg
				
				if( $(this).hasClass('update') ){//N종모양 이면
					$(this).removeClass('update');
					$(this).addClass('update_non_read');//점모양 이모티콘 변경
				}
			});

			//알림 팝업 x 닫기버튼
			$('.alram_pop .cancel_alram').click(function(){
				$('.alram_pop, .alram_pop_bg').hide();//팝업창, bg
				$('.menu_choice > li').removeClass('selected');//초기화
				$('.all_btn').addClass('selected');//전체탭 선택
				list_alram.css('display','flex');//전체 목록 보이기
			});

			//알림 수신 설정 페이지 x버튼
			$('.alram_recive_setting .cancel_alram').click(function(){
				$('.alram_recive_setting').hide();//알림 수신 설정 페이지 숨김
			});

			//알림 내역 해당링크 버튼, 다운로드 버튼 누를시 스타일변경
			$('.alram_name, .download_source').click(function(){
				$(this).parents('li').addClass('on');//알림내역 클릭시 스타일 변경(읽은 표시)

				//새로운 알림을 눌렀을시에 읽지않은 알림 카운트
				if( $(this).parent().hasClass('on') == false ){
					if( $('.readnon_number').text() > 0 ){
						$('.readnon_number').text($('.readnon_number').text() - 1);
					}
				}

				//알림을 다읽었을 시 이모티콘 변경
				if( non_read_num == 0 ){
					$('.alram_icon').removeClass('update_non_read');//종모양 이모티콘 변경
				}
			});

			//메뉴 카테고리 클릭시
			$('.menu_choice li').click(function(){
				var menu_choice_list = $(this);
				var menu_choice_name = menu_choice_list.find('span').text();

				menu_choice_list.addClass('selected');
				menu_choice_list.siblings().removeClass('selected');

				if( menu_choice_name == '전체'){
					list_alram.show();
					list_alram.addClass('active');
				}else if( menu_choice_name == '강의 업데이트' && alram_lec_update > 0 ){
					list_alram.hide();//초기화
					$('.alram_lec_update').show();
					list_alram.removeClass('active');//초기화
					$('.alram_lec_update').addClass('active');
				}else if( menu_choice_name == '학습자료' && ( alram_data_err > 0 || alram_data_gichul > 0 || alram_data_law > 0 || alram_data_prog > 0 || alram_data_mp3 > 0 || alram_data_d_room > 0 || alram_data_update > 0 ) ){
					list_alram.hide();//초기화
					$('.alram_data_err, .alram_data_gichul, .alram_data_law, .alram_data_prog, .alram_data_mp3, .alram_data_d_room, .alram_data_update').show();//정오표, 기출문제, 최신개정법령, 프로그램 자료실, MP3 자료실, 강의 자료실
					$('.alram_data_err, .alram_data_gichul, .alram_data_law, .alram_data_prog, .alram_data_mp3, .alram_data_d_room, .alram_data_update').addClass('active');
				}else if( menu_choice_name == '혜택/이벤트' && alram_event > 0){
					list_alram.hide();//초기화
					$('.alram_event').show();//이벤트
					list_alram.removeClass('active');//초기화
					$('.alram_event').addClass('active');//이벤트

				}else if( menu_choice_name == '활동/소식' && ( alram_cs_inquery > 0 || alram_my_order > 0 ||  alram_lecture > 0 || alram_free > 0 || alram_endclass > 0 || alram_cs_notice > 0 || alram_dcc_notice > 0 || alram_dcc_sisa > 0 ) ){
					list_alram.hide();//초기화
					$('.alram_cs_inquery, .alram_my_order, .alram_lecture, .alram_free, .alram_endclass, .alram_cs_notice, .alram_dcc_notice, .alram_dcc_sisa').show();//1:1문의 답변, 결제(주문)완료, 휴강안내, 수강연장, 수강종료, 공지사항, 최신뉴스, 시사상식
					list_alram.removeClass('active');//초기화
					$('.alram_cs_inquery, .alram_my_order, .alram_lecture, .alram_free, .alram_endclass, .alram_cs_notice, .alram_dcc_notice, .alram_dcc_sisa').addClass('active');
					
				}else if( menu_choice_name == '시험일정' && alram_dcc_exam > 0 ){
					list_alram.hide();//초기화
					$('.alram_dcc_exam').show();//시험일정
					list_alram.removeClass('active');//초기화
					$('.alram_dcc_exam').addClass('active');
				}
			});

			//읽은 알림 삭제
			$('.read_del').click(function(){
				if( $('.list_alram > li.on').length == 0 ){
					alert('읽은 알림이 없습니다.');
				}else{
					var qusestion = confirm("삭제 하시겠습니까?");
					if (qusestion) {
						$('.list_alram > li.on').remove();//읽은 목록 삭제
						$('.menu_choice li').removeClass('selected');//초기화
						$('.all_btn').addClass('selected');//전체탭버튼 선택
						list_alram.show();//전체 목록 보이기
						delate_alram();
						//$('.all_btn').addClass('selected');//전체메뉴 선택

						if( non_read_num == 0 ){
							$('.menu_choice, .all_content').remove();
							$('.alram_none').show();
							$('.alram_icon').removeClass('update_non_read');//종모양 이모티콘 변경
						}
					} else {
						return false;
					}
				}
			});

			//알림 전체 삭제
			$('.all_del').click(function(){
				if( $('.list_alram > li').length == 0 ){
					alert('삭제할 알림이 없습니다.');
				}else{
					var result = confirm("삭제 하시겠습니까?");

					if (result) {
						//푸시알림 설정이 모두 off되어 있을때
						if( $('.alram_box input').is(':checked') == false ){
							$('.alram_off').show();//알림 설정을 꺼두셨나요?
							list_alram.remove();
							$('.menu_choice, .all_content').remove();
							$('.readnon_number').text(0);
							$('.read_del, .all_del').remove();
						}else{
							$('.alram_none').show();//새로운 알림이 없습니다
							list_alram.remove();
							$('.menu_choice, .all_content').remove();
							$('.readnon_number').text(0);
							$('.read_del, .all_del').remove();
						}
					
						delate_alram();
						$('.alram_icon').removeClass('update_non_read');//종모양 이모티콘 변경
					} else {
						return false;
					}
				}
			});

			//알림 리스트 x누르기 이벤트(개별삭제)
			$('.alram_pop .cancel_btn').click(function(){
				if ( confirm("삭제하시겠습니까?")) {
					$(this).parents('li').remove();
					delate_alram();
					//$(this).parents('li').addClass('off');
					if( non_read_num == 0 ){
						$('.menu_choice, .all_content').remove();
						$('.alram_none').show();
						$('.alram_icon').removeClass('update_non_read');//종모양 이모티콘 변경
					}

				} else {
					return false;
				}
			});

			function delate_alram(){
				var list_alram = $('.list_alram > li');//리스트
				var alram_lec_update = $('.alram_lec_update').length;//강의업데이트
				var alram_data_err = $('.alram_data_err').length;//정오표
				var alram_data_gichul = $('.alram_data_gichul').length;//기출문제
				var alram_data_law = $('.alram_data_law').length;//최신개정법령
				var alram_data_prog = $('.alram_data_prog').length;//프로그램 자료실
				var alram_data_mp3 = $('.alram_data_mp3').length;//MP3 자료실
				var alram_data_d_room = $('.alram_data_d_room').length;//강의 자료실
				var alram_data_update = $('.alram_data_update').length;//도서 업데이트
				var alram_event = $('.alram_event').length;//이벤트
				var alram_cs_inquery = $('.alram_cs_inquery').length;//1:1문의 답변
				var alram_my_order = $('.alram_my_order').length;//결제(주문)완료, 주문취소
				var alram_lecture = $('.alram_lecture').length;//휴강안내
				var alram_free = $('.alram_free').length;//수강연장
				var alram_endclass = $('.alram_endclass').length;//수강종료
				var alram_cs_notice = $('.alram_cs_notice').length;//공지사항
				var alram_dcc_notice = $('.alram_dcc_notice').length;//최신뉴스
				var alram_dcc_sisa = $('.alram_dcc_sisa').length;//시사상식
				var alram_dcc_exam = $('.alram_dcc_exam').length;//시험일정

				var total_edu_source = alram_data_err + alram_data_gichul + alram_data_law + alram_data_prog + alram_data_mp3 + alram_data_d_room + alram_data_update;
				var total_active_new = alram_cs_inquery + alram_my_order + alram_lecture + alram_free + alram_endclass + alram_cs_notice + alram_dcc_notice + alram_dcc_sisa;

				if( $('.all_btn').hasClass('selected') && alram_lec_update == 0 ){// 전체
					$('.lec_update').remove();
				} 
				if( $('.all_btn').hasClass('selected') && total_edu_source == 0 ){
					$('.edu_source').remove();
				} 
				if( $('.all_btn').hasClass('selected') && alram_event == 0 ){
					$('.profit_event').remove();
				} 
				if( $('.all_btn').hasClass('selected') && total_active_new == 0 ){
					$('.active_new').remove();
				} 
				if( $('.all_btn').hasClass('selected') && alram_dcc_exam == 0 ){
					$('.exam_date').remove();
				}

				//해당 카테고리 리스트가 존재하지 않을 경우 카테고리 숨김처리하고 전체 탭이동
				if( $('.lec_update').hasClass('selected') && alram_lec_update == 0 ){// 강의 업데이트
					$('.lec_update').remove();
					$('.menu_choice li').removeClass('selected');
					$('.all_btn').addClass('selected');
					list_alram.show();
				}
				if( $('.edu_source').hasClass('selected') && total_edu_source == 0 ){ // 학습자료
					$('.edu_source').remove();
					$('.menu_choice li').removeClass('selected');
					$('.all_btn').addClass('selected');
					list_alram.show();
				}
				if( $('.profit_event').hasClass('selected') && alram_event == 0 ){ //혜택/이벤트
					$('.profit_event').remove();
					$('.menu_choice li').removeClass('selected');
					$('.all_btn').addClass('selected');
					list_alram.show();
				}
				if( $('.active_new').hasClass('selected') && total_active_new == 0 ){ //활동/소식
					$('.active_new').remove();
					$('.menu_choice li').removeClass('selected');
					$('.all_btn').addClass('selected');
					list_alram.show();
				}
				if( $('.exam_date').hasClass('selected') && alram_dcc_exam == 0 ){ // 시험일정
					$('.exam_date').remove();
					$('.menu_choice li').removeClass('selected');
					$('.all_btn').addClass('selected');
					list_alram.show();
				}

				if( list_alram.length == 0 ){
					$('.menu_choice').hide();
					$('.read_del, .all_del').hide();
				}

				//읽지않은 알림 숫자 카운트
				var numberling = list_alram.length - $('.list_alram > li.on').length;
				$('.readnon_number').text(numberling);
			
			}
			/**!!!!!!!!*********************알림 리스트 페이지 E ********************* */
			

			/**!!!!!!!!*********************수신 설정 페이지 S ********************* */
			//관심과정 변경 버튼
			$('.link.change').on('click', function() {
				$('.fav_popup').show();//관심과정 팝업
				$('.alram_recive_setting .bg').show();//bg
			});

			//관심과정 자격증,공무원 등 셀렉트 버튼
			$('#fav_sec').on('change', function(){
				var fav = $('#fav_sec option:selected').val();

				if( fav == 'fav1' ){//자격증 일때
					$('.fav_style').hide();
					$('.fav_list_1').show();
				}else if( fav == 'fav2' ){//공무원 일때
					$('.fav_style').hide();
					$('.fav_list_2').show();
				}else if( fav == 'fav3' ){//독학사 일때
					$('.fav_style').hide();
					$('.fav_list_3').show();
				}else if( fav == 'fav4' ){//학위/입시 일때
					$('.fav_style').hide();
					$('.fav_list_4').show();
				}else if( fav == 'fav5' ){//취업 일때
					$('.fav_style').hide();
					$('.fav_list_5').show();
				}else if( fav == 'fav6' ){//ai모의고사 일때
					$('.fav_style').hide();
					$('.fav_list_6').show();
				}else if( fav == 'fav7' ){//온라인 모의고사 일때
					$('.fav_style').hide();
					$('.fav_list_7').show();
				}
			});

			//관심과정 자격증 초성 버튼
			$('.link-tab').click(function(){
				if( $(this).hasClass('cho_group1') ){
					$('.fav_list_1 .subtab-contents').hide();//초기화
					$('.link-tab').removeClass('selected');//초기화
					$('#sub_tab1').show();
					$(this).addClass('selected');
				}else if( $(this).hasClass('cho_group2') ){
					$('.fav_list_1 .subtab-contents').hide();//초기화
					$('.link-tab').removeClass('selected');//초기화
					$('#sub_tab2').show();
					$(this).addClass('selected');
				}else if( $(this).hasClass('cho_group3') ){
					$('.fav_list_1 .subtab-contents').hide();//초기화
					$('.link-tab').removeClass('selected');//초기화
					$('#sub_tab3').show();
					$(this).addClass('selected');
				}else if( $(this).hasClass('cho_group4') ){
					$('.fav_list_1 .subtab-contents').hide();//초기화
					$('.link-tab').removeClass('selected');//초기화
					$('#sub_tab4').show();
					$(this).addClass('selected');
				}
			});


			//관심과정 변경 x버튼
			$('.fav_popup .cancel').on('click', function() {
				/**
				 * x버튼 누를시 기존에 선택되어있는 과정으로 재선택
				*/
				var spanTextArray = [];//배열로 가져와서 담기
				$(".fav_list li").each(function() {
					var spanText = $(this).find("span").text();
					spanTextArray.push(spanText);
				});
				var default_fav = $('.fav_name').text();
				var matchedElements = $(".fav_list li").filter(function() {//기존선택 되어져있는 텍스트와 일치하는것 찾음
					return $(this).find("span").text() === default_fav;
				});
				matchedElements.find("input").prop("checked", true);//찾은거 선택
				$('.fav_popup, .alram_recive_setting .bg').hide();
			});
			//관심과정 확인버튼
			$('.fav_popup .check_btn').on('click', function(){
				if( $('.cmRadio:checked').length == 1){
					var chk_fav = $('.cmRadio:checked').siblings().find('span').text();//체크된 관심과정 텍스트
					$('.fav_name').text(chk_fav);
					$('.fav_popup, .alram_recive_setting .bg').hide();
				}
			});

			/**************신청한 강의 확인 버튼, 취소버튼 S ***************/
			$('.link.lec_confirm').click(function(){
				if( $('.leced_subscription li').length == 0){
					alert('신청한 강의가 없습니다.');
				}else{
					$('.leced_subscription, .alram_recive_setting .bg').show();
				}
			});
			
			var initialCheckedState  = [];//배열로 가져와서 담기
			$(".lecRadio").each(function() {
				initialCheckedState.push($(this).prop("checked"));
			});
			//확인
			$('.leced_subscription .check_btn').on('click', function(){
				$(".lecRadio").each(function(index) {
					initialCheckedState[index] = $(this).prop("checked");
				});
				$('.leced_subscription, .alram_recive_setting .bg').hide();
			});
			//취소
			$('.leced_subscription .top_line i').on('click', function() {
				$(".lecRadio").each(function(index) {
					$(this).prop("checked", initialCheckedState[index]);
				});
				$('.leced_subscription, .alram_recive_setting .bg').hide();
			});
			/**************신청한 강의 확인 버튼, 취소버튼 E ***************/

			/**************등록된 도서 확인 버튼, 취소버튼 S ***************/
			$('.link.book_confirm').click(function(){
				if( $('.book_isbn li').length == 0){
					alert('등록된 도서가 없습니다.');
				}else{
					$('.book_isbn, .alram_recive_setting .bg').show();
				}
			});

			var initialCheckedState2  = [];//배열로 가져와서 담기
			$(".bookRadio").each(function() {
				initialCheckedState2.push($(this).prop("checked"));
			});
			//확인
			$('.book_isbn .check_btn').on('click', function(){
				$(".bookRadio").each(function(index) {
					initialCheckedState2[index] = $(this).prop("checked");
				});
				$('.book_isbn, .alram_recive_setting .bg').hide();
			});
			//취소
			$('.book_isbn .top_line i').click(function(){
				$(".bookRadio").each(function(index) {
					$(this).prop("checked", initialCheckedState2[index]);
				});
				$('.book_isbn, .alram_recive_setting .bg').hide();
				//$('.bookRadio').prop('checked', false);
			});
				/**************등록된 도서 확인 버튼, 취소버튼 E ***************/

			// $('#favLecSelect').on('click', function() {
			// 	if ($("[name='favChk']").is(":checked") === true) {			
			// 		var selectLec = $("[name='favChk']:checked").val();
			// 		$('#fav').text(selectLec);
			// 		$('#myFavPopup').fadeOut(150);
			// 	} else {
			// 		alert('관심분야를 선택해주세요.');
			// 		return false;
			// 	}
			// });

			//수신 설정 버튼(톱니바퀴), 알림설정 바로가기
			$('.open_setting, .set_shortcut').on('click', function() {
				if( $(this).hasClass('open_setting') ){//아이콘 클릭
					$('.alram_recive_setting').show();
				}else if( $(this).hasClass('set_shortcut') ){//알림설정 바로가기
					$('.alram_recive_setting').show();
				}
			});

			//모든 알림 수신 설정
			$('#all_check').click(function(){
				allChkFn();
			});

			//모든 알림 수신 설정 전체제어
			function allChkFn(){	
				var AllChk = $('#all_check');
				if(AllChk.is(':checked') == true){
					$('.all_alram_recive ul input[name=swich]').prop("checked", true);
				}else{
					$('.all_alram_recive ul input[name=swich]').prop("checked", false);
				}
			}

			//이벤트 알림 on/off시 alert
			$('label[for="push_check2"]').click(function(){
				let today = new Date();   
				let year = today.getFullYear(); 
				let month = today.getMonth() + 1; 
				let date = today.getDate(); 
				if( $(this).siblings().is(':checked') == false ){
					alert('SD에듀 혜택/이벤트\n푸시 알림이 설정되었습니다.\n' + year + '년' + month + '월' + date + '일');
				}else{
					alert('SD에듀 혜택/이벤트\n푸시 알림이 해제되었습니다.\n' + year + '년' + month + '월' + date + '일');
				}
			});
			/**!!!!!!!!*********************수신 설정 페이지 E ********************* */
			

			/**!!!!!!!!********************페이지 로드 S ********************* */

			//알림내역이 존재하지않고, 푸시알림 설정이 모두 off되어 있을때
			if( list_alram.length == 0 && $('.alram_box input').is(':checked') == false ){
				$('.alram_off').show();
				$('.menu_choice, .all_content').remove();
				$('.readnon_number').text(0);
				$('.alram_pop .right_wrap li a').remove();
				console.log('1111');
			}else if( list_alram.length == 0 ){
				$('.menu_choice, .all_content').remove();
				$('.readnon_number').text(0);
				$('.alram_pop .right_wrap li a').remove();
				console.log('2222');
			}else{
				$('.alram_none').hide();
				$('.alram_off').hide();
			}

			if( list_alram.length - $('.list_alram li.on').length > 0 ){//읽지않은 내역 > 0
				$('.alram_icon').addClass('update');
			}

			//알림내역에 따른 종모양 이모티콘 변경
			if( $('.list_alram li.on').length == list_alram.length || list_alram.length == 0){
				$('.alram_icon').removeClass('update_non_read');
			}

			//해당 카테고리가 존재하지 않을 경우 카테고리 숨김처리
			//console.log(alram_lec_update);
			if( alram_lec_update == 0 ){
				$('.lec_update').remove();
			}
			if( total_edu_source == 0 ){
				$('.edu_source').remove();
			}
			if( alram_event == 0 ){
				$('.profit_event').remove();
			}
			if( total_active_new == 0 ){
				$('.active_new').remove();
			}
			if( alram_dcc_exam == 0 ){
				$('.exam_date').remove();
			}

			
			$('.readnon_number').text(list_alram.length - $('.list_alram li.on').length);
			/**!!!!!!!!********************페이지 로드 E ********************* */

			/************************************* 푸시알림 관련 스크립트 E ************************************ */


			//페밀리 사이트  S:
			const selectBoxElements = document.querySelectorAll(".select");

			function toggleSelectBox(selectBox) {
				selectBox.classList.toggle("active");
			}

			function selectOption(optionElement) {
				const selectBox = optionElement.closest(".select");
				const selectedElement = selectBox.querySelector(".selected-value");
				selectedElement.textContent = optionElement.textContent;
			}

			selectBoxElements.forEach(selectBoxElement => {
				selectBoxElement.addEventListener("click", function (e) {
					const targetElement = e.target;
					const isOptionElement = targetElement.classList.contains("option");

					if (isOptionElement) {
					selectOption(targetElement);
					}

					toggleSelectBox(selectBoxElement);
				});
			});

			document.addEventListener("click", function (e) {
				const targetElement = e.target;
				const isSelect = targetElement.classList.contains("select") || targetElement.closest(".select");

				if (isSelect) {
					return;
				}

				const allSelectBoxElements = document.querySelectorAll(".select");

				allSelectBoxElements.forEach(boxElement => {
					boxElement.classList.remove("active");
				});
			});
			//페밀리 사이트  E:
	});
})(jQuery);
