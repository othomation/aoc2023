import Solution from "./solution";

const totalDays = 25;
const solutionArg = process.argv[2];
const solutionsToRun: number[] =
  solutionArg &&
  typeof parseInt(solutionArg) === "number" &&
  parseInt(solutionArg) > 0 &&
  parseInt(solutionArg) <= totalDays
    ? [parseInt(solutionArg)]
    : Array.from({ length: totalDays }, (_, i) => i + 1);

const fetchAndRunSolutions = async () => {
  const solutions: Solution[] = [];

  for (const day of solutionsToRun) {
    try {
      const module = await import("./solutions/" + day);
      if (module.default instanceof Solution) {
        solutions.push(module.default);
      }
    } catch (error) {
      console.error("No solution for " + day);
    }
  }

  solutions.forEach((solution) => {
    console.log({
      day: solution.day,
      name: solution.name,
      ...solution.produceAnswer(),
    });
  });
};

fetchAndRunSolutions();
