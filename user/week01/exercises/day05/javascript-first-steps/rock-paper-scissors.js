  //add comme
  // Function that returns a random move, e.g. rock, paper, scissors:
  function getRandomMove(){
    let pcMove = Math.floor( Math.random() * 3 ); // Will return a random number between 0, 1 and 2
    switch (pcMove){
        case 0: return "rock"; break;
        case 1: return "paper"; break;
        case 2: return "scissors"; break;
    }
  }

  // Given a move, (e.g. rock, paper, scissors) and a random computer move. Returns the result which must be strictly one of the following: "won", "lost", "draw"
  function checkMove( move, computerMove ){
    //check from user side
    let checkMoveResult = "won";
    switch (move){
        case computerMove: checkMoveResult = "draw"; break;
        //check cases where user lost. all other cases - user won
        case "rock":
            if (computerMove === "paper"){ checkMoveResult = "lost";}
            break;
        case "paper":
            if (computerMove === "scissors"){ checkMoveResult = "lost";}
            break;
        case "scissors":
            if (computerMove === "rock"){ checkMoveResult = "lost";} 
            break;
        default: checkMoveResult = "invalid move";
    }
    return checkMoveResult;
  }

  let computerMove = getRandomMove();
  let move = prompt("rock, paper or scissors ?");
  //if not cancel button
  if (move != null){
    move = move.trim().toLowerCase();
    //check user input
    if (move.includes("rock") || move.includes("paper") || move.includes("scissors")){
        //check the game result
        let gameResult = checkMove(move, computerMove);
        if (gameResult === "won" || gameResult === "lost"){
            //user won or lost
            alert (`User: ${move.toUpperCase()} - Computer: ${computerMove.toUpperCase()} \nYou are ${gameResult.toUpperCase()}.`);
        } else {
            alert (`User: ${move.toUpperCase()} - Computer: ${computerMove.toUpperCase()} \nIt's DRAW.`);
        }
        //console.log ("Right word found in user input");
    } else {
        alert (`You are enter wrong value: ${move.toUpperCase()}.\nDon't give up - reload page for game again.`);
    }
    //console.log(`User: ${move} PC: ${computerMove}`);
  } else {
    alert ("You are press CANCEL button.\nDon't give up - reload page for game again.");
  }



  //********************************* */
  // Don't worry about the code below. It's just there to test your code above.
  const drawn = new Set();
  for ( let i = 0; i < 100; i++ ){
    const randomMove = getRandomMove();
    drawn.add(randomMove);
    const oneOfTheThreeMoves = randomMove === 'rock' || randomMove === 'paper' || randomMove === 'scissors';
    if ( !oneOfTheThreeMoves ){
      throw new Error("Ops! Expected rock, paper or scissors, instead got " + randomMove);
    }
  }

  if ( !drawn.has("rock") || !drawn.has("paper") || !drawn.has("scissors") ){
    throw new Error("Ops! Did not find all three moves in the results!");
  }

  const gameResult1 = checkMove("rock", "rock");
  console.log("Game Result 1: ", gameResult1); // Should be draw

  const gameResult2 = checkMove("rock", "paper");
  console.log("Game Result 2: ", gameResult2); // Should be lost

  const gameResult3 = checkMove("rock", "scissors");
  console.log("Game Result 3: ", gameResult3); // Should be won
  
  const gameResult4 = checkMove("paper", "paper");
  console.log("Game Result 4: ", gameResult4); // Should be draw

  const gameResult5 = checkMove("paper", "scissors");
  console.log("Game Result 5: ", gameResult5); // Should be lost

  const gameResult6 = checkMove("paper", "rock");
  console.log("Game Result 6: ", gameResult6); // Should be won

  const gameResult7 = checkMove("scissors", "scissors");
  console.log("Game Result 7: ", gameResult7); // Should be draw

  const gameResult8 = checkMove("scissors", "rock");
  console.log("Game Result 8: ", gameResult8); // Should be lost

  const gameResult9 = checkMove("scissors", "paper");
  console.log("Game Result 9: ", gameResult9); // Should be won

  const gameResult10 = checkMove("pencil", "rock");
  console.log("Game Result 10: ", gameResult10); // Should be invalid move