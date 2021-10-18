var CPSelect = document.querySelector("#CPSelect");
console.log(CPSelect);
function criteriaProfile(){
    
}

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
$("#currentTime").text(today.format("h:mm a"));

console.log("i'm connected");