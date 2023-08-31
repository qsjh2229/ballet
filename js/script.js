const mainSlide = document.querySelector(".t-slide");
const mainSlideWrap = document.querySelector(".text-slide");
const mainSlideCon = document.querySelectorAll(".t-slide > li");
const moveButton = document.querySelector(".allow");


// 클론
const cloneFi = mainSlideCon[0].cloneNode(true);
const cloneLa = mainSlideCon[mainSlideCon.length - 1].cloneNode(true);

// 어펜드로 넣어주기
mainSlide.insertBefore(cloneLa, mainSlideCon[0]);
mainSlide.appendChild(cloneFi);

// 클론한 li들 메인 ul에 넣기, 렝스 확인, 높이 구하기
const sliderCloneLis = mainSlide.querySelectorAll('li');
const slideLen = sliderCloneLis.length;
const slideHeight = mainSlideCon[0].offsetHeight;
const fullSlideHeight = slideHeight * slideLen;

/* 주요 변수 초기화 */
let currentIdx = 1;
let translate = -slideHeight;
const speedTime = 700;
let setIntervalId;

mainSlide.style.transform = `translateY(${translate}px)`;
mainSlide.style.height = `${slideHeight}px`;

moveButton.addEventListener('click', moveSlide);

function move(D) {
  currentIdx += -1 * D;
  translate += slideHeight * D;

  mainSlide.style.transform = `translateY(${translate}px)`;
  mainSlide.style.transition = `all ${speedTime}ms ease`;
}

function moveSlide(event) {
  event.preventDefault();
  if (event.target.className === 'next-btn') {
    move(-1); 
    if (currentIdx === slideLen - 1) {
      setTimeout(() => {
        mainSlide.style.transition = 'none';
        currentIdx = 1;
        translate = -slideHeight;
        mainSlide.style.transform = `translateY(${translate}px)`;
      }, speedTime);
    }
  } else {
    move(1);
    if (currentIdx === 0) {
      setTimeout(() => {
        mainSlide.style.transition = 'none';
        currentIdx = slideLen - 2;
        translate = -(slideHeight * currentIdx);
        mainSlide.style.transform = `translateY(${translate}px)`;
      }, speedTime);
    }
  }
}
mainAutoSlide()
function mainAutoSlide() {
  setIntervalId = setInterval(function() {
    move(-1); 
    if (currentIdx === slideLen - 1) {
      setTimeout(() => {
        mainSlide.style.transition = 'none';
        currentIdx = 1;
        translate = -slideHeight;
        mainSlide.style.transform = `translateY(${translate}px)`;
      }, speedTime);
    }
  }, 5000);
  console.log(currentIdx);
}

function stopSlide() {
  clearInterval(setIntervalId);
}

// 마우스를 올렸을 때
mainSlideWrap.addEventListener('mouseover', stopSlide);
// 마우스를 벗어났을 때
mainSlideWrap.addEventListener('mouseleave', mainAutoSlide);







/////// 섹션 2 텍스트 슬라이드


const textSlide = document.querySelector(".text-slide-ul");
const textMainSlideCon = document.querySelectorAll(".text-slide-ul > li");
const textmoveButton = document.querySelector(".t-next-btn");
const textPrevButton = document.querySelector(".t-prev-btn");
const divElement = document.querySelectorAll(".per-back");




console.log(textMainSlideCon);
let tCur = 0;
const textSlideLen = textMainSlideCon.length;
const textSlideHeight = textMainSlideCon[0].offsetHeight;

textmoveButton.addEventListener('click', textNext);
textPrevButton.addEventListener('click', textPrev);

function textNext() {
  if (tCur < textSlideLen - 1) {
    divElement[tCur].classList.remove("on");
    tCur++;
    const textTranslate = 220 * tCur;
    textSlide.style.transform = `translateY(${-textTranslate}px)`;

    divElement[tCur].classList.add("on");

  }
}

function textPrev() {
  if (tCur == 0) {
    return false;
  }
  divElement[tCur].classList.remove("on");
  tCur--;
  const textTranslate = -textSlideHeight * tCur;
  textSlide.style.transform = `translateY(${textTranslate}px)`;
  
  divElement[tCur].classList.add("on");

  
}



//스와이퍼
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  touchRatio: 0,//드래그 금지
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  }
});





$(window).scroll(function(){
  $(".box").each(function(){
      let sct= $(window).scrollTop();
      let boxTop = $(this).offset().top
      //console.log(boxTop)
  
      if(sct >boxTop-1100){
          $(this).stop().animate({'top':0} ,700)
      }
  
  })
  })
  let section4Offset = $('#section4').offset().top;
  let animationStarted = false;
  
  $(window).scroll(function() {
    let scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    
    if (scrollTop > section4Offset - 100) {
      setTimeout(function() {
        $('#section4 .imgbox').css('opacity', '1');
      }, 300);
      
      setTimeout(function() {
        $('#section4 .textbox').css('opacity', '1');
      }, 700);
    } else if (scrollTop = section4Offset ) {
      $('#section4 .textbox').css('opacity', '0');
      $('#section4 .imgbox').css('opacity', '0');
    }
  });