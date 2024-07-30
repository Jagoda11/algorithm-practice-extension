// src/problems/basketball.ts

export const basketballProblem = {
  id: 44,
  title: 'Basketball Probability',
  description:
    'You have a basketball team that has a certain probability of winning a single game. Given this probability and the number of games in a series, calculate the probability of the team winning the series. Assume the series is best of N games.',
  solution: `
const calculateSeriesWinProbability = (winProbability: number, totalGames: number): number => {
  const gamesToWin = Math.ceil(totalGames / 2);
  const cache = new Map<string, number>();

  const calculateProbability = (wins: number, losses: number): number => {
    if (wins >= gamesToWin) return 1;
    if (losses >= gamesToWin) return 0;

    const key = \`\${wins}-\${losses}\`;
    if (cache.has(key)) return cache.get(key)!;

    const winNextGame = winProbability * calculateProbability(wins + 1, losses);
    const loseNextGame = (1 - winProbability) * calculateProbability(wins, losses + 1);

    const probability = winNextGame + loseNextGame;
    cache.set(key, probability);

    return probability;
  };

  return calculateProbability(0, 0);
}

// Example usage:
const winProbability = 0.6;
const totalGames = 7;
console.log(calculateSeriesWinProbability(winProbability, totalGames)); // Output: Probability of winning the series
`,
}

const calculateSeriesWinProbability = (
  winProbability: number,
  totalGames: number,
): number => {
  const gamesToWin = Math.ceil(totalGames / 2)
  const cache = new Map<string, number>()

  const calculateProbability = (wins: number, losses: number): number => {
    if (wins >= gamesToWin) return 1
    if (losses >= gamesToWin) return 0

    const key = `${wins}-${losses}`
    if (cache.has(key)) return cache.get(key)!

    const winNextGame = winProbability * calculateProbability(wins + 1, losses)
    const loseNextGame =
      (1 - winProbability) * calculateProbability(wins, losses + 1)

    const probability = winNextGame + loseNextGame
    cache.set(key, probability)

    return probability
  }

  return calculateProbability(0, 0)
}

// Example usage:
const winProbability = 0.6
const totalGames = 7
console.log(calculateSeriesWinProbability(winProbability, totalGames)) // Output: Probability of winning the series
