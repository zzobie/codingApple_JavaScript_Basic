var btn = $('.tab-button')
var content = $('.tab-content')

// // for (let i = 0; i < 3; i++) {
// for (let i = 0; i < btn.length; i++) { // 응용 : 탭과 내용이 늘어나도 바뀔 수 있는 코드로 바꿔보기
//   btn.eq(i).on('click', function () {
//     openTab(i);
//   });
// };

// 탭기능 다르게 만들기 -> 이벤트리스터 1개만 쓰기
// $('.list').click(function (e) {
//   if( e.target == document.querySelectorAll('.tab-button')[0]) { // 지금 누른게 버튼(i)이면
//     // 탭열기(i)
//     openTab(0)
//   }
//   if( e.target == document.querySelectorAll('.tab-button')[1]) {
//     openTab(1)
//   }
//   if( e.target == document.querySelectorAll('.tab-button')[2]) {
//     openTab(2)
//   }
// })
// dataset 활용
$('.list').click(function (e) {
  console.log(e.target.dataset.id)
  openTab(e.target.dataset.id)
})

// 함수로 축약하기
function openTab(i) {
  btn.removeClass('orange');
  btn.eq(i).addClass('orange');
  content.removeClass('show');
  content.eq(i).addClass('show');
}

// 버튼 0을 누르면 
// // 버튼?에 붙은 orange 클래스명 제거 -> 모든 버튼에 붙은 orange 클래스명 제거
// // 버튼 0에 orange 클래스명 추가 
// // div?에 붙은 show 클래스명 제거 -> 모든 div에 붙은 show 클래스명 제거
// // div0에 show 클래스명 추가
// $('.tab-button').eq(0).on('click', function () {
//   $('.tab-button').removeClass('orange');
//   $('.tab-button').eq(0).addClass('orange');
//   $('.tab-content').removeClass('show');
//   $('.tab-content').eq(0).addClass('show');
// });

// // 버튼 1을 누르면 
// // 버튼?에 붙은 orange 클래스명 제거 -> 모든 버튼에 붙은 orange 클래스명 제거
// // 버튼 1에 orange 클래스명 추가 
// // div?에 붙은 show 클래스명 제거 -> 모든 div에 붙은 show 클래스명 제거
// // div1에 show 클래스명 추가

// $('.tab-button').eq(1).on('click', function () {
//   $('.tab-button').removeClass('orange');
//   $('.tab-button').eq(1).addClass('orange');
//   $('.tab-content').removeClass('show');
//   $('.tab-content').eq(1).addClass('show');
// });

// // 버튼 2을 누르면 
// // 버튼?에 붙은 orange 클래스명 제거 -> 모든 버튼에 붙은 orange 클래스명 제거
// // 버튼 2에 orange 클래스명 추가 
// // div?에 붙은 show 클래스명 제거 -> 모든 div에 붙은 show 클래스명 제거
// // div2에 show 클래스명 추가

// $('.tab-button').eq(2).on('click', function () {
//   $('.tab-button').removeClass('orange');
//   $('.tab-button').eq(2).addClass('orange');
//   $('.tab-content').removeClass('show');
//   $('.tab-content').eq(2).addClass('show');
// });