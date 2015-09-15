// JavaScript Best Practices
// 1.2 All Packed
'no'

// 1.3 Adventure Time
'yes'

// 1.4 Ready to Go
'Adventure time is now!'

// 1.5 Enter Pesky Gnat
character = isHero ? 'Dhuun' : 'Pesky Gnat'

// 1.6 Ternary Returns
"Dhuun"

// 1.8 Lost In The Brush
4

// 1.9 Look No Further
short-circuit

// 1.10 Still Lost
true

// 1.11 Contents In Your Pocket
var pocketStuff = ['Dragon Tooth', 'Adventure Diary', 'Silver Tiger Coin'];
var pocketContents = pocketStuff || [];

// 1.12 The One Who Learns
var pocketStuff = ['Dragon Tooth', 'Adventure Diary', 'Silver Tiger Coin'];
var cluesToThePast = pocketStuff || [];
getMyIdentity(cluesToThePast);

function getMyIdentity(memories) {
  var identity = (memories.indexOf('Adventure Diary') >= 0) ? 'The One Who Learns' : undefined;
  return identity || 'unknown';
}

// 1.14 Journey's Beginning
var beginJourney = aiedraIsConvincing && dhuunIsCurious;

// 1.15 Survive This Trial
var surviveThisTrial = strength && !fear;

// 1.16 Snack Snag
var surviveThisTrial = strength && !fear && pack.enoughFood(10);

// 1.17 Food Or Fail
true

// 1.18 Dhuun Doppelganger
The fear variable will short-circuit the logical assignment, and enoughFood will not be called at all.

// 1.20 Can't Hear You
She said none of these.

// 1.21 Aiedra's Mutterings
default: aiedrasWords = "Shall we live in Infinite Midnight always?";

// 1.22 Three Lamps Lit
'Shall we live in Infinite Midnight always?'

// 1.23 Switch It Up
switch (direction)  {
  case "right hallway":
    happensNext = "You find a door, it is locked. You head back from where you came.";
    break;
  case "left hallway":
    happensNext = "You find a door, it is locked. You head back from where you came.";
    break;
  case "forward hallway":
    happensNext = "You find a door, it is locked. You head back from where you came.";
    break;
  case "lower tunnel":
    happensNext = "You find a door, it is locked. You head back from where you came.";
    break;
  case "hidden door":
    happensNext = "You go through the door into a room. A small, very dark room, that smells of dust and sulfur...";
      break;
  default:
    happensNext = "You stand there, gaping, not moving. Aiedra wonders, are you alive?";
}

// 1.24 Fall-Throughs
switch (direction) {
  case 'right hallway':
  case 'left hallway':
  case 'forward hallway':
  case 'lower tunnel': happensNext = 'You find a door, it is locked. You head back from where you came.';
  break;
  case 'hidden door': happensNext = 'You go through the door into a room. A small, very dark room, that smells of dust and sulfer...';
  break;
  default: happensNext = 'You stand there, gaping, not moving. Aiedra wonders, are you alive?';
}

// 1.25 Colore Videt Me
switch (caretaker) {
   case "ElementElder":
    this.goldenEdge = "Consilium autem liberabit vos";
  case "ColorCardinal":
    this.silverStamp = "Non video colorem, colore videt me";
  case "PixelPriest":
    this.bronzeBanner = "Omne initium est a pixel";
  case "FontFriar":
    this.circumscribedSquare = "Venit Comic Sans";
  case "StyleSensei":
    this.innerRing = "Ars autem est in aeternum";
}

// 2.2 Kill Extra Steps
Cache the necessary value in a local variable.

// 2.3 Property Puzzle
for loop

// 2.4 Cache Is King
function populationGetter(location) {
  var list = '';
  var numCritters = location.critters.length;
  for (var i = 0; i < numCritters; i++) {
    list += location.critters[i];
  }
  return list.trim();
}

// 2.5 Biters Bog
function populationGetter(location) {
  var list = '';
  for (var i = 0, numCritters = location.critters.length; i < numCritters; i++) {
    list += location.critters[i];
  }
  return list.trim();
}

