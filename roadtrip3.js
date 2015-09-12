// Codeschool javascript roadtrip part 3
// 1.2 Changing Declarations to Expressions
var runAway = function() {
  var toAlert = "";
  for (var i = 0; i < 5; i++) {
    toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
  }
  alert(toAlert);
};

// 1.3 Using Function Expressions with Parameters
var people = 10;
var rain = 5;
var sharks = 5;

var fearGenerated = function(numPeeps, rainInInches, numSharks) {
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  return totalFear;
};

var fear = fearGenerated(people, rain, sharks);

// 1.4 Displaying Function Contents
alert(fearGenerated);

// 1.5 Functions as Parameters, Arguments and Return Values
var fear = fearGenerated(numPeeps, rainInInches, numSharks);

var fearMessage = function() {
  if (fear < 200) {
    return confirm("Fear Level: LOW\nStill wanna ride?");
  } else if (fear >= 200 && fear <= 300) {
    return confirm("Fear Level: MEDIUM\nThink you'll make it?");
  }
};

function confirmRide(confirm){
  return confirm();
}

var startRide = confirmRide(fearMessage);

// 1.7 Using Map With Arrays
var modifiedNames = passengers.map(function(arrayCell) { return arrayCell[0] + ' ' + arrayCell[1]; });

// 1.8 Using Map With Arrays II
modifiedNames.map(function(name) { alert("Yo, " + name + "!"); });

// 1.9 Expressions Inside Arrays
var puzzlers = [
  function(input) {
    return 3 * input - 8;
  },
  function(input) {
    return Math.pow(input + 2, 3);
  },
  function(input) {
    return Math.pow(input, 2) - 9;
  },
  function(input) {
    return input % 4;
  }
];

// 1.11 Choose Their Own Adventure
function adventureSelector(userChoice){
  if (userChoice == 1) {
    return function() {
      alert("You selected the Vines of Doom!");
    };
  } else if (userChoice == 2) {
    return function() {
      alert("Looks like you want the Lake of Despair!");
    };
  } else {
    return function() {
      alert("The Caves of Catastrophe!");
    };
  }
}

// 1.12 Immediately-Invoked Adventure!
adventureSelector(3)();

// 1.13 Queue Builder
var applyAndEmpty = function(input, queue) {
  var i, qLength = queue.length;
  for (i = 0; i < qLength; i++) {
    input = queue.shift()(input);
  }
  return input;
};

alert(applyAndEmpty(start, puzzlers));

// 1.14 Immediately-Invoked Puzzler
alert(puzzlers[puzzlers[1](3)](puzzlers[3](9)));

// 2.2 Tracing a Closure I
alert(54);

// 2.3 Tracing a Closure II
alert(40);

// 2.4 Tracing a Closure III
alert(122);

// 2.5 Building a Closure I
function warningMaker(obstacle) {
  return function() {
  	alert("Beware! There have been " + obstacle + " sightings in the Cove today!");
  };
}

// 2.6 Using a Closure I
var icebergAlert = warningMaker("iceberg");
icebergAlert();

// 2.7 Building a Closure II
function warningMaker(obstacle) {
  return function(number, location) {
    alert("Beware! There have been " + obstacle +
      " sightings in the Cove today!\n" +
      number + " have been spotted at the " + location + "!"
    );
  };
}

// 2.8 Using a Closure II
killerPenguinAlert(6, "Ice Caves");
snowYetiAlert(1, "Blizzard Beach");

// 2.10 Changing a Bound Value I
function warningMaker(obstacle) {
  var count = 0;
  return function(number, location) {
    count++;
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\nThis is alert #" +
          count +  " today for " + obstacle + " danger."
    );
  };
}

// 2.11 Highway to the Danger Zones
function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    zones.push(location);
    list = zones.join("\n ");

    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" + "This is alert #" + count + " today for " +
          obstacle + " danger.\nCurrent danger zones are:" + list
    );
  };
}

// 2.12 Just Keep Track of It All!
function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    zones.push([location, number]);
    for (var i = 0; i < zones.length; i++) {
      list += zones[i][0] + " (" + zones[i][1] + ")" + "\n";
    }
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\n" +
          "Current danger zones are:\n" +
          list);
  };
}

// 2.14 Final Closed Values I
function assignLaser(shark, sharkList) {
  for (var i = 0; i < sharkList.length; i++) {
    if (shark == sharkList[i]) {
      return function() {
        alert("Yo, " + shark + "!\n" +
              "Visit underwater strapping station " +
              (i + 1) + " for your sweet laser.");
      };
    }
  }
}

// 2.15 Final Closed Values II
function makeTargetAssigner(sharks, targets) {
 return function(shark) {
    var i;
    for (i = 0; i < sharks.length; i++) {
      if (sharks[i] == shark) {
        alert("What up, " + shark + "!\n" +
              "There've been " + targets[i] +
              " sightings in our 'hood!\n" +
              "Time for a swim-by lasering, homie!");
      }
    }
  };
}

