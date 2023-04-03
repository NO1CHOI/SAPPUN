// console.log('.')

//----------------------변수
//1. KR
const kr_lnb = document.querySelector('header .right>li> a:nth-child(1)')
const kr_lnb_open = document.querySelector('header .lang')

//2.전체메뉴+닫기
const all_nav = document.querySelector('header .right>li:last-child>a')
const all_nav_open = document.querySelector('header .all_nav')
const all_nav_close = document.querySelector('header .all_nav .close')

//3. ACC gnb _ sub
const nav_acc = document.querySelectorAll('nav>ul>li')
const nav_acc_sub =document.querySelectorAll('nav>ul>li>.sub')

console.log(kr_lnb, kr_lnb_open)
console.log(all_nav, all_nav_open, all_nav_close)
console.log(nav_acc , nav_acc_sub)

//-------------------------------event-----------
//이벤트 실행 전 모두 숨기기
//객체.속성.속성 = 값
//객체.style.display = 'none'
kr_lnb_open.style.display='none'
all_nav_open.style.display='none'
nav_acc_sub[0].style.display='none'
//2.전체메뉴를 클릭했을때 전체 메뉴가 나오게 해야한다.
all_nav.addEventListener('click',function(){
    // console.log(this)
    all_nav_open.style.display='block'
})
//3. 닫기 메뉴 클릭시 메뉴 닫기
all_nav_close.addEventListener('click',function(){
    all_nav_open.style.display='none'
})
//4.메뉴에 마우스 오버 시 서브 메뉴 보이기
//mouseover, mosuout
nav_acc[12].addEventListener('mouseover',function(){
    nav_acc_sub[0].style.display='block'
})
//5.메뉴에 마우스 나갈 시 서브 메뉴 숨기기
nav_acc[12].addEventListener('mouseout',function(){
    nav_acc_sub[0].style.display='none'
})
//6.언어 설정
kr_lnb.addEventListener('mouseover',function(){
    // console.log(this)
    kr_lnb_open.style.display='block'
})
//7.
kr_lnb.addEventListener('mouseout',function(){
    // console.log(this)
    kr_lnb_open.style.display='none'
})
