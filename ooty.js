const accessImg1 = document.querySelector("#imageid1"); //changing background image
const accessImg2 = document.querySelector("#imageid2");
const accessImg3 = document.querySelector("#imageid3");
let firstImg = true;
let secondImg = true;
let thirdImg = true;
let image = function () {
  if (firstImg) {
    accessImg1.style.display = "block";
    accessImg2.style.display = "none";
    accessImg3.style.display = "none";
    firstImg = false;
    secondImg = true;
  } else if (secondImg) {
    accessImg2.style.display = "block";
    accessImg1.style.display = "none";
    accessImg3.style.display = "none";

    secondImg = false;
    thirdImg = true;
  } else if (thirdImg) {
    accessImg1.style.display = "none";
    accessImg2.style.display = "none";
    accessImg3.style.display = "block";
    thirdImg = false;
  } else {
    accessImg1.style.display = "none";
    accessImg2.style.display = "none";
    accessImg3.style.display = "none";
    firstImg = true;
  }
};

let insidehotels = document.querySelector(".abouthotels"); //best hotels
insidehotels.onclick = function () {
  let besthotels =
    "https://www.google.com/maps/place/Savoy,+Ooty+-+IHCL+SeleQtions/@11.4069244,76.6808272,15z/data=!4m17!1m5!2m4!1sbest+hotels+in+ooty!5m2!5m1!1s2024-02-22!3m10!1s0x3ba8bd9b1e6a55f5:0xc45eb01f076bb335!5m3!1s2024-02-22!4m1!1i2!8m2!3d11.4148606!4d76.6928844!15sChNiZXN0IGhvdGVscyBpbiBvb3R5IgOoAQFaFSITYmVzdCBob3RlbHMgaW4gb290eZIBBWhvdGVsmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU50ZEhaaVlWQlJFQUXgAQA!16s%2Fg%2F1tcz6rv_?entry=ttu";
  window.open(besthotels);
};

const anyEmerg = document.querySelector("#emergency1"); //emergency
let emerg = true;
let emergencyFunction = function () {
  if (emerg) {
    anyEmerg.style.display = "grid";
    anyLocal.style.display = "none";
    anyAmb.style.display = "none";
    anyPolice.style.display = "none";
    anyAuto.style.display = "none";
    anyMap.style.display = "none";
    insidehotels.style.display = "block";
    anymech.style.display = "none";
    mapLocation.style.display = "none";
    anyCab.style.display = "none";
    heritage.style.display = "none";
    ootyEvents.style.display = "none";
    mechdata.style.display = "none";
    mechdata2.style.display = "none";
    mechdata3.style.display = "none";

    heritage1 = true;
    emerg = false;
    map = true;
    localAmb = true;
    local = true;
    auto = true;
    cab = true;
    mech = true;
    localEventsOoty = true;
  } else {
    anyEmerg.style.display = "none";
    anyAmb.style.display = "none";
    anyPolice.style.display = "none";
    anyMap.style.display = "none";
    anyCab.style.display = "none";
    anymech.style.display = "none";
    cab = true;
    localPolice = true;
    emerg = true;
    localAmb = true;
    map = true;
    mech = true;
  }
};
const anyAmb = document.querySelector("#ambulancePng"); //call an ambulance
let localAmb = true;
let needAmbulance = function () {
  if (localAmb) {
    anyAmb.style.display = "block";
    anyPolice.style.display = "none";
    localPolice = true;
    localAmb = false;
  } else {
    anyAmb.style.display = "none";
    localAmb = true;
  }
};

const anyPolice = document.querySelector("#callPolice"); //call a police
let localPolice = true;
let needPolice = function () {
  if (localPolice) {
    anyPolice.style.display = "block";
    anyAmb.style.display = "none";
    localPolice = false;
    localAmb = true;
  } else {
    anyPolice.style.display = "none";

    localPolice = true;
  }
};

let fireDept = document.querySelector(".firedept"); //fire fireDepartment
fireDept.onclick = function () {
  let fireDepartment =
    "https://nilgiris.nic.in/department/fire-and-rescue-services/";
  window.open(fireDepartment, "_self");
};

let hospital = document.querySelector(".hospitals"); //hospitals

