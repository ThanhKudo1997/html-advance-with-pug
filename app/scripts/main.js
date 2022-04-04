// Slick slider
// $(document).ready(function () {
//   $(".quote-list").slick({
//     prevArrow:
//       "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   });
// });

// =========== EVEN SHOW MENU MOBILE =============

const menuToggle = document.querySelector(".header-toggle");
const menuHeader = document.querySelector(".header-menu");
const expandClass = "is-expand";
menuToggle.addEventListener("click", function () {
  menuHeader.classList.add(expandClass);
})

window.addEventListener("click", function (e) {
  if (!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")) {
    menuHeader.classList.remove(expandClass);
  }
})

// ANIMATION 

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
var reveals = document.querySelectorAll('.reveal');

function reveal() {
  const windowScrollTop = window.pageYOffset;
  console.log("window top" + windowScrollTop);
  [...reveals].forEach((item) => {
    console.log("heiht" + item.offsetHeight);

      if (item.getBoundingClientRect().top - 150 < windowScrollTop) {
        item.classList.add('active')
      } else {
        item.classList.remove('active')
      }
  })
}