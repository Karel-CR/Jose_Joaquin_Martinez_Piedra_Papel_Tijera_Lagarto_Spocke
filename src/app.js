/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const optionsToPick = ["rock", "paper", "scissors", "lizard", "spock"];

  alert(
    "Rigo wants to play: Rock, Paper, Scissors, Lizard, Spock, feeling like it's your lucky day to take down the wee kid?"
  );

  let playerChoose;
  // Loop to keep asking while user dont pick a valid option
  while (optionsToPick.includes(playerChoose)) {
    playerChoose = prompt(
      "Choose your fighter: Rock, Paper, Scissors, Lizard, Spock"
    ).toLowerCase();
  }

  let computerChoice =
    optionsToPick[Math.floor(Math.random() * optionsToPick.length)];

  alert(`Rigo chooses ${computerChoice}`);
  // Comparing a tie scenario
  if (playerChoose === computerChoice) {
    alert("It's a tie!");
  } else if (
    // looking for the win conditions of each choice
    (playerChoose === "rock" &&
      (computerChoice === "scissors" || computerChoice === "lizard")) ||
    (playerChoose === "paper" &&
      (computerChoice === "rock" || computerChoice === "spock")) ||
    (playerChoose === "scissors" &&
      (computerChoice === "paper" || computerChoice === "lizard")) ||
    (playerChoose === "lizard" &&
      (computerChoice === "spock" || computerChoice === "paper")) ||
    (playerChoose === "spock" &&
      (computerChoice === "rock" || computerChoice === "scissors"))
  ) {
    alert("You won!");
  } else {
    alert("Ha! NOOB!");
  }
};
