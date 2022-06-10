"use strict";
//브라우저의 스크린 Height 값을 구함 : 로그인, 회원가입 레이아웃에 사용
function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setScreenSize();
window.addEventListener('resize', () => setScreenSize());
