
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
        let w_width=$(window).width();
        if(w_width<=768){
            $("li#anime-list-navigation nav ul li").eq(5).css('display','none');
            $("li#anime-list-navigation nav ul li").eq(4).css('display','none');
        }
   
    })
    $('#anime-view-time nav a.nav-link').click(function(){
        $('#anime-view-time nav a.nav-link').css('background','#607D8B');
        $('#anime-view-time nav a.nav-link').css('color','#c3c3c3')
        $(this).css('background','#eaab0c');
        $(this).css('color','#000')

    })
   
    // $(window).scroll(function(){
    //     $('#navbar-responsive').slideUp()
    //     $('#navbar-res ul.list-child').slideUp();
    //     $('li .anger-top').css('display','none');
    //     $('li .anger-bot').css('display','block');
    // })
})