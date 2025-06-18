// menu button logic
var menuBtn = document.getElementById("menu");
var menu = document.getElementById("links");
var closeBtn = document.getElementById("close")

  //  menuBtn.onclick = () => {
  //   menu.classList.add("active");
  // };
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
  
