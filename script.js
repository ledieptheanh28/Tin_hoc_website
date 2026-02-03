
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
// Load comment khi mở trang
window.addEventListener("load", function() {
  const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
  const list = document.getElementById("comment-list");
  savedComments.forEach(text => {
    addComment(text, list);
  });
});

document.getElementById("comment-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const input = document.getElementById("comment-input");
  const commentText = input.value.trim();

  if (commentText !== "") {
    const list = document.getElementById("comment-list");
    addComment(commentText, list);

    // Lưu vào localStorage
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    savedComments.push(commentText);
    localStorage.setItem("comments", JSON.stringify(savedComments));

    input.value = "";
  }
});

// Hàm tạo comment + nút xoá
function addComment(text, list) {
  const commentDiv = document.createElement("div");
  commentDiv.classList.add("comment");

  const comment = document.createElement("span");
  comment.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Xoá";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function() {
    commentDiv.remove();

    // Xoá khỏi localStorage
    let savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    savedComments = savedComments.filter(c => c !== text);
    localStorage.setItem("comments", JSON.stringify(savedComments));
  });

  commentDiv.appendChild(comment);
  commentDiv.appendChild(deleteBtn);
  list.appendChild(commentDiv);
}
 
const backToTop = document.getElementById("backToTop");

// Hiện nút khi cuộn xuống
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// Cuộn về đầu trang khi bấm nút
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});



