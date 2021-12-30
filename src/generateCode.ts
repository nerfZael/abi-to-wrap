import { readFileSync, writeFileSync } from "fs";
import * as Mustache from "mustache";

export const generateCode = (templatePath: string, transformedAbi: any): string => {
  const template = readFileSync(templatePath, 'utf8');

  const output = Mustache.render(template, transformedAbi);

  return output;
};