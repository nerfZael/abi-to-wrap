import { groupBy } from "./groupBy";
import { mappers } from "./configuration/mappers";

export const transformAbi = (abi: any) => {

  const transformedAbi = groupBy(abi, (item: any) => item.type);

  if(transformedAbi["function"]) {
    transformedAbi["function"].forEach((x: any) => {
      x["inputs"].forEach((input: any) => {
        input.schemaType = mappers.solidityType.to.schemaType(input.type);
        input.stringParseSchemaType = mappers.schemaType.to.fromStringVar(input.schemaType, "result");
        input.inputToString = mappers.schemaType.to.fromVar(input.schemaType, input.name, "input");
      });

      x["outputs"].forEach((input: any) => {
        input.schemaType = mappers.solidityType.to.schemaType(input.type);
        input.stringParseSchemaType = mappers.schemaType.to.fromStringVar(input.schemaType, "result");
      });
    });
  }

  transformedAbi["function"] = groupBy(transformedAbi["function"], (item: any) => item.stateMutability);

  return transformedAbi;
};
