var s; // Interval에 관련된 변수
var time=179; // 인증 시간을 180초로 정함
var userAgentJoin = navigator.userAgent.toLowerCase();

$(document).ready(function(){
	$(document).on("change",".three-input select",function() {
		var syear = $("#birth_y option:selected").val(), smonth = $("#birth_m option:selected").val(), sdate = $("#birth_d option:selected").val();
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
				$("#birth_y option:eq(0)").prop("selected",true);
				$("#birth_m option:eq(0)").prop("selected",true);
				$("#birth_d option:eq(0)").prop("selected",true);
			}
		}
	});	


	//관심과정 젤 밖에 버튼
	$('.inter_btn li').click(function(){
		$('.inter_list_wrap').css('display','block');
		$(this).addClass('selected');
		$(this).siblings().removeClass('selected');
		//$('body').css('overflow','hidden');
		

		var listBtn = $(this).index() + 1;

		//$("#cate-list").val(listBtn).prop("selected", true);
		$('.cate-list-div').hide();
		$('.cate-list-div' + listBtn).show();
		if( $(this).hasClass('fav_1') && $('.cate-arr-btn').hasClass('selected') == false){
			$('.cate-arr-btn').removeClass('selected');//초기화
			$('.chosung1').addClass('selected');
			//$('.cate-ul1').css('display','flex');
		}
	});

	//관심과정 자격증에 ㄱ~ㅅ같은 버튼
	$('.cate-arr-btn').each(function(){
		$('.cate-arr-btn').on('click', function(e){
			e.preventDefault();
			var tabId  = $(this).attr('href');
			$(this).addClass('selected');
			$(this).parent('li').siblings().children('a').removeClass('selected');
			$(tabId).addClass('selected');
			$(tabId).siblings().removeClass('selected');
		});
	});

	//닫기
	$('.cate-close').click(function(){
		$('body').css('overflow','auto');
		$('.inter_list_wrap').fadeOut();
	});

	$('.inter_enter').click(function(){
		if($("[name='b1']").is(":checked")===true){
			$(this).parents('.inter_list_wrap').hide();
			$('body').css('overflow','auto');
		}else{
			alert('관심분야를 선택해주세요.')
		};
	});

	//전체 동의 클릭시
	$("[name='provision_all_agree']").click(function(e) {
		if($("[name='provision_all_agree']").is(":checked")===true){
			$("[name='use_provision_ck']").prop('checked',true);//이용약관
			$("[name='age_provision']").prop('checked',true);//14세이상
			$("[name='info_provision']").prop('checked',true);//개인약관
			$("[name='event_provision']").prop('checked',true);//이벤트 선택약관
			$("[name='sns_provision_ck']").prop('checked',true);//제3자 선택약관
			$("input[name='use_provision']").val('1');
			$("input[name='mb_sms']").val('1');
			$("input[name='sns_provision']").val('Y');

		}else{
			$("[name='age_provision']").prop('checked',false);
			$("[name='use_provision_ck']").prop('checked',false);
			$("[name='info_provision']").prop('checked',false);
			$("[name='event_provision']").prop('checked',false);
			$("[name='sns_provision_ck']").prop('checked',false);//제3자 선택약관
			$("input[name='use_provision']").val('');
			$("input[name='mb_sms']").val('');
			$("input[name='sns_provision']").val('N');
		}
	});

	//약관 다 동의했을때 안헀을때.
	$('.ckboxs input:checkbox').click(function(e) {
		var test_id = $("#mj_id").val();
		var ck_cnt = $('.ckboxs input:checkbox');
		var ck_cnt_ck = $('.ckboxs input:checkbox:checked');
		if(ck_cnt.length == ck_cnt_ck.length){
			$("[name='provision_all_agree']").prop('checked',true);
		}else{
			$("[name='provision_all_agree']").prop('checked',false);
		}

		if($("input[name='use_provision_ck']").is(":checked")) {
			$("input[name='use_provision']").val('1');
		}else{
			$("input[name='use_provision']").val('');
		}

		if ($("input[name='sns_provision_ck']").is(":checked")) {
			$("input[name='sns_provision']").val('Y');
		} else {
			$("input[name='sns_provision']").val('N');
		}

		var mb_sms = $("[name='event_provision']:checked").val();
		if(mb_sms!=1 && $(this).attr('name')=='event_provision') {
			if(!confirm("수신 미동의 시 3,000원 추가 할인 쿠폰과 \n서비스, 이벤트 혜택 알림을 받을 수 없습니다. \n서비스 · 이벤트 정보 수신을 미동의 하시겠습니까?")) {
				return false;
			}
		}
		$("[name='mb_sms']").val(mb_sms);

	});

	$("[name='mb_sms1']").click(function(e) {
		var mb_sms = $(":radio[name='mb_sms1']:checked").val();
		$("[name='mb_sms']").val(mb_sms);
	});

	$("[name='b1']").click(function(e) {
		var fav = $(":radio[name='b1']:checked").val();
		$(this).parent().siblings().show();
		$(this).parents('li').siblings().find('.profit').hide();
		//sd_work_pj
		$(this).parents('li').addClass('on');
		$(this).parents('li').siblings().removeClass('on');
		//$(this).parent('[for="lec_list13"]').siblings().css('margin-bottom','15px');
		$("[name='memfav']").val(fav);
	});
	$("[name='mb_sup_name']").click(function(e) {
		var fav = $(":radio[name='mb_sup_name']:checked").val();
		$("[name='mb_sign']").val(fav);
	});

	//한글만입력하게 내이름
	$("#mj_name").on('keypress',function(){
		only_korean(this);
	});
	$("#mj_name").on('keyup',function(){
		only_korean(this);
	});

	//한글만입력하게 부모이름
	$("#p_name").on('keypress',function(){
		only_korean(this);
	});
	$("#p_name").on('keyup',function(){
		only_korean(this);
	});

	//관심분야를 선택했을시 그것을 보여주기 위함
	$("[name='b1']").click(function(e) {
		if($(this).is(":checked") === true){
			var fav = $(this).val();
			var thisParent = $(this).parents('div').attr('id');
			$("[name='memfav']").val(fav);
			//console.log(fav);

			if(thisParent == 'lec_list'){
				$('.modify_inter .inter_btn li').eq(0).addClass('selected').siblings('li').removeClass('selected');
			}else if(thisParent == 'gov_list'){
				$('.modify_inter .inter_btn li').eq(1).addClass('selected').siblings('li').removeClass('selected');
			}else if(thisParent == 'dok_list'){
				$('.modify_inter .inter_btn li').eq(2).addClass('selected').siblings('li').removeClass('selected');
			}else if(thisParent == 'com_list'){
				$('.modify_inter .inter_btn li').eq(4).addClass('selected').siblings('li').removeClass('selected');
			}else if(thisParent == 'uni_list'){
				$('.modify_inter .inter_btn li').eq(3).addClass('selected').siblings('li').removeClass('selected');
			}

			//$('.inter_btn li').removeClass('selected');
			$('.select_inter').children('span').text(fav);
			$('.select_inter').show();


		};
	});
	/*휴대폰 번호 정상 입력시 인증요청 버튼 bg바뀜 S:20220829 추가*/
	$('.three-input .form-control').on("keyup", function(){
			if(($('#mj_hp1').val().length > 2) && ($('#mj_hp2').val().length > 3)){
				$('.btn-warning').removeClass('btn_bg');
				$('.phone').removeClass('bord');
			}else{
				$('.btn-warning').addClass('btn_bg');
			}
		});
	/*휴대폰 번호 정상 입력시 인증요청 버튼 bg바뀜 E:20220829 추가*/

	$('#birth_d').on('change',function(){
		
		if ( $("#birth_y").val() == "" || $("#birth_m").val() == "" || $("#birth_d").val() == ""){
			$('.birth.three-input').addClass('bord');
		}else{
			$('.birth.three-input').removeClass('bord');
		}
	});

});



