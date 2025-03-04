$(function () {


    const menuItem = $('header ul li')
    const subItem = $('header ul li>dl ')

    const tabItem = $('.content .tab-wrap span')
    const tabContent = $('.tab-content-wrap>ul')
    const popup = $('.popup')
    const popupClose = $('.popup .close')

    tabItem.click(function(){
        const i = $(this).index()
        console.log(i);
        tabItem.removeClass('on')
        $(this).addClass('on')
        tabContent.removeClass('active')
        tabContent.eq(i).addClass('active')
        
    })

    $('.notice').children('li').eq(0).click(function(){
        popup.fadeIn()
    })

    popupClose.click(function(){
        popup.fadeOut()
    })

    let menuTimeout;
    menuItem.hover(
        function () {
        openSubMenu($(this))
    },
    function(){
        closeSubMenu($(this))
    }
)

    function openSubMenu(menuItem) {
        clearTimeout(menuTimeout)
        subItem.stop().slideUp()
        menuItem.children('dl').stop().slideDown()
    }
    function closeSubMenu(menuItem) {

        menuTimeout = setTimeout(function () {
            menuItem.children('dl').stop().slideUp()

        }, 300)
    }

})