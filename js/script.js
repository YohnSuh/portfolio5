$('.hamburger').click(function() {
    $('.gnb').toggleClass('active');
});

$('footer h3').click(function() {
    $(this).toggleClass('toggle');
    $(this).next().stop().slideToggle();
    $(this).parent().siblings().find('.content').stop().slideUp();
});