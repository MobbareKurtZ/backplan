$(function() {
    $('#wrapper').vegas({
        delay: 10000,
        valign: 'center',
        slides: [
            { src: "img/bg.jpeg" },
            { src: "img/china.jpg" },
            { src: "img/bali.jpg" }
        ]
    });
});
$(document).ready(function(){
    $('.larr').on('click', function() {
        $('#wrapper').vegas('previous');
    });
    $('.rarr').on('click', function() {
        $('#wrapper').vegas('next');
    });
});