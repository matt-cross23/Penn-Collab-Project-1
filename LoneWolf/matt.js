// var selectButton = document.querySelector("#submitInput");
// var profileValue = document.querySelector("#CPInput");
// var profileRow1 = document.querySelector("#profileinput");
// var profileRow2 = document.querySelector("#profileinput");
// var valueButton = document.querySelector("#submitValue");
// var valueInput = document.querySelector("#valueInput");
// var profileSelect = document.querySelector("#profileSelect");
// var criteriaSelect = document.querySelector("#criteriaSelect");
// var criteriaRow = document.querySelector("#profileCriteria1");
// var name = document.querySelector("#Name");
// var profileNames = [
//   {
//     name: "Profile 1",
//     criteria: [
//       {
//         workCompeleted: "x",
//         time: "y",
//       },
//     ],
//   },
//   {
//     name: "Profile 2",
//     criteria: [
//       {
//         workCompeleted: "Age",
//         time: "11",
//       },
//     ],
//   },
// ];
// function populateProfile() {

//     if (cpSelect.value == "profile") {
//         var inputProfile = document.querySelector("#CPInput");
//         var profileName = inputProfile.value;
//         var name = document.querySelector('#Name');
//         name.textContent= profileName;
//         }
//          else {
//         var inputCriteria = document.querySelector("#CPInput");
//         var profileCriteria = inputCriteria.value;
//         var criteria1 = document.querySelector('#criteria1');
//         criteria1.textContent= profileCriteria;}
// //   for (var i = 0; i < profileNames.length; i++) {
// //    var selectProfile = profileSelect.textContent = profileNames[i].name[i];
// //     var populatedRow = document.createElement("p");
// //     var populatedRow2 = document.createElement("p");
// //    console.log(populatedRow.textContent = selectProfile);
// //     profileRow1.appendChild(populatedRow);
// //     populatedRow2.appendChild()}
// }
// selectButton.addEventListener("click", populateProfile);

// function populateCriteria() {
//   if (profileSelect !== null) {
//     var populateCriteria1 = document.createElement("p");
//     populateCriteria1.textContent = valueInput.value;
//     criteriaRow.appendChild(populateCriteria1);
//   }
// }
// valueButton.addEventListener("click", populateCriteria);
// // API call
  // $ curl -X POST https://pixe.la/v1/users -d '{"token":"thisissecret", "username":"a-know", "agreeTermsOfService":"yes", "notMinor":"yes", "thanksCode":"ThisIsThanksCode"}'
  // {"message":"Success. Let's visit https://pixe.la/@a-know , it is your profile page!","isSuccess":true}
// Create Graph
  // $ curl -X POST https://pixe.la/v1/users/matt-crpss/graphs -H 'X-USER-TOKEN:yaaaaaaa' -d '{"id":"project","name":"Profile-Tracker","unit":"commit","type":"int","color":"ajisai","timezone":"UTC","isSecret":true,"publishOptionalData":true}'                                        
  // {"message":"Success.","isSuccess":true}
 // Update Graph
  // $ curl -X PUT https://pixe.la/v1/users/matt-crpss/graphs/project -H 'X-USER-TOKEN:yaaaaaaa' -d '{"name":"profile=tracker","unit":"tasks-completed","color":"shibafu","timezone":"UTC","purgeCacheURLs":["https://camo.githubusercontent.com/xxx/xxxx"],"publishOptionalData":true}'
  // {"message":"Success.","isSuccess":true}
  // Post a Pixel
// curl -X POST https://pixe.la/v1/users/matt-crpss/graphs/project -H 'X-USER-TOKEN:yaaaaaaa' -d '{"date":"20211019","quantity":"9","optionalData":"{\"Profile\":\"Task-Completed\"}"}'
// {"message":"Success.","isSuccess":true}
// Show Graph
// $ open https://pixe.la/v1/users/matt-crpss/graphs/project.html
// Express Graph
// $ curl -X GET https://pixe.la/v1/users/matt-crpss/graphs/project?date=20211010&mode=short&appearance=dark
// {/* <svg xmlns="http://www.w3.org/2000/svg" width="220" height="135" //
  var requestURL =  "https://pixe.la/@matt-crpss"
  $.ajax({
    url: requestURL,
    method: 'GET',
  }).then(function(response){
   var displayGraph = response;
   console.log(displayGraph);
    var anchor= $('<a />');
    // anchor.attr('href', displayGraph);
    anchor.text("Pixela")
    $('#firstLink').append(anchor);
  });
  $(anchor).click(document.location(response));
