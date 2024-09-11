document.body.setAttribute("class", "container");
document
  .getElementById("form")
  .classList.add(
    "border",
    "border-secondary",
    "shadow",
    "rounded",
    "p-5",
    "mt-5",
    "row"
  );
function submitForm() {
  // Get form values
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var address = document.getElementById("address").value;
  var pincode = document.getElementById("pincode").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var food = [];
  var checkboxes = document.querySelectorAll('input[name="food"]:checked');
  for (var i = 0; i < checkboxes.length; i++) {
    food.push(checkboxes[i].value);
  }
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;

  // Create table row
  var row = document.createElement("tr");

  var cell1 = document.createElement("td");
  var cell2 = document.createElement("td");
  var cell3 = document.createElement("td");
  var cell4 = document.createElement("td");
  var cell5 = document.createElement("td");
  var cell6 = document.createElement("td");
  var cell7 = document.createElement("td");
  var cell8 = document.createElement("td");

  cell1.innerHTML = firstName;
  cell2.innerHTML = lastName;
  cell3.innerHTML = address;
  cell4.innerHTML = pincode;
  cell5.innerHTML = gender;
  cell6.innerHTML = food.join(", ");
  cell7.innerHTML = state;
  cell8.innerHTML = country;

  row.appendChild(cell1);
  row.appendChild(cell2);
  row.appendChild(cell3);
  row.appendChild(cell4);
  row.appendChild(cell5);
  row.appendChild(cell6);
  row.appendChild(cell7);
  row.appendChild(cell8);

  // Add row to table
  var tableBody = document.getElementById("myTableBody");
  tableBody.appendChild(row);

  // Clear form
  document.getElementById("form").reset();
}
