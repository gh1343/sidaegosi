<?
	include_once ("./mobile_sub_head_test.php");//$mobile_js_route 이거 여기있음!

	if($member["mb_level"]>1){
		//이미 로그인되어있으면 그냥 메인으로 던져
		alert("이미 로그인 되어있습니다.",'/mobile');
	}


	// 어디에다가 쓰는지 몰라서  일단 주석 처리 해놓음 2022-04-18 pjh
	//require_once 'vendor/autoload.php';
	//$siteKey = '6LcnSAsTAAAAAG3fCjKrY5KVBxzeznHP9K-xKnCk';
	//$secret = '6LcnSAsTAAAAAI-IY0zd7sTZroXtM0QVB_4j9mgF';
	//$lang = 'ko';

	//초성 구분시에 아래탭으로 쓸거
    $cho_group1 = array('ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ');
	$cho_group2 = array('ㅁ','ㅂ','ㅃ','ㅅ','ㅆ');
	$cho_group3 = array('ㅇ','ㅈ','ㅉ');
	$cho_group4 = array('ㅊ','ㅋ','ㅌ','ㅍ','ㅎ');
	$cho_group5 = array('a','b','c','d','e','f','g','h' ,'i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
    $cho_group6 = array('');


    //원본
	//$cho_group1 = array('ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ');
	//$cho_group2 = array('ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ');

	//초성분리함수 끗

    
?>

<link href="/mobile/css/main_new.css" rel="stylesheet" />
<link href="/mobile/css/join_renew_test.css" rel="stylesheet" />
<link href="/mobile/css/min/main.min.css" rel="stylesheet" />
<script src="<?=$mobile_js_route?>/join_test0704.js"></script>


         <!--회원가입 폼 :S-->
         <div class="new_join_wrap">
            <form name="member_join_form " id="form_memberJoin" method="post" action="/mobile/mb/member_join_form_update.php">
                <?
                //<input type="hidden" name="w"/> //수정때   =u 필요
                //<input type="hidden" name="" id="mjIdchk" value="" /> //요놈 안쓰데?
                ?>
                <input type="hidden" name="new_form" value="YES" />
                <input type="hidden" name="" id="mjIdchkstatus" value="" /> <?/* 아이디사용가능여부  */?>

                <input type="hidden" name="" id="buttonChkP" value="0" /> <?/* 부모인증시도횟수 */?>
                <input type="hidden" name="" id="chkparent" value="0" /> <?/* 부모동의 필요1/no0 */?>
                <input type="hidden" name="" id="parentAgreechk" value="0" /> <?/* 부모동의 완1/no0  */?>
                <input type="hidden" name="" id="dbAgreeNumP" value="0" /> <?/* 부모인증번호  */?>

                <input type="hidden" name="" id="buttonChk" value="0" /> <?/* 본인인증시도횟수  */?>
                <input type="hidden" name="" id="myAgreechk" value="0" /> <?/* 본인인증 완1/no0  */?>
                <input type="hidden" name="" id="dbAgreeNum" value="0" /> <?/* 본인인증번호  */?>
                <input type="hidden" name="" id="clientIp" value="<?=$clientip?>"> <?/* 테스트아이피 */?>

                <div id="view_memberJoinStep1">
                    <!--회원정보 : S -->
                    <!-- <div class="mj-title">
                        <span>◎ 회원정보</span>
                    </div> -->
                    <div class="table-wrap">
                        <ul class="table-list no_line">
                            <li>
                                <div class="th">
                                    <label class="required">아이디</label>
                                </div>
                                <div class="td">
                                    <input type="text" inputmode="" name="mj_id" id="mj_id" class="form-control ime-dis" value="" maxlength="12" placeholder="아이디 입력(6~12자 영문 사용)" onkeyup="checkMemberId(this)" oninput="numberMaxLength(this);" />
                                    <script>
                                        function numberMaxLength(e){
                                            if(e.value.length > e.maxLength){
                                            e.value = e.value.slice(0, e.maxLength);
                                            }
                                        }
							        </script>
                                    <div class="id_check" id="id_check">
                                        <div class="comment"></div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="th">
                                    <label class="required">비밀번호</label>
                                </div>
                                <div class="td">
                                    <input type="password" name="nc_qm"  id="nc_qm" class="form-control " value="" maxlength="20"  placeholder="비밀번호 입력(영문, 숫자, 특수문자 조합)"
                                        autocomplete="off" onkeyup="checkMemberPw(this)" />
                                    <input type="hidden" name="pwok1"  id="pwok1" value=''/>
                                    <span class="pwck " id='pwck1' style="color: rgb(237, 78, 72);"></span>
                                </div>
                                
                            </li>
                            <li>
                                <div class="th">
                                    <label class="required">비밀번호 확인</label>
                                </div>
                                <div class="td">
                                    <input type="password" name="nc_qm_chk"  id="nc_qm_chk" class="form-control" value="" placeholder="비밀번호 재입력"
                                    autocomplete="off" onkeyup="checkMemberPwCk(this)" />
                                    <input type="hidden" name="pwok2" id="pwok2" value=''/>
                                    <span class="pwck" id="pwck2" style="color: rgb(237, 78, 72);"></span>
                                </div>
                            </li>
                            <li>
                                <div class="th">
                                    <label class="required">이름</label>
                                </div>
                                <div class="td">
                                    <input type="text" name="mj_name" id="mj_name" class="form-control ime-act" value="" maxlength="13"  placeholder='한글로 입력해주세요.'  onkeyup="checkUserName(this,'', 'mj_name'); max_length(this);" />
                                    <span class="nameChk " id='nameChk' style="color: rgb(237, 78, 72);"></span>
                                </div>
                            </li>
                            
                            <?if (strpos($_SERVER['HTTP_USER_AGENT'], 'jios') == false  ){?> 
                            <li>
                                <div class="th"> 
                                    <label class="required">생년월일</label>
                                </div>
                                <div class="td">
                                    <div class="birth three-input">
                                        <span class="year">
                                            <select name="birth_y" id="birth_y" class="form-control no-padding-lr" onchange="changeYear('#birth_m');">
                                                <option value="" selected>연도</option>
                                                <?for($i=(date("Y"));$i>1909;$i--){echo "<option value='$i'>$i</option>";}?>
                                            </select>
                                        </span>
                                        <span class="month">
                                            <select name="birth_m" id="birth_m" class="form-control no-padding-lr" onchange="changeMonth(this);">
                                                <option value="" selected>월</option>
                                                <?for($i=1;$i<=12;$i++){echo "<option value='$i'>$i</option>";}?>
                                            </select>
                                        </span>
                                        <span class="day">
                                        <select name="birth_d" id="birth_d" class="form-control no-padding-lr">
                                            <option value="" selected>일</option>
                                            <?for($i=1;$i<=31;$i++){echo "<option value='$i'>$i</option>";}?>
                                        </select>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <?}?>

                        </ul>
                        <!--보호자 동의 :S-->
                    <!--  <div class="parent_agree" id="parent_info">
                            <div class=" parent_agree_ment">
                                <h3>보호자동의</h3>
                                <p>
                                    <i class="right-red">
                                        ※ 만 14세 미만은 법정대리인의 인증이 필요합니다.
                                    </i>
                                    <br>미인증 시 서비스 이용이 제한됩니다.
                                </p>
                            </div>
                            <div class="table-wrap">
                                <ul class="table-list">
                                    <li>
                                        <div class="th">
                                            <label class="required">이름</label>
                                        </div>
                                        <div class="td">
                                            <input type="text" name="p_name" id="p_name" class="form-control" value=""  placeholder='한글로 입력해주세요.' onkeyup="checkUserName(this , '','p_name');max_length(this)" maxlength="13"/>
                                            <span class="nameChk " style="color: rgb(237, 78, 72);"></span>
                                        </div>
                                    </li>
                                    <li class="phone_list">
                                        <div class="th">
                                            <label class="required">휴대전화</label>
                                        </div>
                                        <div class="td">
                                            <div class="three-input">
                                                <span class="mj-phone-block">
                                                    <select id="p_hp0" name="p_hp0" class="form-control no-padding-lr" max="999" >
                                                    <option>010</option>
                                                    <option>011</option>
                                                    <option>016</option>
                                                    <option>017</option>
                                                    <option>019</option>
                                                    </select>
                                                </span>
                                                <span class="mj-phone-block">
                                                    <input type="text" id="p_hp1" name="p_hp1" class="form-control no-padding-lr" onkeyup ="only_number(this);max_length(this);" maxlength="4"/>
                                                </span>
                                                <span class="mj-phone-block">
                                                    <input type="text" id="p_hp2" name="p_hp2" class="form-control no-padding-lr"  onkeyup ="only_number(this);max_length(this);" maxlength="4" />
                                                </span>
                                            </div>
                                            <button type="button" class="btn btn-warning phone-agree-btn p" onclick="getAgreeNumParents()">인증번호 요청</button>
                                        </div>
                                    </li>
                                    <li class="no_line no_mg">
                                        <div class="th no_dot">
                                            <label class="required"></label>
                                        </div>
                                        <div class="td">
                                            <div class="num_wrap">
                                                <input type="number" id="p_agrere_num" maxlength="5" name="p_agrere_num" class="form-control mj-submit-text input_bg non-display" value="" readonly="readonly" placeholder="인증번호 입력" oninput="maxLengthCheck(this)" />
                                                <div class="p_agree_time right-red non-display"><span id="_time"></span></div>
                                            </div>
                                            <button type="button" class="btn btn-primary mj-submit-btn p non-display"  id="p_hp_ck_btn" onclick="chkAgreeNum('p')">인증 받기</button>
                                            <button type="button" id="p_phone-reset-btn" class="btn p_phone-reset-btn non-display" onclick="confirm_event('p_phone-reset-btn');">인증 취소</button>
                                            <p class="confirm_txt p">인증완료</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div> -->
                        <!--보호자 동의 E-->
                    </div>
                    <!--회원정보 : E -->

                    <!--약관 및 개인정보 이용 동의 : S -->
                    <div class="mj-title">
                        <span>약관동의</span>
                    </div>
                    <div class="agree_wrap">
                        <div class="inner_content join_agree">
                            <ul class="mj-list">
                                <li>
                                    <input type="checkbox" name="provision_all_agree" id="provision_all_agree">
                                    <label for="provision_all_agree"><span class="all_agree">전체 동의</span></label>
                                </li>
                            </ul>
                            <ul class="mj-list ckboxs">
                                <li>
                                    <input type="checkbox" name="age_provision" value="1" id="agree_07">
                                    <label for="agree_07"><span>만 14세 이상입니다. <em class="color_pill">(필수)</em></span></label>
                                    <a href="javascript:void(0)" onClick="$('#new_term7').show();">내용보기</a>
                                    <div class="term_text term7" id="new_term7">
                                        <div class="term_content default-skin">
                                            <div class="upper_portion">
                                                <h6 class="skip early">만 14세 이상입니다. (필수)</h6>
                                                <i class="cate-close pull-right new_x_btn cancel_button" onClick="$('#new_term7').hide();"></i>
                                            </div>
                                            <div class="term_content_view">
                                                <?/*include_once($_SERVER["DOCUMENT_ROOT"].'/_skin/sidae/include/terms/under_14_admitted.inc.htm');*/?> <!-- 수정 20220704 -->
                                                <?if ($clientip == '119.192.180.115' || $clientip == '119.192.180.119' || $clientip == '119.192.180.117'){?>
                                                    <?include_once($_SERVER['DOCUMENT_ROOT'].'/_skin/sidae/include/terms/under_14_admitted.inc_test.htm');?>
                                                <?} else {?> 
                                                    <?include_once($_SERVER['DOCUMENT_ROOT'].'/_skin/sidae/include/terms/under_14_admitted.inc.htm');?>
                                                <?}?>
                                            </div>
                                            <!-- <div class="new_datgi_div">
                                                <span class='new_datgi_btn' onClick="$('#new_term7').hide();">닫기</span>
                                            </div> -->
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <input type="checkbox" name="info_provision" value="1" id="agree_01">
                                    <label for="agree_01"><span>이용 약관 <em class="color_pill">(필수)</em></span></label>
                                    <a href="javascript:void(0)" onClick="$('#new_term1').show();">내용보기</a>
                                    <div class="term_text term1" id="new_term1">
                                        <div class="term_content default-skin">
                                            <div class="upper_portion">
                                                <h6 class="skip early">이용 약관 (필수)</h6>
                                                <i class="cate-close pull-right new_x_btn" onClick="$('#new_term1').hide();"></i>
                                            </div>
                                            <div  class="term_content_view con_view2">
                                                <?if ($clientip == '119.192.180.115' || $clientip == '119.192.180.119' || $clientip == '119.192.180.117'){?>
                                                    <?include_once($_SERVER["DOCUMENT_ROOT"].'/_skin/sidae/include/terms/term_agreement.inc_test.htm');?>
                                                <?} else {?>
                                                    <?include_once($_SERVER["DOCUMENT_ROOT"].'/_skin/sidae/include/terms/term_agreement.inc.htm');?>
                                                <?}?>

                                            </div>
                                            <!-- <div class="new_datgi_div">
                                                <span class='new_datgi_btn' onClick="$('#new_term1').hide();">닫기</span>
                                            </div> -->
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <input type="checkbox" name="use_provision_ck" value="1" id="agree_03">
                                    <label for="agree_03"><span>개인정보 수집·이용동의 <em class="color_pill">(필수)</em></span></label>
                                    <a href="javascript:void(0)" onClick="$('#new_term3').show()">내용보기</a>

                                    <div class="term_text term3"  id="new_term3">
                                        <div class="term_content default-skin">
                                            <div class="upper_portion">
                                                <h6 class="skip early">개인정보 수집·이용동의 (필수)</h6>
                                                <i class="cate-close pull-right new_x_btn" onClick="$('#new_term3').hide();"></i>
                                            </div> 
                                            <div  class="term_content_view">
                                                <?if ($clientip == '119.192.180.115' || $clientip == '119.192.180.119' || $clientip == '119.192.180.117'){?>
                                                    <?include_once($_SERVER["DOCUMENT_ROOT"].'/_skin/sidae/include/terms/personal_information.inc_test.htm');?>
                                                <?} else {?>  
                                                    <?include_once($_SERVER["DOCUMENT_ROOT"].'/_skin/sidae/include/terms/personal_information.inc.htm');?>
                                                <?}?>
                                            </div>
                                            <!-- <div class="new_datgi_div">
                                                <span class='new_datgi_btn' onClick="$('#new_term3').hide();">닫기</span>
                                            </div> -->
                                        </div>
                                    </div>
                                    <input type="hidden" name="use_provision" value="">
                                </li>
                                <li>
                                    <input type="checkbox" name="sns_provision_ck" value="1" id="agree_06">
                                    <label for="agree_06"><span>개인정보 수집 및 서비스 활용 동의 (선택)</span></label>
                                    <a href="javascript:void(0)" onClick="$('#new_term6').show()">내용보기</a>

                                    <div class="term_text term6"  id="new_term6">
                                        <div class="term_content default-skin">
                                            <div class="upper_portion">
                                                <h6 class="skip early">개인정보 수집 및 서비스 활용 동의 (선택)</h6>
                                                <i class="cate-close pull-right new_x_btn" onClick="$('#new_term6').hide();"></i>
                                            </div>
                                            <div  class="term_content_view">
                                                <?if ($clientip == '119.192.180.115' || $clientip == '119.192.180.119' || $clientip == '119.192.180.117'){?>
                                                    <?include_once($_SERVER["DOCUMENT_ROOT"].'/_skin/sidae/include/terms/third_party.inc_test.htm');?>
                                                <?} else {?>  
                                                    <?include_once($_SERVER["DOCUMENT_ROOT"].'/_skin/sidae/include/terms/third_party.inc.htm');?>
                                                <?}?>
                                            </div>
                                            <!-- <div class="new_datgi_div">
                                                <span class='new_datgi_btn' onClick="$('#new_term6').hide();">닫기</span>
                                            </div> -->
                                        </div>
                                    </div>
                                    <input type="hidden" name="sns_provision" value="">
                                </li>
                                <li>
                                    <input type="checkbox" name="event_provision" value="1" id="agree_05">
                                    <label for="agree_05">
                                        <span>서비스 · 이벤트 정보 수신 동의 (선택)</span>
                                        <div class="bg-orange sms_coupon_event"><span>수신 동의 시 3,000원 추가 할인 쿠폰 지급</span></div>
                                    </label>
                                    <a href="javascript:void(0)" onClick="$('#new_term5').show()">내용보기</a>

                                    <div class="term_text term5"  id="new_term5">
                                        <div class="term_content default-skin">
                                            <div class="upper_portion">
                                                <h6 class="skip early">서비스 · 이벤트 정보 수신 동의 (선택)</h6>
                                                
                                                <i class="cate-close pull-right new_x_btn" onClick="$('#new_term5').hide();"></i>
                                            </div>
                                            <div  class="term_content_view">
                                                <?if ($clientip == '119.192.180.115' || $clientip == '119.192.180.119' || $clientip == '119.192.180.117'){?>
                                                    <?include_once($_SERVER["DOCUMENT_ROOT"].'/_skin/sidae/include/terms/sms_agree.inc_test.htm');?>
                                                <?} else {?>  
                                                    <?include_once($_SERVER["DOCUMENT_ROOT"].'/_skin/sidae/include/terms/sms_agree.inc.htm');?>
                                                <?}?>
                                            </div>
                                            <!-- <div class="new_datgi_div">
                                                <span class='new_datgi_btn' onClick="$('#new_term5').hide();">닫기</span>
                                            </div> -->
                                        </div>
                                    </div>
                                    <input type="hidden" name="mb_sms" value="" class="" >
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="table-wrap">
                        <ul class="table-list">
                            <li class="phone_list">
                                <div class="th">
                                    <label class="required">휴대전화 인증</label>
                                </div>
                                <div class="td">
                                    <div class="phone three-input">
                                        <span class="mj-phone-block mj-phone-block-select">
                                            <select id="mj_hp0" class="form-control"  max="999" name="mj_hp0"  form="form_memberJoin"/>
                                                <option selected>010</option>
                                                <option>011</option>
                                                <option>016</option>
                                                <option>017</option>
                                                <option>019</option>
                                            </select>
                                        </span>
                                        <span class="mj-phone-block bord-none">
                                            <input type="number" inputmode="numeric" pattern="[0-9]*" id="mj_hp1" name="mj_hp1" class="form-control" oninput="maxLengthCheck(this)" maxlength="4"  data-bind=" event:{keyup: $root.memJoin.getHpNumCk}" />
                                        </span>
                                        <span class="mj-phone-block">
                                            <input type="number" inputmode="numeric" pattern="[0-9]*" id="mj_hp2"  name="mj_hp2" class="form-control" oninput="maxLengthCheck(this)" maxlength="4"  data-bind=" event:{keyup: $root.memJoin.getHpNumCk}" />
                                        </span>
                                    </div>
                                    <button type="button" class="btn btn-warning phone-agree-btn btn_bg me" onclick="getAgreeNum()" >인증번호 요청</button>
                                    <button type="button" id="phone-reset-btn" class="btn phone-reset-btn non-display" onclick="confirm_event('phone-reset-btn')">취소</button>
                                    <!-- <p class="confirm_txt me">인증완료</p> -->
                                </div>
                            </li>
                            <li class="no_mg no_line">
                                <div class="th no_dot">
                                    <label class="required"></label>
                                </div>
                                <div class="td">
                                    <div class="num_wrap">
                                        <input type="number" inputmode="numeric" pattern="[0-9]*" maxlength="5" id="mj_agrere_num" name="mj_agrere_num" class="form-control mj-submit-text input_bg non-display" value=""  readonly="readonly" placeholder="인증번호 5자리 입력" oninput="maxLengthCheck(this)" />
                                        <div class="agree_time right-red non-display"><span id="_time">00:00</span></div><!-- 남은시간 02:50 -->
                                        <p class="confirm_txt me">인증완료</p>
                                    </div>
                                    <button type="button" class="btn btn-primary mj-submit-btn me non-display"  id="hp_ck_btn" onclick="chkAgreeNum('m')">인증 받기</button>
                                    <!-- 인증 취소,완료  버튼 원래 위치 S:  -->
                                    <!-- <button type="button" id="phone-reset-btn" class="btn phone-reset-btn non-display" onclick="confirm_event('phone-reset-btn')">인증 취소</button> -->
                                    <!-- <p class="confirm_txt me">인증완료</p> -->
                                     <!-- 인증 취소,완료 버튼 원래 위치 E:  -->
                                </div>
                            </li>
                            <li>
                                <p class="chk_num">
                                    인증번호 5자리를 입력 후 인증 받기를 눌러주세요
                                </p>
                                <p class="gray-txt">
                                    ※ 가입이 어려우신 분은 1600-3600 문의
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div class="mj-title bord-none">
                        <span class="fav_choice">관심과정 선택</span>
                        <span class="title_ex">관심과정 선택하고 <span class="underline_col">합격지원 혜택!</span> 받으세요</span>
                    </div>

                    <div class="table-wrap cate-layer">
                        <input type="hidden" name="memfav" value="">
                        <!-- <div class="select_inter"><span></span>을(를) 선택하셨습니다.</div> -->
                        <div class="inner_content modify_inter">
                            <ul class="inter_btn">
                                <li class="fav_1"><a href="javascript:void(0)">자격증/면허증</a></li>
                                <li class="fav_2"><a href="javascript:void(0)">공무원</a></li>
                                <li class="fav_3"><a href="javascript:void(0)">독학사</a></li>
                                <li class="fav_4"><a href="javascript:void(0)">학위/입시</a></li>
                                <li class="fav_5"><a href="javascript:void(0)">취업</a></li>
                                <li class="fav_6"><a href="javascript:void(0)">AI모의고사</a></li>
                                <li class="fav_7"><a href="javascript:void(0)">온라인 모의고사</a></li>	
                            </ul>
                        </div>
                        <!--관심과정 레이어 :S-->
                        <div class="inter_list_wrap ">
                            <!--<div class="inter_top_wrap mb130">
                                <!--관심과정 리스트 :S->
                                <div class="cate-div mt20 tc " id="cate-selecte" >
                                    <span class="cate-list-selece">
                                        <select id="cate-list" name="categori" class="categori_list"
                                        onchange="$('.cate-list-div').hide();$('.cate-list-div' + $(this).val()).show();">
                                            <option value="1">자격증</option>
                                            <option value="2">공무원</option>
                                            <option value="3">독학사</option>
                                            <option value="4">학위/입시</option>
                                            <option value="5">취업</option>
                                            <option value="6">AI모의고사</option>
                                            <option value="7">온라인 모의고사</option>
                                        </select>
                                    </span>
                                </div>
                                <!--자격증 리스트:S->
                            </div>-->
                            <!--자격증 리스트:S-->
                            <div class="cate-div cate-list-div1 cate-list-div" id="lec_list">
                                <div class="inter-tab">
                                    <ul>
                                        <li><a href="#cate-ul1" class="cate-arr-btn chosung1">ㄱ ~ ㄹ</a></li>
                                        <li><a href="#cate-ul2" class="cate-arr-btn chosung2">ㅁ ~ ㅅ</a></li>
                                        <li><a href="#cate-ul3" class="cate-arr-btn chosung3">ㅇ ~ ㅈ</a></li>
                                        <li><a href="#cate-ul4" class="cate-arr-btn chosung4">ㅊ ~ ㅎ</a></li>
                                        <li><a href="#cate-ul5" class="cate-arr-btn chosung5">abc</a></li>
                                        <li><a href="#cate-ul6" class="cate-arr-btn chosung6">기타</a></li>
                                    </ul>
                                </div>
                                <?
                                $favlist2 = $sdfav -> getjoinfav("회원가입 전용 자격증");
                                $cho_text_group1='';
                                $cho_text_group2='';
                                $cho_text_group3='';
                                $cho_text_group4='';
                                $cho_text_group5='';
                                $cho_text_group6='';
                                for($i = 0 ; $i<count($favlist2); $i++){
                                    if($i<10){$j_num='0'.($i+1);}else{$j_num=($i+1);}
                                    $cho_first = get_cho_first($favlist2[$i]['name']);
                                    $cho_none = get_cho_first($favlist2[$i]['name']);
                                    if( in_array($cho_first, $cho_group1)){
                                        $cho_text_group1 .= '
                                        <li class="col-xs-12">
                                            <label for="lec_list'.$j_num.'" data-cho="'.$cho_first.'">
                                                <input type="radio" name="b1"  id="lec_list'.$j_num.'"  value="'.$favlist2[$i][name].'" />
                                                <span class="label-dot"></span><div class="txt">'.$favlist2[$i][name].'</div>
                                            </label>
                                            <div class="profit">
                                                <ul>
                                                    <li>
                                                        <div class="image_box1"></div>
                                                        <span class="apply">5% <br /> 수강료 할인</span>
                                                    </li>
                                                    <li>
                                                        <div class="image_box2"></div>
                                                        <span class="lec_name apply">'.$favlist2[$i][name].' <br /> 무료 강의 제공</span>
                                                    </li>
                                                    <li>
                                                        <div class="image_box3"></div>
                                                        <span class="apply">학습자료 <br /> 알림 서비스</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        ';
                                    }else if( in_array($cho_first, $cho_group2)){
                                        $cho_text_group2 .= '
                                        <li class="col-xs-12">
                                            <label for="lec_list'.$j_num.'" data-cho="'.$cho_first.'">
                                                <input type="radio" name="b1"  id="lec_list'.$j_num.'"  value="'.$favlist2[$i][name].'" />
                                                <span class="label-dot"></span><div class="txt">'.$favlist2[$i][name].'</div>
                                            </label>
                                            <div class="profit">
                                                <ul>
                                                    <li>
                                                        <div class="image_box1"></div>
                                                        <span class="apply">5% <br /> 수강료 할인</span>
                                                    </li>
                                                    <li>
                                                        <div class="image_box2"></div>
                                                        <span class="lec_name apply">'.$favlist2[$i][name].' <br /> 무료 강의 제공</span>
                                                    </li>
                                                    <li>
                                                        <div class="image_box3"></div>
                                                        <span class="apply">학습자료 <br /> 알림 서비스</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        ';
                                    }else if( in_array($cho_first, $cho_group3)){
                                        $cho_text_group3 .= '
                                        <li class="col-xs-12">
                                            <label for="lec_list'.$j_num.'" data-cho="'.$cho_first.'">
                                                <input type="radio" name="b1"  id="lec_list'.$j_num.'"  value="'.$favlist2[$i][name].'" />
                                                <span class="label-dot"></span><div class="txt">'.$favlist2[$i][name].'</div>
                                            </label>
                                            <div class="profit">
                                                <ul>
                                                    <li>
                                                        <div class="image_box1"></div>
                                                        <span class="apply">5% <br /> 수강료 할인</span>
                                                    </li>
                                                    <li>
                                                        <div class="image_box2"></div>
                                                        <span class="lec_name apply">'.$favlist2[$i][name].' <br /> 무료 강의 제공</span>
                                                    </li>
                                                    <li>
                                                        <div class="image_box3"></div>
                                                        <span class="apply">학습자료 <br /> 알림 서비스</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        ';
                                    }else if( in_array($cho_first, $cho_group4)){
                                        $cho_text_group4 .= '
                                        <li class="col-xs-12">
                                            <label for="lec_list'.$j_num.'" data-cho="'.$cho_first.'">
                                                <input type="radio" name="b1"  id="lec_list'.$j_num.'"  value="'.$favlist2[$i][name].'" />
                                                <span class="label-dot"></span><div class="txt">'.$favlist2[$i][name].'</div>
                                            </label>
                                            <div class="profit">
                                                <ul>
                                                    <li>
                                                        <div class="image_box1"></div>
                                                        <span class="apply">5% <br /> 수강료 할인</span>
                                                    </li>
                                                    <li>
                                                        <div class="image_box2"></div>
                                                        <span class="lec_name apply">'.$favlist2[$i][name].' <br /> 무료 강의 제공</span>
                                                    </li>
                                                    <li>
                                                        <div class="image_box3"></div>
                                                        <span class="apply">학습자료 <br /> 알림 서비스</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        ';
                                    }else if( in_array($cho_first, $cho_group5)){
                                        $cho_text_group5 .= '
                                        <li class="col-xs-12">
                                            <label for="lec_list'.$j_num.'" data-cho="'.$cho_first.'">
                                                <input type="radio" name="b1"  id="lec_list'.$j_num.'"  value="'.$favlist2[$i][name].'" />
                                                <span class="label-dot"></span><div class="txt">'.$favlist2[$i][name].'</div>
                                            </label>
                                            <div class="profit">
                                                <ul>
                                                    <li>
                                                        <div class="image_box1"></div>
                                                        <span class="apply">5% <br /> 수강료 할인</span>
                                                    </li>
                                                    <li>
                                                        <div class="image_box2"></div>
                                                        <span class="lec_name apply">'.$favlist2[$i][name].' <br /> 무료 강의 제공</span>
                                                    </li>
                                                    <li>
                                                        <div class="image_box3"></div>
                                                        <span class="apply">학습자료 <br /> 알림 서비스</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        ';
                                    }
                                }?>
                                <ul class="cate-ul cate-ul1 selected" id="cate-ul1">
                                    <!-- ㄱ~ㄹ -->
                                    <?=$cho_text_group1?>
                                </ul>

                                <ul class="cate-ul cate-ul2" id="cate-ul2">
                                    <!-- ㅁ~ㅅ -->
                                    <?=$cho_text_group2?>
                                </ul>

                                <ul class="cate-ul cate-ul3" id="cate-ul3">
                                    <!-- ㅇ~ㅈ -->
                                    <?=$cho_text_group3?>
                                </ul>
                                <style>
                                    .new_join_wrap .inter_list_wrap .cate-div label[for=lec_list56]{
                                        display: none;
                                    }
                                </style>

                                <ul class="cate-ul cate-ul4" id="cate-ul4">
                                    <!-- ㅊ~ㅎ -->
                                    <?=$cho_text_group4?>
                                </ul>

                                <ul class="cate-ul cate-ul5" id="cate-ul5">
                                    <!-- abc -->
                                    <?=$cho_text_group5?>
                                </ul>

                                <ul class="cate-ul cate-ul6" id="cate-ul6">
                                    <!-- 기타 -->
                                    <li class="col-xs-12">
                                        <label for="lec_list57" data-cho="자격증 기타">
                                            <input type="radio" name="b1"  id="lec_list57"  value="<?=$favlist2[55]['name']?>" />
                                            <span class="label-dot"></span><div class="txt"><?=$favlist2[55]['name']?></div>
                                        </label>
                                        <div class="profit">
                                            <ul>
                                                <li>
                                                    <div class="image_box1"></div>
                                                    <span class="apply">5% <br /> 수강료 할인</span>
                                                </li>
                                                <li>
                                                    <div class="image_box2"></div>
                                                    <span class="lec_name apply"><?=$favlist2[55]['name']?> <br /> 무료 강의 제공</span>
                                                </li>
                                                <li>
                                                    <div class="image_box3"></div>
                                                    <span class="apply">학습자료 <br /> 알림 서비스</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                            <!--자격증 리스트:E-->

                            <!--공무원 리스트:S-->
                            <div class="cate-div cate-list-div2 cate-list-div" id="gov_list">
                                <ul class="cate-ul selected">
                                <?$favlist1 = $sdfav -> getjoinfav("회원가입 전용 공무원");
                                    for($i = 0 ; $i<count($favlist1); $i++){if($i<10){$j_num='0'.($i+1);}else{$j_num=($i+1);}?>
                                    <li class="col-xs-12">
                                        <label for="gov_list<?=$j_num?>">
                                            <input type="radio" name="b1"  id="gov_list<?=$j_num?>"  value="<?=$favlist1[$i]['name']?>" />
                                            <span class="label-dot"></span><?=$favlist1[$i]['name']?>
                                        </label>
                                        <div class="profit">
                                            <ul>
                                                <li>
                                                    <div class="image_box1"></div>
                                                    <span class="apply">5% <br /> 수강료 할인</span>
                                                </li>
                                                <li>
                                                    <div class="image_box3"></div>
                                                    <span class="apply">학습자료 <br /> 알림 서비스</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                <?}?>
                                </ul>
                            </div>
                            <!--공무원 리스트:E-->
                            <!--독학사 리스트:S-->
                            <div class="cate-div cate-list-div3 cate-list-div" id="dok_list">
                                <ul class="cate-ul selected">
                                <?$favlist3 = $sdfav -> getjoinfav("회원가입 전용 독학사");
                                    for($i = 0 ; $i<count($favlist3); $i++){if($i<10){$j_num='0'.($i+1);}else{$j_num=($i+1);}?>
                                    <li class="col-xs-12">
                                        <label for="dok_list<?=$j_num?>">
                                            <input type="radio" name="b1"  id="dok_list<?=$j_num?>"  value="<?=$favlist3[$i]['name']?>" />
                                            <span class="label-dot"></span><?=$favlist3[$i]['name']?>
                                        </label>
                                        <div class="profit">
                                            <ul>
                                                <li>
                                                    <div class="image_box1"></div>
                                                    <span class="apply">5% <br /> 수강료 할인</span>
                                                </li>
                                                <li>
                                                    <div class="image_box3"></div>
                                                    <span class="apply">학습자료 <br /> 알림 서비스</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                <?}?>
                                </ul>
                            </div>
                            <!--독학사 리스트:E-->
                            <!--취업 리스트:S-->
                            <div class="cate-div cate-list-div5 cate-list-div" id="com_list">
                                <ul class="cate-ul selected">
                                <?$favlist4 = $sdfav -> getjoinfav("회원가입 전용 취업");
                                    for($i = 0 ; $i<count($favlist4); $i++){if($i<10){$j_num='0'.($i+1);}else{$j_num=($i+1);}?>
                                    <li class="col-xs-12">
                                        <label for="com_list<?=$j_num?>">
                                            <input type="radio" name="b1"  id="com_list<?=$j_num?>"  value="<?=$favlist4[$i]['name']?>" />
                                            <span class="label-dot"></span><?=$favlist4[$i]['name']?>
                                        </label>
                                        <div class="profit">
                                            <ul>
                                                <li>
                                                    <div class="image_box1"></div>
                                                    <span class="apply">5% <br /> 수강료 할인</span>
                                                </li>
                                                <li>
                                                    <div class="image_box3"></div>
                                                    <span class="apply">학습자료 <br /> 알림 서비스</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                <?}?>
                                </ul>
                            </div>
                            <!--취업 리스트:E-->
                            <!--입시 리스트:S-->
                            <div class="cate-div cate-list-div4 cate-list-div" id="uni_list">
                                <ul class="cate-ul selected">
                                <?$favlist5 = $sdfav -> getjoinfav("회원가입 전용 학력");
                                    for($i = 0 ; $i<count($favlist5); $i++){if($i<10){$j_num='0'.($i+1);}else{$j_num=($i+1);}?>
                                    <li class="col-xs-12">
                                        <label for="uni_list<?=$j_num?>">
                                            <input type="radio" name="b1"  id="uni_list<?=$j_num?>"  value="<?=$favlist5[$i]['name']?>" />
                                            <span class="label-dot"></span><?=$favlist5[$i]['name']?>
                                        </label>
                                        <div class="profit">
                                            <ul>
                                                <li>
                                                    <div class="image_box1"></div>
                                                    <span class="apply">5% <br /> 수강료 할인</span>
                                                </li>
                                                <li>
                                                    <div class="image_box3"></div>
                                                    <span class="apply">학습자료 <br /> 알림 서비스</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                <?}?>
                                </ul>
                            </div>
                            <!--입시 리스트:E-->

                            <!--AI모의고사 리스트:S-->
                            <div class="cate-div cate-list-div6 cate-list-div" id="AI_list">
                                <ul class="cate-ul selected">
                                <?$favlist5 = $sdfav -> getjoinfav("회원가입 전용 AI모의고사");
                                    for($i = 0 ; $i<count($favlist5); $i++){if($i<10){$j_num='0'.($i+1);}else{$j_num=($i+1);}?>
                                    <li class="col-xs-12">
                                        <label for="AI_list<?=$j_num?>">
                                            <input type="radio" name="b1"  id="AI_list<?=$j_num?>"  value="<?=$favlist5[$i]['name']?>" />
                                            <span class="label-dot"></span><?=$favlist5[$i]['name']?>
                                        </label>
                                        <div class="profit">
                                            <ul>
                                                <li>
                                                    <div class="image_box1"></div>
                                                    <span class="apply">5% <br /> 수강료 할인</span>
                                                </li>
                                                <li>
                                                    <div class="image_box3"></div>
                                                    <span class="apply">학습자료 <br /> 알림 서비스</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                <?}?>
                                </ul>
                            </div>
                            <!---AI모의고사 리스트:E-->

                            <!--온라인 모의고사:S-->
                            <div class="cate-div cate-list-div7 cate-list-div" id="mock_list">
                                <ul class="cate-ul selected">
                                <?$favlist5 = $sdfav -> getjoinfav("회원가입 전용 온라인모의고사");
                                    for($i = 0 ; $i<count($favlist5); $i++){if($i<10){$j_num='0'.($i+1);}else{$j_num=($i+1);}?>
                                    <li class="col-xs-12">
                                        <label for="mock_list<?=$j_num?>">
                                            <input type="radio" name="b1"  id="mock_list<?=$j_num?>"  value="<?=$favlist5[$i]['name']?>" />
                                            <span class="label-dot"></span><?=$favlist5[$i]['name']?>
                                        </label>
                                        <div class="profit">
                                            <ul>
                                                <li>
                                                    <div class="image_box1"></div>
                                                    <span class="apply">5% <br /> 수강료 할인</span>
                                                </li>
                                                <li>
                                                    <div class="image_box3"></div>
                                                    <span class="apply">학습자료 <br /> 알림 서비스</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                <?}?>
                                </ul>
                            </div>
                            <!---온라인 모의고사:E-->

                            <!-- <div class="inter_enter_wrap"><a href="javascript:void(0)" class="btn red_btn inter_enter" >확인</a></div> -->
                            <!--관심과정 리스트 :E-->
                        </div>
                        <!--관심과정 레이어 :E-->
                    </div>

                    <div class="table-wrap pd">
                        <button type="button" class="btn btn-success right-btn" onclick="onJoinSubmit();">가입하기</button>
                        <!-- onclick="$('#view_memberJoinStep3').show();" -->
                    </div>
                </div>
            </form>
        </div>
        <!--회원가입 폼 :E-->

        <!--회원가입 완료! :S-->
        <div id="view_memberJoinFinish">
            <div class="new_join_wrap join_suc_wrap">
                <div class="mj-content">
                    <div class="join_logo"></div>
                    <div class=" member_txt">
                        <h3><span id='newbi_name'><!--이름--></span> 회원님<br> 회원가입을 환영합니다.</h3>
                        <p>
                            이제 <strong><span id='newbi_id'><!--아이디--></span></strong>로 <br>
                            모든 서비스를 이용하실 수 있습니다.
                        </p>
                    </div>

                    <div class="mj-title icon4"><span>신규 회원 특별 혜택</span></div>
                    <div class="join_benefit">
                        <img src="/mobile/join/join_benefit.png"/>
                        <?if( strpos($_SERVER['HTTP_REFERER'], 'omr_mock') > -1){?>
                            <a href="<?=$_SERVER['HTTP_REFERER']?>" class="btn-success btn-main " id="fromr" >모의고사 메인으로 바로가기</a>
                        <?}else if( strpos($_SERVER['HTTP_REFERER'], 'audio') > -1){?>
                            <a href="<?=$_SERVER['HTTP_REFERER']?>" class="btn-success btn-main " id="fromr" >오디오북 메인으로 바로가기</a>
                        <?}else{?>
                            <a href="/mobile/mobile_popkon.php" class="btn-success btn-main" id="notfromr" >메인 페이지 바로가기</a>
                        <?}?>
                    </div>
                </div>
            </div>
        </div>
        <!--회원가입 완료! :E-->

        



<?
	include_once ("_footer.php");
?>
