#!/usr/bin/env node
import { addFirstLast } from "./addFirstLast";
import { generateCode } from "./generateCode";
import { loadAbi } from "./loadAbi";
import { transformAbi } from "./transformAbi";
import { program } from "commander";
import fs from "fs";
import path from "path";

const templatesPath = path.resolve("./templates");

const getAllFiles = (dirPath: string, arrayOfFiles: string[] = []) => {
  const files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file))
    }
  })

  return arrayOfFiles;
};

(async () => {
  program
    .command("gen")
    .description("Generate wrapper code from ABI")
    .requiredOption("-a, --abi <number>", "Abi file path")
    .requiredOption("-o, --output <number>", "Output directory path")
    .action(async (options) => {
          
      const abi = loadAbi(options.abi);
      const outputPath = options.output;

      const transformedAbi = transformAbi(abi);

      addFirstLast(transformedAbi);

      const files: string[] = [];
      getAllFiles(templatesPath, files);

      for(const templateFile of files) {
        const relativePath = path.relative(templatesPath, templateFile);

        const generatedFilePath = path.join(path.resolve(outputPath), relativePath);
        const fileDir = path.parse(generatedFilePath).dir;
        const fileName = path.parse(generatedFilePath).name;
        const filePath = path.join(fileDir, fileName);

        const code = generateCode(templateFile, transformedAbi);

        console.log(filePath);
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, code, { encoding: "utf8"});
      }
    });

  program.parse(process.argv);
})();

