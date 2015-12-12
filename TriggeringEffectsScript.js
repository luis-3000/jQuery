

$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('fast');
    });
    
    // Turn the planet red
    $('div').hover(function() {
        $(this).addClass('red'); 
    });
});