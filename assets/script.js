$(document).ready(function () {
//do this when page loads


//display current time and date with momentjs + format
let todaysDate = moment().format("MMMM Do YYYY");
let displayDate = document.getElementById("currentDay");
displayDate.innerHTML= todaysDate;
let currentHour = moment().format("h:mm:ss");



//checking if the time slot is in the past present or future
//add classes to change style accordingly
$(".time-div").each(function () {


var timeDiv = $(this).attr("id");
    
 if (currentHour === timeDiv) {
  $(this).removeClass("past");
  $(this).removeClass("future");
  $(this).addClass("present");



 } else if (currentHour < timeDiv) {
  $(this).removeClass("future");
  $(this).removeClass("present");
  $(this).addClass("past");

 } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

//localStorage
  // save button will save key value pair 
  $(".btn").on("click", function () {
      // Get description value and time id
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      // Save text in local storage
      localStorage.setItem(time, text);
  })

$("#9:00 .description").val(localStorage.getItem("9:00"));
$("#10:00 .description").val(localStorage.getItem("10:00"));
$("#11:00 .description").val(localStorage.getItem("11:00"));
$("#12:00 .description").val(localStorage.getItem("12:00"));
$("#1:00 .description").val(localStorage.getItem("1:00"));
$("#2:00 .description").val(localStorage.getItem("2:00"));
$("#3:00 .description").val(localStorage.getItem("3:00"));
$("#4:00 .description").val(localStorage.getItem("4:00"));
$("#5:00 .description").val(localStorage.getItem("5:00"));




});