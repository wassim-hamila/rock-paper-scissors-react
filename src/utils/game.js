export const choices = ['Rock', 'Paper', 'Scissors'];

export const icons = {
  Rock: '✊',
  Paper: '✋',
  Scissors: '✌️',
};

// what each choice beats, and the verb used in the explanation
export const rules = {
  Rock: { beats: 'Scissors', verb: 'breaks' },
  Paper: { beats: 'Rock', verb: 'covers' },
  Scissors: { beats: 'Paper', verb: 'cut' },
};

// pick a random choice for the computer
export function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

export function getResult(user, computer) {
  if (user === computer) {
    return 'draw';
  }
  return rules[user].beats === computer ? 'win' : 'lose';
}

// small sentence explaining the result, ex: "Rock breaks Scissors"
export function getExplanation(user, computer, result) {
  if (result === 'draw') {
    return 'Same choice, nobody wins';
  }
  const winner = result === 'win' ? user : computer;
  return winner + ' ' + rules[winner].verb + ' ' + rules[winner].beats;
}
