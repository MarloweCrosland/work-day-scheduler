$(document).ready(function () {

//display current time and date with momentjs
let todaysDate = moment().format("MMMM Do YYYY");
let displayDate = document.getElementById("currentDay");
displayDate.innerHTML= todaysDate;
let currentHour = moment().format("h:mm:ss");



//checking if the time slot is in the past present or future
//add classes to change style accordingly
$(".time-div").each(function () {
    var timeDiv = $(this).attr("id").val();
    
    if (currentHour == timeDiv) {
      $(this).addClass("present");

    } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");

    } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

//localstorage
 $(".saveBtn").click(function (event) {
    event.preventDefault();
    // key value pairs
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").val();
    localStorage.setItem(time, value);
  });







  //recall localStorage
  $("#9:00 .time-block").val(localStorage.getItem("09"));

  $("#10:00 .time-block").val(localStorage.getItem("10"));

  $("#11:00 .time-block").val(localStorage.getItem("11"));

  $("#12:00 .time-block").val(localStorage.getItem("12"));

  $("#1:00 .time-block").val(localStorage.getItem("13"));

  $("#2:00 .time-block").val(localStorage.getItem("14"));

  $("#3:00 .time-block").val(localStorage.getItem("15"));

  $("#4:00 .time-block").val(localStorage.getItem("16"));

  $("#5:00 .time-block").val(localStorage.getItem("17"));












});