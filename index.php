<?php
		$pageBold = 'popkon';
		include_once ("_header.php");
	?>
	
	<!-- 안드로이드,ios 상단 동영상 탭 미노출로 인한  default 도서로 설정됨 S: 김근후 22.7.26-->
	<? if ($clientip == '119.192.180.119' || $clientip == '119.192.180.118' || $clientip == '119.192.180.60' || $member["mb_id"] == "zppyzggy11" || $member["mb_id"] == "hoya012"){ ?>
		<?	if (strpos($_SERVER['HTTP_USER_AGENT'], 'jios') == true || strpos($_SERVER['HTTP_USER_AGENT'], 'jandroid') == true){
			if($member['mb_id'] != "") {
				echo("<script>location.replace('/mobile/mobile_book.php');</script>"); 
			}
		}
	    ?>
    <?}?>
	<!-- 안드로이드,ios 상단 동영상 탭 미노출로 인한  default 도서로 설정됨 E:  김근후 22.7.26-->
	<!-- ios 상단 동영상 탭 미노출로 인한  default 도서로 설정됨 -->

        <!--	-->
	<?
		if (strpos($_SERVER['HTTP_USER_AGENT'], 'jios') == true && $intoApp = "app"){
			//ios 모바일 앱 디폴트 화면
			// /mobile/_header.php 에 있는 스크립트로 디폴트를 도서메인으로 이미 보내고 있으니 여긴 주석처리함 여기서 또 보내면 자동로그인이 안됨 suhyl 2023/01/09
			//echo("<script>location.replace('/mobile/mobile_book.php');</script>"); // 주석풀지마세요 suhyl 2023/01/09
		}
        /*	원본
            if (strpos($_SERVER['HTTP_USER_AGENT'], 'jios') == true){
            //ios 모바일 앱 디폴트 화면
            echo("<script>location.replace('/mobile/mobile_book.php');</script>"); // 주석풀지마세요 suhyl 2023/01/09
            }
        */
	?>