//★★ 아이디 사용체크
function checkMemberId(id){
    var mb_id =  $(id).val();

    if (!(event.keyCode >=37 && event.keyCode<=40)) {
            var inputVal =mb_id;
            $("[name = 'mj_id']").val(inputVal.replace(/[^a-z0-9]/g,''));
    };

    if(mb_id.length < 6 || mb_id.length > 12){
        $("#id_check .comment").text("6~12자 영문 소문자, 숫자 조합");
        $('.id_check div').css({'color':'#ed4e48'});
		$('#mj_id').css('border','1px solid #d91a1a');
        return false;
    }else{
        $.getJSON("/mobile/mb/checkMemberId.php",{mb_id: mb_id}, function(data){
            //console.log(data);
            console.log(data.status.status);
            if(data.status.status!='1'){
                $("#id_check .comment").text('사용중인 아이디입니다.');
                    $('.id_check div').css({'color':'#ed4e48'});
					$('#mj_id').css('border','1px solid #d91a1a');
            }else{
                $("#id_check .comment").text('사용할 수 있는 아이디 입니다.');
                $('.id_check div').css({'color':'#2c76f0'});
				$('#mj_id').css('border','1px solid #dbdbdb');
            }
            $("#mjIdchkstatus").val(data.status.status);
        });
    };
};

