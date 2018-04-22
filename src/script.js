$("#nav-icon").click(function(){
    $(this).toggleClass('active');
    $(".menu").animate({
        height: "toggle"
    });
});