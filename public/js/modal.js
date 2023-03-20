// 모달 버튼과 모달 창을 변수로 지정
var modalBtn = document.getElementById("modal-btn");
var modal = document.getElementById("modal");

// 모달 버튼을 클릭하면 모달 창을 열도록 설정
modalBtn.onclick = function() {
  modal.style.display = "block";
}
/*
// 모달 창 내부의 X 버튼을 클릭하면 모달 창을 닫도록 설정
var closeBtn = modal.querySelector(".close");
closeBtn.onclick = function() {
  modal.style.display = "none";
}
*/


// // 모달 창 외부를 클릭하면 모달 창을 닫도록 설정
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }