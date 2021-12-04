import { readFileSync, writeFileSync } from "fs";
import * as Mustache from "mustache";

export const generateCode = (templatePath: string, destPath: string, transformedAbi: any) => {
  const template = readFileSync(templatePath, 'utf8');

  var output = Mustache.render(template, transformedAbi);
  
  console.log(output);
};