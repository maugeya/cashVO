$(() => {
  console.log('carousel loading');
  $('.your-class').slick({
    dots: true,
    autoplay: true,
    infite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});
