// menu button logic
var menuBtn = document.getElementById("menu");
var menuLinks = document.getElementById("links"); // Renamed to avoid confusion with menuBtn
var closeBtn = document.getElementById("close");

//  closeBtn.onclick = () => {
//   menuLinks.classList.remove("active"); // This was an alternative way, keeping the addEventListener approach
// };

if (menuBtn && menuLinks) {
  menuBtn.addEventListener("click", function () {
    if (!menuLinks.classList.contains("active")) {
      menuLinks.classList.add("active");
    }
  });
}

if (closeBtn && menuLinks) {
  closeBtn.addEventListener("click", function () {
    if (menuLinks.classList.contains("active")) {
      menuLinks.classList.remove("active");
    }
  });
}

if (menuLinks && menuBtn) { // Ensure both are present for this logic
  document.addEventListener("click", function (e) {
    // If the click is outside the menuLinks and not on the menuBtn itself
    if (!menuLinks.contains(e.target) && e.target !== menuBtn) {
      if (menuLinks.classList.contains("active")) {
        menuLinks.classList.remove("active");
      }
    }
  });
}

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
