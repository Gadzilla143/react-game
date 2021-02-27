export const judge = (user, comp) => {
  if (user === comp) {
    return "DRAW";
  }
  if (user === "hand") {
    if (comp === "scissors") {
      return "YOU LOSE";
    } else {
      return "YOU WIN";
    }
  } else if (user === "scissors") {
    if (comp === "rock") {
      return "YOU LOSE";
    } else {
      return "YOU WIN";
    }
  } else {
    if (comp === "hand") {
      return "YOU LOSE";
    } else {
      return "YOU WIN";
    }
  }
};

//замени слова "scissors", "hand" на числа и сравнивай числа в switch как здесь
//это будет в 4 раза меньше и понятней

// const lol = (userNum, compNum) => {
//   switch(true) {
//     case userNum === compNum:
//       return 'DRAW'
//     case userNum < compNum:
//       return 'YOU LOSE'
//     default:
//       return 'YOU WIN'
//   }
// }