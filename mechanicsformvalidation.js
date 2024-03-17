const selectMechanic = document.getElementById("mechanicsMain");
const mechdata = document.getElementById("polytec1");
const mechdata2 = document.getElementById("fingerpost1");
const mechdata3 = document.getElementById("nirmala1");

selectMechanic.addEventListener("change", function () {
  if (this.value === "polytec") {
    mechdata.style.display = "block";
    mechdata2.style.display = "none";
    mechdata3.style.display = "none";
  } else if (this.value === "fingerpost") {
    mechdata2.style.display = "block";
    mechdata.style.display = "none";
    mechdata3.style.display = "none";
  } else if (this.value == "nirmalaschool") {
    mechdata3.style.display = "block";
    mechdata.style.display = "none";
    mechdata2.style.display = "none";
  } else if (this.value == "annanagar") {
    mechdata3.style.display = "none";
    mechdata.style.display = "none";
    mechdata2.style.display = "none";
  } else if (this.value == "botanicalGarden") {
    mechdata3.style.display = "none";
    mechdata.style.display = "none";
    mechdata2.style.display = "none";
  } else {
    mechdata3.style.display = "none";
    mechdata.style.display = "none";
    mechdata2.style.display = "none";
  }
});
