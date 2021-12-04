import { addFirstLast } from "./addFirstLast";
import { generateCode } from "./generateCode";
import { loadAbi } from "./loadAbi";
import { transformAbi } from "./transformAbi";
import * as Mustache from "mustache";

const abiPath = "./abi.json";
const templatePath = "./templates/query/query.graphql.template";
const destPath = "./gen";

const a = {
  x: "test",
  arr: [
    {
      a: 1
    },
    {
      a: 2
    },
    {
      a: 3
    }
  ]
};

const b = {
  ...a,
  funcs: a.arr.map(x => x.a.toString()).reduce((s, x) => s + ", " + x, "")
}

const output = Mustache.render(`
import { BigInt } from '{{x}}'

{{> functions}}
`, b, {
 "functions": `{{funcs}}`
});
console.log(output);

// const abi = loadAbi(abiPath);

// const transformedAbi = transformAbi(abi);

// addFirstLast(transformedAbi);

// generateCode(templatePath, destPath, transformedAbi);
