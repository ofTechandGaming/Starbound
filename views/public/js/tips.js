

$( function() {
    var popupDisplayed = sessionStorage.getItem("popupDisplayed");
    if( popupDisplayed !== "true" ){
      var txt;
      var r = confirm("The use of this tool is 'as is' and cannot be held responsible for any outcome. This tool does not track input data or any user. Use at your own risk.");
      if (r == true) {
        console.log("The user has agreed to the ToC");
        sessionStorage.setItem("popupDisplayed", "true" );
      } else {
        window.location.href='/';
      }
   } else {
     console.log("The user has agreed to the ToC");
   }
  });






let line=1;

$("#Update").keyup(function() {
  // Set Per Hour Rate
  var totalHours = document.getElementById('totalHours').value;
  var totalCollected = document.getElementById('totalCollected').value;
  var perHour = totalCollected / totalHours;
  $("#perHour").val(perHour.toFixed(2));

  for (i = 1; i < line; i++) {
    var hours = Number(document.getElementById('employeeHours' + i).value);
    var tips = hours * perHour;
    $("#tipTotal" + i).val(tips.toFixed(2));

  };
  let hoursTotal = 0;
    for (i = 1; i < line; i++) {
      var hours = Number(document.getElementById('employeeHours' + i).value);
      hoursTotal = hoursTotal + hours;
      $("#recordedHours").val(hoursTotal.toFixed(2));

  };
  let tipsTotal = 0;
    for (i = 1; i < line; i++) {
      var hours = Number(document.getElementById('employeeHours' + i).value);
      var tips = hours * perHour;
      tipsTotal = tipsTotal + tips;
      $("#tipsCalculated").val(tipsTotal.toFixed(2));

  };



});

$("#Print").click(function(){
  window.print();
});

function myPrint(myfrm) {
    var printdata = document.getElementById("myfrm");
    newwin = window.open("");
    newwin.document.write(printdata);
    newwin.print();
    newwin.close();
}

$("#addLine").click(function() {
  $(".newLine").append('<div class="item input-group"> <input type="text" aria-label="Name" class=" col-4 form-control"> <input type="number" id="employeeHours' + line + '" aria-label="Hours Worked" class="form-control col-4"> <input type="number" id="tipTotal' + line + '" aria-label="Total Tips" class=" col-4 form-control" readonly></span></div>');
  line++

});


//
// if (confirm("Would you like to donate to the mantinance of this site?")) {
//   window.open("https://checkout.square.site/pay/24458d8ffb4a4d60bcbae82d5cd1bb54");
//   console.log("ok");
// } else {
//   console.log("cancel");
// };