hospital.onclick = function () {
  let hosp =
    "https://www.google.com/maps/place/Government+Hospital/@11.4069661,76.6808272,15z/data=!4m10!1m2!2m1!1shospital+in+ooty!3m6!1s0x3ba8bd8f4ecaa103:0x243bc683a44bce4e!8m2!3d11.4071572!4d76.7001135!15sChBob3NwaXRhbCBpbiBvb3R5kgEIaG9zcGl0YWzgAQA!16s%2Fg%2F1tf2_v3z?entry=ttu";

  window.open(hosp, "_self");
};

let pharmacy = document.querySelector(".pharmacy"); //pharmacy

pharmacy.onclick = function () {
  let phar =
    "https://www.google.com/maps/place/DHANALAKSHMI+MEDICALS/@11.4070078,76.6808272,15z/data=!4m10!1m2!2m1!1spharmacy+in+ooty!3m6!1s0x3ba8bd8d19099393:0x7cf92de2767266a9!8m2!3d11.4104456!4d76.7088997!15sChBwaGFybWFjeSBpbiBvb3R5WhIiEHBoYXJtYWN5IGluIG9vdHmSAQlkcnVnc3RvcmXgAQA!16s%2Fg%2F11cn95dlgt?entry=ttu";

  window.open(phar, "_self");
};

let atm = document.querySelector(".atm"); //ATM
atm.onclick = function () {
  let anyTimeMachine =
    "https://www.google.com/maps/place/IDBI+Bank+ATM/@11.4202514,76.6790877,15z/data=!4m10!1m2!2m1!1sAtm+in+ooty!3m6!1s0x3ba8bd889a9666fb:0xd9caad95b93b29d9!8m2!3d11.4046425!4d76.699654!15sCgtBdG0gaW4gb290eZIBA2F0beABAA!16s%2Fg%2F1yh9ty857?entry=ttu";

  window.open(anyTimeMachine, "_self");
};

let vetHosp = document.querySelector(".vetHospitals"); //VETERINARY HOSPITALS
vetHosp.onclick = function () {
  let vetHospital =
    "https://www.google.com/maps/place/Immanuel+Pet+Clinic/@11.3763801,76.7339064,15z/data=!4m10!1m2!2m1!1sveterinary+hospitals+ooty!3m6!1s0x3ba895e6e1ae9337:0x89ef275d22e2236f!8m2!3d11.3763801!4d76.7529608!15sChl2ZXRlcmluYXJ5IGhvc3BpdGFscyBvb3R5kgEPYW5pbWFsX2hvc3BpdGFs4AEA!16s%2Fg%2F11rg9sb9h_?entry=ttu";
  window.open(vetHospital, "_self");
};

const anyLocal = document.querySelector("#localAssistance"); //local assistance

let local = true;
let assistanceFunction = function () {
  if (local) {
    anyLocal.style.display = "grid";
    anyEmerg.style.display = "none";
    anyAmb.style.display = "none";
    anyPolice.style.display = "none";
    anyAuto.style.display = "none";
    anyMap.style.display = "none";
    anyCab.style.display = "none";
    anyEmerg.style.display = "none";
    anymech.style.display = "none";
    mapLocation.style.display = "none";
    insidehotels.style.display = "block";
    ootyEvents.style.display = "none";
    mechdata.style.display = "none";
    mechdata2.style.display = "none";
    mechdata3.style.display = "none";

    localEventsOoty = true;
    mech = true;
    map = true;
    local = false;
    cab = true;
    emerg = true;
    localPolice = true;
    localAmb = true;
    auto = true;
  } else {
    anyLocal.style.display = "none";
    anyAuto.style.display = "none";
    anyCab.style.display = "none";
    anyMap.style.display = "none";
    anymech.style.display = "none";
    heritage.style.display = "none";
    mech = true;
    heritage1 = true;
    local = true;
    map = true;
    auto = true;
    cab = true;
  }
};

