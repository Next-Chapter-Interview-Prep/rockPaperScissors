/*
 * Complete the 'rockPaperScissors' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts INTEGER n as parameter.
 */

/*
 * Write a function named 'rockPaperScissors' that generates an array of strings representing
 * every sequence of throws a single player could throw over a 3-round game of Rock-Paper-Scissors.
 *
 * The output should be an array of strings, where each string represents a possible sequence
 * of throws over the 3-round game.
 *
 * Each character in a string represents a throw:
 * - 'R' for Rock
 * - 'P' for Paper
 * - 'S' for Scissors
 *
 * For example, the output array should include strings like:
 * - "RRR" (Rock, Rock, Rock)
 * - "RRP" (Rock, Rock, Paper)
 * - "RRS" (Rock, Rock, Scissors)
 * - "RPR" (Rock, Paper, Rock)
 * - ...etc...
 *
 * The order of the strings in the output array does not matter.
 *
 * Example:
 * Output: ["RRR", "RRP", "RRS", "RPR", "RPP", "RPS", "RSR", "RSP", "RSS",
 *          "PRR", "PRP", "PRS", "PPR", "PPP", "PPS", "PSR", "PSP", "PSS",
 *          "SRR", "SRP", "SRS", "SPR", "SPP", "SPS", "SSR", "SSP", "SSS"]
 *
 * Extra Credit:
 * - Modify the function to accept an integer parameter 'n' representing the number of rounds.
 * - Generate an array of strings representing every sequence of throws a single player could
 *   throw over an n-round game of Rock-Paper-Scissors.
 *
 * Example (Extra Credit):
 * Input: n = 2
 * Output: ["RR", "RP", "RS", "PR", "PP", "PS", "SR", "SP", "SS"]
 *
 * Constraints:
 * - 1 <= n <= 8
 */

const rockPaperScissors = function (n) {
  // TODO: your solution here
  let outcomes = []
  const plays = ['R', 'P', 'S'];
  for (let i = 0; i < plays.length; i++) {
    for (let j = 0; j < plays.length; j++) {
      for (let k = 0; k < plays.length; k++) {
        outcomes.push([plays[i], plays[j], plays[k]].join(""))
      }
    }
  }
  console.log(outcomes)
  return outcomes;
};

////////////////////////////////////////////////////// TESTS ///////////////////////////////////////////////////////////////

// Test cases for the main challenge (3-round game)
function testRockPaperScissors() {
  const expected = [
    "RRR",
    "RRP",
    "RRS",
    "RPR",
    "RPP",
    "RPS",
    "RSR",
    "RSP",
    "RSS",
    "PRR",
    "PRP",
    "PRS",
    "PPR",
    "PPP",
    "PPS",
    "PSR",
    "PSP",
    "PSS",
    "SRR",
    "SRP",
    "SRS",
    "SPR",
    "SPP",
    "SPS",
    "SSR",
    "SSP",
    "SSS",
  ];
  const actual = rockPaperScissors();

  console.log("Test case 1: 3-round game");
  console.log("Expected length:", expected.length);
  console.log("Actual length:", actual.length);
  console.log("Expected:", expected.sort());
  console.log("Actual:", actual.sort());
  console.log("---");
}

// // Test cases for the extra credit (n-round game)
// function testRockPaperScissorsExtraCredit() {
//   const testCases = [
//     { n: 1, expectedLength: 3 },
//     { n: 2, expectedLength: 9 },
//     { n: 4, expectedLength: 81 },
//     { n: 8, expectedLength: 6561 },
//   ];

//   for (let i = 0; i < testCases.length; i++) {
//     const { n, expectedLength } = testCases[i];
//     const actual = rockPaperScissors(n);

//     console.log(`Test case ${i + 1}: ${n}-round game`);
//     console.log("Expected length:", expectedLength);
//     console.log("Actual length:", actual.length);
//     console.log("---");
//   }
// }

// // Run the test cases
testRockPaperScissors();
// testRockPaperScissorsExtraCredit();