<?
?>
<div class="main-view lecture-wrap" data-view=1>
	<div class="main_wrap main-wrap">
		<!--이벤트 배너-->		
		<div class="main_banner_wrap main">
			<div class="slider-nav"></div>
			<ul class="event_banner">
				<?if($main_event_list['wr_id']!=""){?>					
				<li>
					<a href="<?=$mobile_route?>/board/detail_view.php?wr_id=<?=$main_event_list['wr_id']?>&froms=event&bo_table=event">
						<?if($main_event_list['wr_link1']!=""){?>
						<img src="<?=$main_event_list['wr_link1']?>" width="100%">
						<?}else{?>
						<img src="<?=$main_event_list['wr_link2']?>" width="100%">
						<?}?>
					</a>
				</li>
				<?}?>
				<?if($main_event_comment_list['wr_id']!=""){?>					
				<li>
					<a href="<?=$mobile_route?>/board/detail_view.php?wr_id=<?=$main_event_comment_list['wr_id']?>&froms=event&bo_table=event">
						<?if($main_event_comment_list['wr_link1']!=""){?>
						<img src="<?=$main_event_comment_list['wr_link1']?>" width="100%">
						<?}else{?>
						<img src="<?=$main_event_comment_list['wr_link2']?>" width="100%">
						<?}?>
					</a>
				</li>
				<?}?>
				<!-- <li>
					<a href="<?=$mobile_route?>/board/pass_review.php?bo_table=dcc_after_apply">
					<img src="/mobile/images/review_event.png" width="100%">
					</a>
				</li> -->
				<!--<li>
					<a href="<?php /*=$mobile_route*/?>/board/event.php?p=new_join">
					<img src="/mobile/images/join_event.png?v=1" width="100%">
					</a>
				</li>-->
				
				<li>
					<a href="<?=$mobile_route?>/board/pass_review.php?bo_table=dcc_after_apply">
					<img src="/mobile/images/main/2023/bnr/top_bn2.png" width="100%">
					</a>
				</li>
				<li>
					<a href="<?=$mobile_route?>/board/event.php?p=new_join">
					<img src="/mobile/images/main/2023/bnr/top_bn3.png" width="100%">
					</a>
				</li>
			</ul>
		</div>
		<!--이벤트 배너-->
		
		<!-- 학습자료 무료지원 -->
		<!--<div class="mid_banner mid_banner_study">
			<a href="/mobile/board/study_room.php?p=freeclass">
				<img src="/mobile/images/bn1.png" width="100%">
			</a>
		</div>-->		
		<!-- //학습자료 무료지원 -->

		<!-- 인기 과정 -->
		<div class="popularityCateArea mainContentArea">
			<h2 class="wrap_title col-navy pdl_2per">인기 과정</h2>
			<div class="popular-slides-area">
				<div class="popular-slides-inner">
					<div class="popular-slides">
						<span class="popular-slides-item">
							<a href="<?=$mobile_category_url?>001092">
								<img src="/mobile/images/main/2023/bnr_popular/bestclass_bn1.png" width="100%">
							</a>
						</span>
						<span class="popular-slides-item">
							<a href="<?=$mobile_category_url?>001110">
								<img src="/mobile/images/main/2023/bnr_popular/bestclass_bn2.png" width="100%">
							</a>
						</span>
						<span class="popular-slides-item">
							<a href="<?=$mobile_category_url?>001132">
								<img src="/mobile/images/main/2023/bnr_popular/bestclass_bn3.png" width="100%">
							</a>
						</span>
					</div>
				</div>
			</div>
			
			<? if (strpos($_SERVER['HTTP_USER_AGENT'], 'jios') == true){ ?>
			<ul class="populartyList pull-over">
				<!--
				<li class="w_50 fll">
					<a href="javascript:openBrowserApp_inspection('/mobile/tpl_contents/category.php?cat_id=001092&agent=jios&aoutologin=<?=$autologin_chk?>&mb_id=<?=$aouto_id?>');">공인노무사</a>
				</li>
				<li class="w_50 fll">
					<a href="javascript:openBrowserApp_inspection('/mobile/tpl_contents/category.php?cat_id=001108&agent=jios&aoutologin=<?=$autologin_chk?>&mb_id=<?=$aouto_id?>')">감정평가사</a>
				</li>
				<li class="w_50 fll">
					<a href="javascript:openBrowserApp_inspection('/mobile/tpl_contents/category.php?cat_id=001063&agent=jios&aoutologin=<?=$autologin_chk?>&mb_id=<?=$aouto_id?>')">전기(산업)기사</a>
				</li>
				<li class="w_50 fll">
					<a href="javascript:openBrowserApp_inspection('/mobile/tpl_contents/category.php?cat_id=001058&agent=jios&aoutologin=<?=$autologin_chk?>&mb_id=<?=$aouto_id?>')">손해평가사</a>
				</li>
				<li class="w_50 fll">
					<a href="javascript:openBrowserApp_inspection('/mobile/tpl_contents/category.php?cat_id=001110&agent=jios&aoutologin=<?=$autologin_chk?>&mb_id=<?=$aouto_id?>')">변리사</a>
				</li>
				<li class="w_50 fll">
					<a href="javascript:openBrowserApp_inspection('/mobile/tpl_contents/category.php?cat_id=001067&agent=jios&aoutologin=<?=$autologin_chk?>&mb_id=<?=$aouto_id?>')">손해사정사</a>
				</li>
				<li class="w_50 fll">
					<a href="javascript:openBrowserApp_inspection('/mobile/tpl_contents/category.php?cat_id=001007&agent=jios&aoutologin=<?=$autologin_chk?>&mb_id=<?=$aouto_id?>')">청소년상담사</a>
				</li>
				<li class="w_50 fll">
					<a href="javascript:openBrowserApp_inspection('/mobile/tpl_contents/category.php?cat_id=001013&agent=jios&aoutologin=<?=$autologin_chk?>&mb_id=<?=$aouto_id?>')">임상심리사</a>
				</li>
				<li class="w_50 fll">
					<a href="javascript:openBrowserApp_inspection('/mobile/tpl_contents/category.php?cat_id=001001&agent=jios&aoutologin=<?=$autologin_chk?>&mb_id=<?=$aouto_id?>')">직업상담사</a>
				</li>
				<li class="w_50 fll">
					<a href="javascript:openBrowserApp_inspection('/mobile/tpl_contents/category.php?cat_id=001056&agent=jios&aoutologin=<?=$autologin_chk?>&mb_id=<?=$aouto_id?>')">스포츠지도사</a>
				</li>
				-->
				<li class="w_50 fll">
					<a href="/mobile/tpl_contents/category.php?cat_id=001092">공인노무사</a>
				</li>
				<li class="w_50 fll">
					<a href="/mobile/tpl_contents/category.php?cat_id=001108">감정평가사</a>
				</li>
				<li class="w_50 fll">
					<a href="/mobile/tpl_contents/category.php?cat_id=001132">법무사</a>
				</li>
				<li class="w_50 fll">
					<a href="/mobile/tpl_contents/category.php?cat_id=001063">전기(산업)기사</a>
				</li>
				<li class="w_50 fll">
					<a href="/mobile/tpl_contents/category.php?cat_id=001058">손해평가사</a>
				</li>
				<li class="w_50 fll">
					<a href="/mobile/tpl_contents/category.php?cat_id=001110">변리사</a>
				</li>
				<li class="w_50 fll">
					<a href="/mobile/tpl_contents/category.php?cat_id=001067">손해사정사</a>
				</li>
				<li class="w_50 fll">
					<a href="/mobile/tpl_contents/category.php?cat_id=001007">청소년상담사</a>
				</li>
				<li class="w_50 fll">
					<a href="/mobile/tpl_contents/category.php?cat_id=001013">임상심리사</a>
				</li>
				<li class="w_50 fll">
					<a href="/mobile/tpl_contents/category.php?cat_id=001112">화학분석기사</a>
				</li>
			</ul>	
				
			<?}else{?>
			<ul class="populartyList">
				<li>
					<a href="/mobile/tpl_contents/category.php?cat_id=001092">공인노무사</a>
				</li>
				<li>
					<a href="/mobile/tpl_contents/category.php?cat_id=001108">감정평가사</a>
				</li>
				<li>
					<a href="/mobile/tpl_contents/category.php?cat_id=001132">법무사</a>
				</li>
				<li>
					<a href="/mobile/tpl_contents/category.php?cat_id=001063">전기(산업)기사</a>
				</li>
				<li>
					<a href="/mobile/tpl_contents/category.php?cat_id=001058">손해평가사</a>
				</li>
				<li>
					<a href="/mobile/tpl_contents/category.php?cat_id=001110">변리사</a>
				</li>
				<li>
					<a href="/mobile/tpl_contents/category.php?cat_id=001067">손해사정사</a>
				</li>
				<li>
					<a href="/mobile/tpl_contents/category.php?cat_id=001007">청소년상담사</a>
				</li>
				<li>
					<a href="/mobile/tpl_contents/category.php?cat_id=001013">임상심리사</a>
				</li>
				<li>
					<a href="/mobile/tpl_contents/category.php?cat_id=001112">화학분석기사</a>
				</li>
			</ul>
			<?}?>
		</div>
		<!-- //인기과정 -->
		
		<!-- 카테고리 -->
		<div class="allCateArea mainContentArea">
			<div class="dis-table">
				<div class="tl wrap_title"><h2 class="wrap_title fll">자격증</h2></div>	
				<!--
				<div class="cateallBtnArea tr w_30">
					<a href="#popkon_list_pop" class="show_name">과정 전체보기 ></a>
				</div>
				-->
			</div>
			<ul class="categoryList">
				<li>
					<a href="#lec_list_pop" class="show_name popkon_cate_type">국가자격/기술자격</a>
				</li>
				<li>
					<a href="#lec_list_pop" class="show_name popkon_cate_type">소방/전기/위험물</a>
				</li>
				<li>
					<a href="#lec_list_pop" class="show_name popkon_cate_type">무역/물류/유통</a>
				</li>
				<li>
					<a href="#lec_list_pop" class="show_name popkon_cate_type">심리/상담</a>
				</li>
				<li>
					<a href="#lec_list_pop" class="show_name popkon_cate_type">보험/회계</a>
				</li>
				<li>
					<a href="#lec_list_pop" class="show_name popkon_cate_type">산림/조경</a>
				</li>
				<li>
					<a href="#lec_list_pop" class="show_name popkon_cate_type">경제/경영</a>
				</li>
				<li>
					<a href="#lec_list_pop" class="show_name popkon_cate_type">스포츠/화장품</a>
				</li>
				<li>
					<a href="#lec_list_pop" class="show_name popkon_cate_type">면허증/기타</a>
				</li>
				<li>
					<a href="#lec_list_pop" class="show_name popkon_cate_type"></a>
				</li>
			</ul>
			
			<h2 class="wrap_title">공무원</h2>
			<ul class="categoryList">
				<li>
					<a href="#gov_list_pop" class="show_name popkon_cate_type">9급 공무원</a>
				</li>
				<li>
					<a href="#gov_list_pop" class="show_name popkon_cate_type">9급 기술직</a>
				</li>
				<!-- <li class="w_50 fll">
					<a href="#gov_list_pop" class="show_name popkon_cate_type">5 · 7급 공무원</a>
				</li> -->
				<!-- <li class="w_50 fll">
					<a href="#gov_list_pop" class="show_name popkon_cate_type">경찰</a>
				</li> -->
				<!-- <li>
					<a href="#gov_list_pop" class="show_name popkon_cate_type">기타</a>
				</li> -->
				<!-- <li>
					<a href="#gov_list_pop" class="show_name popkon_cate_type"></a>
				</li> -->
			</ul>
			
			<h2 class="wrap_title">학습/기업체/취업</h2>
			<ul class="categoryList">
				<li>
					<a href="#etc_list_pop" class="show_name popkon_cate_type">언어/외국어</a>
				</li>
				<li>
					<a href="#etc_list_pop" class="show_name popkon_cate_type">검정고시/독학사</a>
				</li>
				<li>
					<a href="#etc_list_pop" class="show_name popkon_cate_type">기업체</a>
				</li>
				<li>
					<a href="#etc_list_pop" class="show_name popkon_cate_type">ROTC/부사관</a>
				</li>
			</ul>
			<h2 class="wrap_title">안쌤 영재교육연구소</h2>
			<ul class="categoryList">
				<? if (strpos($_SERVER['HTTP_USER_AGENT'], 'jios') == true){ ?>
				<!--	
				<li class="w_50 fll">
					<a href="javascript:openBrowserApp_inspection('/mobile/tpl_contents/category.php?cat_id=011001&agent=jios&aoutologin=<?=$autologin_chk?>&mb_id=<?=$aouto_id?>');">영재교육원</a>
				</li>
				<li class="w_50 fll">
					<a href="javascript:openBrowserApp_inspection('/mobile/tpl_contents/category.php?cat_id=011001&agent=jios&aoutologin=<?=$autologin_chk?>&mb_id=<?=$aouto_id?>');">과고/영재고</a>
				</li>	
				-->
					<li>
						<a href="/mobile/tpl_contents/category.php?cat_id=011001" class="">영재교육원</a>
					</li>
					<li>
						<a href="/mobile/tpl_contents/category.php?cat_id=011001" class="">과고/영재고</a>
					</li>
				<?}else{?>
					<li>
						<a href="/mobile/tpl_contents/category.php?cat_id=011001" class="">영재교육원</a>
					</li>
					<li>
						<a href="/mobile/tpl_contents/category.php?cat_id=011001" class="">과고/영재고</a>
					</li>
				<?}?>
			</ul>
		</div>
		<!-- //카테고리 -->
		
		<!-- 합격수기 아이패드 -->
		<!-- <div class="mid_banner mid_banner_study">
			<a href="/mobile/board/pass_review.php?bo_table=dcc_after_apply">
				<img src="/mobile/images/bn2.png" width="100%">
			</a>
		</div> -->
		<!-- //합격수기 아이패드 -->
		
		<!-- 기업, 콘텐츠 이용자, 누적강의수, 총 스트리밍 시간 -->
		<div class="company_report">
			<div class="title"><img src="/mobile/images/main/2023/number_title.png" alt="리포트 타이틀" /></div>
			<ul class="report_box">
				<li>
					<strong class="counter count-number with1" data-target="27"></strong>
					<sup class="thin_txt">년</sup>
					<span class="content_txt">Edu Tech 기업</span>
				</li>
				<li>
					<strong class="counter count-number with2" data-target="185"></strong>
					<sup class="thin_txt">만 이상</sup>
					<span class="content_txt">콘텐츠 이용자 <br />(2022년 기준)</span>
				</li>
				<li>
					<strong class="counter count-number with3" data-target="18"></strong>
					<sup class="thin_txt">만 이상</sup>
					<span class="content_txt">누적 강의 수</span>
				</li>
				<li>
					<strong class="counter count-number with4" data-target="1944"></strong>
					<sup class="thin_txt">만 시간</sup>
					<span class="content_txt">총 스트리밍 시간<br /> (2022년 기준)</span>
				</li>
			</ul>
		</div>
		<!-- // 기업, 콘텐츠 이용자, 누적강의수, 총 스트리밍 시간 -->


		<!-- 분야별 일타강사 & 전임교수 -->
		<div class="firstProfess mainContentArea">
			<h2 class="wrap_title">분야별 일타강사 & 전임교수</h2>
			<div class="firstProfess-slides-area">
				<div class="firstProfess-slides-inner">
					<div class="firstProfess-slides">
						<span class="firstProfess-slides-item">
							<a href="<?=$mobile_category_url?>001092">
								<img src="/mobile/images/main/2023/t_1.png" width="100%">
							</a>
							<div class="txt_wrap txt_slide_wrap">
								<ul class="txt_wrapper original">
									<li><i></i><span>내용에 군더더기가 없고 필요한 내용만 말씀</span><span>-이*현-</span></li>
									<li><i></i><span>중요한 부분과 아닌 부분을 확실히 정리</span><span>-박*희-</span></li>
									<li><i></i><span>경험을 토대로 적절한 예시! 완벽히 이해</span><span>-정*미-</span></li>
									<li><i></i><span>매우매우 효율적인 강의를 해주신다고 생각</span><span>-이*성-</span></li>
									<li><i></i><span>꼼꼼하면서 요점 가득한 설명으로 재미있게 학습</span><span>-한*연-</span></li>
									<li><i></i><span>강약조절을 잘 해주셔서 효과적으로 학습</span><span>-이*진-</span></li>
									<li><i></i><span>흐름을 그대로 따라가시면 무리 없이 고득점</span><span>-이*혁-</span></li>
									<li><i></i><span>수업을 들으며 노동법에 대한 기초 개념을 확립</span><span>-최*호-</span></li>
									<li><i></i><span>교수님들 강의만 따라가시다보면 그냥 합격</span><span>-조*민-</span></li>
									<li><i></i><span>경험을 예시로 들어서 노동법과 판례들을 설명</span><span>-정*아-</span></li>

									<!-- clone S: -->
									<li><i></i><span>내용에 군더더기가 없고 필요한 내용만 말씀</span><span>-이*현-</span></li>
									<li><i></i><span>중요한 부분과 아닌 부분을 확실히 정리</span><span>-박*희-</span></li>
									<li><i></i><span>경험을 토대로 적절한 예시! 완벽히 이해</span><span>-정*미-</span></li>
									<li><i></i><span>매우매우 효율적인 강의를 해주신다고 생각</span><span>-이*성-</span></li>
									<li><i></i><span>꼼꼼하면서 요점 가득한 설명으로 재미있게 학습</span><span>-한*연-</span></li>
									<li><i></i><span>강약조절을 잘 해주셔서 효과적으로 학습</span><span>-이*진-</span></li>
									<li><i></i><span>흐름을 그대로 따라가시면 무리 없이 고득점</span><span>-이*혁-</span></li>
									<li><i></i><span>수업을 들으며 노동법에 대한 기초 개념을 확립</span><span>-최*호-</span></li>
									<li><i></i><span>교수님들 강의만 따라가시다보면 그냥 합격</span><span>-조*민-</span></li>
									<li><i></i><span>경험을 예시로 들어서 노동법과 판례들을 설명</span><span>-정*아-</span></li>
									<!-- clone E: -->
								</ul>
								
							</div>
						</span>
						<span class="firstProfess-slides-item">
							<a href="<?=$mobile_category_url?>001069">
								<img src="/mobile/images/main/2023/t_2.png" width="100%">
							</a>
							<div class="txt_wrap">
								<ul class="txt_wrapper original">
									<li><i></i><span>차분하고 핵심을 짚어주는 요약 설명</span><span>-강*학-</span></li>
									<li><i></i><span>인과 관계를 설명해주시며 요점을 잘 짚어줌</span><span>-정*영-</span></li>
									<li><i></i><span>자세한 문제 해설과 이해하기 쉬운 반복교육</span><span>-박*호-</span></li>
									<li><i></i><span>중요 핵심만 들을 수 있는 알토란 같은 강의 </span><span>-안*도-</span></li>
									<li><i></i><span>차분하지만 지루하지 않는 강의 스타일</span><span>-강*현-</span></li>
									<li><i></i><span>전체적인 맥락과 동시에 중요한 핵심 설명</span><span>-김*현-</span></li>
									<li><i></i><span>막연한 범위 중에서 중요한 부분을 짚어주는 강의</span><span>-천*범-</span></li>
									<li><i></i><span>군더더기 없이 깔끔한 설명</span><span>-곽*선-</span></li>
									<li><i></i><span>쉽고 빠른 공부 방식을 알려줘서 어렵지 않은 공부 가능</span><span>-옥*연-</span></li>
									<li><i></i><span>섬세하고 차분하게 놓치는 부분 없이 설명</span><span>-한*현-</span></li>

									<!-- clone S: -->
								
									<li><i></i><span>차분하고 핵심을 짚어주는 요약 설명</span><span>-강*학-</span></li>
									<li><i></i><span>인과 관계를 설명해주시며 요점을 잘 짚어줌</span><span>-정*영-</span></li>
									<li><i></i><span>자세한 문제 해설과 이해하기 쉬운 반복교육</span><span>-박*호-</span></li>
									<li><i></i><span>중요 핵심만 들을 수 있는 알토란 같은 강의 </span><span>-안*도-</span></li>
									<li><i></i><span>차분하지만 지루하지 않는 강의 스타일</span><span>-강*현-</span></li>
									<li><i></i><span>전체적인 맥락과 동시에 중요한 핵심 설명</span><span>-김*현-</span></li>
									<li><i></i><span>막연한 범위 중에서 중요한 부분을 짚어주는 강의</span><span>-천*범-</span></li>
									<li><i></i><span>군더더기 없이 깔끔한 설명</span><span>-곽*선-</span></li>
									<li><i></i><span>쉽고 빠른 공부 방식을 알려줘서 어렵지 않은 공부 가능</span><span>-옥*연-</span></li>
									<li><i></i><span>섬세하고 차분하게 놓치는 부분 없이 설명</span><span>-한*현-</span></li>
								
									<!-- clone E: -->

								</ul>
								
       				 		</div>
						</span>
						<span class="firstProfess-slides-item">
							<a href="<?=$mobile_category_url?>001007">
								<img src="/mobile/images/main/2023/t_3.png" width="100%">
							</a>
							<div class="txt_wrap">
								<ul class="txt_wrapper original">
									<li><i></i><span>정성과 열정이 느껴지는 강의로 합격</span><span>-하*한-</span></li>
									<li><i></i><span>자주 출제되는 유형만 콕콕 짚어주심</span><span>-김*희-</span></li>
									<li><i></i><span>설명을 잘 해주시고 어려운 개념은 따로 더 보충</span><span>-김*선-</span></li>
									<li><i></i><span>전체적인 흐름을 파악할 수 있게 설명</span><span>-고*원-</span></li>
									<li><i></i><span>강의를 들으니 막연했던 내용 정리되기 시작</span><span>-윤*미-</span></li>
									<li><i></i><span>개념마다 출제 유형까지 동시 학습</span><span>-최*정-</span></li>
									<li><i></i><span>어려운 용어까지 모두 꼼꼼히 정리</span><span>-김*형-</span></li>
									<li><i></i><span>탄탄한 설명으로 오프라인보다 더 큰 도움</span><span>-정*호-</span></li>
									<li><i></i><span>강의만 들어도 저절로 이해</span><span>-이*민-</span></li>
									<li><i></i><span>자세한 설명 덕분에 무난하게 합격</span><span>-최*섭-</span></li>

									<!-- clone S: -->
								
									<li><i></i><span>정성과 열정이 느껴지는 강의로 합격</span><span>-하*한-</span></li>
									<li><i></i><span>자주 출제되는 유형만 콕콕 짚어주심</span><span>-김*희-</span></li>
									<li><i></i><span>설명을 잘 해주시고 어려운 개념은 따로 더 보충</span><span>-김*선-</span></li>
									<li><i></i><span>전체적인 흐름을 파악할 수 있게 설명</span><span>-고*원-</span></li>
									<li><i></i><span>강의를 들으니 막연했던 내용 정리되기 시작</span><span>-윤*미-</span></li>
									<li><i></i><span>개념마다 출제 유형까지 동시 학습</span><span>-최*정-</span></li>
									<li><i></i><span>어려운 용어까지 모두 꼼꼼히 정리</span><span>-김*형-</span></li>
									<li><i></i><span>탄탄한 설명으로 오프라인보다 더 큰 도움</span><span>-정*호-</span></li>
									<li><i></i><span>강의만 들어도 저절로 이해</span><span>-이*민-</span></li>
									<li><i></i><span>자세한 설명 덕분에 무난하게 합격</span><span>-최*섭-</span></li>
							
									<!-- clone E: -->
								</ul>
								
							</div>
						</span>

						<span class="firstProfess-slides-item">
							<a href="<?=$mobile_category_url?>001013">
								<img src="/mobile/images/main/2023/t_4.png" width="100%">
							</a>
							<div class="txt_wrap">
								<ul class="txt_wrapper original">
									<li><i></i><span>꼼꼼한 설명 덕분에 이해하기 수월</span><span>-오*향-</span></li>
									<li><i></i><span>핵심의 정곡을 알려주셔서 개념 체계 확립</span><span>-김*중-</span></li>
									<li><i></i><span>명쾌하게 강의, 명강 중의 명강</span><span>-장*오-</span></li>
									<li><i></i><span>핵심을 짚어주는 강의로 합격</span><span>-안*온-</span></li>
									<li><i></i><span>강의를 반복해서 들은 것이 합격에 결정적 도움</span><span>-윤*미-</span></li>
									<li><i></i><span>다양한 사례를 통한 설명으로 쉽게 이해</span><span>-최*경-</span></li>
									<li><i></i><span>알짜배기만 딱 모아서 정리</span><span>-류*영-</span></li>
									<li><i></i><span>이론 관련 문제도 꼭 다뤄서 핵심 파악에 도움</span><span>-강*정-</span></li>
									<li><i></i><span>상담실무를 예시로 쉽게 접근하고 이해</span><span>-이*숙-</span></li>
									<li><i></i><span>쉽지만 기본에 충실한 개념 설명</span><span>-백*화-</span></li>

									<!-- clone S: -->
								
									<li><i></i><span>꼼꼼한 설명 덕분에 이해하기 수월</span><span>-오*향-</span></li>
									<li><i></i><span>핵심의 정곡을 알려주셔서 개념 체계 확립</span><span>-김*중-</span></li>
									<li><i></i><span>명쾌하게 강의, 명강 중의 명강</span><span>-장*오-</span></li>
									<li><i></i><span>핵심을 짚어주는 강의로 합격</span><span>-안*온-</span></li>
									<li><i></i><span>강의를 반복해서 들은 것이 합격에 결정적 도움</span><span>-윤*미-</span></li>
									<li><i></i><span>다양한 사례를 통한 설명으로 쉽게 이해</span><span>-최*경-</span></li>
									<li><i></i><span>알짜배기만 딱 모아서 정리</span><span>-류*영-</span></li>
									<li><i></i><span>이론 관련 문제도 꼭 다뤄서 핵심 파악에 도움</span><span>-강*정-</span></li>
									<li><i></i><span>상담실무를 예시로 쉽게 접근하고 이해</span><span>-이*숙-</span></li>
									<li><i></i><span>쉽지만 기본에 충실한 개념 설명</span><span>-백*화-</span></li>
								
									<!-- clone E: -->
								</ul>
								
							</div>
						</span>
						<span class="firstProfess-slides-item">
							<a href="<?=$mobile_category_url?>001004">
								<img src="/mobile/images/main/2023/t_5.png" width="100%">
							</a>
							<div class="txt_wrap">
								<ul class="txt_wrapper original">
									<li><i></i><span>시험에 필요한 이론만 쏙쏙 뽑아 수업</span><span>-백*열-</span></li>
									<li><i></i><span>핵심키워드와 시험에 나오는것 위주로 수업</span><span>-안*혁-</span></li>
									<li><i></i><span>이론을 익히기 좋은 족집게 강의로 수업</span><span>-신*영-</span></li>
									<li><i></i><span>중요한 부분만 집중공략하여 합격에 도움</span><span>-허*희-</span></li>
									<li><i></i><span>출제되는 내용 위주 강의로 합격에 도움</span><span>-김*찬-</span></li>
									<li><i></i><span>어려운 계산과목에서 쉽게 접근 가능하게 도움</span><span>-김*진-</span></li>
									<li><i></i><span>시간이 절대적으로 부족한 과목에 최적화된 수업</span><span>-김*현-</span></li>
									<li><i></i><span>요약과 중간꿀팁을 통한 강의로 도움</span><span>-김*진-</span></li>
									<li><i></i><span>공부범위를 최소화시켜주면서 합격에 도움</span><span>-최*호-</span></li>
									<li><i></i><span>체계적이고 꼼꼼한 강의로 합격에 도움</span><span>-노*아-</span></li>

									<!-- clone S: -->
								
									<li><i></i><span>시험에 필요한 이론만 쏙쏙 뽑아 수업</span><span>-백*열-</span></li>
									<li><i></i><span>핵심키워드와 시험에 나오는것 위주로 수업</span><span>-안*혁-</span></li>
									<li><i></i><span>이론을 익히기 좋은 족집게 강의로 수업</span><span>-신*영-</span></li>
									<li><i></i><span>중요한 부분만 집중공략하여 합격에 도움</span><span>-허*희-</span></li>
									<li><i></i><span>출제되는 내용 위주 강의로 합격에 도움</span><span>-김*찬-</span></li>
									<li><i></i><span>어려운 계산과목에서 쉽게 접근 가능하게 도움</span><span>-김*진-</span></li>
									<li><i></i><span>시간이 절대적으로 부족한 과목에 최적화된 수업</span><span>-김*현-</span></li>
									<li><i></i><span>요약과 중간꿀팁을 통한 강의로 도움</span><span>-김*진-</span></li>
									<li><i></i><span>공부범위를 최소화시켜주면서 합격에 도움</span><span>-최*호-</span></li>
									<li><i></i><span>체계적이고 꼼꼼한 강의로 합격에 도움</span><span>-노*아-</span></li>
								
									<!-- clone E: -->
								</ul>
								
							</div>
						</span>
						<span class="firstProfess-slides-item">
							<a href="<?=$mobile_category_url?>001002">
								<img src="/mobile/images/main/2023/t_6.png" width="100%">
							</a>
							<div class="txt_wrap">
								<ul class="txt_wrapper original">
									<li><i></i><span>강의가 재미있었네요. 기억에도 잘 남고요. </span><span>-전*준-</span></li>
									<li><i></i><span>체계적으로 가르쳐서 전적으로 따라갔습니다</span><span>-정*철-</span></li>
									<li><i></i><span>밥상을 다 차려주시기때문에 떠먹으면 됩니다. </span><span>-김*식-</span></li>
									<li><i></i><span>이렇게 잘 가르쳐줄 수 있는 사람은 없다</span><span>-권*석-</span></li>
									<li><i></i><span>함정 문제도 쉽게 파악할 수 있어 많은 도움</span><span>-조*진-</span></li>
									<li><i></i><span>목소리와 추임새도 기억나며 다시한번 되새김질</span><span>-이*웅-</span></li>
									<li><i></i><span>공부 방향을 잡아주셔서 수월하게 시험준비</span><span>-이*익-</span></li>
									<li><i></i><span>"법 과목은 무한반복, 오래앉아 있는 사람이 합격"</span><span>-박*규-</span></li>
									<li><i></i><span>외우기 쉽고 간편하게 알려준게 제일 도움됨</span><span>-윤*호-</span></li>
									<li><i></i><span> 이해가 안될거라고 맞춤식 부가적인 설명 탁월</span><span>-노*석-</span></li>

									<!-- clone S: -->
									<li><i></i><span>강의가 재미있었네요. 기억에도 잘 남고요. </span><span>-전*준-</span></li>
									<li><i></i><span>체계적으로 가르쳐서 전적으로 따라갔습니다</span><span>-정*철-</span></li>
									<li><i></i><span>밥상을 다 차려주시기때문에 떠먹으면 됩니다. </span><span>-김*식-</span></li>
									<li><i></i><span>이렇게 잘 가르쳐줄 수 있는 사람은 없다</span><span>-권*석-</span></li>
									<li><i></i><span>함정 문제도 쉽게 파악할 수 있어 많은 도움</span><span>-조*진-</span></li>
									<li><i></i><span>목소리와 추임새도 기억나며 다시한번 되새김질</span><span>-이*웅-</span></li>
									<li><i></i><span>공부 방향을 잡아주셔서 수월하게 시험준비</span><span>-이*익-</span></li>
									<li><i></i><span>"법 과목은 무한반복, 오래앉아 있는 사람이 합격"</span><span>-박*규-</span></li>
									<li><i></i><span>외우기 쉽고 간편하게 알려준게 제일 도움됨</span><span>-윤*호-</span></li>
									<li><i></i><span> 이해가 안될거라고 맞춤식 부가적인 설명 탁월</span><span>-노*석-</span></li>
								
									<!-- clone E: -->
								</ul>
								
							</div>
						</span>
						<span class="firstProfess-slides-item">
							<a href="<?=$mobile_category_url?>001092">
								<img src="/mobile/images/main/2023/t_7.png" width="100%">
							</a>
							<div class="txt_wrap">
								<ul class="txt_wrapper original">
									<li><i></i><span>핵심과 비핵심을 잘 구분시켜 주셔서 효율성 높음</span><span>-이*성-</span></li>
									<li><i></i><span>주의 깊게 보라고 하신 내용이 그대로 나옴</span><span>-이*현-</span></li>
									<li><i></i><span>강약조절을 잘해주셔서 잘 따라갈 수 있음</span><span>-박*희-</span></li>
									<li><i></i><span>어디에 비중을 두고 공부하면 좋을지까지 컨설팅</span><span>-조*민-</span></li>
									<li><i></i><span>출제 빈도가 높은 내용을 반복적으로 알려주심</span><span>-한*연-</span></li>
									<li><i></i><span>조문의 핵심 액기스만 모아서 컴팩트하게 정리</span><span>-이*진-</span></li>
									<li><i></i><span>확실히 체크를 해주시기 때문에 공부량도 줄어듬</span><span>-최*호-</span></li>
									<li><i></i><span>핵심 부분과 선생님이 꼭 외우라고 하신 것만 외움</span><span>-민*민-</span></li>
									<li><i></i><span>기출 문제 내용을 중심으로 선택과 집중 전략</span><span>-정*일-</span></li>
									<li><i></i><span>직장병행하며 공부했는데 넉넉한 점수로 합격</span><span>-이*혁-</span></li>

									<!-- clone S: -->
								
									<li><i></i><span>핵심과 비핵심을 잘 구분시켜 주셔서 효율성 높음</span><span>-이*성-</span></li>
									<li><i></i><span>주의 깊게 보라고 하신 내용이 그대로 나옴</span><span>-이*현-</span></li>
									<li><i></i><span>강약조절을 잘해주셔서 잘 따라갈 수 있음</span><span>-박*희-</span></li>
									<li><i></i><span>어디에 비중을 두고 공부하면 좋을지까지 컨설팅</span><span>-조*민-</span></li>
									<li><i></i><span>출제 빈도가 높은 내용을 반복적으로 알려주심</span><span>-한*연-</span></li>
									<li><i></i><span>조문의 핵심 액기스만 모아서 컴팩트하게 정리</span><span>-이*진-</span></li>
									<li><i></i><span>확실히 체크를 해주시기 때문에 공부량도 줄어듬</span><span>-최*호-</span></li>
									<li><i></i><span>핵심 부분과 선생님이 꼭 외우라고 하신 것만 외움</span><span>-민*민-</span></li>
									<li><i></i><span>기출 문제 내용을 중심으로 선택과 집중 전략</span><span>-정*일-</span></li>
									<li><i></i><span>직장병행하며 공부했는데 넉넉한 점수로 합격</span><span>-이*혁-</span></li>
								
									<!-- clone E: -->
								</ul>
								
							</div>
						</span>
						<span class="firstProfess-slides-item">
							<a href="<?=$mobile_category_url?>001069">
								<img src="/mobile/images/main/2023/t_8.png" width="100%">
							</a>
							<div class="txt_wrap">
								<ul class="txt_wrapper original">
									<li><i></i><span>중요개념을 확실히 짚어주며 암기법 제시</span><span>-전*규-</span></li>
									<li><i></i><span>중요 키워드를 뽑아 수강생들의 부담을 줄여줌</span><span>-황*원-</span></li>
									<li><i></i><span>진입장벽을 낮춰주는 암기식과 설명</span><span>-박*원-</span></li>
									<li><i></i><span>톡톡 튀는 강의로 공부에 지친 저에게 활력소가 됨</span><span>-고*정-</span></li>
									<li><i></i><span>시험이 끝난지 한달이 지나도 기억나는 암기식</span><span>-최*환-</span></li>
									<li><i></i><span>스토리가 있는 암기식을 따라하니 합격</span><span>-강*학-</span></li>
									<li><i></i><span>친절하고 천천히 설명해주어 부담이 되지 않음</span><span>-이*수-</span></li>
									<li><i></i><span>바로 떠올릴 수 있는 암기식</span><span>-이*복-</span></li>
									<li><i></i><span>생소한 단어, 법령 등 이해하는데 크게 도움이 됨</span><span>-윤*진-</span></li>
									<li><i></i><span>방향이 잡히지 않을때 학습에 대한 가이드라인 제공</span><span>-박*승-</span></li>

									<!-- clone S: -->
							
									<li><i></i><span>중요개념을 확실히 짚어주며 암기법 제시</span><span>-전*규-</span></li>
									<li><i></i><span>중요 키워드를 뽑아 수강생들의 부담을 줄여줌</span><span>-황*원-</span></li>
									<li><i></i><span>진입장벽을 낮춰주는 암기식과 설명</span><span>-박*원-</span></li>
									<li><i></i><span>톡톡 튀는 강의로 공부에 지친 저에게 활력소가 됨</span><span>-고*정-</span></li>
									<li><i></i><span>시험이 끝난지 한달이 지나도 기억나는 암기식</span><span>-최*환-</span></li>
									<li><i></i><span>스토리가 있는 암기식을 따라하니 합격</span><span>-강*학-</span></li>
									<li><i></i><span>친절하고 천천히 설명해주어 부담이 되지 않음</span><span>-이*수-</span></li>
									<li><i></i><span>바로 떠올릴 수 있는 암기식</span><span>-이*복-</span></li>
									<li><i></i><span>생소한 단어, 법령 등 이해하는데 크게 도움이 됨</span><span>-윤*진-</span></li>
									<li><i></i><span>방향이 잡히지 않을때 학습에 대한 가이드라인 제공</span><span>-박*승-</span></li>
								
									<!-- clone E: -->
								</ul>
								
							</div>
						</span>
						<span class="firstProfess-slides-item">
							<a href="<?=$mobile_category_url?>001056">
								<img src="/mobile/images/main/2023/t_9.png" width="100%">
							</a>
							<div class="txt_wrap">
								<ul class="txt_wrapper original">
									<li><i></i><span>중요하다고 말씀하시는 부분 체크만 하면 됨</span><span>-김*지-</span></li>
									<li><i></i><span>방선생님이 말씀하시는 키워드 위주로 외움</span><span>-윤*근-</span></li>
									<li><i></i><span>암기하기 쉽게 설명해주셔서 문제풀 때 수월</span><span>-심*보-</span></li>
									<li><i></i><span>강의 내용과 목소리가 너무 좋아 집중이 잘 됨</span><span>-김*호-</span></li>
									<li><i></i><span>주옥같은 문장들로 머리속에 쏙쏙 각인시켜줌</span><span>-신*영-</span></li>
									<li><i></i><span>비전공자도 한번에 합격할 정도로 재미있는 강의</span><span>-최*석-</span></li>
									<li><i></i><span>외모도 짱 훌륭하신데 정말 귀에 쏙쏙 들어옴</span><span>-손*빈-</span></li>
									<li><i></i><span>장난스러운 개그+암기법으로 자연스럽게 외워짐</span><span>-신*철-</span></li>
									<li><i></i><span>뻔한 얘기만하는 수업이 아니라 몰입도 최상</span><span>-서*찬-</span></li>
									<li><i></i><span>효율적으로 꼭 맞춰야 하는 문제 위주로 강의</span><span>-최*웅-</span></li>

								
									<li><i></i><span>중요하다고 말씀하시는 부분 체크만 하면 됨</span><span>-김*지-</span></li>
									<li><i></i><span>방선생님이 말씀하시는 키워드 위주로 외움</span><span>-윤*근-</span></li>
									<li><i></i><span>암기하기 쉽게 설명해주셔서 문제풀 때 수월</span><span>-심*보-</span></li>
									<li><i></i><span>강의 내용과 목소리가 너무 좋아 집중이 잘 됨</span><span>-김*호-</span></li>
									<li><i></i><span>주옥같은 문장들로 머리속에 쏙쏙 각인시켜줌</span><span>-신*영-</span></li>
									<li><i></i><span>비전공자도 한번에 합격할 정도로 재미있는 강의</span><span>-최*석-</span></li>
									<li><i></i><span>외모도 짱 훌륭하신데 정말 귀에 쏙쏙 들어옴</span><span>-손*빈-</span></li>
									<li><i></i><span>장난스러운 개그+암기법으로 자연스럽게 외워짐</span><span>-신*철-</span></li>
									<li><i></i><span>뻔한 얘기만하는 수업이 아니라 몰입도 최상</span><span>-서*찬-</span></li>
									<li><i></i><span>효율적으로 꼭 맞춰야 하는 문제 위주로 강의</span><span>-최*웅-</span></li>
								
								</ul>
							</div>
						</span>
						<span class="firstProfess-slides-item">
							<a href="<?=$mobile_category_url?>001077">
								<img src="/mobile/images/main/2023/t_10.png" width="100%">
							</a>
							<div class="txt_wrap">
								<ul class="txt_wrapper original">
									<li><i></i><span>단순 암기가 아닌 화학기초부터 이해시켜주는 강의</span><span>-정*영-</span></li>
									<li><i></i><span>효율 높게 학습을 도와주는 명품 강의</span><span>-고*천-</span></li>
									<li><i></i><span>교수님이 말씀해주시는 플랜대로 했더니 합격</span><span>-김*명-</span></li>
									<li><i></i><span>쉽고 간결하게 설명해주셔서 정말 감사해요</span><span>-김*현-</span></li>
									<li><i></i><span>쉬운 암기법으로 꼭 필요한 부분을 마스터</span><span>-신*원-</span></li>
									<li><i></i><span>어려운 내용을 이해하기 쉽게 잘 풀어줌</span><span>-정*호-</span></li>
									<li><i></i><span>강의에서 알려주는 요점정리 꼭 보세요</span><span>-장*욱-</span></li>
									<li><i></i><span>딱딱하지 않고 재미있고 쉽게 설명해주는 강의</span><span>-류*한-</span></li>
									<li><i></i><span>교수님의 실전 TIP 덕분에 최종 합격 했습니다</span><span>-박*식-</span></li>
									<li><i></i><span>비전공자도 한번에 합격할 수 있는 명품강의</span><span>-정*철-</span></li>

									
									<li><i></i><span>단순 암기가 아닌 화학기초부터 이해시켜주는 강의</span><span>-정*영-</span></li>
									<li><i></i><span>효율 높게 학습을 도와주는 명품 강의</span><span>-고*천-</span></li>
									<li><i></i><span>교수님이 말씀해주시는 플랜대로 했더니 합격</span><span>-김*명-</span></li>
									<li><i></i><span>쉽고 간결하게 설명해주셔서 정말 감사해요</span><span>-김*현-</span></li>
									<li><i></i><span>쉬운 암기법으로 꼭 필요한 부분을 마스터</span><span>-신*원-</span></li>
									<li><i></i><span>어려운 내용을 이해하기 쉽게 잘 풀어줌</span><span>-정*호-</span></li>
									<li><i></i><span>강의에서 알려주는 요점정리 꼭 보세요</span><span>-장*욱-</span></li>
									<li><i></i><span>딱딱하지 않고 재미있고 쉽게 설명해주는 강의</span><span>-류*한-</span></li>
									<li><i></i><span>교수님의 실전 TIP 덕분에 최종 합격 했습니다</span><span>-박*식-</span></li>
									<li><i></i><span>비전공자도 한번에 합격할 수 있는 명품강의</span><span>-정*철-</span></li>
								
								</ul>
								
							</div>
						</span>
						<span class="firstProfess-slides-item">
							<a href="<?=$mobile_category_url?>001007">
								<img src="/mobile/images/main/2023/t_11.png" width="100%">
							</a>
							<div class="txt_wrap">
								<ul class="txt_wrapper original">
									<li><i></i><span>핵심정리가 너무 큰 도움</span><span>-이*영-</span></li>
									<li><i></i><span>말씀을 믿고 따르다보니 합격</span><span>-이*숙-</span></li>
									<li><i></i><span>각 챕터의 핵심을 정리해주신 것이 가장 큰 도움</span><span>-예*라-</span></li>
									<li><i></i><span>상담에 대한 내용을 일목요연하게 정리</span><span>-양*혜-</span></li>
									<li><i></i><span>핵심정리로 개념 한줄로 정리 가능</span><span>-오*빈-</span></li>
									<li><i></i><span>듣고 또 듣고 싶은 강의력</span><span>-이*송-</span></li>
									<li><i></i><span>짧은 공부 시간에도 합격, 탁월한 선택!</span><span>-최*경-</span></li>
									<li><i></i><span>예시, 사례까지 꼼꼼하게 핵심을 알려주심</span><span>-강*정-</span></li>
									<li><i></i><span>요점만 쏙쏙 쉽게 알려주신 덕분에 자신감 상승</span><span>-이*섭-</span></li>
									<li><i></i><span>강의대로  따라만 가면 무조건 합격</span><span>-윤*성-</span></li>

									
									<li><i></i><span>핵심정리가 너무 큰 도움</span><span>-이*영-</span></li>
									<li><i></i><span>말씀을 믿고 따르다보니 합격</span><span>-이*숙-</span></li>
									<li><i></i><span>각 챕터의 핵심을 정리해주신 것이 가장 큰 도움</span><span>-예*라-</span></li>
									<li><i></i><span>상담에 대한 내용을 일목요연하게 정리</span><span>-양*혜-</span></li>
									<li><i></i><span>핵심정리로 개념 한줄로 정리 가능</span><span>-오*빈-</span></li>
									<li><i></i><span>듣고 또 듣고 싶은 강의력</span><span>-이*송-</span></li>
									<li><i></i><span>짧은 공부 시간에도 합격, 탁월한 선택!</span><span>-최*경-</span></li>
									<li><i></i><span>예시, 사례까지 꼼꼼하게 핵심을 알려주심</span><span>-강*정-</span></li>
									<li><i></i><span>요점만 쏙쏙 쉽게 알려주신 덕분에 자신감 상승</span><span>-이*섭-</span></li>
									<li><i></i><span>강의대로  따라만 가면 무조건 합격</span><span>-윤*성-</span></li>
								
								</ul>
							</div>
						</span>
						<span class="firstProfess-slides-item">
							<a href="<?=$mobile_category_url?>001001">
								<img src="/mobile/images/main/2023/t_12.png" width="100%">
							</a>
							<div class="txt_wrap">
								<ul class="txt_wrapper original">
									<li><i></i><span>자세한 설명과 암기법 덕분에 동차 합격</span><span>-이*명-</span></li>
									<li><i></i><span>노하우가 가득한 강의로 어렵지 않게 학습</span><span>-김*정-</span></li>
									<li><i></i><span>쏙쏙 들어오는 암기팁과 공부방법 덕분에 합격</span><span>-이*심-</span></li>
									<li><i></i><span>눈과 귀로 복습하고 키워드를 익히며 학습</span><span>-전*모-</span></li>
									<li><i></i><span>이해하기 쉽게 잘 설명해주셔서 어려움없이 공부</span><span>-배*은-</span></li>
									<li><i></i><span>경력을 통한 차별화된 강의로 많은 도움</span><span>-이*희-</span></li>
									<li><i></i><span>족집게 강의 덕분에 고득점으로 동차합격</span><span>-배*경-</span></li>
									<li><i></i><span>복잡하고 어려운 내용을 쉽게 가르쳐주는 공부법</span><span>-김*지-</span></li>
									<li><i></i><span>시간 단축하며 적은 시간으로도 동차 합격</span><span>-김*숙-</span></li>
									<li><i></i><span>귀에 쏙쏙 들어오는 설명과 지루하지 않은 톤</span><span>-김*희-</span></li>
									
									<li><i></i><span>자세한 설명과 암기법 덕분에 동차 합격</span><span>-이*명-</span></li>
									<li><i></i><span>노하우가 가득한 강의로 어렵지 않게 학습</span><span>-김*정-</span></li>
									<li><i></i><span>쏙쏙 들어오는 암기팁과 공부방법 덕분에 합격</span><span>-이*심-</span></li>
									<li><i></i><span>눈과 귀로 복습하고 키워드를 익히며 학습</span><span>-전*모-</span></li>
									<li><i></i><span>이해하기 쉽게 잘 설명해주셔서 어려움없이 공부</span><span>-배*은-</span></li>
									<li><i></i><span>경력을 통한 차별화된 강의로 많은 도움</span><span>-이*희-</span></li>
									<li><i></i><span>족집게 강의 덕분에 고득점으로 동차합격</span><span>-배*경-</span></li>
									<li><i></i><span>복잡하고 어려운 내용을 쉽게 가르쳐주는 공부법</span><span>-김*지-</span></li>
									<li><i></i><span>시간 단축하며 적은 시간으로도 동차 합격</span><span>-김*숙-</span></li>
									<li><i></i><span>귀에 쏙쏙 들어오는 설명과 지루하지 않은 톤</span><span>-김*희-</span></li>
								</ul>
							</div>
						</span>
						<span class="firstProfess-slides-item">
							<a href="<?=$mobile_category_url?>001038">
								<img src="/mobile/images/main/2023/t_13.png" width="100%">
							</a>
							<div class="txt_wrap">
								<ul class="txt_wrapper original">
									<li><i></i><span>시험에서 실수 안하도록 꿀팁 많이 주셔서 좋음</span><span>-김*호-</span></li>
									<li><i></i><span>버전이 다른 것도 꼼꼼히 체크해주셔서 걱정없음</span><span>-이*주-</span></li>
									<li><i></i><span>비전공자인데 7일만의 실기 강의듣고 합격</span><span>-배*림-</span></li>
									<li><i></i><span>매우 쉽게 설명해주셔서 한번만 들어도 이해됨</span><span>-임*지-</span></li>
									<li><i></i><span>실제 시험 문제가 강사님께서 다 강의하신 내용</span><span>-봉*슬-</span></li>
									<li><i></i><span>반복학습과 핵심포인트를 잘 체크해주셔서 합격</span><span>-강*온-</span></li>
									<li><i></i><span>자격증 취득하는데 최적화된 강의라 부담없음</span><span>-강*순-</span></li>
									<li><i></i><span>선생님 강의 따라가다보니 나도 모르게 실력 향상</span><span>-신*순-</span></li>
									<li><i></i><span>필요하고 중요한 내용들만 강조해서 잘 알려주심</span><span>-정*구-</span></li>
									<li><i></i><span>SPSS 처음다뤄보는데 강의 덕을 크게 봤음</span><span>-문*준-</span></li>
									
									<li><i></i><span>시험에서 실수 안하도록 꿀팁 많이 주셔서 좋음</span><span>-김*호-</span></li>
									<li><i></i><span>버전이 다른 것도 꼼꼼히 체크해주셔서 걱정없음</span><span>-이*주-</span></li>
									<li><i></i><span>비전공자인데 7일만의 실기 강의듣고 합격</span><span>-배*림-</span></li>
									<li><i></i><span>매우 쉽게 설명해주셔서 한번만 들어도 이해됨</span><span>-임*지-</span></li>
									<li><i></i><span>실제 시험 문제가 강사님께서 다 강의하신 내용</span><span>-봉*슬-</span></li>
									<li><i></i><span>반복학습과 핵심포인트를 잘 체크해주셔서 합격</span><span>-강*온-</span></li>
									<li><i></i><span>자격증 취득하는데 최적화된 강의라 부담없음</span><span>-강*순-</span></li>
									<li><i></i><span>선생님 강의 따라가다보니 나도 모르게 실력 향상</span><span>-신*순-</span></li>
									<li><i></i><span>필요하고 중요한 내용들만 강조해서 잘 알려주심</span><span>-정*구-</span></li>
									<li><i></i><span>SPSS 처음다뤄보는데 강의 덕을 크게 봤음</span><span>-문*준-</span></li>
								
								</ul>
							</div>
						</span>
						<span class="firstProfess-slides-item">
							<a href="<?=$mobile_category_url?>001013">
								<img src="/mobile/images/main/2023/t_14.png" width="100%">
							</a>
							<div class="txt_wrap">
								<ul class="txt_wrapper original">
									<li><i></i><span>지루하지 않고 이해가 쏙쏙되는 강의로 합격</span><span>-오*향-</span></li>
									<li><i></i><span>귀에 쏙쏙 들어오게 설명</span><span>-황*현-</span></li>
									<li><i></i><span>언제 들어도 머리 속에 쏙쏙 암기</span><span>-신*순-</span></li>
									<li><i></i><span>재치있고, 핵심만 콕콕 찔러주시는 강의</span><span>-성*아-</span></li>
									<li><i></i><span>기초부터 상세하게 설명</span><span>-김*중-</span></li>
									<li><i></i><span>푸근하면서 정곡을 찌르며 진행</span><span>-장*오-</span></li>
									<li><i></i><span>쉽고 이해하기 편한 강의</span><span>-나*훈-</span></li>
									<li><i></i><span>핵심을 잘 짚어, 단기 합격 가능</span><span>-박*상-</span></li>
									<li><i></i><span>알기 쉽게 설명해주셔서 과외 받는 기분</span><span>-김*은-</span></li>
									<li><i></i><span>비전공자도 꼼꼼하고 탄탄한 설명으로 합격</span><span>-김*미-</span></li>
									
									<li><i></i><span>지루하지 않고 이해가 쏙쏙되는 강의로 합격</span><span>-오*향-</span></li>
									<li><i></i><span>귀에 쏙쏙 들어오게 설명</span><span>-황*현-</span></li>
									<li><i></i><span>언제 들어도 머리 속에 쏙쏙 암기</span><span>-신*순-</span></li>
									<li><i></i><span>재치있고, 핵심만 콕콕 찔러주시는 강의</span><span>-성*아-</span></li>
									<li><i></i><span>기초부터 상세하게 설명</span><span>-김*중-</span></li>
									<li><i></i><span>푸근하면서 정곡을 찌르며 진행</span><span>-장*오-</span></li>
									<li><i></i><span>쉽고 이해하기 편한 강의</span><span>-나*훈-</span></li>
									<li><i></i><span>핵심을 잘 짚어, 단기 합격 가능</span><span>-박*상-</span></li>
									<li><i></i><span>알기 쉽게 설명해주셔서 과외 받는 기분</span><span>-김*은-</span></li>
									<li><i></i><span>비전공자도 꼼꼼하고 탄탄한 설명으로 합격</span><span>-김*미-</span></li>
								
								</ul>
							</div>
						</span>
						<span class="firstProfess-slides-item">
							<a href="<?=$mobile_category_url?>001092">
								<img src="/mobile/images/main/2023/t_15.png" width="100%">
							</a>
							<div class="txt_wrap">
								<ul class="txt_wrapper original">
									<li><i></i><span>EBS가 선정한 검증된 강의 더 말이 필요없음</span><span>-조*민-</span></li>
									<li><i></i><span>포기하기 쉬운 계산문제도 쉽게 알려주심</span><span>-이*현-</span></li>
									<li><i></i><span>단기 합격이라는 목표 달성을 위한 최고의 선택</span><span>-민*민-</span></li>
									<li><i></i><span>강의에서 강조하시는 중요개념만 체크하면 합격</span><span>-강*영-</span></li>
									<li><i></i><span>50대 초반 직장인도 회사 병행하며 강의 듣고 합격</span><span>-정*일-</span></li>
									<li><i></i><span>시험직전 요점정리와 개념확립에 큰 도움 받음</span><span>-최*호-</span></li>
									<li><i></i><span>배경지식이 전무한 비전공자인데 꽤나 만족스러움</span><span>-이*진-</span></li>
									<li><i></i><span>방대한 내용이지만 속도감있게 진행하셔서 만족</span><span>-한*연-</span></li>
									<li><i></i><span>간단하고 쉽게 설명해주셔서 시험에서 잘 활용함</span><span>-이*성-</span></li>
									<li><i></i><span>가장 어려웠던 과목이라 걱정했는데 결국에는 합격</span><span>-신*걸-</span></li>

									
									<li><i></i><span>EBS가 선정한 검증된 강의 더 말이 필요없음</span><span>-조*민-</span></li>
									<li><i></i><span>포기하기 쉬운 계산문제도 쉽게 알려주심</span><span>-이*현-</span></li>
									<li><i></i><span>단기 합격이라는 목표 달성을 위한 최고의 선택</span><span>-민*민-</span></li>
									<li><i></i><span>강의에서 강조하시는 중요개념만 체크하면 합격</span><span>-강*영-</span></li>
									<li><i></i><span>50대 초반 직장인도 회사 병행하며 강의 듣고 합격</span><span>-정*일-</span></li>
									<li><i></i><span>시험직전 요점정리와 개념확립에 큰 도움 받음</span><span>-최*호-</span></li>
									<li><i></i><span>배경지식이 전무한 비전공자인데 꽤나 만족스러움</span><span>-이*진-</span></li>
									<li><i></i><span>방대한 내용이지만 속도감있게 진행하셔서 만족</span><span>-한*연-</span></li>
									<li><i></i><span>간단하고 쉽게 설명해주셔서 시험에서 잘 활용함</span><span>-이*성-</span></li>
									<li><i></i><span>가장 어려웠던 과목이라 걱정했는데 결국에는 합격</span><span>-신*걸-</span></li>
								
								</ul>
							</div>
						</span>
						<span class="firstProfess-slides-item">
							<a href="<?=$mobile_category_url?>001041">
								<img src="/mobile/images/main/2023/t_16.png" width="100%">
							</a>
							<div class="txt_wrap">
								<ul class="txt_wrapper original">
									<li><i></i><span>상세하고 깊이있게 확실한 요점정리</span><span>-윤*규-</span></li>
									<li><i></i><span>비전공자가 들어도 바로 이해</span><span>-박*현-</span></li>
									<li><i></i><span>중요부분 강조, 수월하게 공부</span><span>-한*현-</span></li>
									<li><i></i><span>굳이 외우지 않아도 자연스럽게 암기</span><span>-박*원-</span></li>
									<li><i></i><span>개념을 탄탄하게 잡아줘서 효율적</span><span>-이*추-</span></li>
									<li><i></i><span>책에 없는 내용도 보충, 쉬운 암기법 알려주심</span><span>-조*은-</span></li>
									<li><i></i><span>교수님께서 중요하다고 하신 부분만 공부</span><span>-이*린-</span></li>
									<li><i></i><span>정확하고 또렷한 목소리와 설명</span><span>-정*진-</span></li>
									<li><i></i><span>효율적인 강의 방식으로 30일만에 합격</span><span>-한*은-</span></li>
									<li><i></i><span>교수님이 주신 과목별 팁으로 효율적으로 공부</span><span>-김*덕-</span></li>
								
									<li><i></i><span>상세하고 깊이있게 확실한 요점정리</span><span>-윤*규-</span></li>
									<li><i></i><span>비전공자가 들어도 바로 이해</span><span>-박*현-</span></li>
									<li><i></i><span>중요부분 강조, 수월하게 공부</span><span>-한*현-</span></li>
									<li><i></i><span>굳이 외우지 않아도 자연스럽게 암기</span><span>-박*원-</span></li>
									<li><i></i><span>개념을 탄탄하게 잡아줘서 효율적</span><span>-이*추-</span></li>
									<li><i></i><span>책에 없는 내용도 보충, 쉬운 암기법 알려주심</span><span>-조*은-</span></li>
									<li><i></i><span>교수님께서 중요하다고 하신 부분만 공부</span><span>-이*린-</span></li>
									<li><i></i><span>정확하고 또렷한 목소리와 설명</span><span>-정*진-</span></li>
									<li><i></i><span>효율적인 강의 방식으로 30일만에 합격</span><span>-한*은-</span></li>
									<li><i></i><span>교수님이 주신 과목별 팁으로 효율적으로 공부</span><span>-김*덕-</span></li>
								
								</ul>
							</div>
						</span>
						<span class="firstProfess-slides-item">
							<a href="<?=$mobile_category_url?>001004">
								<img src="/mobile/images/main/2023/t_17.png" width="100%">
							</a>
							<div class="txt_wrap">
								<ul class="txt_wrapper original">
									<li><i></i><span>핵심요약 정리를 통한 학습으로 합격</span><span>-이*-</span></li>
									<li><i></i><span>기본원리와 개념을 이해하기 쉽게 수업</span><span>-김*하-</span></li>
									<li><i></i><span>합격최적화 강의로 간단히 정리하여 단기 합격</span><span>-백*열-</span></li>
									<li><i></i><span>선택과 집중을 통한 단기 합격</span><span>-문*아-</span></li>
									<li><i></i><span>어려운과목인데 이해하기 쉽게 설명</span><span>-권*환-</span></li>
									<li><i></i><span>정리를 잘해주셔서 자신감있게 합격</span><span>-이*오-</span></li>
									<li><i></i><span>꼼꼼한 판서 덕분에 어려움없이 합격</span><span>-김*찬-</span></li>
									<li><i></i><span>빈출되는 문제들을 짚어주며 합격에 도움</span><span>-정*민-</span></li>
									<li><i></i><span>체게적인 정리를 통해 암기에 도움</span><span>-황*재-</span></li>
									<li><i></i><span>이해하기 쉽고 흥미를 가질수 있도록 수업</span><span>-최*준-</span></li>

									
									<li><i></i><span>핵심요약 정리를 통한 학습으로 합격</span><span>-이*-</span></li>
									<li><i></i><span>기본원리와 개념을 이해하기 쉽게 수업</span><span>-김*하-</span></li>
									<li><i></i><span>합격최적화 강의로 간단히 정리하여 단기 합격</span><span>-백*열-</span></li>
									<li><i></i><span>선택과 집중을 통한 단기 합격</span><span>-문*아-</span></li>
									<li><i></i><span>어려운과목인데 이해하기 쉽게 설명</span><span>-권*환-</span></li>
									<li><i></i><span>정리를 잘해주셔서 자신감있게 합격</span><span>-이*오-</span></li>
									<li><i></i><span>꼼꼼한 판서 덕분에 어려움없이 합격</span><span>-김*찬-</span></li>
									<li><i></i><span>빈출되는 문제들을 짚어주며 합격에 도움</span><span>-정*민-</span></li>
									<li><i></i><span>체게적인 정리를 통해 암기에 도움</span><span>-황*재-</span></li>
									<li><i></i><span>이해하기 쉽고 흥미를 가질수 있도록 수업</span><span>-최*준-</span></li>
								
								</ul>
							</div>
						</span>
						<span class="firstProfess-slides-item">
							<a href="<?=$mobile_category_url?>001001">
								<img src="/mobile/images/main/2023/t_18.png" width="100%">
							</a>
							<div class="txt_wrap">
								<ul class="txt_wrapper original">
									<li><i></i><span>쉽고 재미있는 강의로 스트레스 없이 진행</span><span>-황*미-</span></li>
									<li><i></i><span>시험공부처럼 느껴지지 않는 재밌는 수업</span><span>-김*정-</span></li>
									<li><i></i><span>유머러스한 강의로 지루하지 않게 학습</span><span>-채*현-</span></li>
									<li><i></i><span>방대한양이었지만 좋은 강의로 인해 합격</span><span>-홍*순-</span></li>
									<li><i></i><span>강의스타일과 개그코드 덕분에 합격</span><span>-신*아-</span></li>
									<li><i></i><span>공부 방법과 암기 방법을 가르쳐주셔서 합격</span><span>-이*환-</span></li>
									<li><i></i><span>자세하고 이해하기 쉬운강의 덕분에 합격</span><span>-권*연-</span></li>
									<li><i></i><span>핵심키워드만 콕콕 찝어주는 알찬강의로 단기합격</span><span>-이*지-</span></li>
									<li><i></i><span>촘촘하고 세심한 강의로 단기간 동차합격</span><span>-엄*은-</span></li>
									<li><i></i><span>전략적 공부 접근방법을 통한 수업</span><span>-오*지-</span></li>
									
									<li><i></i><span>쉽고 재미있는 강의로 스트레스 없이 진행</span><span>-황*미-</span></li>
									<li><i></i><span>시험공부처럼 느껴지지 않는 재밌는 수업</span><span>-김*정-</span></li>
									<li><i></i><span>유머러스한 강의로 지루하지 않게 학습</span><span>-채*현-</span></li>
									<li><i></i><span>방대한양이었지만 좋은 강의로 인해 합격</span><span>-홍*순-</span></li>
									<li><i></i><span>강의스타일과 개그코드 덕분에 합격</span><span>-신*아-</span></li>
									<li><i></i><span>공부 방법과 암기 방법을 가르쳐주셔서 합격</span><span>-이*환-</span></li>
									<li><i></i><span>자세하고 이해하기 쉬운강의 덕분에 합격</span><span>-권*연-</span></li>
									<li><i></i><span>핵심키워드만 콕콕 찝어주는 알찬강의로 단기합격</span><span>-이*지-</span></li>
									<li><i></i><span>촘촘하고 세심한 강의로 단기간 동차합격</span><span>-엄*은-</span></li>
									<li><i></i><span>전략적 공부 접근방법을 통한 수업</span><span>-오*지-</span></li>
							
								</ul>
								
							</div>
						</span>
					</div>
				</div>
			</div>
		</div>


		<!-- 분야별 일타강사 & 전임교수 // -->
	
		<!-- 합격수기 슬라이드 -->
		
		<div class="passReviewArea mainContentArea">
			<h2 class="wrap_title under_point">합격 선배님들의 리얼 합격 인터뷰</h2>
			 <div class="swiper-container" id="passreview_slide">
		     	<ul class="passreviewSlide swiper-wrapper">
					<li class="swiper-slide review_1">
						<a href="https://www.youtube.com/watch?v=MbSyX-xRnD0">							
							<img src="/mobile/images/main/2023/interview_1.png" alt="합격생 이미지1" />
						</a>
					</li>
					<li class="swiper-slide">
						<a href="https://www.youtube.com/watch?v=k0fU2lLl420">							
							<img src="/mobile/images/main/2023/interview_2.png" alt="합격생 이미지2" />
						</a>
					</li>
					<li class="swiper-slide">
						<a href="https://www.youtube.com/watch?v=iksageXFepo">							
							<img src="/mobile/images/main/2023/interview_3.png" alt="합격생 이미지3" />
						</a>
					</li>
					<li class="swiper-slide">
						<a href="https://www.youtube.com/watch?v=JbTB82JTaas">							
							<img src="/mobile/images/main/2023/interview_4.png" alt="합격생 이미지4" />
						</a>
					</li>
					<li class="swiper-slide">
						<a href="https://www.youtube.com/watch?v=YXB57sr6j8I">							
							<img src="/mobile/images/main/2023/interview_5.png" alt="합격생 이미지5" />
						</a>
					</li>
					<li class="swiper-slide">
						<a href="https://www.youtube.com/watch?v=0McxM-dlgJ8">							
							<img src="/mobile/images/main/2023/interview_6.png" alt="합격생 이미지6" />
						</a>
					</li>
					<li class="swiper-slide">
						<a href="https://www.youtube.com/watch?v=GcRCWT9bQ2w">							
							<img src="/mobile/images/main/2023/interview_7.png" alt="합격생 이미지7" />
						</a>
					</li>
					<li class="swiper-slide">
						<a href="https://www.youtube.com/watch?v=rNwiK8zhVX0">							
							<img src="/mobile/images/main/2023/interview_8.png" alt="합격생 이미지8" />
						</a>
					</li>
				</ul>
			</div>
		</div>
		
		<!-- //합격수기 슬라이드 -->
		<!-- <div class="title hab">
			
		</div> -->
		<!-- 합격생 리스트 S-->
		
			<div class="slick_galexy">
				<div class="pass-list-wrap mainContentArea">
					
					<div class="pass-list">
						<div>
							<ul>
								<li>
									청소년상담사 박*상 <br />
									직업상담사 김*정 <br />
									위험물기능장 정*호 <br />
									위생사 임*솜 <br />
									사회복지사 김*후 <br />
									위험물기능장 권*돈 <br />
									보세사 홍*영 <br />
									직업상담사 기*성 <br />
									위험물기능장 장*욱 <br />
									직업상담사 이*연 <br />
									보세사 김*수 <br />
									직업상담사 김*정 <br />
									위험물기능장 류*한 <br />
									보세사 조*환 <br />
									직업상담사 박*희 <br />
									스포츠지도사 심*보 <br />
									위험물기능장 이*현 <br />
									직업상담사 박*주 <br />
									위험물기능장 임*정 <br />
									청소년상담사 최*경 <br />

									위험물기능장 박*진<br />
									경비지도사 전*준<br />
									보세사 안*태<br />
									청소년상담사 윤*미<br />
									조경기능사 박*제<br />
									직업상담사 김*은<br />
									보세사 김*희<br />
									위험물기능장 이*훈<br />
									경비지도사 조*진<br />
									위험물기능장 김*철<br />
									직업상담사 박*주<br />
									경비지도사 권*석<br />
									CS리더스관리사 황*호<br />
									산림(산업)기사 추*빈<br />
									보세사 윤*희<br />
									위생사 윤*규<br />
									직업상담사 송*정<br />
									직업상담사 이*혜<br />
									물류관리사 신*준<br />
									청소년상담사 이*숙<br />

									위생사 강*희<br />
									직업상담사 박*림<br />
									보세사 정*영<br />
									조경기능사 김*운<br />
									청소년상담사 위*운<br />
									보세사 강*학<br />
									빅데이터분석기사 신*호<br />
									직업상담사 홍*률<br />
									직업상담사 윤*<br />
									보세사 최*민<br />
									청소년상담사 장*화<br />
									청소년상담사 김*영<br />
									조경기능사 안*진<br />
									보세사 박*민<br />
									사회조사분석사 이*정<br />
									청소년상담사 이*송<br />
									영양사 김*희<br />
									지텔프 안*현<br />
									전기(산업)기사 하*성<br />
									보세사 조*빈<br />

									영양사 임*솜<br />
									산림(산업)기사 이*천<br />
									위험물기능장 오*명<br />
									직업상담사 정*인<br />
									위험물기능장 이*영<br />
									전기(산업)기사 서*명<br />
									직업상담사 이*영<br />
									지텔프 정*혁<br />
									위험물기능장 김*관<br />
									스포츠지도사 함*창<br />

									<!-- 70개 -->

									직업상담사 김*형<br />
									물류관리사 김*형<br />
									보세사 박*혁<br />
									보세사 박*수<br />
									직업상담사 공*선<br />
									물류관리사 김*찬<br />
									청소년상담사 최*경<br />
									물류관리사 손*국<br />
									위생사 이*성<br />
									물류관리사 이*석<br />
									전기(산업)기사 김*희<br />
									물류관리사 유*국<br />
									물류관리사 김*정<br />
									보세사 김*림<br />
									물류관리사 김*빈<br />
									농산물품질관리사 최*호<br />
									물류관리사 김*훈<br />
									위험물기능장 김*영<br />
									물류관리사 이*오<br />
									보세사 김*우<br />

									물류관리사 곽*헌<br />
									유통관리사 손*훈<br />
									영양사 금*경<br />
									직업상담사 배*경<br />
									공인노무사 한*연<br />
									보세사 윤*진<br />
									영양사 허*현<br />
									물류관리사 조*장<br />
									유통관리사 이*성<br />
									보세사 김*구<br />
									직업상담사 박*은<br />
									독학사 유*현<br />
									보세사 손*수<br />
									공인노무사 이*진<br />
									물류관리사 박*민<br />
									물류관리사 허*희<br />
									물류관리사 김*중<br />
									위험물기능사 김*민<br />
									전기(산업)기사 이*열<br />
									유통관리사 안*혁<br />

									사회조사분석사 강*순<br />
									물류관리사 노*아<br />
									공인노무사 이*혁<br />
									위험물산업기사 손*익<br />
									조경기사 이*룡<br />
									직업상담사 하*선<br />
									청소년상담사 예*라<br />

								</li>
								<li>
									보세사 김*현<br />
									임상심리사 안*온<br />
									직업상담사 이*명<br />
									조경기능사 한*훈<br />
									임상심리사 김*은<br />
									직업상담사 차*은<br />
									사회복지사 김*수<br />
									조경산업기사 이*동<br />
									직업상담사 최*담<br />
									위생사 박*원<br />
									청소년상담사 이*영<br />
									직업상담사 노*정<br />
									전기(산업)기사 전*재<br />
									투자자산운용사 박*열<br />
									지텔프 이*우<br />
									직업상담사 최*희<br />
									전기(산업)기사 신*민<br />
									원산지관리사 문*인<br />
									직업상담사  박*은<br />
									보세사 김*하<br />

									직업상담사 박*순<br />
									스포츠지도사 양*재<br />
									농산물품질관리사 강*영<br />
									보세사 박*호<br />
									직업상담사 최*희<br />
									보세사 오*재<br />
									청소년상담사 정*<br />
									전기(산업)기사 임*호<br />
									보세사 이*경<br />
									물류관리사 이*인<br />
									원산지관리사 문*인<br />
									전기기능사 박*일<br />
									물류관리사 정*관<br />
									직업상담사 이*우<br />
									위생사 이*영<br />
									공인노무사 심*준<br />
									사회조사분석사 정*용<br />
									원산지관리사 신*재<br />
									전기(산업)기사 최*성<br />
									보세사 오*재<br />

									소방설비(산업)기사 이*수<br />
									원산지관리사 강*현<br />
									지텔프 김*형<br />
									사회조사분석사 김*호<br />
									검정고시 김*유<br />
									조경기능사 장*성<br />
									물류관리사 이*규<br />
									물류관리사 송*진<br />
									위험물기능장 최*우<br />
									보세사 김*일<br />
									물류관리사 선*인<br />
									보세사 유*영<br />
									물류관리사 김*용<br />
									청소년상담사 김*희<br />
									임상심리사 김*미<br />
									보세사 김*수<br />
									물류관리사 임*섭<br />
									사회조사분석사 이*주<br />
									소방설비(산업)기사 최*국<br />
									물류관리사 김*구<br />

									사회복지사 신*주<br />
									물류관리사 최*호<br />
									물류관리사 김*현<br />
									직업상담사 이*희<br />
									임상심리사 신*순<br />
									물류관리사 임*평<br />
									연구실안전관리사 정*구<br />
									물류관리사 이*근<br />
									매경테스트 김*민<br />
									물류관리사 이*형<br />

									<!-- 70개 -->

									보세사 이*정<br />
									위험물기능장 홍*곤<br />
									직업상담사 최*현<br />
									스포츠지도사 윤*근<br />
									직업상담사 김*신<br />
									보세사 문*영<br />
									보세사 정*근<br />
									직업상담사 엄*은<br />
									손해사정사 서*석<br />
									사회조사분석사  강*온<br />
									물류관리사 유*현<br />
									9급 운전직 조*식<br />
									보세사 심*호<br />
									직업상담원 성*자<br />
									보세사 강*훈<br />
									기계정비산업기사 박*준<br />
									보세사 유*호<br />
									물류관리사 노*정<br />
									보세사 이*준<br />
									물류관리사 김*우<br />

									보세사 유*순<br />
									보세사  정*만<br />
									지텔프 김*수<br />
									보세사 이*복<br />
									직업상담사 이*환<br />
									CS리더스관리사 김*연<br />
									직업상담사 이*지<br />
									직업상담사 황*영<br />
									직업상담사 박*일<br />
									보세사 김*규<br />
									청원경찰 서*호<br />
									직업상담사 정*헌<br />
									물류관리사 김*현<br />
									경비지도사 이*익<br />
									직업상담사 김*희<br />
									임상심리사 김*수<br />
									경비지도사 홍*환<br />
									직업상담사 김*현<br />
									영양사 김*덕<br />
									직업상담사 김*혜<br />

									사회조사분석사  임*지<br />
									직업상담사 배*은<br />
									농산물품질관리사 원*성<br />
									직업상담사 전*모<br />
									보세사 최*영<br />
									위험물기능장 이*주<br />
									보세사 최*오<br />
								</li>
								<li>
									청소년상담사 강*정<br />
									전기(산업)기사 박*광<br />
									임상심리사 신*순<br />
									직업상담사 오*지<br />
									위생사 곽*영<br />
									위험물기능장 박*혁<br />
									임상심리사 곽*희<br />
									직업상담사 김*정<br />
									원산지관리사 곽*선<br />
									임상심리사 백*화<br />
									직업상담사 박*환<br />
									위생사 한*지<br />
									직업상담사 김*혜<br />
									물류관리사 김*근<br />
									위험물기능장 홍*록<br />
									보세사 박*환<br />
									위험물기능장 한*호<br />
									임상심리사 김*옥<br />
									손해평가사 이*수<br />
									손해평가사 임*석<br />

									직업상담사 박*정<br />
									직업상담사 김*환<br />
									경비지도사 염*길<br />
									농산물품질관리사 장*주<br />
									전기기능사 김*식<br />
									물류관리사 김*하<br />
									공인노무사 정*일<br />
									위험물기능장 김*찬<br />
									영양사 손*진<br />
									공인노무사 조*민<br />
									임상심리사 김*옥<br />
									전기기능사 전*환<br />
									공인노무사 이*현<br />
									경비지도사 박*보<br />
									감정평가사 신*지<br />
									직업상담사 김*원<br />
									공인노무사 이*성<br />
									직업상담사 김*숙<br />
									공인노무사 박*희<br />
									부사관 황*성<br />

									사회복지사 김*영<br />
									공인노무사 신*걸<br />
									사회복지사 김*현<br />
									군무원 배*수<br />
									위험물기능사 박*근<br />
									공인노무사 최*호<br />
									사회복지사 서*연<br />
									위험물기능장 김*수<br />
									보세사 최*진<br />
									위험물산업기사 최*용<br />
									농산물품질관리사 곽*문<br />
									지텔프 임*진<br />
									사회복지사 박*란<br />
									직업상담사 지*나<br />
									직업상담사 안*진<br />
									스포츠지도사 최*석<br />
									사회복지사 서*연<br />
									청소년상담사 최*경<br />
									사회복지사 이*환<br />
									위험물산업기사 김*수<br />

									스포츠지도사 문*연<br />
									수질환경(산업)기사 이*동<br />
									위험물기능장 김*수<br />
									보세사 박*영<br />
									위험물기능장 남*호<br />
									공기업통합 전*명<br />
									직업상담사 김*은<br />
									사회복지사 이*경<br />
									조경기능사 김*중<br />
									위험물기능장 마*호<br />

									<!-- 70개 -->

									보세사 황*원<br />
									청소년상담사 이*란<br />
									사회조사분석사  신*순<br />
									물류관리사 이*<br />
									경비지도사 정*철<br />
									보세사 이*현<br />
									임상심리사 한*희<br />
									보세사 장*훈<br />
									위험물기능장 김*정<br />
									사회조사분석사  임*지<br />
									직업상담사 김*태<br />
									9급 운전직 이*원<br />
									물류관리사 이*환<br />
									경비지도사 김*한<br />
									경비지도사 박*진<br />
									직업상담사 임*화<br />
									경비지도사 김*길<br />
									9급 사회복지직 진*인<br />
									보세사 조*경<br />

									물류관리사 황*연<br />
									경비지도사 김*용<br />
									보세사 최*원<br />
									물류관리사 신*원<br />
									보세사 장*현<br />
									보세사 석*철<br />
									원산지관리사 유*진<br />
									화학분석기사 김*진<br />
									투자자산운용사 김*민<br />
									직업상담사 류*<br />
									보세사 한*재<br />
									물류관리사 백*열<br />
									원산지관리사 김*혁<br />
									경비지도사 오*철<br />
									임상심리사 박*영<br />
									물류관리사 최*호<br />
									보세사 정*영<br />
									스포츠지도사 김*지<br />
									물류관리사 김*룡<br />
									원산지관리사 조*원<br />

									물류관리사 정*운<br />
									물류관리사 오*엽<br />
									청소년상담사 이*숙<br />
									직업상담사 홍*림<br />
									임상심리사 김*희<br />
									물류관리사 이*연<br />
									임상심리사 곽*경<br />
									
									
									
								</li>
							</ul>
						</div>
						<div>
							<ul>
								<li>
									청소년상담사 박*상 <br />
									직업상담사 김*정 <br />
									위험물기능장 정*호 <br />
									위생사 임*솜 <br />
									사회복지사 김*후 <br />
									위험물기능장 권*돈 <br />
									보세사 홍*영 <br />
									직업상담사 기*성 <br />
									위험물기능장 장*욱 <br />
									직업상담사 이*연 <br />
									보세사 김*수 <br />
									직업상담사 김*정 <br />
									위험물기능장 류*한 <br />
									보세사 조*환 <br />
									직업상담사 박*희 <br />
									스포츠지도사 심*보 <br />
									위험물기능장 이*현 <br />
									직업상담사 박*주 <br />
									위험물기능장 임*정 <br />
									청소년상담사 최*경 <br />

									위험물기능장 박*진<br />
									경비지도사 전*준<br />
									보세사 안*태<br />
									청소년상담사 윤*미<br />
									조경기능사 박*제<br />
									직업상담사 김*은<br />
									보세사 김*희<br />
									위험물기능장 이*훈<br />
									경비지도사 조*진<br />
									위험물기능장 김*철<br />
									직업상담사 박*주<br />
									경비지도사 권*석<br />
									CS리더스관리사 황*호<br />
									산림(산업)기사 추*빈<br />
									보세사 윤*희<br />
									위생사 윤*규<br />
									직업상담사 송*정<br />
									직업상담사 이*혜<br />
									물류관리사 신*준<br />
									청소년상담사 이*숙<br />

									위생사 강*희<br />
									직업상담사 박*림<br />
									보세사 정*영<br />
									조경기능사 김*운<br />
									청소년상담사 위*운<br />
									보세사 강*학<br />
									빅데이터분석기사 신*호<br />
									직업상담사 홍*률<br />
									직업상담사 윤*<br />
									보세사 최*민<br />
									청소년상담사 장*화<br />
									청소년상담사 김*영<br />
									조경기능사 안*진<br />
									보세사 박*민<br />
									사회조사분석사 이*정<br />
									청소년상담사 이*송<br />
									영양사 김*희<br />
									지텔프 안*현<br />
									전기(산업)기사 하*성<br />
									보세사 조*빈<br />

									영양사 임*솜<br />
									산림(산업)기사 이*천<br />
									위험물기능장 오*명<br />
									직업상담사 정*인<br />
									위험물기능장 이*영<br />
									전기(산업)기사 서*명<br />
									직업상담사 이*영<br />
									지텔프 정*혁<br />
									위험물기능장 김*관<br />
									스포츠지도사 함*창<br />

									<!-- 70개 -->

									직업상담사 김*형<br />
									물류관리사 김*형<br />
									보세사 박*혁<br />
									보세사 박*수<br />
									직업상담사 공*선<br />
									물류관리사 김*찬<br />
									청소년상담사 최*경<br />
									물류관리사 손*국<br />
									위생사 이*성<br />
									물류관리사 이*석<br />
									전기(산업)기사 김*희<br />
									물류관리사 유*국<br />
									물류관리사 김*정<br />
									보세사 김*림<br />
									물류관리사 김*빈<br />
									농산물품질관리사 최*호<br />
									물류관리사 김*훈<br />
									위험물기능장 김*영<br />
									물류관리사 이*오<br />
									보세사 김*우<br />

									물류관리사 곽*헌<br />
									유통관리사 손*훈<br />
									영양사 금*경<br />
									직업상담사 배*경<br />
									공인노무사 한*연<br />
									보세사 윤*진<br />
									영양사 허*현<br />
									물류관리사 조*장<br />
									유통관리사 이*성<br />
									보세사 김*구<br />
									직업상담사 박*은<br />
									독학사 유*현<br />
									보세사 손*수<br />
									공인노무사 이*진<br />
									물류관리사 박*민<br />
									물류관리사 허*희<br />
									물류관리사 김*중<br />
									위험물기능사 김*민<br />
									전기(산업)기사 이*열<br />
									유통관리사 안*혁<br />

									사회조사분석사 강*순<br />
									물류관리사 노*아<br />
									공인노무사 이*혁<br />
									위험물산업기사 손*익<br />
									조경기사 이*룡<br />
									직업상담사 하*선<br />
									청소년상담사 예*라<br />

								</li>
								<li>
									보세사 김*현<br />
									임상심리사 안*온<br />
									직업상담사 이*명<br />
									조경기능사 한*훈<br />
									임상심리사 김*은<br />
									직업상담사 차*은<br />
									사회복지사 김*수<br />
									조경산업기사 이*동<br />
									직업상담사 최*담<br />
									위생사 박*원<br />
									청소년상담사 이*영<br />
									직업상담사 노*정<br />
									전기(산업)기사 전*재<br />
									투자자산운용사 박*열<br />
									지텔프 이*우<br />
									직업상담사 최*희<br />
									전기(산업)기사 신*민<br />
									원산지관리사 문*인<br />
									직업상담사  박*은<br />
									보세사 김*하<br />

									직업상담사 박*순<br />
									스포츠지도사 양*재<br />
									농산물품질관리사 강*영<br />
									보세사 박*호<br />
									직업상담사 최*희<br />
									보세사 오*재<br />
									청소년상담사 정*<br />
									전기(산업)기사 임*호<br />
									보세사 이*경<br />
									물류관리사 이*인<br />
									원산지관리사 문*인<br />
									전기기능사 박*일<br />
									물류관리사 정*관<br />
									직업상담사 이*우<br />
									위생사 이*영<br />
									공인노무사 심*준<br />
									사회조사분석사 정*용<br />
									원산지관리사 신*재<br />
									전기(산업)기사 최*성<br />
									보세사 오*재<br />

									소방설비(산업)기사 이*수<br />
									원산지관리사 강*현<br />
									지텔프 김*형<br />
									사회조사분석사 김*호<br />
									검정고시 김*유<br />
									조경기능사 장*성<br />
									물류관리사 이*규<br />
									물류관리사 송*진<br />
									위험물기능장 최*우<br />
									보세사 김*일<br />
									물류관리사 선*인<br />
									보세사 유*영<br />
									물류관리사 김*용<br />
									청소년상담사 김*희<br />
									임상심리사 김*미<br />
									보세사 김*수<br />
									물류관리사 임*섭<br />
									사회조사분석사 이*주<br />
									소방설비(산업)기사 최*국<br />
									물류관리사 김*구<br />

									사회복지사 신*주<br />
									물류관리사 최*호<br />
									물류관리사 김*현<br />
									직업상담사 이*희<br />
									임상심리사 신*순<br />
									물류관리사 임*평<br />
									연구실안전관리사 정*구<br />
									물류관리사 이*근<br />
									매경테스트 김*민<br />
									물류관리사 이*형<br />

									<!-- 70개 -->

									보세사 이*정<br />
									위험물기능장 홍*곤<br />
									직업상담사 최*현<br />
									스포츠지도사 윤*근<br />
									직업상담사 김*신<br />
									보세사 문*영<br />
									보세사 정*근<br />
									직업상담사 엄*은<br />
									손해사정사 서*석<br />
									사회조사분석사  강*온<br />
									물류관리사 유*현<br />
									9급 운전직 조*식<br />
									보세사 심*호<br />
									직업상담원 성*자<br />
									보세사 강*훈<br />
									기계정비산업기사 박*준<br />
									보세사 유*호<br />
									물류관리사 노*정<br />
									보세사 이*준<br />
									물류관리사 김*우<br />

									보세사 유*순<br />
									보세사  정*만<br />
									지텔프 김*수<br />
									보세사 이*복<br />
									직업상담사 이*환<br />
									CS리더스관리사 김*연<br />
									직업상담사 이*지<br />
									직업상담사 황*영<br />
									직업상담사 박*일<br />
									보세사 김*규<br />
									청원경찰 서*호<br />
									직업상담사 정*헌<br />
									물류관리사 김*현<br />
									경비지도사 이*익<br />
									직업상담사 김*희<br />
									임상심리사 김*수<br />
									경비지도사 홍*환<br />
									직업상담사 김*현<br />
									영양사 김*덕<br />
									직업상담사 김*혜<br />

									사회조사분석사  임*지<br />
									직업상담사 배*은<br />
									농산물품질관리사 원*성<br />
									직업상담사 전*모<br />
									보세사 최*영<br />
									위험물기능장 이*주<br />
									보세사 최*오<br />
								</li>
								<li>
									청소년상담사 강*정<br />
									전기(산업)기사 박*광<br />
									임상심리사 신*순<br />
									직업상담사 오*지<br />
									위생사 곽*영<br />
									위험물기능장 박*혁<br />
									임상심리사 곽*희<br />
									직업상담사 김*정<br />
									원산지관리사 곽*선<br />
									임상심리사 백*화<br />
									직업상담사 박*환<br />
									위생사 한*지<br />
									직업상담사 김*혜<br />
									물류관리사 김*근<br />
									위험물기능장 홍*록<br />
									보세사 박*환<br />
									위험물기능장 한*호<br />
									임상심리사 김*옥<br />
									손해평가사 이*수<br />
									손해평가사 임*석<br />

									직업상담사 박*정<br />
									직업상담사 김*환<br />
									경비지도사 염*길<br />
									농산물품질관리사 장*주<br />
									전기기능사 김*식<br />
									물류관리사 김*하<br />
									공인노무사 정*일<br />
									위험물기능장 김*찬<br />
									영양사 손*진<br />
									공인노무사 조*민<br />
									임상심리사 김*옥<br />
									전기기능사 전*환<br />
									공인노무사 이*현<br />
									경비지도사 박*보<br />
									감정평가사 신*지<br />
									직업상담사 김*원<br />
									공인노무사 이*성<br />
									직업상담사 김*숙<br />
									공인노무사 박*희<br />
									부사관 황*성<br />

									사회복지사 김*영<br />
									공인노무사 신*걸<br />
									사회복지사 김*현<br />
									군무원 배*수<br />
									위험물기능사 박*근<br />
									공인노무사 최*호<br />
									사회복지사 서*연<br />
									위험물기능장 김*수<br />
									보세사 최*진<br />
									위험물산업기사 최*용<br />
									농산물품질관리사 곽*문<br />
									지텔프 임*진<br />
									사회복지사 박*란<br />
									직업상담사 지*나<br />
									직업상담사 안*진<br />
									스포츠지도사 최*석<br />
									사회복지사 서*연<br />
									청소년상담사 최*경<br />
									사회복지사 이*환<br />
									위험물산업기사 김*수<br />

									스포츠지도사 문*연<br />
									수질환경(산업)기사 이*동<br />
									위험물기능장 김*수<br />
									보세사 박*영<br />
									위험물기능장 남*호<br />
									공기업통합 전*명<br />
									직업상담사 김*은<br />
									사회복지사 이*경<br />
									조경기능사 김*중<br />
									위험물기능장 마*호<br />

									<!-- 70개 -->

									보세사 황*원<br />
									청소년상담사 이*란<br />
									사회조사분석사  신*순<br />
									물류관리사 이*<br />
									경비지도사 정*철<br />
									보세사 이*현<br />
									임상심리사 한*희<br />
									보세사 장*훈<br />
									위험물기능장 김*정<br />
									사회조사분석사  임*지<br />
									직업상담사 김*태<br />
									9급 운전직 이*원<br />
									물류관리사 이*환<br />
									경비지도사 김*한<br />
									경비지도사 박*진<br />
									직업상담사 임*화<br />
									경비지도사 김*길<br />
									9급 사회복지직 진*인<br />
									보세사 조*경<br />

									물류관리사 황*연<br />
									경비지도사 김*용<br />
									보세사 최*원<br />
									물류관리사 신*원<br />
									보세사 장*현<br />
									보세사 석*철<br />
									원산지관리사 유*진<br />
									화학분석기사 김*진<br />
									투자자산운용사 김*민<br />
									직업상담사 류*<br />
									보세사 한*재<br />
									물류관리사 백*열<br />
									원산지관리사 김*혁<br />
									경비지도사 오*철<br />
									임상심리사 박*영<br />
									물류관리사 최*호<br />
									보세사 정*영<br />
									스포츠지도사 김*지<br />
									물류관리사 김*룡<br />
									원산지관리사 조*원<br />

									물류관리사 정*운<br />
									물류관리사 오*엽<br />
									청소년상담사 이*숙<br />
									직업상담사 홍*림<br />
									임상심리사 김*희<br />
									물류관리사 이*연<br />
									임상심리사 곽*경<br />
									
									
									
								</li>
							</ul>
						</div>
					</div>
					
					
					

				</div>

				<div class="bottom">
					<div class="more_hugi">
						<a href="/bbs/board.php?bo_table=dcc_after_apply&amp;svs=popkon#nahab_con2">
							합격 후기 더보기 +
						</a>
					</div>

					<!-- 갤럭시 탭 배너 S -->
					<div class="mid_banner galexy">
						<a href="<?=$mobile_route?>/board/pass_review.php?bo_table=dcc_after_apply">
							<img src="/mobile/images/main/2023/review_event.png" alt="갤럭시 탭 베너" />
						</a>
					</div>
					<!-- 갤럭시 탭 배너 E -->
				</div>
				
			</div>
			
			
		
		<!-- 합격생 리스트 E-->
		

		<!-- 합격 AtoZ -->
		<div class="atozArea mainContentArea">
			
			<div class="pull-over">				
				<div class="dis-table">
					<div class="tl"><h2 class="wrap_title under_point">SD에듀 토크레인 <br />전문가가 알려주는 모든 자격증 · 취업 정보</h2></div>	
					<!-- <div class="cateallBtnArea tr w_20">
						<div class="atozPagination"></div>
					</div> -->
				</div>
				
				<div class="swipe-container atozSlideArea" id="atozSlide">
					
					<ul class="swiper-wrapper">
						<!-- slide 1page -->
						<li class="swiper-slide">
							<div class="pull-over swiper-lazy">
								<!--감정평가사-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=AsBXNRzftZA">
									<img src="/mobile/images/main/2023/talk/talk_1.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>감정평가사</b><br />						
												박은정 평가사
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//감정평가사-->
								<!--공인노무사-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=4qluRcJfcls">
									<img src="/mobile/images/main/2023/talk/talk_2.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>공인노무사</b><br />						
												신동명 노무사
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//공인노무사-->
								<!--변리사-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=LxSZ1NOqonI">
										<img src="/mobile/images/main/2023/talk/talk_3.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>변리사</b><br />						
												임세준 변리사
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//변리사-->
							</div>
							<div class="pull-over">
								<!--관세사-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=Cqc7id_vAts">
										<img src="/mobile/images/main/2023/talk/talk_4.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>관세사</b><br />						
												최다희 관세사
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//관세사-->
								<!--보세사-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=P1T6wgcy9t8">
										<img src="/mobile/images/main/2023/talk/talk_5.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>보세사</b><br />						
												김성표 관세사
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//보세사-->
								<!--전기(산업)기사-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=rrad7LJKzgw">
										<img src="/mobile/images/main/2023/talk/talk_6.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>전기(산업)기사</b><br />						
												류승헌 교수
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//전기(산업)기사-->
							
							</div>
							<div class="pull-over">
								<!--손해사정사-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=cweJ9UOZTRM">
										<img src="/mobile/images/main/2023/talk/talk_7.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>손해사정사</b><br />						
												변운연 손해사정사
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//손해사정사-->
								<!--손해평가사-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=7Uq-3rAedLY">
										<img src="/mobile/images/main/2023/talk/talk_8.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>손해평가사</b><br />						
												한치영 교수
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//손해평가사-->
								<!--경비지도사-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=UNlqfdj2SLo">
										<img src="/mobile/images/main/2023/talk/talk_9.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>경비지도사</b><br />						
												고비환 교수
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//경비지도사-->
							</div>
						</li>
						<!-- //slide 1page -->
						<!-- slide 2page -->
						<li class="swiper-slide">
							<div class="pull-over swiper-lazy">
								<!--전기기사-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=w0baw0GbIxw">
										<img src="/mobile/images/main/2023/talk/talk_10.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>전기기사</b><br />						
												문정환님
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//전기기사-->
								<!--위험물자격증-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=XcS_T-1YzsA">
										<img src="/mobile/images/main/2023/talk/talk_11.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>위험물자격증</b><br />						
												조현욱 교수
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//위험물자격증-->
								<!--원산지관리사-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=HBH4tdVJGlc">
										<img src="/mobile/images/main/2023/talk/talk_12.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>원산지관리사</b><br />						
												김성표 관세사
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//원산지관리사-->
								
							</div>
							<div class="pull-over">
								<!--직업상담사 2급-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=UqnrMr30Xng">
										<img src="/mobile/images/main/2023/talk/talk_13.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>직업상담사 2급</b><br />						
												김대환 교수
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//직업상담사 2급-->
								<!--청소년상담사-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=msDaLXLDBAc">
										<img src="/mobile/images/main/2023/talk/talk_14.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>청소년상담사</b><br />						
												손광민 상담사
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//청소년상담사-->
								<!--스포츠지도사-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=WjbTHOoAGV0">
										<img src="/mobile/images/main/2023/talk/talk_15.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>스포츠지도사</b><br />						
												이진이 코치
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//스포츠지도사-->
							</div>
							<div class="pull-over">
								<!--감정평가사-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=PbM8rnpjsTQ">
										<img src="/mobile/images/main/2023/talk/talk_16.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>감정평가사</b><br />						
												박기인 교수
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//감정평가사-->
								<!--공인노무사-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=AACNiMt4DoE">
										<img src="/mobile/images/main/2023/talk/talk_17.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>공인노무사</b><br />						
												김희향 노무사
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//공인노무사-->
								<!--손해사정사-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=bqJoIoMJGpY">
										<img src="/mobile/images/main/2023/talk/talk_18.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>손해사정사</b><br />						
												한치영 교수
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//손해사정사-->
							</div>
						</li>
						<!-- //slide 2page -->
						<!-- slide 3page -->
						<li class="swiper-slide">
							<div class="pull-over swiper-lazy">
								<!--조경기능사-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=RRfIJhgu8Gw">
										<img src="/mobile/images/main/2023/talk/talk_19.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>조경기능사</b><br />						
												김근성 교수
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//조경기능사-->
								<!--영양사-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=oTC8lKET_o0">
										<img src="/mobile/images/main/2023/talk/talk_20.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>영양사</b><br />						
												이유정 영양사
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//영양사-->
								<!--간호사-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=7_CHIldu-PE">
										<img src="/mobile/images/main/2023/talk/talk_21.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>간호사</b><br />						
												성혜정 교수
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//간호사-->
							</div>
							<div class="pull-over">
								<!--간호 조무사-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=jN2MpufQAQM">
										<img src="/mobile/images/main/2023/talk/talk_22.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>간호 조무사</b><br />						
												성혜정 교수
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//간호 조무사-->
								<!--소방시설관리사-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=XMveo1lpJgc">
										<img src="/mobile/images/main/2023/talk/talk_23.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>소방시설관리사</b><br />						
												이헌종 교수
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//소방시설관리사-->
								<!--직업상담사-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=7xx40DOc63E">
										<img src="/mobile/images/main/2023/talk/talk_24.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>직업상담사</b><br />						
												최은정 직업상담사
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//직업상담사-->
							</div>
							<div class="pull-over">
								<!--맞춤형화장품-->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=ed31FtYdDus">
										<img src="/mobile/images/main/2023/talk/talk_25.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>맞춤형화장품</b><br />						
												뷰티 빅데이터 수민
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//맞춤형화장품-->
								<!--지텔프 -->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=ZNW-gxWO_Qc">
										<img src="/mobile/images/main/2023/talk/talk_26.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>지텔프</b><br />						
												케이티박 교수
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//지텔프-->
								<!--감정평가사 -->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=k61M5i5-_o0">
										<img src="/mobile/images/main/2023/talk/talk_27.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>감정평가사</b><br />						
												설상헌 평가사
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//감정평가사-->
							</div>
						</li>
						<!-- //slide 3page -->
						<!-- slide 4page -->
						<li class="swiper-slide">
							<div class="pull-over swiper-lazy">
								<!--공인노무사 -->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=Is4YOOnql40">
										<img src="/mobile/images/main/2023/talk/talk_28.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>공인노무사</b><br />						
												윤보름 노무사
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//공인노무사-->
								<!--관광통역안내사 -->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=p_77BbJ9Wu4">
										<img src="/mobile/images/main/2023/talk/talk_29.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>관광통역안내사</b><br />						
												조은정 교수
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//관광통역안내사-->
								<!--변리사 -->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=dGHFeKL8cr0">
										<img src="/mobile/images/main/2023/talk/talk_30.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>변리사</b><br />						
												노형완 변리사
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//변리사-->
							</div>
							<div class="pull-over">
								<!--변리사 -->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=tftoJbIEKys">
										<img src="/mobile/images/main/2023/talk/talk_31.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>변리사</b><br />						
												유시훈 변리사
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//변리사-->
								<!--연구실안전관리사 -->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=m4RQvawwLvI&t=24s">
										<img src="/mobile/images/main/2023/talk/talk_32.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>연구실안전관리사</b><br />						
												김찬양 교수
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//연구실안전관리사-->
								<!--스포츠지도사 -->
								<div class="atozContent">
									<a href=https://www.youtube.com/watch?v=0rDA7CKzN7o">
										<img src="/mobile/images/main/2023/talk/talk_33.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>스포츠지도사</b><br />						
												이성진 교수
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//스포츠지도사-->
							</div>
							<div class="pull-over">
								<!--행정사 -->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=eJVeY24GIuM">
										<img src="/mobile/images/main/2023/talk/talk_34.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>행정사</b><br />						
												최의란 행정사
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//행정사-->
								<!--지텔프 -->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=QONB774vGgI">
										<img src="/mobile/images/main/2023/talk/talk_35.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>지텔프</b><br />						
												이지후 교수
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//지텔프-->
								<!--법무사 -->
								<div class="atozContent">
									<a href="https://www.youtube.com/watch?v=AAZtXAU4nAo">
										<img src="/mobile/images/main/2023/talk/talk_36.png" width='100%'/>
										<div class="con_txt">
											<p>
												<b>법무사</b><br />						
												류홍석 법무사
											</p>
											<i class="icon icon-playyoutube"></i>
										</div>
									</a>
								</div>
								<!--//법무사-->
							</div>
						</li>
						<!-- //slide 4page -->
						
					</ul>
					<div class="scroll_navi">
						<div class="btn-arrow prev"></div>
						<div class="swiper-scrollbar scroll_bar"></div>
						<div class="btn-arrow next"></div>
					</div>
				</div>
			</div>						
		</div>
		<!-- //합격 AtoZ -->	
		<?include './main_study_file.php' ?>
	
	</div>


 

	<!--다양한 할인혜택 S-->
	<div class="mid_banner mid_banner3">
		<a href="<?=$mobile_route?>/board/event.php?p=gongdong">
			<img src="/mobile/images/main/2023/join_event.png" width='100%'/>
		</a>
	</div>
	<!--다양한 할인혜택 E-->
	<!-- sns S -->
	<div class="snsArea mainContentArea">
		<div class="sns_box">
			<div>
				<img src="/mobile/images/main/2023/sns.png" alt="sns이미지" />
			</div>
			<ul class="sns_link">
				<li><a href="https://www.youtube.com/channel/UCup4xX9m8LLVKVvIJU_B6UQ"><!--유튜브 채널--></a></li>
				<li><a href="https://www.instagram.com/sidaeedu/"><!--인스타그램--></a></li>
				<li><a href="https://blog.naver.com/ehaulee"><!--SD 공식 블로그--></a></li>
				<li><a href="https://post.naver.com/my.naver?memberNo=1149916"><!--SD 공식 포스트--></a></li>
				<li><a href="https://www.facebook.com/sidaeedu"><!--페이스북--></a></li>
				<li><a href="http://pf.kakao.com/_ajeIxd"><!--카카오플러스 채널--></a></li>
			</ul>
		</div>
	</div>
	<!-- sns E -->
