////////////////////// Business Interface Logic ///////////////////////


////////////////////// User Interface Logic ////////////////////
$(document).ready(function() {
  $('#appointment').submit(function(event) {

    var nameInput = $("input#name").val();
    var descriptionInput = $("input#description").val();
    var apptdateInput = $("input#apptdate").val();
    var time1Input = $("input#time1").val();
    var time2Input = $("input#time2").val();

    $(".name").append(nameInput);
    $(".description").append(descriptionInput);
    $(".apptdate").append(apptdateInput);
    $(".time1").append(time1Input);
    $(".time2").append(time2Input);

    $("#endForm").show();

    event.preventDefault();

  });


});
