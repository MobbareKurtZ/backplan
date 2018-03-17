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
            if ($('.navLogin').css('display') == 'flex') {
                $('.navLogin').fadeOut(400);
                $('.navbtns').fadeIn(400);
            };
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
            setTimeout(function () {
                if ($('.navLogin').css('display') == 'flex') {
                    $('.navLogin').css({ 'display': 'none' });
                    $('.navbtns').css({ 'display': 'grid' });
                };
            }, 400);
        });
    //  LOGIN FORM
    $('.navbtn1').click(function () {
        $('.navLogin').css({ 'display': 'flex' });
        $('.navbtns').css({ 'display': 'none' });
    });
    //  SAVE
    $('.save i').click(function () {
        $('.savepop').toggle(400);
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
        $('div[class="rlist"] .list_item i').fadeOut(300, function () {
            $(this).text("delete").fadeIn(300);
        });
    },
        function () {
            $('div[class="rlist"] .list_item i').fadeOut(300, function () {
                $('div[class="rlist"] .list_item i').text('place').fadeIn(400);
                $('div[class="rlist"] .list_item i').eq(0).text('near_me');
                $('div[class="rlist"] .list_item i').eq($('.rlist').index() - 1).text('flag');
            });
        });
    $('.delete i').click(function () {
        $('.delete').toggleClass('inactive');
    });
    $(".list_item").click(function (e) {
        e.stopPropagation();
        if ($(this).children('i').text() == "delete") {
            $(this).parent().hide();
        }
    });
    //  MAP TOGGLE
    $('.map').click(function () {
        $('.karta').toggle(400);
        $('.map').toggleClass('inactive');
    });
    //  DEST SEARCH
    $('.srcbar').focus(function () {
        $('div[class="rlist search"]').show();
        $('div[class="rlist"]').hide();
        $('.srcbar, .search').blur(function () {
            $('.search .list_item i').click(function () {
                var list = $(this).parent().parent().parent().clone();
                $(list).children('.front').children().children('i').text('flag');
                $('div[class="rlist"]').children().last().before(list);
                $('div[class="rlist search"]').hide();
                $('div[class="rlist"]').show();
            });
        });
        $('div[class="rlist"] .list_item i').text('place');
        $('div[class="rlist"] .list_item i').eq(0).text('near_me');
    });
    $(".srcbar").on("keyup", function () {
        var g = $(this).val().toLowerCase();
        $(".rlist div h2").each(function () {
            var s = $(this).text().toLowerCase();
            $(this).closest('.rlist > div')[s.indexOf(g) !== -1 ? 'show' : 'hide']();
        });
    });

    //  NEW POP
    $('#main_dgb .list > h2 i').clickToggle(function () {
        $('.newpop').toggle(400);
        $('#main_dgb .list > h2 i').css({ 'background-color': '#2c5f61' });
    },
        function () {
            $('.newpop').toggle(400);
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
        $('.resclick i').addClass('rotate180');
    },
        function () {
            $('.resor').animate({
                bottom: "-260px"
            }, 400);
            $('.resclick i').removeClass('rotate180');
        });
    //  BUDGET TOTAL
    $(".sumbtn").click(function () {
        var sum = parseInt($(this).siblings(".num1").val()) + parseInt($(this).siblings(".num2").val()) + parseInt($(this).siblings(".num3").val());
        $(this).parent('.values').siblings('.sum').val(sum + 'kr');
    });
    $('.sumbtn, .max').on('click, keyup', function(){
        var tot = 0
        var max = parseInt($('.max').val());
        for (var i = 0; i < 3; i++) {
            var tal = parseInt($('.sum').val()) || 0;
            tot = tot + parseInt($('.sum').eq(i).val());
            console.log(tot);
        };
        if (tot > max) {
            $('.max').addClass('sumred');
        } else {
            $('.max').removeClass('sumred');
        };
    });
    //  SELECT PERSONS + CHAT SHOW
    $('.person').clickToggle(function () {
        $(this).toggleClass('inactive');
        i = $('.inactive').length + 1
        var text = "\n" + "Person" + i + ": Hej!"
        $(this).parent('.persons').siblings('.chat').append(text);
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
            i = $(this).parent('.persons').children('.inactive').length + 2
            var text = "\n" + "Person" + i + ": Hej!"
            $(this).parent('.persons').siblings('.chat').text(function () {
                return $(this).text().replace(text, '');
            });
        });
    //  DEST VAL 
    $('.dests h4').clickToggle(function () {
        $(this).delay(50).addClass('destgrow');
    },
        function () {
            if ($('.dests h4').hasClass('destgrow') == true) {
                $('.dests h4').removeClass('destgrow');;
            };
            $(this).delay(50).removeClass('destgrow');
        });
    //  CHAT
    $('.chatsend').click(function () {
        var text = "\n" + "Jag: " + $(this).siblings('.chatwrite').val();
        $(this).parent('.chatform').siblings('.chat').append(text);
        $(this).siblings('.chatwrite').val('');
    });
    $('.chatwrite').keypress(function (e) {
        if (e.which == 13) {
            var text = "\n" + "Jag: " + $(this).val();
            $(this).parent('.chatform').siblings('.chat').append(text);
            $(this).val('');
        }
    });

    //  BDG FLIP
    $('.rlist1').flip({ trigger: 'manual', axis: 'x', reverse: 'true' });
    $('.rlist2').flip({ trigger: 'manual', axis: 'x', reverse: 'true' });
    $('.rlist3').flip({ trigger: 'manual', axis: 'x', reverse: 'true' });
    $('.rlist4').flip({ trigger: 'manual', axis: 'x', reverse: 'true' });
    $('.rlist5').flip({ trigger: 'manual', axis: 'x', reverse: 'true' });
    $('.mxbdg').flip({ trigger: 'manual', axis: 'x', reverse: 'true' });
    $('.d_budget, .m_budget').click(function () {
        $('.rlist1').flip('toggle');
        $('.rlist2').flip('toggle');
        $('.rlist3').flip('toggle');
        $('.rlist4').flip('toggle');
        $('.rlist5').flip('toggle');
        $('.mxbdg').flip('toggle');
    });
    $('.d_budget').click(function () {
        $('.d_budget').toggleClass('inactive');
    });
    $('.m_budget').click(function () {
        $('.m_budget').toggleClass('inactive');
    });
});