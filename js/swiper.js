let banner = new Swiper('.bannerSlide', {
    loop : true,
    autoplay: {disableOnInteraction: false},
    pagination : {el : '.swiper-pagination', clickable : true},
});

/* 서비스 슬라이드; 모바일에서만 슬라이드 생기게 */
let ww = $(window).width();
let menuSwiper = undefined;

function initSwiper() {
    if(ww <= 992 && menuSwiper == undefined) {
        menuSwiper = new Swiper('.serviceSlide', {
            slidesPerView : 2,
            autoplay : true,
            scrollbar:{
                el : '.swiper-scrollbar',
                draggable: true
            }
        });
    } else if(ww > 992 && menuSwiper != undefined) {
        menuSwiper.destroy();
        menuSwiper = undefined;
    }
};

initSwiper();

$(window).on('resize', function() {
    ww = $(window).width();
    initSwiper();
});