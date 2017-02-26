(function ($) {

    var wow = new WOW({
        mobile: false
    });

    wow.init();

    $('#copyright-year').text((new Date).getFullYear());

    $(window).on('load', function () {
        $('#loading-status').fadeOut();
        $('#loading').delay(350).fadeOut('slow');
    });

    $('a[href*=\\#]').click(function (e) {
        var that = $(this);
        $('html, body').animate({
            scrollTop: $(that.attr('href')).offset().top
        }, 800);
        e.preventDefault();
    });

    var color1 = '#EDB92E';
    var color2 = '#F85931';
    var color3 = '#CE1836';
    var color4 = '#009989';

    var bar1 = new ProgressBar.Circle('#chart-1', {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: color1,
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null,
        text: {
            value: '9 Years'
        }
    });

    var bar2 = new ProgressBar.Circle('#chart-2', {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: color2,
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null,
        text: {
            value: '8 Years'
        }
    });

    var bar3 = new ProgressBar.Circle('#chart-3', {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: color3,
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null,
        text: {
            value: '6 Years'
        }
    });

    var bar4 = new ProgressBar.Circle('#chart-4', {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: color4,
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null,
        text: {
            value: '7 Years'
        }
    });

    var animated = false;

    $(window).scroll(function () {
        if (!animated && $('#chart-1').offset().top < $(this).height() + $(this).scrollTop()) {
            bar1.animate(0.9);
            bar2.animate(0.8);
            bar3.animate(0.6);
            bar4.animate(0.7);
            animated = true;
        }
    });

})(jQuery);