function checkUserName(data,event, name){	
	//var thid= $('#'+name);
	var nameLng = $('#'+name).val();
	var thisId =$('#'+name);
	var strChk = str_chk(nameLng, /[^가-힣]/); //이름 한글영역
	var specialCharacterPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
	console.log(strChk);
	if(nameLng.length <2 || nameLng.length > 13){
			thisId.siblings('.nameChk').html('2자 이상 입력해주세요.');
			$('#mj_name').css('border','1px solid #d91a1a');
			thisId.siblings('.nameChk').addClass('err');
			return false;
			
	}else{		


		
		if(strChk == false && /\d/.test(nameLng) == false && specialCharacterPattern.test(nameLng) == false){
			console.log('1');
			thisId.siblings('.nameChk').addClass('err');
			thisId.siblings('.nameChk').html('표준 한글을 입력해주세요.');
			$('#mj_name').css('border','1px solid #d91a1a');
			return false;

			// if( strChk == true && strChk == false){
			// 	console.log('asasas');
			// 	thisId.siblings('.nameChk').removeClass('err');
			// 	thisId.siblings('.nameChk').html('');
			// 	$('#mj_name').css('border','1px solid #dbdbdb');
			// }

		}else if( strChk == false && specialCharacterPattern.test(nameLng) == false && /\d/.test(nameLng) == false ){
			console.log('2');
			thisId.siblings('.nameChk').addClass('err');
			thisId.siblings('.nameChk').html('표준 한글을 입력해주세요.');
			$('#mj_name').css('border','1px solid #d91a1a');
			return false;
		}
		else{
			console.log('22222');
			thisId.siblings('.nameChk').removeClass('err');
			thisId.siblings('.nameChk').html('');
			$('#mj_name').css('border','1px solid #dbdbdb');
			return false;
		}
	}


	function str_chk(str, check) {
		var trimmedStr = str.replace(/\s+/g, "");

		var result = check.test(trimmedStr);

		return !result;
	}
}



//★★ 비번 체크
function checkMemberPw(data,event){

    var pw1 = $("#nc_qm").val();
	// var regex = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/;
	var regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
	//console.log(pw1);

    //연속 4글자 test
    for (i=0; i<pw1.length; i++){
        var CodeNum = pw1.charAt(i);
        var Codes = (CodeNum+CodeNum+CodeNum+CodeNum);
        if (pw1.indexOf(Codes) >-1) {
            $("#nc_qm").val('');
            $('#pwck1').html('연속된 숫자 문자(4개이상)는 제한').css('color','#ed4e48');
            $('#pwok1').val('');
            return false;
        }
    }
    //글자수체크 & 영특문 체크
    if (!regex.test(pw1)){
        $('#pwok1').val('');
        if(pw1.length < 8 || pw1.length > 20){
            if(pw1.length ==0){
                //$('#pwck1').html('');
                $('#pwok1').val('');
				$('#pwck1').html('비밀번호를 확인해주세요').css('color','#ed4e48');
				$('#nc_qm').css('border','1px solid #d91a1a');
            }else{
                $('#pwck1').html('영문+숫자+특수문자 조합 (8자리 이상)').css('color','#ed4e48');
				$('#nc_qm').css('border','1px solid #d91a1a');
                if(pw1.length > 20){
                    $("#nc_qm").val('');
                }
            }
			checkMemberPwCk();
            return false;
        }else{
            $('#pwck1').html('영문+숫자+특수문자 조합 (8자리 이상)').css('color','#ed4e48');
			$('#nc_qm').css('border','1px solid #d91a1a');
			checkMemberPwCk();
            return false;
        }
    }

    $('#pwck1').html('사용할 수 있는 비밀번호입니다.').css('color','#2c76f0');
	$('#nc_qm').css('border','1px solid #dbdbdb');
    $('#pwok1').val('ok'); //비번 최종 사용 가능할때만 넣어줌.
    checkMemberPwCk();
	
};

//★★ 비밀번호 재확인 체크용
function checkMemberPwCk(data,event){
    var pw = $("#nc_qm").val();
    var pwck = $("#nc_qm_chk").val();
    if($('#pwok1').val() == 'ok'){ //비밀번호가 사용가능한거일때
        if(pwck==pw){
            $('#pwck2').html('비밀번호가 일치합니다.').css('color','#2c76f0');
			$('#nc_qm_chk').css('border','1px solid #dbdbdb');
            $('#pwok2').val('ok'); //비번 최종 사용 가능할때만 넣어줌.
        }else{
            if(pwck==''){
				$('#pwck2').html('비밀번호를 확인해주세요.').css('color','#ed4e48');
				$('#nc_qm_chk').css('border','1px solid #d91a1a');
                $('#pwok2').val('');
            }else{
                $('#pwck2').html('비밀번호가 일치하지 않습니다.').css('color','#ed4e48');
				$('#nc_qm_chk').css('border','1px solid #d91a1a');
                $('#pwok2').val('');
            }
        }
    }else{
		if(pwck==pw){
            $('#pwck2').html('비밀번호가 일치합니다.').css('color','#2c76f0');
			$('#nc_qm_chk').css('border','1px solid #dbdbdb');
            $('#pwok2').val('ok'); //비번 최종 사용 가능할때만 넣어줌.
        }else{
			if(pwck==''){
				$('#pwck2').html('비밀번호를 확인해주세요.').css('color','#ed4e48');
				$('#nc_qm_chk').css('border','1px solid #d91a1a');
				$('#pwok2').val('');
			}else{
				$('#pwck2').html('비밀번호가 일치하지 않습니다.').css('color','#ed4e48');
				$('#nc_qm_chk').css('border','1px solid #d91a1a');
				$('#pwok2').val('');
			}
		}
        
    };
    return false;
};

