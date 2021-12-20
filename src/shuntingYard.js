import { op_property } from "../lib/allLib.js";

function shuntingYard(input_token) {
  let output_queue = [];
  let op_stack = [];
  while (input_token.length !== 0) {
    // console.log(input_token);
    // console.log(output_queue);
    // console.log(op_stack);
    let top_token = input_token.shift();
    switch (top_token.tokenType) {
      case "NUM":
      case "CONST":
        output_queue.push(top_token);
        break;
      case "FUNC":
        op_stack.push(top_token);
        break;
      case "OP":
        while (
          op_stack.length !== 0 &&
          op_stack.at(-1).tokenType !== "LP" &&
          (op_property[op_stack.at(-1).tokenVal].prec >
            op_property[top_token.tokenVal].prec ||
            (op_property[op_stack.at(-1).tokenVal].prec ===
              op_property[top_token.tokenVal].prec &&
              op_property[top_token.tokenVal].la))
        ) {
          output_queue.push(op_stack.pop());
        }
        op_stack.push(top_token);
        break;
      case "LP":
        op_stack.push(top_token);
        break;
      case "RP":
        while (op_stack.length !== 0 && op_stack.at(-1).tokenType !== "LP") {
          output_queue.push(op_stack.pop());
        }
        if (op_stack.length !== 0 && op_stack.at(-1).tokenType === "LP") {
          op_stack.pop();
          if (op_stack.length !== 0 && op_stack.at(-1).tokenType === "FUNC") {
            output_queue.push(op_stack.pop());
          }
        } else {
          throw Error("Error: Missmatched Parentheses");
        }
        break;
    }
  }
  while (op_stack.length !== 0) {
    if (op_stack.at(-1).tokenType !== "LP") {
      output_queue.push(op_stack.pop());
    } else {
      throw Error("Error: Missmatched Parentheses");
    }
  }
  return output_queue;
}

export { shuntingYard };