// 검색창 요소(.search) 선택 시 강제 포커스 및 제어
const searchEl = document.querySelector('.search');
// const searchInputEl = document.querySelector('.search input');
const searchInputEl = searchEl.querySelector('input');

// 검색창 요소를 클릭하면 input 요소를 포커스하도록 실행
searchEl.addEventListener('click', function () { //이벤트 핸들러
  searchInputEl.focus(); //포커스 강제 적용
});


// input 요소에 포커스 되면 실행
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); //html 속성을 추가하는 메소드
});


// input 요소에 포커스가 해체(블러) 되면 실행
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ''); //html 속성을 추가하는 메소드
});

// 스크롤 시 전역 배치(고정 배너) 숨기기
const badgesEl = document.querySelector('header .badges');

// window: 브라우저 창 객체
window.addEventListener('scroll', function () {
  // console.log(window.scrollY); // y 축으로 얼마나 스크롤 했는지에 대한 수치

  // 만약 y축으로 스크롤한 수치가  500을 초과하면 배지 요소를 숨기고
  // 그렇지 않으면 다시 보이기!
  
  // if (window.scrollY < 500) {
  //   badgesEl.style.display = 'block';
  // }

  if (window.scrollY > 500) {
    badgesEl.style.display = 'none';
  } else {
    badgesEl.style.display = 'block';
  }
});