const anyAuto = document.querySelector(".auto"); //Auto
let auto = true;
let autoDrivers = function () {
  if (auto) {
    anyAuto.style.display = "block";
    anyCab.style.display = "none";
    heritage.style.display = "none";
    anymech.style.display = "none";
    mechdata.style.display = "none";
    mechdata2.style.display = "none";
    mechdata3.style.display = "none";

    heritage1 = true;
    auto = false;
    mech = true;
    cab = true;
  } else {
    anyAuto.style.display = "none";

    auto = true;
  }
};
const heritageDriverDetails = document.querySelector("#heritageDriverDetails"); //heritage drivers
const ebineserDriverDetails = document.querySelector("#ebineserDriverDetails"); //Ebineser drivers
const kodaiDriverDetails = document.querySelector("#kodaiDriverDetails"); //Kodai drivers
const anyCab = document.querySelector(".cab"); //cab
let cab = true;
let cabDrivers = function () {
  if (cab) {
    anyCab.style.display = "grid";
    anyAuto.style.display = "none";
    anymech.style.display = "none";
    mechdata.style.display = "none";
    mechdata2.style.display = "none";
    mechdata3.style.display = "none";

    mech = true;
    auto = true;
    cab = false;
  } else {
    anyCab.style.display = "none";
    heritage.style.display = "none";

    heritage1 = true;
    cab = true;
  }
};

const anymech = document.querySelector("#mechanicsDetails"); // mechanics
//const anymech = document.querySelector(".mech"); //cab
let mech = true;
let mechanics1 = function () {
  if (mech) {
    anymech.style.display = "block";
    anyCab.style.display = "none";
    anyAuto.style.display = "none";

    //mechanicDetails.style.display = "none";
    auto = true;
    cab = true;
    mech = false;
  } else {
    anymech.style.display = "none";
    heritage.style.display = "none";
    mechdata.style.display = "none";
    mechdata2.style.display = "none";
    mechdata3.style.display = "none";

    heritage1 = true;
    mech = true;
  }
};

const emergencyHub = document.querySelector(".emergencyHub");

const fingerpostAuto = document.querySelector("#fingerpostAuto"); //fingerpostAuto
let fingerpostStand = true;
let fingerpostAutoDrivers = function () {
  if (fingerpostStand) {
    fingerpostAuto.style.display = "block";
    anyAuto.style.display = "none";
    anyLocal.style.display = "none";
    emergencyHub.style.display = "none";
    insidehotels.style.display = "none";
    fingerpostStand = false;
    allAuto = true;
  } else {
    fingerpostAuto.style.display = "none";

    fingerpostStand = true;
  }
};
const mukkonamAuto = document.querySelector("#mukkonamAuto"); //Mukkonam Auto
let mukkonamStand = true;
let mukkonamAutoDrivers = function () {
  if (mukkonamStand) {
    mukkonamAuto.style.display = "block";
    anyAuto.style.display = "none";
    anyLocal.style.display = "none";
    emergencyHub.style.display = "none";
    insidehotels.style.display = "none";
    mukkonamStand = false;
    allAuto = true;
  } else {
    mukkonamAuto.style.display = "none";

    mukkonamStand = true;
  }
};
const rohiniAuto = document.querySelector("#rohiniAuto"); //Rohini Auto
let rohiniStand = true;
let rohiniAutoDrivers = function () {
  if (rohiniStand) {
    rohiniAuto.style.display = "block";
    anyAuto.style.display = "none";
    anyLocal.style.display = "none";
    emergencyHub.style.display = "none";
    insidehotels.style.display = "none";
    rohiniStand = false;
    allAuto = true;
  } else {
    rohiniAuto.style.display = "none";

    rohiniStand = true;
  }
};
const stephenChurchAuto = document.querySelector("#stephenChurchAuto"); //Stephen church Auto
let stephenChurchStand = true;
let stephenAutoDrivers = function () {
  if (stephenChurchStand) {
    stephenChurchAuto.style.display = "block";
    anyAuto.style.display = "none";
    anyLocal.style.display = "none";
    emergencyHub.style.display = "none";
    insidehotels.style.display = "none";
    stephenChurchStand = false;
    allAuto = true;
  } else {
    stephenChurchAuto.style.display = "none";

    mukkonamStand = true;
  }
};
const busstandAuto = document.querySelector("#busstandAuto"); //busstand Auto
let busstandAutoStand = true;
let busstandAutoDrivers = function () {
  if (busstandAutoStand) {
    busstandAuto.style.display = "block";
    anyAuto.style.display = "none";
    anyLocal.style.display = "none";
    emergencyHub.style.display = "none";
    insidehotels.style.display = "none";
    busstandAutoStand = false;
    allAuto = true;
  } else {
    busstandAuto.style.display = "none";

    busstandAutoStand = true;
  }
};
const marketAuto = document.querySelector("#marketAuto"); //Market Auto
let marketStand = true;
let marketAutoDrivers = function () {
  if (marketStand) {
    marketAuto.style.display = "block";
    anyAuto.style.display = "none";
    anyLocal.style.display = "none";
    emergencyHub.style.display = "none";
    insidehotels.style.display = "none";
    marketStand = false;
    allAuto = true;
  } else {
    marketAuto.style.display = "none";

    marketStand = true;
  }
};

