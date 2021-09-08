import * as E from "fp-ts/lib/Either";
import $RefParser from "@apidevtools/json-schema-ref-parser";
import { readFile } from "fs/promises";
import { jsonSchema7Decoder } from "@kmudrick/json-schema-io-ts-codecs/dist/cjs";
import JsYaml from "js-yaml";
import { JSONSchema7 } from "json-schema";

const loadFile = (path: string): Promise<string> => readFile(path, "utf-8");

const yamlToJson = (yaml: string): unknown => JsYaml.load(yaml);

const deref = (schemaContents: unknown): Promise<$RefParser.JSONSchema> =>
  $RefParser.dereference(schemaContents as object);

loadFile("./foo.yaml")
  .then(yamlToJson)
  .then(deref)
  .then((schema) => {
    const result = jsonSchema7Decoder.decode(schema);
    if (E.isRight(result)) {
      const value: JSONSchema7 = result.right;
      console.dir(value);
    } else {
      console.error("invalid");
    }
  });
