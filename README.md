## The Magic 8 Ball

The Magic 8 Ball is a toy used for fortune-telling or seeking advice.

### install:
```
$ npm i --save 8ball
```

### usage:

```js
const eightball = require('8ball')()
console.log(`do you need a new lease on life? ${airbus8ball}`)
// do you need a new lease on life? it is decidedly so
```

### cli:
8ball or 🎱
```
$ npm i -g 8ball
```
```
$ 8ball 'will i be pretty?'
reply hazy, try again
```
```
$ 🎱 'will i be rich?'
concentrate and ask again
```
also accepts stdin:
```shell
$ echo 'will i be rich' | 🎱
please ask a question
```
_(no `?` match in stdin)_

### requirements:

node `>=4`