//★★ 년도바뀌면 달체크해죠
function changeYear(me){
	var ck_agree_p;
	if($("#parentAgreechk").val()=='1'){
		if(confirm("생년월일 변경시 보호자동의인증이 초기화됩니다.")){
			getResetPhone('p_phone-reset-btn');
			changeMonth(me);
		}
	}else{
		changeMonth(me);
	}
	return false;
}

//★★ 달바뀌면 일바꿔죠 + 윤달체크
function changeMonth(me){
	var day31 = ["1","3","5","7","8","10","12"];//31일 달
	var mon =$(me).val();
	var year = $('#birth_y').val();
	console.log(jQuery.inArray(mon, day31));

	var day_html = '<option value="" selected="">일</option>'+
							'<option value="1">1</option>'+
							'<option value="2">2</option>'+
							'<option value="3">3</option>'+
							'<option value="4">4</option>'+
							'<option value="5">5</option>'+
							'<option value="6">6</option>'+
							'<option value="7">7</option>'+
							'<option value="8">8</option>'+
							'<option value="9">9</option>'+
							'<option value="10">10</option>'+
							'<option value="11">11</option>'+
							'<option value="12">12</option>'+
							'<option value="13">13</option>'+
							'<option value="14">14</option>'+
							'<option value="15">15</option>'+
							'<option value="16">16</option>'+
							'<option value="17">17</option>'+
							'<option value="18">18</option>'+
							'<option value="19">19</option>'+
							'<option value="20">20</option>'+
							'<option value="21">21</option>'+
							'<option value="22">22</option>'+
							'<option value="23">23</option>'+
							'<option value="24">24</option>'+
							'<option value="25">25</option>'+
							'<option value="26">26</option>'+
							'<option value="27">27</option>'+
							'<option value="28">28</option>';

	if(mon=='2'){
		//2월일때 윤달체크
		 if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
			day_html+='<option value="29">29</option>';
		 }
	}else if(jQuery.inArray(mon, day31)>-1){
		//31일달
		day_html+='<option value="29">29</option>'+
						   '<option value="30">30</option>'+
						   '<option value="31">31</option>';
	}else{
		//30일달
		day_html+='<option value="29">29</option>'+
							'<option value="30">30</option>';
	}
	$("#birth_d").html(day_html);

}

