// Isotope settings
$('.isotope-container').isotope({
    itemSelector: '.isotope-item',
    layoutMode: 'fitRows'
});

// Sort by click
$('.menu-container ul li').click(function() {
    $('.menu-container ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');

    $('.isotope-container').isotope({
        filter: selector
    });
    return false;
})