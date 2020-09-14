  $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });



// for datatable
$(document).ready(function() {
    var table = $('#example').DataTable();

    // $('#example tbody').on('click', 'tr', function () {
    //     var data = table.row( this ).data();
    //     alert( 'You clicked on '+data[0]+'\'s row' );
    // } );
} );
// for form
/* Scroll to Top */
$(document).ready(function(){
    $(window).scroll(function () {
           if ($(this).scrollTop() > 50) {
               $('#scroll-to-top').fadeIn();
           } else {
               $('#scroll-to-top').fadeOut();
           }
       });
       // scroll body to 0px on click
       $('#scroll-to-top').click(function () {
           $('#scroll-to-top').tooltip('hide');
           $('body,html').animate({
               scrollTop: 0
           }, 800);
           return false;
       });

       $('#scroll-to-top').tooltip('show');

});
// for select2
$(document).ready(function() {
    $('.js-example-basic-multiple').select2();
});