// 3.2 Analyzing Load Order I
console.log("unused2");

// 3.3 Analyzing Load Order II
function theBridgeOfHoistingDoom() {
  var ring = undefined;
  var power = undefined;

  function balrog() {
    return "whip";
  }

  function wizard() {
    return "white";
  }

  function elf() {
    return "immortal";
  }

  ring = wizard;
  wizard = balrog;
  return wizard();
}

// 3.4 Analyzing Load Order III
function theBridgeOfHoistingDoom() {
  var sword = undefined;
  var dwarf = undefined;
  var fall = undefined;
  var ring = undefined;

  function fellowship() {
    return "friends";
  }

  dwarf = function() {
    return "axe";
  };

  fellowship = function() {
    return "mines"
  };

  sword = function() {
    return "glamdring";
  };

  ring = function() {
    return "precious";
  };

  sword = "sting";
  fall = "Fly you fools!";
  ring();
  return sword;
}

// 3.5 Analyzing Load Order IV
console.log("ERROR");

// 4.2 Building Objects I
var vehicle1 = {
  type: "Motorboat",
  capacity: 6,
  storedAt: "Ammunition Depot"
};

var vehicle2 = {
  type: "Jet Ski",
  capacity: 1,
  storedAt: "Reef Dock"
};

var vehicle3 = {
  type: "Submarine",
  capacity: 8,
  storedAt: "Underwater Outpost"
};

// 4.3 Accessing Objects I
console.log(vehicle1.capacity);

// 4.4 Accessing Objects II
var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

var vehicles = [vehicle1, vehicle2, vehicle3];

var findVehicle = function(name, list) {
  var i;
  for (i = 0; i < list.length; i++) {
    if (list[i]["type"] == name) {
    	return list[i]["storedAt"];
    }
  }
};

findVehicle("Submarine", vehicles);

// 4.5 Building Objects II
vehicle1.capacity += 4;
vehicle2.submersible = false;
vehicle3.weapon = "Torpedoes";
vehicle1.submersible = false;
vehicle2.weapon = "Lasers";
vehicle3.capacity *= 2;
vehicle1.weapon = "Rear-Mounted Slingshot";
vehicle3.submersible = true;

// 4.6 Moar Power!! Fight Pirates!!
vehicle1["# of weapons"] = 1;
vehicle2["# of weapons"] = 4;
vehicle3["# of weapons"] = 8;

// 4.7 Blinders On!
delete lighthouseRock.bulbs;
lighthouseRock.weaponBulbs = superBlinders;
console.log(lighthouseRock.weaponBulbs[2][0]);

// 4.8 To the Lighthouse, Quick!
function addRanger(location, name, skillz, station) {
  location.numRangers++;
  location["ranger" + location.numRangers] = {name: name, skillz: skillz, station: station};
}

addRanger(lighthouseRock, "Nick Walsh", "magnification burn", 2);
addRanger(lighthouseRock, "Drew Barontini", "uppercut launch", 3);
addRanger(lighthouseRock, "Christine Wong", "bomb defusing", 1);

// 4.9 Man your Bulb Stations!
function dontPanic(location) {
  var i, list = "Avast, me hearties!\n" +
             "There be Pirates nearby! Stations!\n";

  for (i = 1; i <= location.numRangers; i++) {
    var ranger = location["ranger" + i];
    var name = ranger.name;
    var superblinder = location.weaponBulbs[ranger.station-1][0];

    list += name + ", man the " + superblinder + "!\n";
  }

  alert(list);
}

// 4.11 Functions as Properties I
var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
  addRanger: function(name, skillz, station) {
    this.numRangers++;
    this["ranger" + this.numRangers] = {
      name: name,
      skillz: skillz,
      station: station
    };
  }
};

// 4.12 Calling Function Properties I
lighthouseRock.addRanger("Jordan Wade", "dual-wield hand crossbow", 4);

// 4.13 Functions as Properties II
lighthouseRock.addBulb = function(name, wattage) {
  this.weaponBulbs.push([name, wattage]);
}

// 4.14 Calling Function Properties II
lighthouseRock.addBulb("Blasterbright", 5000);
lighthouseRock.addBulb("Sight Slayer", 1800);
lighthouseRock.addBulb("Burner of Souls", 7500);