const boathouseAuto = document.querySelector("#boathouseAuto"); //Boathouse Auto
let boathouseStand = true;
let boathouseAutoDrivers = function () {
  if (boathouseStand) {
    boathouseAuto.style.display = "block";
    anyAuto.style.display = "none";
    anyLocal.style.display = "none";
    emergencyHub.style.display = "none";
    insidehotels.style.display = "none";
    boathouseStand = false;
    allAuto = true;
  } else {
    boathouseAuto.style.display = "none";

    boathouseStand = true;
  }
};
const ccAuto = document.querySelector("#ccAuto"); //charringcross Auto
let ccStand = true;
let ccAutoDrivers = function () {
  if (ccStand) {
    ccAuto.style.display = "block";
    anyAuto.style.display = "none";
    anyLocal.style.display = "none";
    emergencyHub.style.display = "none";
    insidehotels.style.display = "none";
    ccStand = false;
    allAuto = true;
  } else {
    ccAuto.style.display = "none";

    ccStand = true;
  }
};
const rgAuto = document.querySelector("#rgAuto"); //roseGarden Auto
let rgStand = true;
let rgAutoDrivers = function () {
  if (rgStand) {
    rgAuto.style.display = "block";
    anyAuto.style.display = "none";
    anyLocal.style.display = "none";
    emergencyHub.style.display = "none";
    insidehotels.style.display = "none";
    rgStand = false;
    allAuto = true;
  } else {
    rgAuto.style.display = "none";

    rgStand = true;
  }
};

let allAuto = true; //close auto window
let closeAuto = function () {
  if (allAuto) {
    fingerpostAuto.style.display = "none";
    mukkonamAuto.style.display = "none";
    rgAuto.style.display = "none";
    ccAuto.style.display = "none";
    boathouseAuto.style.display = "none";
    marketAuto.style.display = "none";
    busstandAuto.style.display = "none";
    stephenChurchAuto.style.display = "none";
    rohiniAuto.style.display = "none";
    anyAuto.style.display = "block";
    anyLocal.style.display = "grid";
    emergencyHub.style.display = "flex";
    insidehotels.style.display = "block";
    fingerpostStand = true;
    mukkonamStand = true;
    ccStand = true;
    rgStand = true;
    boathouseStand = true;
    marketStand = true;
    busstandAutoStand = true;
    stephenChurchStand = true;
    rohiniStand = true;

    allAuto = false;
  } else {
    allAuto = true;
  }
};

//close window
let closeWindow1 = true;
let closeWindow = function () {
  if (closeWindow1) {
    heritage.style.display = "none";
    heritageDriverDetails.style.display = "none";
    ebineserDriverDetails.style.display = "none";

    ebineser.style.display = "none";
    kodai.style.display = "none";
    kodaiDriverDetails.style.display = "none";
    anyCab.style.display = "block";
    anyLocal.style.display = "grid";
    emergencyHub.style.display = "block";
    insidehotels.style.display = "block";
    closeWindow1 = false;
    cab = true;
    heritage1 = true;
    ebineser1 = true;
    kodai1 = true;
  } else {
    closeWindow1 = true;
  }
};
let reset = document.querySelector("#reset"); //reset form
let resetButton = true;
let resetFormValidation = function () {
  if (resetButton) {
    heritageDriverDetails.style.display = "none";
    resetButton = false;
    heritage1 = true;
  } else {
    heritageDriverDetails.style.display = "none";
    resetButton = true;
  }
};

const anyMap = document.querySelector(".ootyMap"); //map

const hotels = document.querySelector("#inside");