</div>

<script src="/_skin/sidae/js/counter-up/waypoint.js"></script>
<script src="/_skin/sidae/js/counter-up/jquery.counterup.min.js"></script>
<script>
	$('.count_number').counterUp({
		delay: 30,
		time: 2000,
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
	const counterContainer = document.querySelector('.company_report');
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
</script>
<script>
	$(document).ready(function(){
		var review_slide2 = new Swiper('#atozSlide', {
			slidesPerView: 'auto',
			spaceBetween: '3%',
			autoHeight: true,
			loop:true,

			pagination: {
				el: '.scroll_bar',
				type: 'progressbar',
				clickable: false,
			},
			navigation: {
			prevEl: '.atozSlideArea .prev',
			nextEl: '.atozSlideArea .next',
		},
			//   pagination: {
			//      el: ".atozPagination",
			//      type: "fraction",
			//   },
		});


		var review_slide1 = new Swiper('#passreview_slide', {
			slidesPerView: 'auto',
			spaceBetween: '3%',
			autoHeight: true,
			loop:true,
		});

		$('.pass-list').slick({
			slide: 'div',
			dots: false,
			arrows : false,
			autoplay:true,
			infinite: true,
			speed: 80000,
			//autoplaySpeed:50,
			cssEase: 'linear',
			vertical : true,
			pauseOnHover:false,
			pauseOnFocus:false,
			//centerMode: true,
			//touchMove: false,
  			swipe: false,
		});
	});

	/*
		var swiper = new Swiper(".popular-slides-inner", {
			loop:true,
			pagination: {
				el: ".popular-slides-dots",
			},
		});
	*/
	$(function(){
		$('.popular-slides').slick({
			slide: 'span',        //슬라이드 되어야 할 태그
			infinite : true,     //무한 반복 옵션
			slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
			slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
			speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
			arrows : false,         // 옆으로 이동하는 화살표 표시 여부
			dots : true,         // 스크롤바 아래 점으로 페이지네이션 여부
			dotsClass: 'popular-slides-dots',
			autoplay : true,            // 자동 스크롤 사용 여부
			autoplaySpeed : 2000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
			pauseOnHover : false,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
			vertical : false,        // 세로 방향 슬라이드 옵션
			//touchMove: false,
  			//swipe: false,
			prevArrow : "<button type='button' class='slick-prev'>Previous</button>",
			nextArrow : "<button type='button' class='slick-next'>Next</button>",
			draggable : true,     //드래그 가능 여부
			responsive: [ // 반응형 웹 구현 옵션
				{
					breakpoint: 960, //화면 사이즈 960px
					settings: {
						slidesToShow: 1
					}
				},
				{
					breakpoint: 768, //화면 사이즈 768px
					settings: {
						slidesToShow: 1
					}
				}
			]

		});


		$('.firstProfess-slides').slick({
			slide: 'span',        //슬라이드 되어야 할 태그
			infinite : true,     //무한 반복 옵션
			slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
			slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
			speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
			arrows : true,         // 옆으로 이동하는 화살표 표시 여부
			dots : false,         // 스크롤바 아래 점으로 페이지네이션 여부
			//dotsClass: 'firstProfess-slides-dots',
			autoplay : false,            // 자동 스크롤 사용 여부
			autoplaySpeed : 2000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
			pauseOnHover : true,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
			vertical : false,        // 세로 방향 슬라이드 옵션
			prevArrow : "<button type='button' class='slick-prev'>Previous</button>",
			nextArrow : "<button type='button' class='slick-next'>Next</button>",
			draggable : true,     //드래그 가능 여부
			responsive: [ // 반응형 웹 구현 옵션
				{
					breakpoint: 960, //화면 사이즈 960px
					settings: {
						slidesToShow: 1
					}
				},
				{
					breakpoint: 768, //화면 사이즈 768px
					settings: {
						slidesToShow: 1
					}
				}
			]

		});


		$('.txt_wrapper').slick({
			slide: 'li',
			dots: false,
			arrows : false,
			autoplay:true,
			infinite: true,
			speed: 2000,
			autoplaySpeed:0,
			cssEase: 'linear',
			vertical : true,
			pauseOnHover:false,
			pauseOnFocus:false,
			//centerMode: true,
			touchMove: false,
  			swipe: false,
		});

	});
</script>

<?php
	include_once ("_footer.php");
	include_once ("common_php/common_free_consultion_renew.php");
?>
