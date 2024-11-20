$(function () {
  let baseline = -200;

  let con1 = $("#con1").offset().top + baseline;
  let con2 = $("#con2").offset().top + baseline;
  let con3 = $("#con3").offset().top + baseline;
  let con4 = $("#con4").offset().top + baseline;
  let con5 = $("#con5").offset().top + baseline;
  let con6 = $("#con6").offset().top + baseline;
  // console.log(con1, con2, con3, con4);

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    // console.log(scroll);

    if (scroll >= con1 && scroll <= con2) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(0).addClass("on");

      $("#navi").css({ opacity: "0" });
      $("header").css({ opacity: "0" });
    } else if (scroll >= con2 && scroll <= con3) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(1).addClass("on");

      $("#navi").css({ opacity: "1" });
      $("header").css({ opacity: "1" });
    } else if (scroll >= con3 && scroll < con4) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(2).addClass("on");

      $("#navi").css({ opacity: "1" });
      $("header").css({ opacity: "1" });
    } else if (scroll >= con4 && scroll < con5) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(3).addClass("on");

      $("#navi").css({ opacity: "1" });
      $("header").css({ opacity: "1" });
      $("#con2 li").addClass("up");
    } else {
      $("#navi li").removeClass("on");
      $("#navi li").eq(4).addClass("on");

      $("#navi").css({ opacity: "1" });
      $("header").css({ opacity: "1" });
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
