var donutcount = 0;
var autoClick = 0;
var farms = 0;
var multiplier = 1;

function update() {
  document.getElementById("text").value = donutcount;
  document.title = donutcount + " Donuts";
  document.getElementById("ammountAutoClick").innerHTML =
    "You Own " + autoClick + " Auto Clickers";
  document.getElementById("costAutoClick").innerHTML =
    (autoClick + 1) * 12 + " Donuts";
  document.getElementById("ammountFarm").innerHTML =
    "You Own " + farms + " farms";
  document.getElementById("costFarm").innerHTML = (farms + 1) * 15 + " farms";
  document.getElementById("donutsPerSecond").innerHTML =
    "You are gaining " +
    (autoClick + farms * 2) * multiplier +
    " donuts per second";

  document.getElementById("amountMultiplier").innerHTML =
    "Multiplier Upgrade x" + (multiplier + 1);
  document.getElementById("amountMultiplier2").innerHTML =
    "x" + (multiplier + 1);
  document.getElementById("costMultiplier").innerHTML =
    (multiplier + 1) * 100 + " donuts";
  document.getElementById("currentMultiplier").innerHTML =
    "Your current multiplier is x" + multiplier;
}

function timer() {
  donutcount = donutcount + autoClick * multiplier;
  donutcount = donutcount + farms * 2 * multiplier;
  update();
}
setInterval(timer, 1000);
function add() {
  donutcount = donutcount + 1;
  update();
}

function save() {
  localStorage.setItem("donutcount", donutcount);
  localStorage.setItem("autoClick", autoClick);
  localStorage.setItem("farms", farms);
  localStorage.setItem("multiplier", multiplier);
}
function load() {
  donutcount = localStorage.getItem("donutcount");
  donutcount = parseInt(donutcount);
  autoClick = localStorage.getItem("autoClick");
  autoClick = parseInt(autoClick);
  farms = localStorage.getItem("farms");
  farms = parseInt(farms);
  multiplier = localStorage.getItem("multiplier");
  multiplier = parseInt(multiplier);
  update();
}

function buyAutoClick() {
  if (donutcount >= (autoClick + 1) * 12) {
    donutcount = donutcount - (autoClick + 1) * 12;
    autoClick = autoClick + 1;
    update();
  }
}

function buyFarm() {
  if (donutcount >= (farms + 1) * 15) {
    donutcount = donutcount - (farms + 1) * 15;
    farms = farms + 1;
    update();
  }
}

function buyMultiplier() {
  if (donutcount >= (multiplier + 1) * 100) {
    donutcount = donutcount - (multiplier + 1) * 100;
    multiplier = multiplier + 1;
  }
  update();
}