//★★ 본인번호인증
function getAgreeNum(){
    var cnt = $("#buttonChk").val(); ; //버튼을 누른 횟수
    var chkcnt = Number(cnt)+1;
    console.log('인증번호 누른 횟수'+ cnt);
	
    var chk_p = $("#chkparent").val(); // 부모님 동의가 필요하면 val 1 아님 0
    var chk_p_over = $("#parentAgreechk").val(); // 부모님 동의가 완료되었으면 1
    var dbAgreeNum = $("#dbAgreeNum").val(); //본인인증번호

    var mj_y = $("[name = 'birth_y']").val();
    var mj_m = $("[name = 'birth_m']").val();
    var mj_d = $("[name = 'birth_d']").val();

	var name = $("[name = 'mj_name']").val();
	var nameErr = $('#nameChk.err').length;

	var hp0 = $("#mj_hp0").val();
	var hp1 = $("#mj_hp1").val();
	var hp2 = $("#mj_hp2").val();

	var hpp1 = $("#p_hp1").val();//부모번호1
	var hpp2 = $("#p_hp2").val();//부모번호2

	//부모동의
	var needParent=false;//필요없음
	if(chk_p==1 && chk_p_over ==0){
		needParent=true;//필요함
	}

	 // 부모님 동의가필요하면서, 완료 되어지지않은 상태면
    if(needParent==true){
		alert("보호자의의 휴대폰번호 인증부터 진행해주세요.");
		$('#p_name').focus();
		return false;
    }
	// 본인 이름 확인
    if(!name || name==''){
        alert("이름을 입력해주세요.");
		$('input[name=mj_name]').focus();
		$('input[name=mj_name]').css('border','1px solid #d91a1a');
        return false;
    }
	
	if(nameErr != 0){
		alert('이름을 입력해주세요');
		$('input[name=mj_name]').focus();
        return false;
	}



	// 본인 생일 입력확인
	if(mj_y=="" || mj_m=="" || mj_d==""){
        alert("생년월일을 선택해 주세요.");
        if(mj_y==""){
            $('#birth_y').trigger('click');
            $('#birth_y').focus();
			$('.birth.three-input').addClass('bord');
        }else if(mj_m==""){
            $('#birth_m').trigger('click');
            $('#birth_m').focus();
			$('.birth.three-input').addClass('bord');
        }else if(mj_d==""){
            $('#birth_d').trigger('click');
           $('#birth_d').focus();
			$('.birth.three-input').addClass('bord');

        }
        return false;
    }else{
		$('.birth.three-input').removeClass('bord');
	}

	if(!hp1 || hp1 =="" ||  hp1.length<3){
        alert("휴대폰 번호를 정확히 입력해주세요");
		$('.phone').addClass('bord');
		$('#mj_hp1').focus();
        return false;
	}

	if(!hp2 || hp2 =="" ||  hp2.length<4){
        alert("휴대폰 번호를 정확히 입력해주세요");
		$('.phone').addClass('bord');
		$('#mj_hp2').focus();
        return false;
	}

	//보호자가 필요한 회원이면
	if(chk_p == 1){
		if( $("[name = 'mj_name']").val()== $("[name = 'p_name']").val()){
			alert("보호자의 이름과 회원의 이름은 동일 할 수 없습니다.");
			$('#mj_name').focus();
			return false;
		}
		if(hp1 == hpp1 && hp2 == hpp2 ){
			alert("보호자의 휴대폰 번호와 회원의 휴대폰 번호는 동일 할 수 없습니다.");
			return false;
		}
    }

	if( cnt ==  5){
		alert("인증번호를 5회 이상 받을수 없습니다.다시 진행해주세요.");
		location.reload();
		return false;
	}

	$("#buttonChk").val(chkcnt);
	$.getJSON('/mobile/mb/getAgreeNumber.php',{ hp0: hp0, hp1: hp1, hp2: hp2, mode: "alone", mb_name: name, oldAgreeNo : dbAgreeNum },function(data){

		if(data.status.msg=="no"){
			alert("이미 등록된 번호입니다.");
			return false;

		}else{
			alert(data.status.msg);
			$("#dbAgreeNum").val(data.status.status);

			if(data.status.status!="0"){
				$("[name = 'mj_name']").attr("readonly", true);
				$("#mj_hp0").attr("readonly", true).parent('span').addClass('input_bg');
				$("#mj_hp0").parent('span').addClass('input_bg');
				$("#mj_hp1").attr("readonly", true).parent('span').addClass('input_bg');
				$("#mj_hp2").attr("readonly", true).parent('span').addClass('input_bg');
				$("#phone-reset-btn").css("display", "block");
				$(".phone-agree-btn.me").hide();
				$("#mj_agrere_num").attr("readonly", false);
				$(".table-list li.no_mg").show();
				$("#hp_ck_btn").show();
				$("#mj_agrere_num").show();
				$("#mj_agrere_num").removeClass('input_bg');
				$("#p_agrere_num").removeClass('input_bg');

				//생년월일,이름 제한
				$('.year #birth_y').attr("readonly", true).parent('.year').addClass('input_bg');
				$('.month #birth_m').attr("readonly", true).parent('.month').addClass('input_bg');
				$('.day #birth_d').attr("readonly", true).parent('.day').addClass('input_bg');
				$('#mj_name').attr("readonly", true).addClass('input_bg');

				$('.new_join_wrap .year, .new_join_wrap .month, .new_join_wrap .day, .new_join_wrap .mj-phone-block-select').addClass('change');

				s = setInterval(function showTime() {
					if (time > 0) {
						var ss = time%60;
						var mm = parseInt(time/60);
						if(ss<10){
							$(".agree_time #_time").html(""+mm+":0"+ss);
							//console.log(""+mm+":0"+ss);
						}else{
							$(".agree_time #_time").html(""+mm+":"+ss);
							//console.log(""+mm+":"+ss);
						}
						$(".agree_time").show();
						time -= 1;
					} else if(time==0){
						$(".agree_time #_time").html("0:00");

						clearInterval(s);
						alert('인증시간이 초과 되었습니다. \n다시 요청을 해주세요');
						getResetPhone('phone-reset-btn');

						$(".agree_time #_time").html("");
						time=180;
					}
				},1000);

			} else {  //20221206 추가 - 에러구문 sd_kshbx
				return false;
			}
		}

	});


}

//★★ 인증취소버튼눌렀을때 컴펌용
function confirm_event(text){
	if(confirm('휴대폰 인증을 취소하시겠습니까?')){
		getResetPhone(text);
	}
	return false;
}

