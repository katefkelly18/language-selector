$(document).ready(function() {
  console.log("heyo baby")
  console.log($("form#language-selector"))
  $("form#language-selector").submit(function(event) {
    console.log("HEY")
    var education = $("input:radio[name=education]:checked").val();
    var level = $("input:radio[name=level]:checked").val();
    var work = $("input:radio[name=work]:checked").val();
    var time = $("input:radio[name=time]:checked").val();
    var location = $("input:radio[name=location]:checked").val();
    var showJavascript = education === "highschool" && level === "beginner" && work === "alone" && time === "small" && location === "seattle"
    console.log(showJavascript)
console.log()
  $("#results").show();
    if (showJavascript) {
      $("#javascript").show();
    }
    event.preventDefault();
  });
});
