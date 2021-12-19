import XRegExp from "xregexp";  // Better regex
import { reLib } from "../lib/allLib.js"; // Token rules using regex

function tokenMachine(input) {
  let tokenArray = [];
  reLib.some(({ reString, reName }) => {
    // New variable to refresh old ones
    let re = XRegExp(reString);
    let parseResult = re.exec(input);
    let status = Boolean(parseResult);
    if (status) {
      if (reName) {
        tokenArray.push({
          tokenVal: parseResult[0],
          tokenType: reName,
        });
      }
      tokenArray = tokenArray.concat(
        tokenMachine(input.slice(re.lastIndex))
      );
    }
    return status;
  });
  return tokenArray;
}

export { tokenMachine };