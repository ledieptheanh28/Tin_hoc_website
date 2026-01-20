/* Nút chuyển chế độ sáng/tối */
document.getElementById("toggle-theme").onclick = function () {
  document.body.classList.toggle("light-mode");
};

/* Hiệu ứng hiện dần khi cuộn */
window.addEventListener("scroll", function () {
  var elements = document.querySelectorAll(".fade-in");
  for (var i = 0; i < elements.length; i++) {
    var position = elements[i].getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
    if (position < screenHeight - 100) {
      elements[i].classList.add("visible");
    }
  }
});
