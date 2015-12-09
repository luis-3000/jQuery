$(document).ready(function() {
    $('#button').click(function() {    
        var toAdd = $('input[name=checkListItem]').val();
        //Append new item to body 
        $('.list').append('<div class="item">' + toAdd + '</div>');
    });

`	// Remove What's been Clicked
    // $(document).on('event', 'selector', function(){...});
    $(document).on('click', '.item', .remove($(this)));
});