const fs = require('fs')
const protobuf = require('protocol-buffers')

const messages = protobuf(fs.readFileSync('schema.proto'))

const buf = fs.readFileSync('output')
const obj = messages.User.decode(buf)

console.log("Buffer:", buf)
console.log("Object:", obj)