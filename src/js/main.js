$('.slick-box').slick({
  infinite: true,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: true,
  variableWidth: true,
  responsive: [{
    breakpoint: 640,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      infinite: true,
      dots: true,
      arrows: false,
      touchMove: true,
      variableWidth: false,
    },
  }],
});
