$(document).ready(function () {

    $('.hair_service').click(function () {
        $(this).animate({
            width: '100%'
        }, function () {
            $(this).animate({
                height: '100%'
            }, function() {
                $('.men_women_fadein').fadeIn();
            })
        })
    })

});

