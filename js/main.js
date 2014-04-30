$('.cocky > .container > .row > .col-md-3').click(function() {
    $(this).find(">:first-child").toggleClass("fa-times-circle fa-circle-o");
});