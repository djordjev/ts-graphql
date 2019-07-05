import {
  GenerateTypescriptOptions,
  generateTypeScriptTypes
} from 'graphql-schema-typescript';
import schema from '../src/schema/index';

const outputPath: string = './src/_types/graphQLTypes.ts';
const options: GenerateTypescriptOptions = { strictNulls: true };

generateTypeScriptTypes(schema, outputPath, options)
  .then(() => {
    console.log('DONE');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
