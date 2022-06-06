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


//red is not working currently



//localstorage button function create key value pairs
 $(".btn").click(function (event) {
     //prevents refreshing
    event.preventDefault();
    // key value pairs
    //textfrom all the time block siblings & time from the div id
    var text = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").val();
    //save to local storage
    localStorage.setItem(time, text);
  });






//recall local storage not yet finished






LocalStorage.getItem(time,text);





});