// 2.6 Inverted Peninsula
3

// 2.7 Redoing What was Done
for(var i = 0, arrLength = invertedPeninsula.inhabitants.length; i < arrLength; i++ ) {
  console.log(invertedPeninsula.inhabitants[i].name);
}

// 2.9 The Best Spot
The bottom, just before the final <body> tag.

// 2.10 Script Spirits
<script type="text/javascript" src="https://www.fourlands.com/takesForever.js" async></script>

// 2.13 Helps Memory You Say
Prototype

// 2.14 Stage Them All
fragment

// 2.15 Rampant Var
var list = document.getElementById('population'),
    inhabitants = ['Nipping Global Variable', 'Sneaky For-in', 'Bulging Blocking Script'],
	  fragment = document.createDocumentFragment();

// 2.16 Jumbo String
Call the Array prototype join() method on array.

// 2.17 Join Together
array.join(' ')

// 2.19 How Long
console.time

// 2.20 Opening And Closing
true

// 2.21 Do Not Test Her
var array = ['Inverted Peninsula', ',', 'Inverted Peninsula', ', ', 'I', '—', 'P', '...', 'hmmm', '.'];
var internalThoughts = '';
console.time('total time');
internalThoughts = array.join(' ');
console.timeEnd('total time');
console.log(internalThoughts);

// 2.22 Can You Fix It?
console.time('innerTest');
console.log(internalThoughts);
console.timeEnd('innerTest');

// 2.23 Included Or Not
false

// 2.24 Adding Up Inhabitants
function populationGetter(){
  var population = invertedPeninsula.inhabitants;
  var list = "";
  console.time('test');

  for(var i = 0, ff = population.length; i < ff; i++){
    list += (population[i] + " ");
  }

  console.timeEnd('test');
  return list.trim();
}

// 2.26 A New Speed Test
var SpeedTest = new SpeedTest(populationGetter, inhabitants, 100000);
SpeedTest.startTest();

// 3.2 Carefully Compare
===

// 3.3 Safe Defaults
type, contents

// 3.4 Beggar Bird
for (var i = 0; i < this.foodPouch.length; i++) {
  if (this.foodPouch[i] === birdFood) {
    alert('Feed beggar bird ' + this.foodPouch[i]);
  }
}

// 3.5 Bird Is The Word
true

// 3.6 Birds Of All Feathers
instanceof

// 3.7 Counting Birds
var count = 0;
for(var i = 0; i < duneInhabitants.length; i++) {
  if (duneInhabitants[i] instanceof SyntaxBird) {
    count++;
  }
}

// 3.8 Inherit My Kingdom
true

// 3.9 Inheritance Sharing
Bird

// 3.11 Name That Error
syntax, run-time

// 3.12 Fowl Feeding Fun
run-time

// 3.13 Syntax Woes
var TryCatchTaster =  function() {};

// 3.14 Control Program Flow
try

// 3.15 Throwback
catch

// 3.16 Take Action
finally

// 3.17 For The Birds
for (var i = 0; i < duneInhabitants.length; i++) {
  try {
  	pack.feedBird(duneInhabitants[i]);
  } catch (e) {
    console.log(duneInhabitants[i] + " was not fed.");
  }
}

// 3.19 With Hunt
redundancy, scope

// 3.20 Caching Clarity
var matches = 3;
function lightCampfire() {
  var tin = pack.fireKit.matchTin;
  tin.matches--;
  tin.sparkPaper--;
}

// 3.21 Trebuchet To A Termite
function toolAssignment(number, tool) {
  toolsForTheBug[number].tool = tool;
}

// 3.22 Tools For The Bug
JSON.parse

// 3.23 A Two Character Sacrifice
function toolAssignment(number, tool) {
  toolsForTheBug[number].tool = tool;
}

// 3.25 Number Nonsense
return parseFloat(returnedFeed.toFixed(1));

// 3.26 Number Nonsense II
parseInt(lambString, 10)

// 3.27 Number Nonsense III
parseFloat(lambString)

// 3.28 Number Nonsense IV
2, 36

// 3.29 Number Nonsense V
typeof, isNaN

