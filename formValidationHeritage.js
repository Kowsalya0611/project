const heritage = document.querySelector("#heritageTravels"); //heritage travels

let heritage1 = true;
let heritageDrivers = function () {
  if (heritage1) {
    heritage.style.display = "block";

    heritage1 = true;
    closeWindow1 = true;
  } else {
    heritage.style.display = "none";

    closeWindow1 = false;
    heritage1 = false;
  }
};
function validateForm() {
  //form validation heritage

  var username = document.getElementById("locationFrom").value;
  var usernameTo = document.getElementById("locationTo").value;
  var age = document.getElementById("catagoryAdult").value;
  var destination = document.getElementById("catagoryChildren").value;
  var usernameError = document.getElementById("locationFromError");
  var usernameToError = document.getElementById("locationToError");
  var ageError = document.getElementById("adultError");
  var destinationError = document.getElementById("childrenError");

  let driver1 = true;
  var isValid = true;

  // Reset error messages
  usernameError.innerHTML = "";
  usernameToError.innerHTML = "";
  ageError.innerHTML = "";
  destinationError.innerHTML = "";

  // Validate username
  if (username == "") {
    usernameError.innerHTML = "Please select a starting point*";

    isValid = false;
  } else if (usernameTo == "") {
    usernameToError.innerHTML = "Please select a destination point*";
    isValid = false;
  }

  // Validate age
  if (age == "") {
    ageError.innerHTML = "Details are required *";
    isValid = false;
  } else if (age > 7) {
    ageError.innerHTML = "maximum 6 members are allowed *";
    isValid = false;
  } else if (isNaN(age) || age <= 0) {
    ageError.innerHTML = "Minimum 1 member *";
    isValid = false;
  }
  // Validate destination
  else if (destination == "") {
    destinationError.innerHTML = "Please select a children *";
    isValid = false;
  }

  if (isValid) {
    heritageDriverDetails.style.display = "block";
    heritage.style.display = "none";
    anyCab.style.display = "none";
    anyLocal.style.display = "none";
    emergencyHub.style.display = "none";
    insidehotels.style.display = "none";
    alert("YOUR TAXI IS BOOKED");
    driver1 = false;
    heritage1 = true;
    cab = true;
    return false;
  }
  return isValid;
}
