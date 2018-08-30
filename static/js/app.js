// from data.js
var tableData = data;

// Get references
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $stateInput = document.querySelector("#state")
var $searchBtn = document.querySelector("#search");

// Add an event listener
$searchBtn.addEventListener("click", handleSearchButtonClick);


function renderTable() {
  $tbody.innerHTML = "";
  console.log("render is happening")

  for (var i = 0; i < tableData.length; i++) {
    
    // Get get the current sighting object
    var sighting = tableData[i];
    var fields = Object.keys(sighting);
    // Create a new row in the tbody
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}

function handleSearchButtonClick() {
  var filterDate = $dateInput.value.trim();
  var filterState = $stateInput.value.trim().toLowerCase();

  if (filterDate.length != 0){
    tableData = data.filter(function(sighting) {
      var sightingDate = sighting.datetime;
       return sightingDate === filterDate;
         });
  }
  else {
    tableData = data
  }
  if (filterState.length != 0){
    tableData = tableData.filter(function(sighting) {
      var sightingState = sighting.state;
       return sightingState === filterState;
         });
  }
  else {
    tableData = tableData
  }
  renderTable();
}

// Render the table for the first time on page load
renderTable();