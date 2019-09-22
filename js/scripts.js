$(document).ready(function() {
  $("#language-selector").submit(function(event) {
    var education = $("input:radio[name=education]:checked").val();
    var level = $("input:radio[name=level]:checked").val();
    var work = $("input:radio[name=work]:checked").val();
    var time = $("input:radio[name=time]:checked").val();
    var location = $("input:radio[name=location]:checked").val();
    $("#results").show();
    if (education === "highschool" && level === "beginner" && work === "alone") {
      $("#javascript").show();

    }
    event.preventDefault();
  });
});
