"use strict";
/*
console.time('let')
for (let i = 0; i < 1000000000; i++) {
    let b = 1
}
console.timeEnd('let')
console.time('var')
for (let i = 0; i < 1000000000; i++) {
    var b = 1
}
console.timeEnd('var')
console.time('const')
for (let i = 0; i < 1000000000; i++) {
    const b = 1
}
console.timeEnd('const')


const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('=> ');
rl.prompt();
rl.write('233')
rl.write(null, {
    ctrl: true,
    name: 'u'
});

console.log(233);
rl.prompt();

//rl.write(null)
//rl.prompt();

//rl.on('line', (line) => {
//    switch (line.trim()) {
//        case 'hello':
//            console.log('world!');
//            break;
//        default:
//            console.log('Say what? I might have heard `' + line.trim() + '`');
//            break;
//    }
//    rl.prompt();
//}).on('close', () => {
//    console.log('Have a great day!');
//    process.exit(0);
//});





const low = require('lowdb')
const storage = require('lowdb/file-sync')
const db = low('db.json', {
    storage
})


console.log(db('users').find({
    username: 'simon3000'
}));




if (db('users').find({
        username: 'simon3000'
    }) == undefined) {
    db('users').push({
        username: 'simon3000',
        password: '123456'
    })
}


db('users').chain().find({
    username: 'simon3000'
}).assign({
    password: 'hi!'
}).value()

console.log(db('users').find({
    username: 'simon3000'
}));

db('users').chain().find({
    username: 'simon3000'
}).assign({
    justTry: 'hi!'
}).value()

db('users').chain().find({
    username: 'simon3000'
}).assign({
    justTry: undefined
}).value()

db('users').remove({
    username: 'simon3000'
})

db('users').remove({
    username: 'simon3000'
})
*/

console.log(__dirname);
