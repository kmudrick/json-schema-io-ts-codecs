import { JSONSchema7 } from "json-schema";
import { buildDecoder } from "io-ts-transformer";

export const jsonSchema7Decoder = buildDecoder<JSONSchema7>();
