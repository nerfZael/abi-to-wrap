import { addFirstLast } from "./addFirstLast";
import { generateCode } from "./generateCode";
import { loadAbi } from "./loadAbi";
import { transformAbi } from "./transformAbi";

const abiPath = "./abi.json";
const templatePath = "./templates/query/query.graphql.template";
const destPath = "./gen";

const abi = loadAbi(abiPath);

const transformedAbi = transformAbi(abi);

addFirstLast(transformedAbi);

generateCode(templatePath, destPath, transformedAbi);
