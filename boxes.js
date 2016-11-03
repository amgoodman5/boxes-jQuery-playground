$(document).ready(function() {
    $("#secretBox").css('background-color', 'white').append('<h1>secret box!</h1>')

    $('#row1').children().addClass('boxType3');

    $('#row4 > div:last-child').css('display', "none");

    $('.boxType1').css('background-color', 'white');

    $('#row2 > div:nth-child(1), #row2 > div:nth-child(2)').removeClass();
    $('.box').not('#secretBox').css('width', '2px');

});
