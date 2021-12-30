export const mappers = {
  solidityType: {
    to: {
      schemaType: (type: string): string => {
        const typeMap = <Record<string, string>>{
          "int8": "Int8",
          "int16": "Int16",
          "int32": "Int32",
          "int": "BigInt",
          "bool": "Boolean",
          "bytes": "Bytes",
          "string": "String",
          "address": "String",
          "uint8": "UInt8",
          "uint16": "UInt16",
          "uint32": "UInt32",
          "uint64": "BigInt",
          "uint128": "BigInt",
          "uint256": "BigInt",
          "uint": "BigInt",
        };
      
        if(!typeMap[type]) {
          return "Undefined"
        }
      
        return typeMap[type];
      }
    }
  },
  schemaType: {
    to: {
      assemblyScriptType: (type: string): string => {
        const typeMap = <Record<string, string>>{
          "Int8": `i8`,
          "Int16": `i16`,
          "Int32": `i32`,
          "Boolean": `bool`,
          "Bytes": `Bytes`,
          "String": `string`,
          "UInt8": `u8`,
          "UInt16": `u16`,
          "UInt32": `u32`,
          "BigInt": `BigInt`,
        };
      
        if(!typeMap[type]) {
          return "Undefined"
        }
      
        return typeMap[type];
      },
      fromStringVar: (type: string, varName: string) => {
        const typeMap = <Record<string, string>>{
          "Int8": `parseInt(${varName}) as i8`,
          "Int16": `parseInt(${varName}) as i16`,
          "Int32": `parseInt(${varName}) as i32`,
          "Boolean": "Undefined",
          "Bytes": "Undefined",
          "String": `${varName}`,
          "UInt8": `parseInt(${varName}) as u8`,
          "UInt16": `parseInt(${varName}) as u16`,
          "UInt32": `parseInt(${varName}) as u32`,
          "BigInt": `BigInt.fromString(${varName})`,
        };
      
        if(!typeMap[type]) {
          return "Undefined"
        }
      
        return typeMap[type];
      },
      fromVar: (type: string, name: string, varName: string): string => {
        const typeMap = <Record<string, string>>{
          "Int8": `${varName}.${name}.toString()`,
          "Int16": `${varName}.${name}.toString()`,
          "Int32": `${varName}.${name}.toString()`,
          "Boolean": `${varName}.${name}.toString()`,
          "Bytes": `${varName}.${name}.toString()`,
          "String": `${varName}.${name}`,
          "UInt8": `${varName}.${name}.toString()`,
          "UInt16": `${varName}.${name}.toString()`,
          "UInt32": `${varName}.${name}.toString()`,
          "BigInt": `${varName}.${name}.toString()`,
        };
      
        if(!typeMap[type]) {
          return "Undefined"
        }
      
        return typeMap[type];
      }
    }
  } 
};