// 4.2 Grouping and Protecting
namespace

// 4.3 Prove Your Worth
1) overwrite, 2) globally, 3) run-time

// 4.4 Enter the Caves
var obj = {
  stalactites: 4235,
  stalagmites: 3924,
  bats: 345,
  treasureChests: 3,
  openChest: function() {
    this.treasureChests--;
    alert('DA DADADA DAAAAAAA!');
  }
};

// 4.5 Access is Granted
<button onclick="CAVESOFCLARITY.openChest();">Open the Secret Treasure!</button>

// 4.6 Privacy or Piracy?
False

// 4.7 Treasure Chests
var CAVESOFCLARITY = {
  stalactites: 4235,
  stalagmites: 3924,
  bats: 345,
  SECRET: {
  	treasureChests: 3,
    openChest: function() {
      this.treasureChests--;
      alert('DA DADADA DAAAAAAA!');
    }
  }
};

// 4.8 Secrets
<button onclick="CAVESOFCLARITY.SECRET.openChest();">Open the Secret Treasure!</button>

// 4.9 Unknowing
agnostic

// 4.11 Some This Some That
anonymous closures

// 4.12 Private vs Public
Private, created, function expression, Public, object, returned, namespace, private, closure, module

// 4.13 Build Private Data
var CAVESOFCLARITY = (function() {
  var treasureChests = 3;

  return {
    stalactites: 4235,
    stalagmites: 3924,
    bats: 345,
    SECRET: {
      openChest: function() {
        treasureChests--;
        alert('DA DADADA DAAAAAAA!');
      }
    }
  };
})();

// 4.14 Public Impacting Private
treasureChests--;

// 4.15 Secure the Bats
var CAVESOFCLARITY = (function() {
  var treasureChests = 3;
  var bats = 345;

  return {
    stalactites: 4235,
    stalagmites: 3924,
    SECRET: {
      openChest: function() {
        treasureChests--;
        alert('DA DADADA DAAAAAAA!');
      }
    }
  };
})();

// 4.16 Useless Closure
Since its never referenced through the public methods, the private bats datum holds no functional purpose.

// 4.17 Bats for All Time
getBats: function() { return bats; }

// 4.18 iife
The parentheses that immediately invoke the function.

// 4.20 Grabbing Globals
global imports

// 4.21 Build Import
var LEXICALLAKE = (function(answer) {
  var depth = 400;
  var fish = 1200;
  var unknownSleepers = 3;

  return {
    getFish: function() { return fish; },
    getDepth: function() { return depth; },
    getSleepers: function() {return unknownSleepers; },
    awakenSleeper: function() {
      alert('Far below, in the deep, something awakens. Row faster.');
    },
    summonBoat: function() {
      if (answer === 'agnostic') {
        alert('The boat fades into view.');
      }
      else {
        alert('...the lake is silent.');
      }
    }
  };
})(explorerAnswer);

// 4.23 The Sleeper Cometh
var LEXICALLAKE = (function(answer, foundShore) {
  var depth = 400;
  var fish = 1200;
  var unknownSleepers = 3;

  return {
    getFish: function() { return fish; },
    getDepth: function() { return depth; },
    getSleepers: function() { return unknownSleepers; },
    awakenSleeper: function() {
      alert('Far below, in the deep, something awakens. Row faster.');
    },
    summonBoat: function() {
      if (answer === 'agnostic') {
        alert('The boat fades into view.');
      }
      else {
        alert('...the lake is silent.');
      }
    },
    stopSleeper: function() {
      if(foundShore){
        alert("That which has awoken shall now return to slumber.");
      } else {
        alert("A Sleeper cometh. Abandon hope.");
      }
    }
  };
})(explorerAnswer, madeItAcross);

// 4.25 Definition Augment
augment

// 4.26 Build Module
CAVESOFCLARITY = (function(caves) {
	var sandScript = '';

  caves.setSandScript = function(message) {
    sandScript = message;
  };

  return caves;
})(CAVESOFCLARITY);

// 4.27 Private State Access
augmentation, module, do not, private state, properties, access, private, closure, Private, original, will not, will, properties
