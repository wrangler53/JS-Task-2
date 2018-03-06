$(window).scroll(() => {
    // If page is scrolled more than 50px
    if ($(this).scrollTop() >= 50) {        
        $('#go-to-top-btn').fadeIn(200);    // Fade in the arrow
    } else {
        $('#go-to-top-btn').fadeOut(200);   // Fade out the arrow
    }
});

// On click on arrow
$('#go-to-top-btn').click(() => {      
    $('body,html').animate({
        scrollTop : 0                       
    }, 600);
});