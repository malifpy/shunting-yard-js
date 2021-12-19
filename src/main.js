import { tokenMachine } from "./tokenMachine.js";
import { shuntingYard } from "./shuntingYard.js";
import * as readline from "node:readline";
import { stdin as input, stdout as output } from "process";

function mainAsk() {
  const rl = readline.createInterface({ input, output });
  rl.question("Input Formula: ", (formula) => {
    if (formula !== "Stop") {
      let tokenFormula = tokenMachine(formula);
      let RPNFormula = shuntingYard(tokenFormula);
      RPNFormula.forEach(({ tokenVal }) => {
        process.stdout.write(tokenVal + " ");
      });
      console.log();
      rl.close();
      mainAsk();
    } else {
      rl.close();
    }
  });
}

mainAsk();
