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
  $(".homeIndex .leftSlide").addClass("slideShow");
});

// 하나씩 반응하는 트리거
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

// 하나씩 나오게
function scrollTriggerEach({
  selector,
  className,
  startPoint = 0.8,
  offset = 0,
}) {
  const $nodes = $(selector);
  if (!$nodes.length) return;
  let winH = window.innerHeight;
  const onResize = () => {
    winH = window.innerHeight;
  };
  const check = () => {
    $nodes.each(function () {
      const $el = $(this);
      if ($el.hasClass(className)) return;
      const rectTop = this.getBoundingClientRect().top;
      if (rectTop <= winH * startPoint - offset) {
        $el.addClass(className);
      }
    });
  };
  $(window).on("scroll", check).on("resize", onResize);
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
    className: "slideShow",
    startPoint: 0.6,
    offset: headerHeight,
  });
  scrollTrigger({
    selector: ".imgName",
    className: "slideShow",
    startPoint: 0.8,
    offset: headerHeight,
  });
  scrollTrigger({
    selector: "#aboutMe .subh3Wrap h3",
    className: "clipShow",
    startPoint: 0.9,
    offset: headerHeight,
  });
  scrollTriggerEach({
    selector: ".aboutMeText p",
    className: "slideShow",
    startPoint: 0.9,
    offset: headerHeight,
  });
}
function skillAni() {
  const headerHeight = $("header").outerHeight() || 0;
  scrollTrigger({
    selector: "#skill .h2Wrap h2",
    className: "showUnderLine",
    startPoint: 0.7,
    offset: headerHeight,
  });
  scrollTrigger({
    selector: ".ingredientText p",
    className: "slideShow",
    startPoint: 0.7,
    offset: headerHeight,
  });
  scrollTrigger({
    selector: ".originGroup p",
    className: "slideShow",
    startPoint: 0.7,
    offset: headerHeight,
  });
  scrollTriggerEach({
    selector: ".starList li",
    className: "slideShow",
    startPoint: 0.7,
    offset: headerHeight,
  });
  scrollTrigger({
    selector: "#skill .subh3Wrap h3",
    className: "clipShow",
    startPoint: 0.65,
    offset: headerHeight,
  });
  scrollTriggerEach({
    selector: ".nameOrigin",
    className: "slideShow",
    startPoint: 0.65,
    offset: headerHeight,
  });
}
function projectsAni() {
  const headerHeight = $("header").outerHeight() || 0;
  scrollTrigger({
    selector: "#projects .h2Wrap h2",
    className: "showUnderLine",
    startPoint: 0.7,
    offset: headerHeight,
  });
  scrollTrigger({
    selector: "#projects .subh3Wrap h3",
    className: "clipShow",
    startPoint: 0.65,
    offset: headerHeight,
  });
}
function contactAni() {
  const headerHeight = $("header").outerHeight() || 0;
  scrollTrigger({
    selector: "#contact .h2Wrap h2",
    className: "showUnderLine",
    startPoint: 0.7,
    offset: headerHeight,
  });
  scrollTrigger({
    selector: "#contact .subh3Wrap h3",
    className: "clipShow",
    startPoint: 0.65,
    offset: headerHeight,
  });
  scrollTrigger({
    selector: ".contactText p",
    className: "slideShow",
    startPoint: 0.8,
    offset: headerHeight,
  });
  scrollTrigger({
    selector: ".reservation",
    className: "slideShow",
    startPoint: 0.8,
    offset: headerHeight,
  });
}
$(function () {
  aboutMeAni();
  skillAni();
  projectsAni();
  contactAni();
});

$(function () {
  const swiper = new Swiper(".swiper", {
    loop: true, // 무한 반복
    slidesPerView: 1, // 한 화면에 보여줄 슬라이드 개수
    spaceBetween: 20, // 간격(px)
    autoplay: {
      delay: 4500, // 2.5초마다 자동 전환
      disableOnInteraction: true,
    },
    // 페이지네이션
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