//★★ 인증취소
function getResetPhone(text){
    var text_p = text;
    var chk_p = $("#chkparent").val();
    var chk_p_over= $("#parentAgreechk").val();

    if(text_p =='phone-reset-btn' || text_p =='p_phone-reset-btn'){

        if(text_p =='p_phone-reset-btn' ){
            $("[name = 'p_name']").attr("readonly", false);
            $("#p_relation").attr("readonly", false);
            $("#p_hp0").val('');
            $("#p_hp1").val('');
            $("#p_hp2").val('');
            $("#p_hp0").attr("readonly", false).parent('span').removeClass('input_bg');
            $("#p_hp1").attr("readonly", false).parent('span').removeClass('input_bg');
            $("#p_hp2").attr("readonly", false).parent('span').removeClass('input_bg');
            $("#p_agrere_num").val("");
            $("#p_agrere_num").attr("readonly", true);
            $("#p_agrere_num").addClass('input_bg');
            $("#p_phone-reset-btn").css("display", "none");
            $(".phone-agree-btn.p").show();
            $("#p_hp_ck_btn").hide();
            $("#p_agrere_num").hide();
            $(".p_agree_time").hide();
            $("#parentAgreechk").val(0);
            $(".confirm_txt.p").hide();
        }else{
            $("[name = 'mj_name']").attr("readonly", false);
			/*인증취소버튼 누를시 010 유지, 인증번호요청 버튼 처음으로 리셋 S: 20220829*/
				$("#mj_hp0 option:selected").val('');
				$(".phone-agree-btn").addClass('btn_bg');
			/*인증취소버튼 누를시 010 유지, 인증번호요청 버튼 처음으로 리셋 E: 20220829*/
			/*원본*/
				//$("#mj_hp0").val('');
			/*원본*/
            $("#mj_hp1").val('');
            $("#mj_hp2").val('');
            $("#mj_hp0").attr("readonly", false).parent('span').removeClass('input_bg');
            $("#mj_hp1").attr("readonly", false).parent('span').removeClass('input_bg');
            $("#mj_hp2").attr("readonly", false).parent('span').removeClass('input_bg');

            //생년월일,이름 제한s
            $('.year #birth_y').attr("readonly", false).parent('.year').removeClass('input_bg');
            $('.month #birth_m').attr("readonly", false).parent('.month').removeClass('input_bg');
            $('.day #birth_d').attr("readonly", false).parent('.day').removeClass('input_bg');
            $('#mj_name').attr("readonly", false).removeClass('input_bg');

            $("#mj_agrere_num").val("");
            $("#mj_agrere_num").attr("readonly", true).addClass('input_bg');
            $("#phone-reset-btn").css("display", "none");
            $(".phone-agree-btn.me").show();
			$("#mj_agrere_num").hide();
            $("#hp_ck_btn").hide();
            $(".agree_time").hide();
            $("#myAgreechk").val(0);
            $(".confirm_txt.me").hide();
			$('.no_mg.no_line').css('display','none');
			$('.new_join_wrap .year, .new_join_wrap .month, .new_join_wrap .day, .new_join_wrap .mj-phone-block-select').removeClass('change');
			$('.new_join_wrap input.ime-act').addClass('bg');
        }

    }else{

        if(chk_p == 1 ){
            $("[name = 'p_name']").attr("readonly", false);
            $("#p_relation").attr("readonly", false);
            $("#p_hp0").attr("readonly", false).parent('span').removeClass('input_bg');;
            $("#p_hp1").attr("readonly", false).parent('span').removeClass('input_bg');;
            $("#p_hp2").attr("readonly", false).parent('span').removeClass('input_bg');;
            $("#p_agrere_num").val("");
            $("#p_agrere_num").attr("readonly", true).addClass('input_bg');
            $("#p_phone-reset-btn").css("display", "none");
            $(".phone-agree-btn.p").show();
            $("#p_hp_ck_btn").hide();
            $(".p_agree_time").hide();
            $("#parentAgreechk").val(0);
        }else{
            $("[name = 'mj_name']").attr("readonly", false);
            $("#mj_hp0").attr("readonly", false).parent('span').removeClass('input_bg');;
            $("#mj_hp1").attr("readonly", false).parent('span').removeClass('input_bg');;
            $("#mj_hp2").attr("readonly", false).parent('span').removeClass('input_bg');;

            $("#mj_agrere_num").val("");
            $("#mj_agrere_num").attr("readonly", true);
            $("#phone-reset-btn").css("display", "none");
            $(".phone-agree-btn.me").show();
			$("#mj_agrere_num").hide();
            $("#hp_ck_btn").hide();
            $(".agree_time").hide();
            $("#myAgreechk").val(0);
        }
    }
    clearInterval(s);
    time=180;

}


