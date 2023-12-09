import fs from "fs";

export type SolutionSolverType = (input: string) => string;

class Solution {
  private input: string;
  public static readonly readInput = (ctx: string) => {
    return fs.readFileSync(`${ctx}/input.txt`).toString();
  };

  constructor(
    public day: number,
    public name: string,
    public solver: SolutionSolverType
  ) {
    this.input = fs
      .readFileSync(`${__dirname}/solutions/${this.day}/input.txt`)
      .toString();
  }

  produceAnswer() {
    const start = performance.now();
    const answer = this.solver(this.input);
    const end = performance.now();
    return { answer, duration: end - start };
  }
}

export default Solution;
