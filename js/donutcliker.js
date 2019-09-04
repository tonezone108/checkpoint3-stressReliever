// Variables are defined at the begining so they can be manipulated by the following functions.
var donutcount = 0;
var autoClick = 0;
var farms = 0;
var mines = 0;
var factories = 0;
var multiplier = 1;

// update function is used in every other function, in order to update the content on the page
function update() {
  //this updates the title so can track your donut count just by looking at the tab of the page
  document.getElementById("text").value = donutcount; //this puts the number of donuts you have into the input field so can see how much you have
  document.title = donutcount + " Donuts";
  document.getElementById("ammountAutoClick").innerHTML =
    "You Own " + autoClick + " Auto Clickers"; // ammount value increases by variable vaule
  document.getElementById("costAutoClick").innerHTML =
    (autoClick + 1) * 12 + " Donuts"; // cost increases based upon how many you own and the variable goes through the math to increase in price
  document.getElementById("ammountFarm").innerHTML =
    "You Own " + farms + " Farms";
  document.getElementById("costFarm").innerHTML = (farms + 1) * 15 + "  Donuts";
  document.getElementById("ammountMine").innerHTML =
    "You Own " + mines + " Mines";
  document.getElementById("costMine").innerHTML = (mines + 1) * 30 + "  Donuts";

  document.getElementById("ammountFactory").innerHTML =
    "You Own " + factories + " Factories";
  document.getElementById("costFactory").innerHTML =
    (factories + 1) * 45 + "  Donuts";

  document.getElementById("donutsPerSecond").innerHTML =
    "You are gaining " +
    (autoClick + farms * 2 + mines * 3 + factories * 4) * multiplier +
    " donuts per second";

  document.getElementById("amountMultiplier").innerHTML =
    "Multiplier Upgrade x" + (multiplier + 1);
  document.getElementById("amountMultiplier2").innerHTML =
    "x" + (multiplier + 1);
  document.getElementById("costMultiplier").innerHTML =
    (multiplier + 1) * 100 + " donuts";
  document.getElementById("currentMultiplier").innerHTML =
    "Your current multiplier is x" + (multiplier + 1);
}

function timer() {
  //timer calculates your total donut count based on currently  owned upgrades
  donutcount = donutcount + autoClick * multiplier;
  donutcount = donutcount + farms * 2 * multiplier;
  donutcount = donutcount + mines * 3 * multiplier;
  donutcount = donutcount + factories * 4 * multiplier;
  update();
}

// THIS FUNCTION IS UBER IMPORTANT It increments every 1000 militseconds and updates the donut count
setInterval(timer, 1000);
// This function will add 1 to your total donut count for every click you make on the donut. Just like cookie clicker
function add() {
  donutcount = donutcount + 1;
  update();
}

function save() {
  //this saves your variables to a local file on your browser that you can access again on load
  localStorage.setItem("donutcount", donutcount);
  localStorage.setItem("autoClick", autoClick);
  localStorage.setItem("farms", farms);
  localStorage.setItem("mines", mines);
  localStorage.setItem("factories", factories);
  localStorage.setItem("multiplier", multiplier);
}
function load() {
  //this loads all your variable vaules from the local file that was saved and then the setInterval will use timer to pick up where you left off
  donutcount = localStorage.getItem("donutcount");
  donutcount = parseInt(donutcount);
  autoClick = localStorage.getItem("autoClick");
  autoClick = parseInt(autoClick);
  farms = localStorage.getItem("farms");
  farms = parseInt(farms);
  mines = localStorage.getItem("mines");
  mines = parseInt(mines);
  factories = localStorage.getItem("factories");
  factories = parseInt(factories);

  multiplier = localStorage.getItem("multiplier");
  multiplier = parseInt(multiplier);
  update();
}

//the following functions follow the same math, they add to their respective variables, increase in price and then timer takes the total number of upgrades to affect the donut count
function buyAutoClick() {
  if (donutcount >= (autoClick + 1) * 12) {
    //the price is updated based on how many you own which is recorded in its stored variable
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
  // this function in particular serves to multiply the total output of your donut count, its price allso increases baded on how many you own.
  if (donutcount >= (multiplier + 1) * 100) {
    donutcount = donutcount - (multiplier + 1) * 100;
    multiplier = multiplier + 1;
  }
  update();
}

function buyMine() {
  if (donutcount >= (mines + 1) * 30) {
    donutcount = donutcount - (mines + 1) * 30;
    mines = mines + 1;
    update();
  }
}

function buyFactory() {
  if (donutcount >= (factories + 1) * 45) {
    donutcount = donutcount - (factories + 1) * 45;
    factories = factories + 1;
    update();
  }
}
