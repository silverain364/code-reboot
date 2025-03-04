$(function(){
    $('.notice ul li:nth-child(1)').on('click', function(){
        $('.modal-wrap').fadeIn()
    })

    $('.closeBtn').on('click', function(){
        $('.modal-wrap').fadeOut()
    })

    
    $('.nav-list').hover(function(){
        $('.sub-list').stop().slideDown()
    })
    
    $('.sub-list').mouseleave(function(){
        setTimeout(function(){
            $('.sub-list').stop().slideUp()
        },1000)
    })
    // $('.go').on('click', function(){
    //     window.location.href = $('#site').val()
    //     console.log($('#site').val());
        
    // })

    const swiper = new Swiper(".hero", {
        pagination: {
          el: ".swiper-pagination",
        },
        loop:true,
        autoplay:true,
        speed:3000
      });
})

document.querySelector('.go').addEventListener