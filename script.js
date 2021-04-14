// Quizsida //

// H1-interaktion till ett klickat svar. //

var fact = document.getElementById("fact");
var explaination = document.getElementById("explaination");
var question = document.getElementById("question");
var grid6 = document.getElementsByClassName("grid6");
var grid5 = document.getElementsByClassName("grid5");
var grid4 = document.getElementsByClassName("grid4");
var grid3 = document.getElementsByClassName("grid3");
var grid2 = document.getElementsByClassName("grid2");
var grid1 = document.getElementsByClassName("grid");
var svar1 = document.getElementsByClassName("g6");
var svar2 = document.getElementsByClassName("g7");
var svar3 = document.getElementsByClassName("g8");
var svar4 = document.getElementsByClassName("g9");
var svar5 = document.getElementsByClassName("g10");
var g11 = document.getElementsByClassName("g11");
var g11i1 = document.getElementsByClassName("g11i1");
var g11i2 = document.getElementsByClassName("g11i2");
var g12 = document.getElementsByClassName("g12");
var g12i1 = document.getElementsByClassName("g12i1");
var g12i2 = document.getElementsByClassName("g12i2");
var g13 = document.getElementsByClassName("g13");
var btnnext = document.getElementById("btn-next");
var btnforward = document.getElementById("btn-forward");

// H1-interaktion till ett klickat svar. //

function klickad() {
  explaination.innerHTML = "";
  svar1[0].style.display = "none";
  svar2[0].style.display = "none";
  svar3[0].style.display = "none";
  svar4[0].style.display = "none";
  svar5[0].style.visibility = "visible";
}

// H1-interaktion för hovering över svar. //

function solitary() {
    
  explaination.innerHTML = "Alone time, for reflection and self care seems the most evident.";
}

function opposite() {
  explaination.innerHTML = "Something requiring a mindset in complete opposite his, challenging him on a social level.";
}

function brainy() {
  explaination.innerHTML = "Logical and puzzley, something that helps him problem solving without attaching emotions to it.";

}

function physical() {
  
  explaination.innerHTML = "Something to get him pumped up and ripped like Michael Phelps.";
 
}

// Gömmer första svarselemenet. //

function göms1() {
  svar2[0].style.visibility = "hidden";
  svar3[0].style.visibility = "hidden";
  svar4[0].style.visibility = "hidden";
  svar1[0].style.gridColumnStart = "1";
  svar1[0].style.gridColumnEnd = "4";
  svar1[0].style.gridRowStart = "2";
  svar1[0].style.gridRowEnd = "4";
  svar1[0].style.background = "#61ef64";
  svar1[0].style.color = "white";
  btnforward.style.WebkitAnimation = "blinka 2s infinite";
  question.innerHTML = "Solitude might be the way to biding time better.";
  fact.innerHTML = "Alone time, groovy.";
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});
}

// Gömmer andra svarselemenet //

function göms2() {
  svar1[0].style.visibility = "hidden";
  svar3[0].style.visibility = "hidden";
  svar4[0].style.visibility = "hidden"; 
  svar2[0].style.gridColumnStart = "1";
  svar2[0].style.gridColumnEnd = "4";
  svar2[0].style.gridRowStart = "2";
  svar2[0].style.gridRowEnd = "4";
  svar2[0].style.background = "#61ef64";
  svar2[0].style.color = "white";
  btnforward.style.WebkitAnimation = "blinka 2s infinite";
  question.innerHTML = "<i>A new me<i> - perhaps by facing inconsequantial fears, he may grow to face real ones easily!";
  fact.innerHTML = "Opposite schmopposite.";
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});
}

// Gömmer tredje svarselemenet. //


function göms3() {
  svar1[0].style.visibility = "hidden";
  svar2[0].style.visibility = "hidden";
  svar4[0].style.visibility = "hidden"; 
  svar1[0].style.gridColumnStart = "1";
  svar3[0].style.gridColumnEnd = "4";
  svar3[0].style.gridRowStart = "2";
  svar3[0].style.gridRowEnd = "4";
  svar3[0].style.background = "#61ef64";
  svar3[0].style.color = "white";
  btnforward.style.WebkitAnimation = "blinka 2s infinite";
  question.innerHTML = "The mind-body connection is inevitable. Imagine investing in one's mental abilities, and being in full control.";
  fact.innerHTML = "Something mindboggeling, for sure.";
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});
}

// Gömmer fjärde svarselemenet. //

function göms4() {
  svar1[0].style.visibility = "hidden";
  svar2[0].style.visibility = "hidden";
  svar3[0].style.visibility = "hidden"; 
  svar4[0].style.gridColumnStart = "1";
  svar4[0].style.gridColumnEnd = "4";
  svar4[0].style.gridRowStart = "2";
  svar4[0].style.gridRowEnd = "4";
  svar4[0].style.background = "#61ef64";
  svar4[0].style.color = "white";
  btnforward.style.WebkitAnimation = "blinka 2s infinite";
  btnforward.style.boxShadow = "inset 0.5vw 0.5vh 1vw 1vh #61ef64";
  question.innerHTML = "We are after all animals. Why not engage with our neglected physical instincts, and reap the evolutionary rewards!";
  fact.innerHTML = "Let's make this guy Sporty Spice.";
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});
  }

// Byter från ett grid med innehåll till ett annat. //


function sidbyte1() {
  grid1[0].style.visibility = "hidden";
  grid1[0].style.display = "none"
  grid1[0].style.WebkitAnimation = "fejdut 2s";
  grid4[0].style.display= "grid";
  grid4[0].style.animation = "fejdin 2s";
}

function sidbyte2() {
  grid4[0].style.visibility = "hidden";
  grid4[0].style.display = "none";
  grid4[0].style.animation = "fejdut 2s";
  grid5[0].style.animation = "fejdin 2s";
  grid5[0].style.visibility = "visible";
  grid5[0].style.display= "grid";
}

function sida1() {
  grid1[0].style.visibility = "hidden";
  grid1[0].style.display = "none"
  grid1[0].style.WebkitAnimation = "fejdut 2s";
  grid1[0].style.animation = "fejdut 2s";
  grid2[0].style.animationDelay = "5s";
  grid2[0].style.WebkitAnimation = "fejdin 2s";
  grid2[0].style.animation = "fejdin 2s";
  grid2[0].style.visibility = "visible";
  grid2[0].style.display = "grid";
}

// Byter från ett grid med innehåll till ett annat. //

function sida2() {
  grid2[0].style.visibility = "hidden";
  grid2[0].style.display = "none";
  grid3[0].style.display= "grid";
  grid3[0].style.animation = "fejdin 2s";
  g11[0].style.display = "grid";
  g12[0].style.display = "grid";
  g13[0].style.visiblity = "visible";
}

// Byter från ett grid med innehåll till ett annat. //

function sida3() {
  grid3[0].style.visibility = "hidden";
  grid3[0].style.display = "none";
  grid3[0].style.animation = "fejdin 2s";
  grid4[0].style.visibility = "visible";
  grid4[0].style.display= "grid";
}

function sida4() {
  grid4[0].style.visibility = "hidden";
  grid4[0].style.display = "none";
  grid5[0].style.animation = "fejdin 2s";
  grid5[0].style.visibility = "visible";
  grid5[0].style.display= "grid";
}


function sida5() {
  grid5[0].style.visibility = "hidden";
  grid5[0].style.display = "none";
  grid6[0].style.animation = "fejdin 2s";
  grid6[0].style.visibility = "visible";
  grid6[0].style.display= "grid";
}


