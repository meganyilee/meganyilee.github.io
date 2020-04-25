$(function() {
    if ($('.typed').length) {
        var typed_strings = $(".typed").data('typed-items');
        typed_strings = typed_strings.split(',')
        new Typed('.typed', {
            strings: typed_strings,
            loop: false,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }

    var pxChange = 1;
    $(window).scroll(function(e) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > pxChange) {
            $('#back_to_top').fadeIn(100);
        } else {
            $('#back_to_top').fadeOut(100);
        }
    });

    $('#back_to_top').click(function(e) {
        $('html, body').animate({
            scrollTop: 0,
        }, 500, 'swing');
        return false;
    });
});