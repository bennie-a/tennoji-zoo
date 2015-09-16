$(function () {
    var $width = 940;
    var $height = 389;
    var $interval = 　6000;
    var $fade_speed = 3500;
    $("#main_image ul li").css({
        "position": "relative",
        "overflow": "hidden",
        "width": $width,
        "height": $height
    });
    $("#main_image ul li").hide().css({
        "position": "absolute",
        "top": 0,
        "left": 0,
    });
    $("#main_image ul li:first").addClass("active").show();
    setInterval(function () {
        var $active = $("#main_image ul li.active");
        var $next = $active.next("li").length ? $active.next("li") : $("#main_image ul li:first");
        $active.fadeOut($fade_speed).removeClass("active");
        $next.fadeIn($fade_speed).addClass("active");
    }, $interval);
});