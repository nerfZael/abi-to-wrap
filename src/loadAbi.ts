import * as fs from "fs";

export const loadAbi = (path: string) => {
  var abi = JSON.parse(fs.readFileSync(path, 'utf8'));

  return abi;
};
