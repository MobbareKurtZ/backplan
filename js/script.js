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
    $('.navbtn1').clickToggle(function() {
        $('.navLogin').css({ 'display': 'grid' });
        $('.navbtns').css({ 'display': 'none' });
    });
    //  SLIDESHOW
    var images=new Array('https://images.pexels.com/photos/771079/pexels-photo-771079.jpeg','https://static.pexels.com/photos/450062/pexels-photo-450062.jpeg');
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
    $(function(){
    
        $('.texts .txtslides:gt(0)').hide();
        setInterval(function(){
          $('.texts :first-child').fadeOut(1000).delay(10000).next('.txtslides').fadeIn(1000)
          .end().appendTo('.texts');
      }, 20000);
        
      });
});