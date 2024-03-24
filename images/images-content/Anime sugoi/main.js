$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
        placement:'right'
    });
    $("form input#search-anime").click(function(){
        $(this).css('outline','none')
    })
    $('#navbar-icon').click(function(){
        $('#header-bottom').stop().slideToggle()
    })
    $('li .anger-bot').click(function(){
        $(this).next().stop().slideToggle(300);
        $(this).nextAll().css('display','block');
        $(this).css('display','none')
    })
    $('li .anger-top').click(function(){
        $(this).prev().stop().slideToggle(300);
        $(this).prevAll().css('display','block');
        $(this).css('display','none')
    })
    $(window).resize(function(){
        $('#navbar-res ul.list-child').slideUp();
        $('li .anger-top').css('display','none');
        $('li .anger-bot').css('display','block');
    })

    // $(window).scroll(function(){
    //     $('#navbar-responsive').slideUp()
    //     $('#navbar-res ul.list-child').slideUp();
    //     $('li .anger-top').css('display','none');
    //     $('li .anger-bot').css('display','block');
    // })
})