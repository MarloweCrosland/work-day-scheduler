$(document).ready(function () {


//display current time and date with moment.js

let todaysDate = moment().format ('MMMM Do YYYY, h:mm:ss a');
let displayedDate = document.getElementById('currentDay');
displayedDate.innerHTML= todaysDate;
let currentHour = moment().format("HH");


//comparing the current time to the time block id


$(".time-div").each(function () {
    //take the value after the dash from the id and select it 
    var timeDiv = $(this).attr("id").split("-")[1];
    
    if (currentHour == timeDiv) {
      $(this).addClass("present");
      $(this).removeClass('future');
      $(this).removeClass('past');
    } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }


});


//localStorage function not working yet, im still trying to figure this out on my own
$(".btn").click(function (event) {
    event.preventDefault();
    var value = $(".time-block").text();
    var time = $(this).parent().attr("id").split("-")[1];
    //set item to key value pair
    localStorage.setItem(time, value);
  });
//retrieve items
$("#hour-09.description").val(localStorage.getItem("09"));
$("#hour-10.description").val(localStorage.getItem("10"));
$("#hour-11.description").val(localStorage.getItem("11"));
$("#hour-12.description").val(localStorage.getItem("12"));
$("#hour-01.description").val(localStorage.getItem("01"));
$("#hour-02.description").val(localStorage.getItem("02"));
$("#hour-03.description").val(localStorage.getItem("03"));
$("#hour-04.description").val(localStorage.getItem("04"));
$("#hour-05.description").val(localStorage.getItem("05"));







});