const mapLocation = document.querySelector(".mapLocation"); //location on map
let map = true;
let ootyMap = function () {
  if (map) {
    anyMap.style.display = "block";
    anyEmerg.style.display = "none";
    anyLocal.style.display = "none";
    anyPolice.style.display = "none";
    mapLocation.style.display = "block";
    anyAuto.style.display = "none";
    anyCab.style.display = "none";
    anyAmb.style.display = "none";
    anymech.style.display = "none";
    insidehotels.style.display = "none";
    ootyEvents.style.display = "none";
    heritage.style.display = "none";
    mechdata.style.display = "none";
    mechdata2.style.display = "none";
    mechdata3.style.display = "none";

    heritage1 = true;
    mech = true;
    map = false;
    localEventsOoty = true;
    localPolice = true;
    emerg = true;
    local = true;
    emerg = true;
  } else {
    anyMap.style.display = "none";
    mapLocation.style.display = "none";
    insidehotels.style.display = "block";
    anyLocal.style.display = "none";
    anyEmerg.style.display = "none";

    map = true;
    local = true;
    emerg = true;
  }
};
let polytec = document.querySelector(".polytec"); //polytec
polytec.onclick = function () {
  let govtPolytec =
    "https://www.google.com/maps/dir//CMCJ%2BC4J+GOVERNMENT+POLYTECHNIC+COLLEGE,+Fingerpost,+Ooty,+Tamil+Nadu+643006/@11.421263,76.6772984,17.25z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba8bd72c1522a9b:0xa78fc70874a4580d!2m2!1d76.6802526!2d11.4210886?entry=ttu";
  window.open(govtPolytec);
};
let fingerpost = document.querySelector(".fingerpost"); //fingerpost
fingerpost.onclick = function () {
  let gotoFingerpost =
    "https://www.google.com/maps/dir//Fingerpost,+Ooty,+Tamil+Nadu+643006/@11.4204721,76.6798112,16.75z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3ba8bd73a7bd543d:0x9018a50eb8c5cf!2m2!1d76.6802526!2d11.4210886!3e2?entry=ttu";
  window.open(gotoFingerpost);
};
let todaVillage = document.querySelector(".todaVillage"); //Todavillage
todaVillage.onclick = function () {
  let gotoTodaVillage =
    "https://www.google.com/maps/dir//11.4157222,76.6957778/@11.4157235,76.6951341,19z?entry=ttu";

  window.open(gotoTodaVillage);
};
let monarch = document.querySelector(".theMonarch"); //Monarch
monarch.onclick = function () {
  let gotoMonarch =
    "https://www.google.com/maps/dir//The+Monarch,+Have+Lock+Road,+near+Police+Quarters,+Ooty,+Tamil+Nadu+643001/@11.4169923,76.6952622,17.25z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3baf7af1a0abc2b7:0xc73f4ae21adbfa2c!2m2!1d76.6992588!2d11.4201488?entry=ttu";
  window.open(gotoMonarch);
};
let policeQuarts = document.querySelector(".policeQuarters"); //policeQuarts
policeQuarts.onclick = function () {
  let gotoPoliceQuarts =
    "https://www.google.com/maps/dir//Police+Quarters,+Pudumund,+Ooty,+Tamil+Nadu/@11.4156231,76.6989902,16.75z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba8bd97315347c7:0x4c04a70e4cb7e6a4!2m2!1d76.6986564!2d11.4188098?entry=ttu";
  window.open(gotoPoliceQuarts);
};
let gemPark = document.querySelector(".gemPark"); //gempark
gemPark.onclick = function () {
  let gotoGemPArk =
    "https://www.google.com/maps/dir//Gem+Park+Ooty,+Sheddon+Road,+Pudumund,+Ooty,+Tamil+Nadu/@11.4162245,76.7042457,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba8bd94575a99f1:0x38643305adc04077!2m2!1d76.7041074!2d11.4205956?entry=ttu";
  window.open(gotoGemPArk);
};
let hilldas = document.querySelector(".hilldas"); //hildas
hilldas.onclick = function () {
  let gotoHilldas =
    "https://www.google.com/maps/dir//St.+Hilda's+School+%26+Junior+College,+Ooty,+Sheddon+Road,+Pudumund,+Ooty,+Tamil+Nadu/@11.4182743,76.701971,17.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba8bd96f5b955f7:0x4c07f197bbe2a6d5!2m2!1d76.703099!2d11.42064?entry=ttu";
  window.open(gotoHilldas);
};
let rajBhavan = document.querySelector(".rajBhavan"); //rajbavan
rajBhavan.onclick = function () {
  let gotoRajBhavan =
    "https://www.google.com/maps/dir//Raj+Bhavan+Ooty,+Vannarapettai,+Ooty,+Tamil+Nadu/@11.4208412,76.7102009,18.25z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba8bdeacd638885:0xbfc23581c0adbca1!2m2!1d76.7104902!2d11.4220171?entry=ttu";
  window.open(gotoRajBhavan);
};
let botanical = document.querySelector(".botanicalGarden"); //botanicalgarden
botanical.onclick = function () {
  let gotoBotanicalGarden =
    "https://www.google.com/maps/dir//Government+Botanical+Garden,+Vannarapettai,+Ooty,+Tamil+Nadu/@11.4164773,76.7148106,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba8bdeb5bbccb7d:0x7d64a04cc485b38f!2m2!1d76.7113878!2d11.4188751?entry=ttu";
  window.open(gotoBotanicalGarden);
};
let tataInstitute = document.querySelector(".tataInstitute"); //tatainstitute
tataInstitute.onclick = function () {
  let gotoTataInstitute =
    "https://www.google.com/maps/dir//Tata+Institute+of+Fundamental+Research,+Rah+Bhavan,+Vannarapettai,+Ooty,+Tamil+Nadu/@11.4184027,76.7101495,16.25z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3ba8bdeba959092f:0x7d7d458d8a6717a2!2m2!1d76.7098361!2d11.4202695!3e0?entry=ttu";
  window.open(gotoTataInstitute);
};
let vannarapet = document.querySelector(".vannaraPettai"); //Vannarapettai
vannarapet.onclick = function () {
  let gotoVannarapet =
    "https://www.google.com/maps/dir//Vannarapettai,+Ooty,+Tamil+Nadu+643002/@11.4198504,76.6708068,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3ba8bdeb3fdd3db1:0x66bfd9024350c62b!2m2!1d76.7120064!2d11.4197691!3e0?entry=ttu";
  window.open(gotoVannarapet);
};
let nirmalaschool1 = document.querySelector(".nirmalaSchool"); //Vannarapettai
nirmalaschool1.onclick = function () {
  let gotoNirmala =
    "https://www.google.com/maps/dir//Nirmala+Matriculation+School,+Fingerpost,+Ooty,+Tamil+Nadu/@11.415108,76.6823031,19.25z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba8bd714a637025:0x1e42a74650f367d3!2m2!1d76.6823782!2d11.415387?entry=ttu";
  window.open(gotoNirmala);
};
let annanagar1 = document.querySelector(".annaNagar"); //Vannarapettai
annanagar1.onclick = function () {
  let gotoAnnaNagar =
    "https://www.google.com/maps/dir//Anna+Nagar,+Ooty,+Tamil+Nadu/@11.4150772,76.6746403,17.75z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba8bd6de81019bd:0x1e9f8ae40c6b0915!2m2!1d76.6744784!2d11.41527?entry=ttu";
  window.open(gotoAnnaNagar);
};
let monterosa = document.querySelector(".Monterosa"); //Vannarapettai
monterosa.onclick = function () {
  let gotoMonterosa =
    "https://www.google.com/maps/dir//Monterosa+Colony,+Mettupalayam,+Ooty,+Tamil+Nadu/@11.4150361,76.6870462,17.79z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba8bd9c4bed2e0d:0xae34e5401008d3f3!2m2!1d76.6889136!2d11.415933?entry=ttu";
  window.open(gotoMonterosa);
};
let openBibleChurch = document.querySelector(".openBibleChurch"); //Vannarapettai
openBibleChurch.onclick = function () {
  let gotoOpenBibleChurch =
    "https://www.google.com/maps/dir//Open+bible+church+of+god,+Fingerpost,+Ooty,+Tamil+Nadu/@11.4143223,76.6814929,17.54z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba8bd72e6df6649:0x4e38e1af03e7cf8!2m2!1d76.6827719!2d11.4144607?entry=ttu";
  window.open(gotoOpenBibleChurch);
};
let tajSavoy = document.querySelector(".tajSavoy"); //Vannarapettai
tajSavoy.onclick = function () {
  let gotoTajSavoy =
    "https://www.google.com/maps/dir//The+Taj+Savoy+Hotel+Ooty,+Sylks+Road,+Monterosa+Colony,+Ooty,+Tamil+Nadu/@11.4142835,76.6921226,17.33z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba8bd9b1e6a55f5:0xc45eb01f076bb335!2m2!1d76.6928844!2d11.4148606?entry=ttu";
  window.open(gotoTajSavoy);
};
let wellbackResidency = document.querySelector(".wellbackResidency"); //Vannarapettai
wellbackResidency.onclick = function () {
  let gotoWellbackResidency =
    "https://www.google.com/maps/dir//Hotel+Welbeck+Residency,+Ooty,+Tamil+Nadu/@11.4131924,76.6979832,18.83z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba8bd9aaee3e217:0xb141e9385a2f6e7f!2m2!1d76.6982039!2d11.4136203?entry=ttu";
  window.open(gotoWellbackResidency);
};
let holyTrinityChurch = document.querySelector(".holyTrinityChurch"); //Vannarapettai
holyTrinityChurch.onclick = function () {
  let gotoHolyTrinityChurch =
    "https://www.google.com/maps/dir//Holy+Trinity+Church,+Summer+House+Road,+Summer+House+Colony,+Upper+Bazar,+Ooty,+Tamil+Nadu/@11.4130624,76.7018803,18.38z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba8bd9034bf2547:0x6833dc469c36a59a!2m2!1d76.7022657!2d11.4135427?entry=ttu";
  window.open(gotoHolyTrinityChurch);
};
let stStephenChurch = document.querySelector(".stStephenChurch"); //Vannarapettai
stStephenChurch.onclick = function () {
  let gotoStStephenChurch =
    "https://www.google.com/maps/dir//St.+Stephen's+Church,+Road,+near+Collectors+office,+Club,+Upper+Bazar,+Ooty,+Tamil+Nadu/@11.4136617,76.7017292,17.54z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba8bd91b6934e0b:0x3364baa00c9d6161!2m2!1d76.7023051!2d11.4146732?entry=ttu";
  window.open(gotoStStephenChurch);
};
let maruthiCottage = document.querySelector(".maruthiCottage"); //Vannarapettai
maruthiCottage.onclick = function () {
  let gotoMaruthiCottage =
    "https://www.google.com/maps/dir//Maruthi+Cottage+Rd,+Pudumund,+Ooty,+Tamil+Nadu+643001/@11.4130611,76.7033593,18.79z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba8bd91c838eb09:0xe236e591024c8335!2m2!1d76.7037567!2d11.4133461?entry=ttu";
  window.open(gotoMaruthiCottage);
};
let sunparkGrand = document.querySelector(".sunparkGrand"); //Vannarapettai
sunparkGrand.onclick = function () {
  let gotoSunparkGrand =
    "https://www.google.com/maps/dir//Hotel+Sunpark+Grand,+168%2FP2,+Charring+Cross+Cornation+circle,+Church+Hill+Road,+Ooty,+Tamil+Nadu+643001/@11.4117905,76.7042913,17.33z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba8bd8d7eac8fe1:0xa4a00e04f594c440!2m2!1d76.7047748!2d11.4126789?entry=ttu";
  window.open(gotoSunparkGrand);
};
const ootyEvents = document.querySelector(".localOotyEvents"); //local events ooty
let localEventsOoty = true;
let localEvents = function () {
  if (localEventsOoty) {
    ootyEvents.style.display = "block";

    anyLocal.style.display = "none";
    anyAuto.style.display = "none";
    anyCab.style.display = "none";
    anyMap.style.display = "none";
    insidehotels.style.display = "none";
    anyAmb.style.display = "none";
    anyEmerg.style.display = "none";
    anyPolice.style.display = "none";
    anyLocal.style.display = "none";
    anymech.style.display = "none";
    mapLocation.style.display = "none";
    mechdata.style.display = "none ";
    mechdata2.style.display = "none";
    mechdata3.style.display = "none";

    localEventsOoty = false;
    localPolice = true;
    local = true;
    emerg = true;
    cab = true;
    auto = true;

    map = true;
    mech = true;
  } else {
    ootyEvents.style.display = "none";

    insidehotels.style.display = "block";
    localEventsOoty = true;
  }
};
