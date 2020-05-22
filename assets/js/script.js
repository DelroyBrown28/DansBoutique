$(document).ready(function () {

    $(".services_button").click(function () {
        $(".hair_img").animate({
            left: "200%"
        }, 500, function () {
            $(".main_title").animate({
                opacity: "0"
            }, 500, function () {
                $(".services_button").animate({
                    width: "100%",
                    height: "100%"
                }, function () {
                    $("body").addClass("color_change");
                })
            })
        })
    })


});