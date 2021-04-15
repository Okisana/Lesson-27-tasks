$(".imgRow").hover(
    function() {
        const link = $(this).attr('src');
        $('#bigImage').attr('src', link);
     }
);

$('#bigDiv').prop('align','center');
