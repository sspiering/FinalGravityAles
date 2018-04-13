$(document).ready(function() {
    var windowH =  $(window).height();
    $('#main_container, #overlay').height(windowH);
    $(window).resize(function () {
        var windowH =  $(window).height();
        $('#main_container, #overlay').height(windowH);
    });
});​