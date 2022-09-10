var au;
var toHHMMSS = (secs) => {
    var sec_num = parseInt(secs, 10)
    var hours = Math.floor(sec_num / 3600)
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [hours, minutes, seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v, i) => v !== "00" || i > 0)
        .join(":")
}
$(function () {
    au = $("#music")[0];
    console.log($("#music"));
    $("#player ul li").click(function () {
        $("#music").attr('src', $(this).data('src'));
        au.play();
        $("#player li").removeClass('active');
        $(this).addClass('active');
    });

    $("#stop").click(function () {
        au.pause();
        au.currentTime = 0;
    });

    $("#play").click(function () {
        au.play();
    });
    $("#forward").click(function () {
        au.currentTime += 10;
    });
    $("#backward").click(function () {
        au.currentTime -= 10;
    });

    $("#seekbar").click(function (e) {
        let w = $(this).width();
        let parentOffset = $(this).parent().offset();
        //or $(this).offset(); if you really just want the current element's offset
        let relX = e.pageX - parentOffset.left;
        let d= au.duration;
        au.currentTime = (relX * d ) / w;
    });


    setInterval(function () {
        $("#current").text(toHHMMSS(au.currentTime));
        $("#duration").text(toHHMMSS(au.duration));
        let d= au.duration;
        let c = au.currentTime;
        let x = (c * 100) / d;
        $("#progress").css('width',x+'%');
    }, 300);

});