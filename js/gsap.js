$(function () {
  gsap.utils.toArray(".introduce").forEach(function (introduce) {
    gsap.timeline({
      scrollTrigger: {
        trigger: introduce,
        start: "top bottom",
        end: "bottom top",
        toggleClass: { targets: introduce, className: "active" },
        scrub: 2,
        markers: true,
      },
    });
  });
  gsap.utils.toArray(".selfi").forEach(function (selfi) {
    gsap.timeline({
      scrollTrigger: {
        trigger: selfi,
        start: "top bottom",
        end: "bottom top",
        toggleClass: { targets: selfi, className: "active" },
        scrub: 2,
        markers: true,
      },
    });
  });
  // illust
  let illust = gsap.utils.toArray(".illust li");

  gsap.to(illust, {
    xPercent: -100 * (illust.length - 1),
    scrollTrigger: {
      trigger: "#con5",
      pin: true,
      scrub: 2,
      start: "center center",
      end: "200%",
      markers: true,
    },
  });

  // contact turn
  let icon = gsap.utils.toArray("#con6 .img");

  // gsap.to(icon, {
  //   scrollTrigger: {
  //     trigger: "#con6",
  //     pin: true,
  //     scrub: 2,
  //     start: "top top",
  //     end: "bottom",
  //     toggleClass: { targets: icon, className: "active" },
  //     markers: true,
  //   },
  // });
});
