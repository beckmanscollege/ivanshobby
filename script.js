// Grids och items //

var grid1 = document.getElementsByClassName("grid");
var grid2 = document.getElementsByClassName("grid2");
var grid3 = document.getElementById("result");

// Byter från startsida till quizsida //

function start() {
  grid1[0].style.display = "none";
  grid1[0].style.WebkitAnimation = "fejdut 2s";
  grid2[0].style.display = "grid";
  grid2[0].style.animation = "fejdin 2s";
}

// Mejlar Ivan ett förslag //

// Här kan jag lägga till fler formulär //
// Dessa hämtar var formulär baserat på deras id -- behöver döpas om.//

const form1 = document.querySelector("#form1");
const result = document.querySelector("#result");

// Här så göms och visas olika formulr vid submit: den sista ska ha count() på sig. //

form1.onsubmit = function(e) {
  // E.prevent förhindrar att en kan skicka in formuläret innan allt är tickat. Du kan styla meddelandet. //

  e.preventDefault();
  form1.classList.add("hidden");
  result.classList.remove("hidden");
  count();
  result.innerHTML = scoreResult; scoreMessage;
};

// Här deklareras de olika kategorierna samt deras värden som är nollstälda och adderas sedan efter prestation//

// Här deklareras mejlen och subject line (dessa är alltid densamma) för att fyllas in automatiskt i mejlutskicket//

const email = "ivan.gedin@edu.beckmans.se";
const subject = "Dearest Ivan, I think you need a hobby…";
let scoreMessage = "";
let scoreResult ="";

// Funktionen som kollar att allt är 'checked', sedan switchar mellan de olika kategorierna för att mäta deras antal//

function count() {
  let answers = document.querySelectorAll("input:checked");

  let scoreA = 0;
  let scoreB = 0;
  let scoreC = 0;

  for (let answer of answers) {
    switch (answer.value) {
      case "a":
        scoreA++;
        break;
      case "b":
        scoreB++;
        break;
      case "c":
        scoreC++;
        break;
    }
  }
  
  // Funktionen som kollar att allt är 'checked', sedan switchar mellan de olika kategorierna för att mäta deras antal//

  if (scoreA >= scoreB && scoreA >= scoreC) {
    scoreResult = "Sprituality";
    scoreMessage =
      "Dear Ivan: Bless You, Ivan. You should stop looking for a hobby and start searching inwards for it: you are meant to be a leader with followers, someone to tell us when to meditate and what juices to drink. From what I've learned from basic facts about you, you the inner peace and empathy that it takes to commit to spirituality. What we all share is problem that is sympthomatic for the millennial and zoomer generation, where we to a greater extent invest meaning and identity in work. Don't be mistaken: finding fulfillment and self-realization in your work life is fantastic! However when we also stock our esteem and confidence in the outcome of what we produce, we will ultimately burn out having no substitute activity.  That's where hobbies come in. The healthy hobby is a distraction from what is monetary and dutiful. It involves active rest, in opposite to passive rest. When we find a hobby that suits us, we are able to blissfully let go off the anxieties produced by a late bill, a deteriorating relationship or an awkward run-in with an aquiantance. Because it is easier to give advice in third person, Ivan might even represent your own need for a hobby. He is just a projection map, really.";
  }

  if (scoreB >= scoreA && scoreB >= scoreC) {
    scoreResult = "Cooking";
    scoreMessage =
      "Herr Ober Ivan! Yes chef! You should really dig out your pans and make the culinary your second love. From what I've learned from basic facts about you, you have what it takes to become a primo cook. What we all share is problem that is sympthomatic for the millennial and zoomer generation, where we to a greater extent invest meaning and identity in work. Don't be mistaken: finding fulfillment and self-realization in your work life is fantastic! However when we also stock our esteem and confidence in the outcome of what we produce, we will ultimately burn out having no substitute activity.  That's where hobbies come in. The healthy hobby is a distraction from what is monetary and dutiful. It involves active rest, in opposite to passive rest. When we find a hobby that suits us, we are able to blissfully let go off the anxieties produced by a late bill, a deteriorating relationship or an awkward run-in with an aquiantance. Because it is easier to give advice in third person, Ivan might even represent your own need for a hobby. He is just a projection map, really.";
  }

  if (scoreC >= scoreB && scoreC >= scoreA) {
    scoreResult = "Triathlon";
    scoreMessage =
      "What's good Ivan! See you at 5 a.m., we're hitting the gym to pump some serious iron. Now don't be scared: from what I've learned from basic facts about you, you have what it takes to become a 100% meat-packing Michael Phelps kind of guy, with a mental health that is bullet proof. What we all share is problem that is sympthomatic for the millennial and zoomer generation, where we to a greater extent invest meaning and identity in work. Don't be mistaken: finding fulfillment and self-realization in your work life is fantastic! However when we also stock our esteem and confidence in the outcome of what we produce, we will ultimately burn out having no substitute activity.  That's where hobbies come in. The healthy hobby is a distraction from what is monetary and dutiful. It involves active rest, in opposite to passive rest. When we find a hobby that suits us, we are able to blissfully let go off the anxieties produced by a late bill, a deteriorating relationship or an awkward run-in with an aquiantance. Because it is easier to give advice in third person, Ivan might even represent your own need for a hobby. He is just a projection map, really.";
  }

  console.log(`A: ${scoreA}, B: ${scoreB} C: ${scoreC}`, scoreMessage);
  console.log(`A: ${scoreA}, B: ${scoreB} C: ${scoreC}`, scoreResult);
  document.querySelector("#btnSendEmail").disabled = false;
  document.querySelector("#btnSendEmail").style.visibility = "visible";
}

// Funktionen som skickar mejl och fyller i body utifrån olika resultat (går igenom storleksordningen på de olika kategorierna).//

function sendEmail() {
  let msg = `mailto:${email}?subject=${subject}&body=${scoreResult, scoreMessage}`;
  window.open(msg);
}
