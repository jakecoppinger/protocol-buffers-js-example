const fs = require('fs')
const protobuf = require('protocol-buffers')

const messages = protobuf(fs.readFileSync('schema.proto'))
 
const obj = {
    name: "John Smith",
    post_count: 42,
    val: 3.1415,
}

const buf = messages.User.encode(obj)

fileDescriptor = fs.openSync('output', 'w')
fs.writeSync(fileDescriptor, buf)
fs.closeSync(fileDescriptor)

console.log("Wrote protocol buffer to file.")