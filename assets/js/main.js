// declare date on page load as a variable and print to page
console.log("i'm connected");

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
$("#currentTime").text(today.format("h:mm a"));