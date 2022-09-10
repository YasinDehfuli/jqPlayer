$(function () {
    var audio = $("#music")[0];
    console.log($("#music"));
    $("#player ul li").click(function () {
        $("#music").attr('src', $(this).data('src'));
        audio.play();
        $("#player li").removeClass('active');
        $(this).addClass('active');
    });
});