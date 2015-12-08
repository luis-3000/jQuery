$(document).ready(function(){
   $('#one').after('<p>New paragraph added after div=#one</p>');
    var $paragraph = $("p");
    $($paragraph).after('#one');
    var $divTwo = $("#two");
    $($divTwo).after($('p'));
    $('p').remove();
});