//★★ 입력한 번호 체크
 function chkAgreeNum(ck){
    var modal_msg = "";
    var chk_p = $("#chkparent").val();
    var chk_p_over = $("#parentAgreechk").val();//입력값
	var inputname;
	if(ck=="p"){
		inputname="[name='p_agrere_num']";
		var dbAgreeNum = $("#dbAgreeNumP").val();//부모인증번호
	}
	if(ck=="m" || ck==''){
		inputname="[name='mj_agrere_num']";
		var dbAgreeNum = $("#dbAgreeNum").val();//인증번호
	};
    var myAgreeNum = $(inputname).val();//입력값


    if( dbAgreeNum == 0 ){
        alert("인증번호를 전송받지 못하였습니다.");
        return false;
    }
	if( !myAgreeNum ){
        alert("인증번호를 입력해주세요.");
        return false;
    }



	if( dbAgreeNum != myAgreeNum ){
        alert("인증번호가 일치하지 않습니다.\n다시 확인해주세요.");
        return false;
    }

	if(!(chk_p == 1&&chk_p_over == 0)){

		var hp0 = $("#mj_hp0").val();
		var hp1 = $("#mj_hp1").val();
		var hp2 = $("#mj_hp2").val();

		$.getJSON('/mobile/mb/getAgreeNumber.php',{ hp0: hp0, hp1: hp1, hp2: hp2, mode: "mb_cks"},function(data){
			if(data.status.msg !="OK"){
				if(confirm(data.status.msg)){
					location.replace("/mobile/login.php");
				}else{
					clearInterval(s);
					getResetPhone('p_phone-reset-btn');
				}
				return false;
			}else{
				alert("인증이 완료되었습니다.");
                $(".confirm_txt.me").show();
				//sd_work_pj
				//$('.mj_agrere_num').show();
			}
		});
	}
	clearInterval(s);

	$("#mj_agrere_num").addClass('input_bg');
	$("#p_agrere_num").addClass('input_bg');


	$("#mj_name").val($("[name='mj_name']").val());
	$("#mj_hp0").val($("#mj_hp0").val());
	$("#mj_hp1").val($("#mj_hp1").val());
	$("#mj_hp2").val($("#mj_hp2").val());
	$("#agreenum").val(0);

	if((chk_p == 1 && chk_p_over == 0) || ck=="p" ){
		$(".p_agree_time").hide();
		$("#p_hp_ck_btn").hide();
		$("#p_agrere_num").hide();
		$("#p_agrere_num").attr("readonly" , true);
		$("#parentAgreechk").val(1); //법정대리인 완료비교값
		alert("보호자 인증이 완료되었습니다.");
        $(".confirm_txt.p").show();
	}else{
		$(".agree_time").hide();
		$("#hp_ck_btn").hide();
		$("#mj_agrere_num").attr("readonly" , true);
		$("#mj_agrere_num").hide();
		$("#myAgreechk").val(1);  //자기자신 완료비교값
        $(".confirm_txt.me").show();
		$('.confirm_txt.me').css('margin-bottom','5px');
	}
}


