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

			$('.my_infor').on('mouseenter',function(){
				$('.myroom_menu').stop().slideUp(300);
				$('.myroom_menu').removeClass('on');
				$(this).find('.myroom_menu').stop().slideDown(300);
				$(this).find('.myroom_menu').addClass('on');
			});

			$('.my_infor').on('mouseleave',function(){
				$(this).find('.myroom_menu').stop().slideUp(300);
				$(this).find('.myroom_menu').removeClass('on');
			});

				
			//도서 소개 동영상 유튜브 레이어 팝업:S
			$(".popupVideo a").click(function() {
				event.preventDefault();
			
			  $(".video-popup").addClass("reveal"),
			  $(".video-popup .video-wrapper").remove(),
			  $(".video-popup .video-content").append("<div class='video-wrapper'><iframe width='560' height='315' src= '"+ $(this).attr("href") + "' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")
			})
					
			$('.video-bg , .video-popup-closer').on('click',function(){
				$(".video-popup").removeClass("reveal");
				$(".video-popup .video-wrapper").remove();
				$('.video-wrapper iframe').attr({'src':''});
			})
			//도서 소개 동영상 유튜브 레이어 팝업:E
				


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
