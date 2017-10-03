# Protocol Buffers JavaScript example

According to [Google](https://developers.google.com/protocol-buffers/):
> Protocol buffers have many advantages over XML for serializing structured data. Protocol buffers:

>- are simpler
- are 3 to 10 times smaller
- are 20 to 100 times faster
- are less ambiguous
 -generate data access classes that are easier to use programmatically

# Introduction

I found there was a lack of JavaScript examples of Protocol Buffers, so here you go. Uses the NPM package [protocol-buffers](https://github.com/mafintosh/protocol-buffers).

Three main files:

- `schema.proto` defines a message
- `writeBinary.js` writes an object to a binary file
- `readBinary.js` reads a binary file to a JavaScript object

# Usage

### `yarn install` (or `npm install`)

### `node writeBinary.js`

```
Wrote protocol buffer to file.
```

### `node readBinary.js`

```
Buffer: <Buffer 0a 04 4a 6f 68 6e 12 05 53 6d 69 74 68>
Object: { first_name: 'John', last_name: 'Smith', post_count: 0 }
```