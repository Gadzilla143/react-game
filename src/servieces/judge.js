export const judge = (user, comp) => {
  if (user === comp) {
    return "DRAW";
  }
  if (user === 'hand') {
    if (comp === 'scissors') {
        return "YOU LOSE"
    } else {
        return "YOU WIN"
    }
  } else if (user === 'scissors') {
    if (comp === 'rock') {
        return "YOU LOSE"
    } else {
        return "YOU WIN"
    }
  } else {
      if (comp === 'hand') {
          return "YOU LOSE"
      } else {
          return "YOU WIN"
      }
  }
};
