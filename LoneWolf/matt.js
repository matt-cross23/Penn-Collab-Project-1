var selectButton = document.querySelector("#submitInput");
var profileValue = document.querySelector("#CPInput");
var profileRow = document.querySelector("#profileinput");
var valueButton = document.querySelector("#submitValue");
var valueInput = document.querySelector('#valueInput');
var profileSelect= document.querySelector("#profileSelect");
var criteriaSelect= document.querySelector("#criteriaSelect");
var criteriaRow = document.querySelector("#profileCriteria1");
var name = document.querySelector('#Name');
var profileNames= [{
    name: "Profile 1",
    criteria: [
        {
            name: "Matt",
            value: 44
        },
        {
            name: "Force",
            value: 44
        }
    ]
},
{
    name: "Profile 2",
    criteria: [
        {
            name: "Age",
            value: 11
        },
        {
            name: "Force",
            value: 22
        }
    ]
}
]
function populateRow() {
    for(var i = 0; i< profileNames.length; i++){
 profileSelect.textContent = profileNames[i].criteria[i].name;
 var populatedRow = document.createElement("p");
  populatedRow.textContent = profileSelect;
  profileRow.appendChild(populatedRow);
    };
    
}
selectButton.addEventListener("click", populateRow);

function populateCriteria(){
if (profileSelect !== null){
    var populateCriteria1 = document.createElement("p");
    populateCriteria1.textContent= valueInput.value;
   (criteriaRow.appendChild(populateCriteria1));
}}
valueButton.addEventListener("click",populateCriteria);
