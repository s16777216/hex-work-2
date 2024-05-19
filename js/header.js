$(document).ready(function (){
    $('.header-wrapper>.btn').click(function() {
        $('.header-wrapper>.btn').toggleClass('active');
        $(".header .nav-modal").fadeToggle(200)
    })
})
