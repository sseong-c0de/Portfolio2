$(function () {
  var navAni = 0;
  $(".openBtn").on("click", function () {
    if (navAni === 0) {
      $("nav").animate(
        {
          left: "0%",
        },
        300
      );
      navAni = 1;
      $("body").addClass("noScroll");
    }

    if ($("header").hasClass("headerDown")) {
      $("header").removeClass("headerDown");
    }
  });
  $(".closeBtn").on("click", function () {
    if (navAni === 1) {
      $("nav").animate(
        {
          left: "-100%",
        },
        300
      );
      navAni = 0;
      $("body").removeClass("noScroll");
    }
  });
  $(".gnb > li a").on("click", function () {
    if (navAni === 1) {
      $("nav").animate(
        {
          left: "-100%",
        },
        300
      );
      navAni = 0;
      $("body").removeClass("noScroll");
    }
  });
});
let lastTop = 0;
$(function () {
  $(window).on("scroll", function () {
    const scrollTop = $(this).scrollTop();
    if (scrollTop > lastTop && scrollTop > 0) {
      $("header").addClass("headerDown");
    } else {
      $("header").removeClass("headerDown");
    }
    lastTop = scrollTop;
  });
});

$(function () {
  const base = 0.5;
  const step = 0.1;
  $(".homeIndex li").each(function (i) {
    $(this).css("transition-delay", base + i * step + "s");
  });
  $(".homeText").addClass("fireShow");
  $(".homeIndex li").addClass("slideInLeft");
});

// 아래에 더 좋게 만든 거 있음 지우려면 지웓 ㅗ됨
// $(function () {
//   let winH = window.innerHeight;
//   $(window).on("resize", function () {
//     winH = window.innerHeight;
//   });
//   $(window).on("scroll", function () {
//     const rectTop = $("#aboutMe .h2Wrap h2")[0].getBoundingClientRect().top;

//     if (rectTop <= winH * 0.8) {
//       $("#aboutMe .h2Wrap h2").addClass("showUnderLine");
//     }
//   });
// });

// $(function () {
//   let winH = window.innerHeight;
//   $(window).on("resize", function () {
//     winH = window.innerHeight;
//   });
//   $(window).on("scroll", function () {
//     const rectTop = $(".meImg")[0].getBoundingClientRect().top;
//     if (rectTop <= winH * 0.8) {
//       $(".meImg").addClass("slideInBottom");
//     }
//   });
// });

// $(function () {
//   let winH = window.innerHeight;
//   const onResize = function () {
//     winH = window.innerHeight;
//   };
//   const onscroll = function () {
//     const h2Top = $("#aboutMe .h2Wrap h2")[0].getBoundingClientRect().top;
//     if (h2Top <= winH * 0.5) {
//       $("#aboutMe .h2Wrap h2").addClass("showUnderLine");
//       $(window).off("scroll", onscroll).off("resize", onResize);
//     }
//   };
//   $(window).on("resize", onResize).on("scroll", onscroll);
//   onscroll();
// });

function scrollTrigger({ selector, className, startPoint = 0.7, offset = 0 }) {
  const $target = $(selector);
  if (!$target.length) {
    return;
  }
  let winH = window.innerHeight;
  const onResize = () => {
    winH = window.innerHeight;
  };
  const onScroll = () => {
    const rectTop = $target[0].getBoundingClientRect().top;
    if (rectTop <= winH * startPoint - offset) {
      $target.addClass(className);
      $(window).off("scroll", onScroll).off("resize", onResize);
    }
  };
  $(window).on("scroll", onScroll).on("resize", onResize);
  onScroll();
}

function aboutMeAni() {
  const headerHeight = $("header").outerHeight() || 0;
  scrollTrigger({
    selector: "#aboutMe .h2Wrap h2",
    className: "showUnderLine",
    startPoint: 0.7,
    offset: headerHeight,
  });
  scrollTrigger({
    selector: ".meImg",
    className: "slideInBottom",
    startPoint: 0.6,
    offset: headerHeight,
  });
  scrollTrigger({
    selector: ".imgName",
    className: "slideInBottom",
    startPoint: 0.8,
    offset: headerHeight,
  });
}

$(function () {
  aboutMeAni();
});