// 4.15 Relieved of Duty!
var relieveDuty = function(vehicle, day) {
  var i, j;
  var offDuty = [];
  var onDuty = [];

  for (i = 1; i <= vehicle.numRangers; i++) {
    if (vehicle["ranger" + i].dayOff == day) {
      offDuty.push(vehicle["ranger" + i]);
    } else {
      onDuty.push(vehicle["ranger" + i]);
    }
    delete vehicle["ranger" + i];
  }

  vehicle.numRangers -= offDuty.length;

  for (j = 1; j <= vehicle.numRangers; j++) {
    vehicle["ranger" + j] = onDuty.shift();
  }

  return offDuty;
};

var offToday = relieveDuty(vehicle3, "Friday");

// 4.17 Enumeration I
function listGuns(guns) {
  for (var speargun in guns) {
  	console.log(speargun);
  }
};

listGuns(rockSpearguns);

// 4.18 Enumeration II
function listGuns(guns) {
  for (var speargun in guns) {
    console.log("Behold! " + speargun + ", with " +
                guns[speargun]["heft"] + " heft!");
  }
}

listGuns(rockSpearguns);

// 4.19 Enumeration III
var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"},
  "listGuns": function() {
    for (var property in this) {
      if (this[property]["heft"] != undefined) {
        console.log("Behold! " + property + ", with " +
                    this[property]["heft"] + " heft!");
      }
    }
  }
};

// 5.2 Prototypes I
Array.prototype.countCattle = function(kind) {
	var i, numKind = 0;

  for (i = 0; i <= this.length; i++) {
    if (this[i].type == kind) {
      numKind++;
    }
  }

  return numKind;
}

// 5.3 Prototypes II
alert( canyonCows.countCattle("calf") + valleyCows.countCattle("bull") + forestCows.countCattle("cow"));

// 5.4 Prototypes III
Object.prototype.noCalvesYet = function() {
  if (this.type == "cow" && this.hadCalf == null) {
    return true;
  } else {
    return false;
  }
};

Array.prototype.countForBreeding = function() {
  var numToBreed = 0;
  for (var i = 0; i < this.length; i++) {
    if (this[i].noCalvesYet()) {
      numToBreed++;
    }
  }
  return numToBreed;
};

// 5.5 Prototypes IV
var numPriorityCows = canyonCows.countForBreeding() +
                      valleyCows.countForBreeding() +
                      forestCows.countForBreeding() +
                      badlandsCows.countForBreeding();

alert("Herd-merger has indicated " + numPriorityCows + " cows of top breeding priority.");

// 5.7 Creation with Prototypes I
var post1 = Object.create(genericPost);
var post2 = Object.create(genericPost);

post1.x = -2;
post1.y = 4;
post1.postNum = 1;
post2.x = 5;
post2.y = 1;
post2.postNum = 2;

post2.sendRopeTo(post1);
post1.sendRopeTo(post2);

// 5.8 Creation with Prototypes II
var post8 = Object.create(genericPost);
var post9 = Object.create(genericPost);
var post10 = Object.create(genericPost);

post8.x = 0;
post8.y = -3;
post8.postNum = 8;

post9.x = 6;
post9.y = 8;
post9.postNum = 9;

post10.x = -2;
post10.y = 3;
post10.postNum = 10;

post8.sendRopeTo(post10);
post10.sendRopeTo(post8);
post9.sendRopeTo(post10);
post10.sendRopeTo(post9);

post9.numBirds = 0;
post10.weathervane = "N";
post8.lightsOn = false;
post10.lightsOn = false;

// 5.9 Constructor I
function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
  this.sendRopeTo = function(connectedPost) {
    this.connectionsTo.push(connectedPost);
  };
}

// 5.10 Constructor II
var post18 = new Fencepost(-3, 4, 18);
var post19 = new Fencepost(5, -1, 19);
var post20 = new Fencepost(-2, 10, 20);

post18.sendRopeTo(post20);
post20.sendRopeTo(post18);
post18.sendRopeTo(post19);
post19.sendRopeTo(post18);

// 5.11 Constructor III
function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
}

Fencepost.prototype = {
  sendRopeTo: function(connectedPost) {
    this.connectionsTo.push(connectedPost);
  },
  removeRope: function(removeTo) {
    var temp = [];
    for (var i = 0; i < this.connectionsTo.length; i++) {
      if (this.connectionsTo[i].postNum != removeTo) {
        temp.push(this.connectionsTo[i]);
      }
    }
    this.connectionsTo = temp;
  },
  movePost: function(x, y) {
    this.x = x;
    this.y = y;
  }
};

// 5.13 Overriding Prototypal Methods I
Fencepost.prototype.valueOf = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};

// 5.14 Overriding Prototypal Methods II
Fencepost.prototype.toString = function() {
  var i, list = "";
  for (i = 0; i < this.connectionsTo.length; i++) {
    list += this.connectionsTo[i].postNum + "\n";
  }
  return "Fence post #" + this.postNum + ":\n" +
         "Connected to posts:\n" + list +
         "Distance from ranch: " + this.valueOf() + " yards";
};
