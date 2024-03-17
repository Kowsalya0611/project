const ebineser = document.querySelector("#ebinesarTravels"); //heritage travels

let ebineser1 = true;
let ebineserDrivers = function () {
  if (ebineser1) {
    ebineser.style.display = "block";

    ebineser1 = true;
    closeWindow1 = true;
  } else {
    ebineser.style.display = "none";

    closeWindow1 = false;
    ebineser1 = false;
  }
};
function validateForm1() {
  //form validation heritage

  var username = document.getElementById("locationFrom1").value;
  var usernameTo = document.getElementById("locationTo1").value;
  var age = document.getElementById("catagoryAdult1").value;
  var destination = document.getElementById("catagoryChildren1").value;
  var usernameError = document.getElementById("locationFromError1");
  var usernameToError = document.getElementById("locationToError1");
  var ageError = document.getElementById("adultError1");
  var destinationError = document.getElementById("childrenError1");

  //let driver1 = true;
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
    ebineserDriverDetails.style.display = "block";
    ebineser.style.display = "none";
    anyCab.style.display = "none";
    anyLocal.style.display = "none";
    emergencyHub.style.display = "none";
    insidehotels.style.display = "none";
    alert("YOUR TAXI IS BOOKED");
    driver1 = false;
    ebineser1 = true;
    return false;
  }
  return isValid;
}
