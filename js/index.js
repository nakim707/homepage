$(function () {
  let baseline = -200;
  let footerline = 300;

  let con1 = $("#con1").offset().top;
  let con2 = $("#con2").offset().top + baseline;
  let con3 = $("#con3").offset().top + baseline;
  let con4 = $("#con4").offset().top + baseline;
  let con5 = $("#con5").offset().top + baseline;
  let con6 = $("#con6").offset().top + footerline;
  // console.log(con1, con2, con3, con4);

  // visual active
  $(".logo li:first-child").addClass("active");
  $(".logo li:last-child").addClass("active");
  $(".usLogo1").addClass("active");
  $(".logoLine").addClass("active");
  $(".ring").addClass("active");

  // header underline
  $("header li").on("mouseenter", function () {
    $(this).children("div").stop().animate({ width: "130%" });
  });

  $("header li").on("mouseleave", function () {
    $(this).children("div").stop().animate({ width: "0%" });
  });

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    // console.log(scroll);

    if (scroll >= con1 && scroll <= con2) {
      //con1
      $("#navi li").removeClass("on");
      $("#navi li").eq(0).addClass("on");

      $("#navi").css({ opacity: "0" });
      $("header").css({ opacity: "0" });
    } else if (scroll >= con2 && scroll <= con3) {
      //logo
      $("#navi li").removeClass("on");
      $("#navi li").eq(1).addClass("on");

      $("#navi").css({ opacity: "1" });
      $("header").css({ opacity: "1" });
      $(".popLogo li").addClass("active");
      $(".dicWord").addClass("active");
      $(".dicMean").addClass("active");
      $(".exp1").addClass("active");
      $(".exp2").addClass("active");
      $(".logowrap h3").addClass("active");
      $(".logowrap h2").addClass("active");
    } else if (scroll >= con3 && scroll < con4) {
      //about me
      $("#navi li").removeClass("on");
      $("#navi li").eq(2).addClass("on");

      $("#navi").css({ opacity: "1" });
      $("header").css({ opacity: "1" });
      $(".statusBar").addClass("active");
    } else if (scroll >= con4 && scroll < con5) {
      // portfolio
      $("#navi li").removeClass("on");
      $("#navi li").eq(3).addClass("on");

      $("#navi").css({ opacity: "1" });
      $("header").css({ opacity: "1" });
      $("#con2 li").addClass("up");
    } else if (scroll >= con5 && scroll < con6) {
      // illustration
      $("#navi li").removeClass("on");
      $("#navi li").eq(4).addClass("on");

      $("#navi").css({ opacity: "1" });
      $("header").css({ opacity: "1" });
    } else {
      // contact
      $("#navi li").removeClass("on");
      $("#navi li").eq(4).addClass("on");

      $("#navi").css({ opacity: "1" });
      $("header").css({ opacity: "1" });
      $("#con6 .img").addClass("active");
    }
  });

  $("header li").on("click", function () {
    let i = $(this).index();
    let target = $("#container section").eq(i).offset().top;
    $("html, body").stop().animate({ scrollTop: target });
  });

  $("#navi li").on("click", function () {
    num = $(this).index();
    let target = $("#container section").eq(num).offset().top;

    $("#navi li").removeClass("on");
    $("#navi li").eq(num).addClass("on");
    $("html, body").stop().animate({ scrollTop: target });
  });
});
