"use strict";
//브라우저의 스크린 Height 값을 구함 : 로그인, 회원가입 레이아웃에 사용
function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setScreenSize();
window.addEventListener('resize', () => setScreenSize());



let sbartrigger = document.querySelector('.js-sidebar-trigger');
let sbarclose = document.querySelector('.js-sidebar-close');
let sidebar = document.querySelector('.sidebar');
let dimlayer = document.querySelector('.dim-layer');

let classOpen = [sidebar, dimlayer];
sbartrigger.addEventListener('click', function(e){
  classOpen.forEach(e => e.classList.add('is-active'));
});

let classCloseClick = [dimlayer, sbarclose];
classCloseClick.forEach(function(el) {
  el.addEventListener('click', function(els) {
    classOpen.forEach(els => els.classList.remove('is-active'));
  });
});

/*===== SIDEBAR & HEADER COLLAPSE MENU  =====*/ 
let linkCollapse = document.getElementsByClassName('collapse__link');
for(var i=0; i<linkCollapse.length; i++){
  linkCollapse[i].addEventListener('click', function(){
    let collapseMenu = this.nextElementSibling
    collapseMenu.classList.toggle('collapse__list--open')

    let previousEl = collapseMenu.previousElementSibling
    previousEl.classList.toggle('global-nav__link--open')
  })
}


/* 모달 테스트용 */
let modal = document.getElementById('modal');
function openModal() {
    modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";  
}

/* 펼침 */
let elToggle = document.getElementsByClassName('js-showhide');

for(var i=0; i<elToggle.length; i++){
  elToggle[i].nextElementSibling.style.display = "none";

  elToggle[i].addEventListener('click', function(){
    let targetEl = this.nextElementSibling
    if (targetEl.style.display=='block') {
      targetEl.style.display='none';
    }
    else {
      targetEl.style.display='block';
    }
    
    let previousEl = targetEl.previousElementSibling
    previousEl.classList.toggle('is-open')
    
  })
}