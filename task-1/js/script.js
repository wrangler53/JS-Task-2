$('.isotope-container').isotope({
    itemSelector: '.isotope-item',
    layoutMode: 'fitRows'
});

$('.menu-container ul li').click(function() {
    $('.menu-container ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');

    $('.isotope-container').isotope({
        filter: selector
    });
    return false;
})