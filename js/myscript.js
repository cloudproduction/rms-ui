  $(document).ready(function() {
      $('#sidebarCollapse').on('click', function() {
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
  });
  // for form
  /* Scroll to Top */
  $(document).ready(function() {
      $(window).scroll(function() {
          if ($(this).scrollTop() > 50) {
              $('#scroll-to-top').fadeIn();
          } else {
              $('#scroll-to-top').fadeOut();
          }
      });
      // scroll body to 0px on click
      $('#scroll-to-top').click(function() {
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

  // added by sayket-----------------///////////

  $(document).ready(function() {
      $('#example').DataTable();
  });

  // for select2
  //   $(document).ready(function() {
  //       $('.select2').select2();
  //   });


  function change(iconID) {
      if (document.getElementById(iconID).className == "fa fa-chevron-circle-up") {
          document.getElementById(iconID).className = "fa fa-chevron-circle-down";
      } else {
          document.getElementById(iconID).className = "fa fa-chevron-circle-up";
      }
  }



  $('.input-group').datepicker({
      format: "dd/mm/yyyy"
  }).on('change', function() {
      $('.datepicker').hide();
  });


  $('select').selectpicker({
      closeOnSelect: true
  });


  //Clone and Remove Form Fields

  $('#addNewForm').on('click', function() {
      // $('#exercises').append('<div class="exercise"><input type="text" name="exercise[]"><button class="remove">x</button></div>');
      $('.allforms').append('<div class="card-body formarea filtercard">\n' +
          '                                   <div class="extraform">\n' +
          '                                       <div class="row">\n' +
          '                                           <div class="col-md-12"> <button  class="btn btn-sm delete-btn float-right remove"><i class="fa fa-trash-o"></i></button></div>\n' +
          '                                           <div class="col-md-2">\n' +
          '                                               <div class="form-group">\n' +
          '                                                  <select class="" data-live-search="true"> <option data-tokens="A" > Item A </option>  <option data-tokens="B" > Item B </option> <option data-tokens="C" > Item C </option>   </select></div>\n' +
          '                                           </div>\n' +
          '                                           <div class="col-md-2">\n' +
          '                                               <div class="form-group">\n' +
          '                                                  <select class="selectpicker" data-live-search="true" > <option value = "volvo" > Kg </option>  <option value = "volvo" > gm</option> <option value = "volvo" > Ltr </option>   </select></div>\n' +
          '                                           </div>\n' +
          '\n' +
          '                                           <div class="col-md-2">\n' +
          '                                               <div class="form-group">\n' +
          '                                                   <input class="form-control" type="text[]" placeholder="Quantity"></div>\n' +
          '                                           </div>\n' +
          '                                           <div class="col-md-2">\n' +
          '                                               <div class="form-group">\n' +
          '                                                   <input class="form-control" type="text[]" placeholder="Price Per Unit"></div>\n' +
          '                                           </div>\n' +
          '                                           <div class="col-md-2">\n' +
          '                                               <div class="form-group">\n' +
          '                                                   <input class="form-control" type="text[]" placeholder="Total Price" disabled></div>\n' +
          '                                           </div>\n' +
          '                                           <div class="col-md-2">\n' +
          '                                               <div class="form-group">\n' +
          '                                                   <input class="form-control" type="text[]" placeholder="Remarks"></div>\n' +
          '                                           </div>\n' +

          '\n' +
          '                                       </div>\n' +
          '                                   </div>\n' +
          '                               </div>');
      $('select').selectpicker({
          closeOnSelect: true
      });
      return false; //prevent form submission

  });

  $('.allforms').on('click', '.remove', function() {
      $(this).parent().parent().parent().parent().remove();
      return false; //prevent form submission
  });