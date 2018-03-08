//  CLICK TOGGLE

(function ($) {
    $.fn.clickToggle = function (func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function () {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));

$(document).ready(function () {
    //$('.navLogin').css({ 'display': 'none' });
    //  LOGIN ANIMATE DESKTOP
    $('.d_accic').clickToggle(function () {
        $('.navbtns').animate({
            top: "5px"
        }, 400);
        $('#navbar > a').fadeOut(300);
    },
        function () {
            $('.navbtns').animate({
                top: "-70px"
            }, 400);
            $('#navbar > a').fadeIn(300);
        });
    //  NAVBAR
    $('.menuic').clickToggle(function () {
        $('#navbar').animate({
            top: "0px"
        }, 400);
        $('.menuic').toggleClass('rotate');
        $('.bluroverlay').toggleClass('bluroverlayActive');
    },
        function () {
            $('#navbar').animate({
                top: "-270px"
            }, 400);
            $('.menuic').toggleClass('rotate');
            $('.bluroverlay').toggleClass('bluroverlayActive');
        });
    //  LOGIN FORM
    $('.navbtn1').click(function () {
        $('.navLogin').css({ 'display': 'flex' });
        $('.navbtns').css({ 'display': 'none' });
    });
    //  SAVE
    $('.save i').clickToggle(function () {
        $('.savepop').css({ 'display': 'block' });
        $('.save').toggleClass('inactive');
    },
        function () {
            $('.savepop').css({ 'display': 'none' });
            $('.save').toggleClass('inactive');
        });
    //  TRIPPOP LIST MOBILE
    $('.trips').clickToggle(function () {
        $('.trippop').animate({
            bottom: "0%"
        }, 400);
        $('.trips').toggleClass('inactive');
    },
        function () {
            $('.trippop').animate({
                bottom: "-650%"
            }, 400);
            $('.trips').toggleClass('inactive');
        });
    //  DELETE SWITCH
    $('.delete').clickToggle(function () {
        $(".start i").fadeOut(300, function () {
            $(this).text("delete").fadeIn(300);
        });
        $(".check i").fadeOut(300, function () {
            $(this).text("delete").fadeIn(300);
        });
        $(".fin i").fadeOut(300, function () {
            $(this).text("delete").fadeIn(300);
        });
    },
        function () {
            $(".start i").fadeOut(300, function () {
                $(this).text("near_me").fadeIn(300);
            });
            $(".check i").fadeOut(300, function () {
                $(this).text("place").fadeIn(300);
            });
            $(".fin i").fadeOut(300, function () {
                $(this).text("flag").fadeIn(300);
            });
        });
    $('.delete i').clickToggle(function () {
        $('.delete').toggleClass('inactive');
    },
        function () {
            $('.delete').toggleClass('inactive');
        });
    $(".list_item").click(function (e) {
        e.stopPropagation();
        if ($(this).children('i').text() == "delete") {
            $(this).parent().hide();
        }
    });
    //  MAP TOGGLE
    $('.map').clickToggle(function () {
        $('.karta').css({ 'display': 'block' });
        $('.map').toggleClass('inactive');
    },
        function () {
            $('.karta').css({ 'display': 'none' });
            $('.map').toggleClass('inactive');
        });
    //  DEST SEARCH
    $('.srcbar').click(function () {
        $('.rlist .list_item i').text('add')
    });
    //  NEW POP
    $('#main_dgb .list > h2 i').clickToggle(function () {
        $('.newpop').css({ 'display': 'block' });
        $('#main_dgb .list > h2 i').css({ 'background-color': '#2c5f61' });
    },
        function () {
            $('.newpop').css({ 'display': 'none' });
            $('#main_dgb .list > h2 i').css({ 'background-color': '#042a2b' });
        });
    $('#main_dgb .reslist > h2 i').clickToggle(function () {
        $('.newpop').css({ 'display': 'block' });
        $('#main_dgb .reslist > h2 i').css({ 'background-color': '#2c5f61' });
    },
        function () {
            $('.newpop').css({ 'display': 'none' });
            $('#main_dgb .reslist > h2 i').css({ 'background-color': '#042a2b' });
        });
    //  RESOR SLIDE UP
    $('.resclick').clickToggle(function () {
        $('.resor').animate({
            bottom: "0px"
        }, 400);
        $('.resclick i').toggleClass('rotate180');
    },
        function () {
            $('.resor').animate({
                bottom: "-260px"
            }, 400);
            $('.resclick i').toggleClass('rotate180');
        });
    //  BUDGET TOGGLE
    $('.m_budget').clickToggle(function () {
        $('.bdg1').css({ 'display': 'block' });
        $('.bdg2').css({ 'display': 'block' });
        $('.bdg3').css({ 'display': 'block' });
        $('.m_budget').toggleClass('inactive');
    },
        function () {
            $('.bdg1').css({ 'display': 'none' });
            $('.bdg2').css({ 'display': 'none' });
            $('.bdg3').css({ 'display': 'none' });
            $('.m_budget').toggleClass('inactive');
        });
    //  BUDGET TOTAL
    $(".sumbtn").click(function () {
        var sum = parseInt($(this).siblings(".num1").val()) + parseInt($(this).siblings(".num2").val()) + parseInt($(this).siblings(".num3").val());
        var max = parseInt($('.max').val());
        if (sum > max) {
            $(this).parent('.values').siblings('.sum').toggleClass('sumred');
        };
        $(this).parent('.values').siblings('.sum').val(sum + "kr");
    });
    //  SELECT PERSONS + CHAT SHOW
    $('.person').clickToggle(function () {
        $(this).toggleClass('inactive');
        if ($('.dest').css('height') != '360px') {
            $(this).parent('.persons').parent('.dest').css({ 'min-height': '440px' }, 400)
        };
    },
        function () {
            $(this).toggleClass('inactive');
            if ($('.dest').css('height') != '360px') {
                if ($(this).siblings('.person').hasClass('inactive') == false) {
                    $(this).parent('.persons').parent('.dest').css({ 'min-height': '175px' });
                };
            };
        });
    //  DEST VAL 
    $('.dests h4').clickToggle(function(){
        console.log($('.dests h4').hasClass('destgrow'));
        $(this).delay(50).addClass('destgrow');
    },
        function () {
            if ($('.dests h4').hasClass('destgrow') == true) {
                $('.dests h4').removeClass('destgrow');;
            };
            $(this).delay(50).removeClass('destgrow');
        });
    //  CHAT
    $('.chatsend').on('click', function () {
        var text = "\n" + "Jag: " + $(this).siblings('.chatwrite').val();
        $(this).parent('.chatform').siblings('.chat').append(text);
        $(this).siblings('.chatwrite').val('');
    });
    //  BDG FLIP
    $('.rlist1').flip({ trigger: 'manual', axis: 'x', reverse: 'true' });
    $('.rlist2').flip({ trigger: 'manual', axis: 'x', reverse: 'true' });
    $('.rlist3').flip({ trigger: 'manual', axis: 'x', reverse: 'true' });
    $('.mxbdg').flip({ trigger: 'manual', axis: 'x', reverse: 'true' });
    $('.d_budget, .m_budget').click(function () {
        $('.rlist1').flip('toggle');
        $('.rlist2').flip('toggle');
        $('.rlist3').flip('toggle');
        $('.mxbdg').flip('toggle');
    });
    $('.d_budget').clickToggle(function () {
        $('.d_budget').toggleClass('inactive');
    },
        function () {
            $('.d_budget').toggleClass('inactive');
        });
    //  MAX BUDGET
        $('')
});