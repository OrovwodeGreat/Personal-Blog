// menu button logic
var menuBtn = document.getElementById("menu");
var menu = document.getElementById("links");
var closeBtn = document.getElementById("close");
var heroBtn = document.getElementById("btnClick");

// heroBtn.addEventListener("click", onClick)

// function onClick(){
//   this.classList.add("hero-btn.click")
// }


//  closeBtn.onclick = () => {
//   menu.classList.remove("active");
// };

menuBtn.addEventListener("click", function () {
  if (!links.classList.contains("active")) {
    links.classList.add("active");
  }
});

closeBtn.addEventListener("click", function () {
  if (links.classList.contains("active")) {
    links.classList.remove("active");
  }
});

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && e.target !== menuBtn) {
    menu.classList.remove("active");
  }
});

// HIGHLIGHT POST WHEN READ MORE LINK IS CLICKED
document.addEventListener("DOMContentLoaded", () => {
  var hash = window.location.hash;

  if (hash) {
    var post = document.querySelector(hash);
    if (post) {
      post.classList.add("highlight");

      // Optional smooth scroll to center
      post.scrollIntoView({ behavior: "smooth", block: "center" });

      // Optional: remove the highlight after 5 seconds
      setTimeout(() => {
        post.classList.remove("highlight");
      }, 5000);
    }
  }
});

// // blog list display logic
//   var title = document.getElementById("blogTitle");
// var content = document.getElementById("blogContent");
// var btn = document.getElementById("blogBtn");
// var blogForm = document.getElementById("blogForm");

// var storedPost = JSON.parse(localStorage.getItem("posts"));

// btn.addEventListener("click", submitInput);

// function submitInput(x) {
//     x.preventDefault();

//    var collectPost = [
//     {
//       title: title.value,
//       content: content.value
//     }
//   ];

// //   localStorage.setItem("posts", JSON.stringify(collectPost));
// //   var storedPost = JSON.parse(localStorage.getItem("posts")) || [];

// //   var blogList = document.getElementById("blogList");
// //   blogList.innerHTML = `
// //   <div class="blogListStyle">
// //   <div class="blogListWrap">
// //   <h3>${storedPost[0].title}</h3>
// //   <p>${storedPost[0].content}</p>
// //   </div>
// //   </div>
// // `;
// // }
