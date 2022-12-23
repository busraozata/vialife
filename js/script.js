function openNav() {
  document.getElementById("menu").style.width = "100%";
  document.getElementById("menu").style.left = "0";
}

function closeNav() {
  document.getElementById("menu").style.width = "0%";
  document.getElementById("menu").style.left = "-100%";
}

const header = document.querySelector(".header");
const headerHeight = parseInt(window.getComputedStyle(header).height);

document.addEventListener("scroll", function () {
  if (window.scrollY > headerHeight) {
    header.classList.add("header_scroll");
  } else {
    header.classList.remove("header_scroll");
  }
});

var swiperBanner = new Swiper(".mySwiperBanner", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 5,
      grid: {
        rows: 2,
      },
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 10,
      grid: {
        rows: 2,
      },
    },
    1500: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
    },
  },
});

var swiper = new Swiper(".mySwiperServiceList", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  /* effect: "fade", */

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
      grid: {
        rows: 1,
      },
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
      grid: {
        rows: 2,
      },
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 0,
      grid: {
        rows: 2,
      },
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 0,
      grid: {
        rows: 2,
      },
    },
  },
});

var swiper = new Swiper(".mySwiperDoctors", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".mySwiperCampaigns", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});
var swiper = new Swiper(".mySwiperCompany", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  spaceBetween: 10,
  loop: true,
  slidesPerView: 2,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

$("input,textarea").val("");
$(".form-group input, .form-group textarea").focusout(function () {
  var text_val = $(this).val();
  if (text_val === "") {
    console.log("empty!");
    $(this).removeClass("has-value");
  } else {
    $(this).addClass("has-value");
  }
});
$("#datepicker").datepicker({
  allowInputToggle: true,
});
$(function () {
  $("#datepicker").datepicker({
    autoclose: true,
    todayHighlight: true,
    allowInputToggle: true,
  });
  /* .datepicker("update", new Date()); */
});

AOS.init();
