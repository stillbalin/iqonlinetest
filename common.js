$(document).ready(function() {
    $('#open_addModal').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.calendar__addModal').show();
    });
    $('.calendar__addModal').on('click', function(e) {
        e.stopPropagation();
    });
    $('body').on('click', function() {
        $('.calendar__addModal').hide();
    });

});