//★★ 최종 저장
var submit_click = 0;
function onJoinSubmit(){

    var paramArray = serializeMap($('#form_memberJoin'));//#form_memberJoin이폼안에 인풋값들배열로만들어주는검다
    var chkMemIdVa = $("#mjIdchkstatus").val();
    var myAgreechk = $("#myAgreechk").val();
    var parentChk = $("#parentAgreechk").val();
	var nameErr = $('#nameChk.err').length;

    console.log(paramArray);

	// ♣ 아이디체크
    if(!paramArray.mj_id){
        alert("아이디를 확인해주세요 ");
        $('input[name=mj_id]').focus();
		$('input[name=mj_id]').css('border','1px solid #d91a1a');
		/*가입하기 누를시 포커스만 되고 키패드는 클릭했을때 나오게 하기 S:20220830 추가됨. 이유) 키패드 나온상태로 다시 가입하기 누르면 다시포커싱이 안되서 이렇게 추가했습니다.*/
			setTimeout(function(){$('input[name=mj_id]').attr('inputmode','none');},50);
			$('input[name=mj_id]').click(function(){
				$('input[name=mj_id]').attr('inputmode','text')
			});
		/*가입하기 누를시 포커스만 되고 키패드는 클릭했을때 나오게 하기 E:20220830 추가됨*/
        return false;
    }

    if(paramArray.mj_id && chkMemIdVa == 9){
        alert("아이디를 입력해주세요");
        $('input[name=mj_id]').focus();
        return false;
    }

    if(paramArray.mj_id.length < 6 || paramArray.mj_id.length > 12){
        alert("아이디는 6~12자의 영문, 소문자, 숫자 조합만이 가능합니다");
        $('input[name=mj_id]').focus();
        return false;
    }

    // ♣ 비밀번호 체크
    console.log(paramArray.pwok1);console.log(paramArray.pwok2);
    if(!paramArray.nc_qm  || !paramArray.pwok1 || paramArray.nc_qm.length < 8 || paramArray.nc_qm.length >20){
        alert("비밀번호를 확인해주세요");
        $('input[name=nc_qm]').focus();
		$('input[name=nc_qm]').css('border','1px solid #d91a1a');

        return false;
    }
    if(paramArray.nc_qm != paramArray.nc_qm_chk  || !paramArray.pwok2 || paramArray.nc_qm_chk.length < 8 || paramArray.nc_qm_chk.length >20){
        alert("비밀번호가 일치하지 않습니다.");
        $('input[name=nc_qm_chk]').focus();
        return false;
    }


    // ♣ 이름 체크
    if(!paramArray.mj_name){
        alert("이름을 입력해주세요.");
        $('input[name=mj_name]').focus();
		$('input[name=mj_name]').css('border','1px solid #d91a1a');
        return false;
    }

	if(nameErr != 0){
		alert('이름을 입력해주세요');
		$('input[name=mj_name]').focus();
        return false;
	}

    // ♣ 생년월일 체크
	if (!(userAgentJoin.search("jios") > -1)) { 
		if(!paramArray.birth_y ){
			alert("생년월일을 선택해 주세요.");
			$('#birth_y').trigger('click');
			$('#birth_y').focus();
			$('.birth.three-input').addClass('bord');
			return false;
		}else if(!paramArray.birth_m){
			alert("생년월일을 선택해 주세요.");
			$('#birth_m').trigger('click');
			$('#birth_m').focus();
			$('.birth.three-input').addClass('bord');
			return false;
		}else if(!paramArray.birth_d){
			alert("생년월일을 선택해 주세요.");
			$('#birth_d').trigger('click');
			$('#birth_d').focus();
			$('.birth.three-input').addClass('bord');
			return false;
		}
	}

    // ♣ 부모인증 체크
    if($("#chkparent").val()==1){

        if(parentChk != 1){
            alert("보호자의 휴대폰 인증 후 가입하실 수 있습니다.");
            return false;
        }
        if(!paramArray.p_name || paramArray.p_name=='' || paramArray.p_name==" " ){
            alert("보호자의 이름을 입력해 주세요.");
            $('#p_name').focus();
            return false;
        }
        if(paramArray.p_name === paramArray.mj_name){
            alert("보호자의 이름과 회원 이름은 일치할수 없습니다.");
			$('#p_name').focus();
            return false;
        }

        if(!paramArray.p_hp0 || !paramArray.p_hp1 || paramArray.p_hp1.length<3 ){
            alert("휴대전화번호 앞자리를 다시 입력해주세요");
            $('#p_hp1').focus();
            return false;
        }
		if(!paramArray.p_hp2 ||  paramArray.p_hp2.length<4){
            alert("휴대전화번호 뒷자리를 다시 입력해주세요");
            $('#p_hp2').focus();
            return false;
        }

        var mj_hp = paramArray.mj_hp0 +"-"+paramArray.mj_hp1+"-"+paramArray.mj_hp2;
        var p_hp = paramArray.p_hp0 +"-"+paramArray.p_hp1+"-"+paramArray.p_hp2;

        if(mj_hp == p_hp){
            alert("보호자의 휴대폰 번호와 회원의 휴대폰 번호는 동일 할 수 없습니다.");
            return false;
        }
    }

    // ♣ 약관동의 체크
	if(!$("[name='age_provision']").is(":checked") || !$("[name='info_provision']").is(":checked") || !$("[name='use_provision_ck']").is(":checked")){
		alert("약관에 동의해 주세요");
		$('.agree_wrap')[0].scrollIntoView();
		return false;
	}

    if(myAgreechk!=1){
        alert("휴대폰 인증이 필요합니다.");
		$('.phone').addClass('bord');
        $('.agree_wrap')[0].scrollIntoView();
        return false;
    }

    // ♣ 휴대폰 번호
    if(!paramArray.mj_hp0 || !paramArray.mj_hp1 || !paramArray.mj_hp2){
        if(!paramArray.mj_hp1 || paramArray.mj_hp1.length<3 ){
            alert("휴대폰 번호를 정확히 입력해주세요");
            $('input[name=mj_hp1]').focus();
        }else if(!paramArray.mj_hp2 || paramArray.mj_hp2.length<3){
            alert("휴대폰 번호를 정확히 입력해주세요");
            $('input[name=mj_hp2]').focus();
        }
        return false;
    }

    if($("[name='b1']").is(":checked")===true){


    }else{
        alert("관심분야를 선택해주세요");
		$('.fav_1, .chosung1').addClass('selected');
		$('.cate-list-div1').css('display','block');
		$('.inter_list_wrap').show();
        return false;
    }

	if(submit_click!=0){
		return false;
	}else{
		submit_click++;
	}

	// ♣ 위에서 안걸러지고 여기까지 왔으면 고고
	if(confirm("회원가입을 진행하시겠습니까?")){

		$('.btn.btn-success.right-btn').prop('disabled', true);

		console.log($("#form_memberJoin").attr("action"))
		console.log(paramArray)

		$.post($("#form_memberJoin").attr("action"), paramArray, function( allData ){
			submit_click=0;
			console.log(allData);

			try{
				var data = $.parseJSON(allData);

				console.log(data);

				if(data){
					if(data.status.status === 1){
						//완료 페이지에 노출될 정보
						$("#newbi_name").html(paramArray.mj_name);
						$("#newbi_id").html(paramArray.mj_id);
						showJoinFinish();
						return false;
					}else{
						alert(data.status.msg);
						//console.log(data.status.status);
			//			location.replace('/mobile/login.php');  // ####..
						return false;
					}
				}

			}catch(e){
				console.log(e);
				alert("가입중에 오류가 발생하였습니다.");
				location.replace('/mobile/login.php');

			}

		});

	}else{
		submit_click=0;
		return false;
	}
}

//★★ 인증번호 글자수 제한, 휴대전화 글자수 제한
function maxLengthCheck(object){
    if (object.value.length > object.maxLength){
      object.value = object.value.slice(0, object.maxLength);
    }
}


//★★ 완료 페이지
function showJoinFinish(){
    $('#view_memberJoinFinish').css({
        'z-index':'9999',
        'display' : 'block'
    });
};
