$('.container').scroll(function() {
    let currentPosition = $('.container').offset().top;

    $('section').each(function() {
        let top = $(this).position().top;
        let bottom = top + $(this).outerHeight();

        if(currentPosition >= top && currentPosition <= bottom) {
            $('header').find('a').removeClass('active');
            $('section').removeClass('active');

            $(this).addClass('active');
            $('header').find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
    })
});