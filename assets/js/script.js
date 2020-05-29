$(document).ready(function () {

    $('.hair_service').click(function () {
        $('.hair_section').fadeIn("fast", function () {
            $('.hair_section').animate({
                left: "0"
            })
        });
    })

    $('.back_button').click(function () {
        $('.hair_section').animate({
            left: '100%'
        }, function () {
            $('.hair_section').fadeOut();
        })
    })

});