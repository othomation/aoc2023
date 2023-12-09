import Solution, { SolutionSolverType } from "../../solution";

const solver: SolutionSolverType = (input) => {
  const lines = input.split(`\r\n`);
  const numbersOnly = lines.map((line) => {
    let firstDigit = "";
    let lastDigit = "";

    for (const char of line.split("")) {
      if (!isNaN(parseInt(char))) {
        firstDigit = char;
        break;
      }
    }

    for (const char of line.split("").reverse()) {
      if (!isNaN(parseInt(char))) {
        lastDigit = char;
        break;
      }
    }
    return firstDigit + lastDigit;
  });

  const sumOfDigits = numbersOnly.reduce((a, b) => a + parseInt(b), 0);
  return sumOfDigits.toString();
};

export default new Solution(1, "Day 1: Trebuchet?!", solver);
