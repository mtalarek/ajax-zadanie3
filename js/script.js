$(document).ready(function () {
    $('#btn').click(function () {

        // V1
        $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {
                $('body').append($('<p></p>').prepend(`User ID: ${data.userId}`));
                $('body').append($('<p></p>').prepend(`ID: ${data.id}`));
                $('body').append($('<p></p>').prepend(`Title: ${data.title}`));
                $('body').append($('<p></p>').prepend(`Body: ${data.body}`));

        //V2        
/*      $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {
                $('body').append($('<p></p>').prepend(`User ID: ${data.userId}`));
                $('body').append($('<p></p>').prepend(`ID: ${data.id}`));
                $('body').append($('<p></p>').prepend(`Title: ${data.title}`));
                $('body').append($('<p></p>').prepend(`Body: ${data.body}`)); */

            })
            .fail(function (error) {
                console.error(error);
            });
    });
});