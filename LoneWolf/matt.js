var selectButton = document.querySelector("#submitInput");
var profileValue = document.querySelector("#CPInput");
var profileRow1 = document.querySelector("#profileinput");
var profileRow2 = document.querySelector("#profileinput");
var valueButton = document.querySelector("#submitValue");
var valueInput = document.querySelector("#valueInput");
var profileSelect = document.querySelector("#profileSelect");
var criteriaSelect = document.querySelector("#criteriaSelect");
var criteriaRow = document.querySelector("#profileCriteria1");
var name = document.querySelector("#Name");
var profileNames = [
  {
    name: "Profile 1",
    criteria: [
      {
        workCompeleted: "x",
        time: "y",
      },
    ],
  },
  {
    name: "Profile 2",
    criteria: [
      {
        workCompeleted: "Age",
        time: "11",
      },
    ],
  },
];
function populateProfile() {

    if (cpSelect.value == "profile") {
        var inputProfile = document.querySelector("#CPInput");
        var profileName = inputProfile.value;
        var name = document.querySelector('#Name');
        name.textContent= profileName;
        }
         else {
        var inputCriteria = document.querySelector("#CPInput");
        var profileCriteria = inputCriteria.value;
        var criteria1 = document.querySelector('#criteria1');
        criteria1.textContent= profileCriteria;}
//   for (var i = 0; i < profileNames.length; i++) {
//    var selectProfile = profileSelect.textContent = profileNames[i].name[i];
//     var populatedRow = document.createElement("p");
//     var populatedRow2 = document.createElement("p");
//    console.log(populatedRow.textContent = selectProfile);
//     profileRow1.appendChild(populatedRow);
//     populatedRow2.appendChild()}
}
selectButton.addEventListener("click", populateProfile);

function populateCriteria() {
  if (profileSelect !== null) {
    var populateCriteria1 = document.createElement("p");
    populateCriteria1.textContent = valueInput.value;
    criteriaRow.appendChild(populateCriteria1);
  }
}
valueButton.addEventListener("click", populateCriteria);
