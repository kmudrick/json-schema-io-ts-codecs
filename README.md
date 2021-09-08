# @kmudrick/json-schema-io-ts-codecs

Codecs to parse JSON Schema Documents using io-ts

## Usage

Install:

```
npm i @kmudrick/json-schema-io-ts-codecs
```

Use in code:

```typescript
import * as E from "fp-ts/lib/Either";
import { jsonSchema7Decoder } from "@kmudrick/json-schema-io-ts-codecs/dist/cjs";
import { JSONSchema7 } from "json-schema";

const schema: unknown = {
  foo: {
    description: "This is a Foo",
    type: "object",
    required: ["barType", "fooId"],
    properties: {
      fooUpdatedTimestamp: {
        description: "Time last updated",
        type: "string",
        format: "date-time",
        readOnly: true,
        example: "1994-11-05T08:15:30Z",
      },
      fooId: {
        description: "The unique id of the Foo",
        maxLength: 13,
        minLength: 1,
        pattern: "^[0-9]*$",
        example: "10000673458",
      },
      barType: {
        description: "The Bar type of the Foo",
        type: "string",
        maxLength: 500,
        example: "BazBat",
      },
    },
  },
};

const result = jsonSchema7Decoder.decode(schema);
if (E.isRight(result)) {
  const value: JSONSchema7 = result.right;
  console.log(`Valid JSONSchema7: ${JSON.stringify(value)}`);
} else {
  console.log(`invalid: ${result.left}`);
}
```
