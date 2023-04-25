$(document).ready(function () {
  //slider
  $('.slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
  })

  //click seções
  $('a[href^="#sobremim"').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('.container_').offset().top,
      },
      500,
    )
    $('.header-wrapper').hide()
  })

  $('a[href^="#portifolio"').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('.container').offset().top,
      },
      500,
    )
  })

  $('a[href^="#servicos"').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('.container2').offset().top,
      },
      500,
    )
  })

  $('a[href^="#contato"').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('.container4').offset().top,
      },
      500,
    )
  })

  $('a[href^="#feedbacks"').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('.container3').offset().top,
      },
      500,
    )
  })

})
