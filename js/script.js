(function($) {
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));

$(document).ready(function() {
    $('.navLogin').css({ 'display': 'none' });
    $('.text2').fadeOut();
    //  NAVBAR
    $('.menuic').clickToggle(function() {
            $('#navbar').animate({
                top: "0px"
            }, 400);
            $('.menuic').toggleClass('rotate');
            $('.bluroverlay').toggleClass('bluroverlayActive');
        },
        function() {
            $('#navbar').animate({
                top: "-270px"
            }, 400);
            $('.menuic').toggleClass('rotate');
            $('.bluroverlay').toggleClass('bluroverlayActive');
        });
    //  LOGIN FORM
    $('.navbtn1').click(function() {
        $('.navLogin').css({ 'display': 'grid' });
        $('.navbtns').css({ 'display': 'none' });
    });
    //  SAVE
    $('.saveic').clickToggle(function() {
        $('.savepop').css({ 'display': 'block' });
        $('.saveic').toggleClass('md-inactive');
    },
    function() {
        $('.savepop').css({ 'display': 'none' });
        $('.saveic').toggleClass('md-inactive');
    });
    //  TRIPPOP LIST
    $('.trips').clickToggle(function() {
        $('.trippop').animate({
            bottom: "100%"
        }, 400);
        $('.trips').toggleClass('inactive');
    },
    function() {
        $('.trippop').animate({
            bottom: "-600%"
        }, 400);
        $('.trips').toggleClass('inactive');
    });
    //  DELETE FLIP
    $('.start').flip({'trigger': 'manual'});
    $('.check').flip({'trigger': 'manual'});
    $('.fin').flip({'trigger': 'manual'});
    $('.delete').click(function(){
        $('.start').flip('toggle');
        $('.check').flip('toggle');
        $('.fin').flip('toggle');
    });
    $('.delic').clickToggle(function() {
        $('.delic').toggleClass('md-inactive');
    },
    function() {
        $('.delic').toggleClass('md-inactive');
    });
    //  MAP TOGGLE
    $('.map').clickToggle(function() {
        $('.karta').css({ 'display': 'block' });
    },
    function() {
        $('.karta').css({ 'display': 'none' });
    });
    //  SLIDESHOW
    var images=new Array('img/bali.jpeg','img/iceland.jpeg');
    var nextimage=0;

    doSlideshow();

    function doSlideshow()
    {
        if($('.slideshowimage').length!=0)
        {
            $('.slideshowimage').fadeOut(500,function(){slideshowFadeIn();$(this).remove()});
        }
        else
        {
            slideshowFadeIn();
        }
    }
    function slideshowFadeIn()
    {
        $('.slideshow').prepend($('<img class="slideshowimage" src="'+images[nextimage++]+'" style="display:none">').fadeIn(500,function(){setTimeout(doSlideshow,20000);}));
        if(nextimage>=images.length)
            nextimage=0;
    };
});