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
    //$('.navLogin').css({ 'display': 'none' });
    //  LOGIN ANIMATE
    $('.d_accic').clickToggle(function() {
        $('.navbtns').animate({
            top: "5px"
        }, 400);
        $('#navbar > a').fadeOut(300);
    },
    function() {
        $('.navbtns').animate({
            top: "-70px"
        }, 400);
        $('#navbar > a').fadeIn(300);
    });
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
            bottom: "-650%"
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
    $(".back").click( function (e) {
        e.stopPropagation();
        $(this).parent().parent().hide();
    });
    //  MAP TOGGLE
    $('.map').clickToggle(function() {
        $('.karta').css({ 'display': 'block' });
        $('.map').toggleClass('inactive');
    },
    function() {
        $('.karta').css({ 'display': 'none' });
        $('.map').toggleClass('inactive');
    });
    //  SLIDESHOW
    $(function(){
        $('.fadein img:gt(0)').hide();
        setInterval(function(){
          $('.fadein :first-child').fadeOut()
             .next('img').fadeIn()
             .end().appendTo('.fadein');
            }, 
          3000);
    });
    //  DEST SEARCH
    $('.srcbar').click(function(){
        $('.list .front i').text('add')
    });
});