#!/usr/bin/env node

const stdin = process.stdin

stdin.resume() & stdin.setEncoding('utf8')

const arg = process.argv[2]
const airbus8ball = require('./')()
const ask = () => output('Please ask a question')
const output = (str) => process.stdout.write(str + '\n') && process.exit()
const check = (str) => (str && str.match(/\?\s*$/)) ? output(airbus8ball) : ask()

if (stdin.isTTY) check(arg)

stdin.on('data', check)
