$(document).ready(function(){

    //메인배너 스크립트
    const m_slide = $('.swiper-slide > .slide');
    const m_lbtn = $('.swiper-wrapper i.fa-backward-step');
    const m_rbtn = $('.swiper-wrapper i.fa-forward-step');

    // ctrl.click(function(){
    //     i = $(this).index();
    //     i = -(i*$('.m_slide .slide > li').width());
    //     $('.slide').animate({'left':i},500);
    //     $('.ctrl').removeClass('act');
    //     $(this).addClass('act');
    //     console.log(i);
    // });

    $('.swiper-slide > .slide > li:last-child').insertBefore('.swiper-slide > .slide > li:first-child');
    m_slide.css('margin-left','-200px');



    // 메인 좌측버튼 함수
    function moveLeft(){
        m_slide.animate({'margin-left':'-400px'},function(){
            $('.swiper-slide > .slide > li:first-child').insertAfter('.swiper-slide > .slide > li:last-child');
            m_slide.css('margin-left','-200px');
        });
    }
    let Timer = setInterval(moveLeft, 3000);

    // 메인 우측버튼 함수
    function moveRight(){
        m_slide.animate({'margin-left':'0px'},function(){
            $('.swiper-slide > .slide > li:last-child').insertBefore('.swiper-slide > .slide > li:first-child');
            m_slide.css('margin-left','-200px');
        });
    }

    //좌측 버튼 클릭시
    m_lbtn.click(function(){
        clearInterval(Timer);
        moveLeft();
    });

    //우측 버튼 클릭시
    m_rbtn.click(function(){
        clearInterval(Timer);
        moveRight();
    });

    $('.swiper-wrapper i.fa-backward-step, .swiper-wrapper i.fa-forward-step').mouseleave(function(){
        clearInterval(Timer);
        Timer=setInterval(moveLeft,3000)
    });

    // 아코디언 메뉴 스크립트
    const mnu = $('.gnb2 > ul > li');

//     let msub1 = `
//         <ul class="sub">
//         <li><a href="#" title="스킨/토너">스킨/토너</a></li>
//         <li><a href="#" title="로션/에멀젼">로션/에멀젼</a></li>
//         <li><a href="#" title="에센스">에센스</a></li>
//         <li><a href="#" title="세럼">세럼</a></li>
//         <li><a href="#" title="앰플">앰플</a></li>
//         <li><a href="#" title="크림">크림</a></li>
//         <li><a href="#" title="오일">오일</a></li>
//         <li><a href="#" title="미스트">미스트</a></li>
//         <li><a href="#" title="패드">패드</a></li>
//     </ul>
//     `;
//     let msub2 = ` <ul class="sub">
//         <li><a href="#" title="선크림">선크림</a></li>
//         <li><a href="#" title="선블록">선블록</a></li>
//     </ul>`;

//     let msub3 = `<ul class="sub">
//     <li><a href="#" title="진정팩">진정팩</a></li>
//     <li><a href="#" title="미백팩">미백팩</a></li>
//     <li><a href="#" title="세럼팩">세럼팩</a></li>
//     <li><a href="#" title="쿨링팩">쿨링팩</a></li>
// </ul>`;

//     let msub4 = `<ul class="sub">
//     <li><a href="#" title="클렌징폼">클렌징폼</a></li>
//     <li><a href="#" title="클렌징오일">클렌징오일</a></li>
//     <li><a href="#" title="클렌징워터">클렌징워터</a></li>
//     <li><a href="#" title="클렌징밀크">클렌징밀크</a></li>
//     <li><a href="#" title="클렌징크림">클렌징크림</a></li>
//     <li><a href="#" title="클렌징밤">클렌징밤</a></li>
//     <li><a href="#" title="스크럽">스크럽</a></li>
//     <li><a href="#" title="필링">필링</a></li>
// </ul>`;

//     let msub5 =`<ul class="sub">
//     <li><a href="./" title="자주묻는질문">자주묻는질문</a></li>
//     <li><a href="#" title="회원/멤버십">회원/멤버십</a></li>
//     <li><a href="#" title="1:1문의">1:1문의</a></li>
//     <li><a href="#" title="공지사항">공지사항</a></li>
// </ul>`;


    // 브라우저 윈도우 세로스크롤 값을 사용하여 top 버튼 나오고 숨기고 하기

    let scrollNT;
    const T_btn = document.querySelector('#top');

    window.addEventListener('scroll', function(){
        scrollNT = this.pageYOffset;
        // console.log(scrollNT); //700
        if(scrollNT>=700){
            T_btn.classList.add('act2');
        }else{
            T_btn.classList.remove('act2');
        }
    });




//     let w_size = $(window).width(); //윈도우 가로크기 값

//     if(w_size<1025){
        mnu.click(function(){          
            $(this).find('a').next().slideToggle();
            //$('.gnb ul li a i').removeClass('act');
            $(this).find('i').toggleClass('act');
            $('.h_bottom').show();
        });
        
//     }

    // // pc버전은 아코디언 메뉴 스크립트 막기
    //$(window).resize(function(){
        // if(w_size >= 1025){
        //     $('.gnb').css('display','block');
        // };

        // gnb 메뉴 스크립트
        $('.t_btn').click(function(){
            $('.gnb2, .h_bottom').show();
        });
        $('.x_btn').click(function(){
            $('.gnb2, .h_bottom').hide();
        });
    //});

    // if(w_size >= 1025){
    //     // location.reload();
    //         $('.gnb ul > li > a').click(function(){
    //         return false;
    //     });
    // }


    let c=0;
    const scbtn = $('.sale_all > .sc_btn_all > .sc_btn');

    scbtn.click(function(){
        c = $(this).index();
        console.log(c);
        c = -(c*$('.sale_product > li').width());
        console.log(c);
        $('.sale_product').animate({'left':c},500);
        $('.sale_all div > .sc_btn').removeClass('act');
        $(this).addClass('act');
    });

    // 콘트롤버튼(sale)
    let k=0;
    const cbtn = $('.sale .c_all .c_btn');

    cbtn.click(function(){
        k = $(this).index();
        console.log(k);
        k = -(k*$('.sale_all figure').outerWidth());
        console.log(k);

        $('.sale_all').animate({'left':k},500);

        $('.sale .c_all span').removeClass('act1');
        $(this).addClass('act1');
    });

    function mslide(n){
        n = -(n*$('.sale_all figure').outerWidth());
        $('.sale_all').animate({'left':n},500);
    }
    let n = 0;
    let Timer1 = setInterval(function(){
        if(n==3){
            n=0;
            $('.sale .c_all span').removeClass('act1');
            $('.sale .c_all span').eq(n).addClass('act1');
        }else{
            n++;
            $('.sale .c_all span').removeClass('act1');
            $('.sale .c_all span').eq(n).addClass('act1');
        }
        mslide(n);    
    },5000);

    // 콘트롤버튼(event)
    let t=0;
    const cbtn1 = $('.event_all div > .c_btn1');

    cbtn1.click(function(){
        t = $(this).index();
        console.log(t);
        t = -(t*$('.event_product li').width());
        console.log(t);

        $('.event_product').animate({'left':t},500);

        $('.event_all div span').removeClass('act1');
        $(this).addClass('act1');
    });

    function mslide1(n1){
        n1 = -(n1*$('.event_product li').width());
        $('.event_product').animate({'left':n1},500);
    }
    let n1 = 0;
    let Timer2 = setInterval(function(){
        if(n1==2){
            n=0;
            $('.event_all div span').removeClass('act1');
            $('.event_all div span').eq(n1).addClass('act1');
        }else{
            n1++;
            $('.event_all div span').removeClass('act1');
            $('.event_all div span').eq(n1).addClass('act1');
        }
        mslide1(n1);    
    },5000);

    // 피부상담 마우스 오버시
    const free = $('.free > a > .free1');
    free.mouseenter(function(){
        $(this).attr("src","images/counselor_hover.jpg");
    free.mouseleave(function(){
        $(this).attr("src","images/counselor.jpg");
        });
    });

});



//검색모달창
$('.search .field input[type=search]').focus(function(){
    $(this).parent().next().css('display', 'block')
}).blur(function(){
    $(this).parent().next().css('display', 'none')
});
$('.o_search').click(function(){
    $('.search_modal').addClass('active')
});
$('.c_search, section').click(function(){
    $('.search_modal').removeClass('active')
});

//랜덤배너
let ran_n = Math.ceil(Math.random()*2);
document.getElementById('banner_img').src="./images/product_01-1-"+ran_n+".png";

