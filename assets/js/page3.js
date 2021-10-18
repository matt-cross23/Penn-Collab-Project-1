var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
$("#currentTime").text(today.format("h:mm a"));