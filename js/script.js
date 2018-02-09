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
    $('.navbtn1').clickToggle(function() {
        $('.navLogin').css({ 'display': 'grid' });
        $('.navbtns').css({ 'display': 'none' });
    });
});