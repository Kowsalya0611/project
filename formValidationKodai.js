const kodai = document.querySelector("#kodaiTravels"); //heritage travels

let kodai1 = true;
let kodaiDrivers = function () {
  if (kodai1) {
    kodai.style.display = "block";

    kodai1 = true;
    closeWindow1 = true;
  } else {
    kodai.style.display = "none";

    closeWindow1 = false;
    kodai1 = false;
  }
};
function validateForm2() {
  //form validation heritage

  var username = document.getElementById("locationFrom2").value;
  var usernameTo = document.getElementById("locationTo2").value;
  var age = document.getElementById("catagoryAdult2").value;
  var destination = document.getElementById("catagoryChildren2").value;
  var usernameError = document.getElementById("locationFromError2");
  var usernameToError = document.getElementById("locationToError2");
  var ageError = document.getElementById("adultError2");
  var destinationError = document.getElementById("childrenError2");

  let driver1 = true;
  var isValid = true;

  // Reset error messages
  usernameError.innerHTML = "";
  usernameToError.innerHTML = "";
  ageError.innerHTML = "";
  destinationError.innerHTML = "";

  // Validate username
  if (username == "") {
    usernameError.innerHTML = "Please select a starting point *";

    isValid = false;
  } else if (usernameTo == "") {
    usernameToError.innerHTML = "Please select a destination point *";
    isValid = false;
  }

  // Validate age
  if (age == "") {
    ageError.innerHTML = "Details are required *";
    isValid = false;
  } else if (age > 6) {
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
    kodaiDriverDetails.style.display = "block";
    anyCab.style.display = "none";
    anyLocal.style.display = "none";
    emergencyHub.style.display = "none";
    insidehotels.style.display = "none";
    kodai.style.display = "none";
    alert("YOUR TAXI IS BOOKED");

    driver1 = false;
    kodai1 = true;
    return false;
  }
  return isValid;
}
