"use strict";
const ecc = require('eccjs')
for (var i = 0; i < 10000; i++) {
    let a
    try {
        let result = ecc.generate(ecc.ENC_DEC, i)
    } catch (e) {
        a = e.toString() == "INVALID: no such curve"
    }
    if (a !== true) {
        console.log(i);    
    }
}
/*
let obj = {
    a: 2,
    f: 4,
    v: 3
}

for (var a in obj) {
    if (obj.hasOwnProperty(a)) {
        console.log(a);
    }
}

for (var b of [1,2,3]) {
    console.log(b);
}
 */

/*
process.on('233', () => console.log(i+'0'))

let i = 0

let w = () => {
    i++
    process.emit('233')
    setTimeout(function() {
        w()
    }, 0);
}
w()
*/

/*
var http = require('http');
http.createServer(function(request, response) {
   response.writeHead(200, {
       'Content-Type': 'text/plain'
   });
   response.end('Hello World\n');
}).listen(1337);
console.log('Server running at http://127.0.0.1:1337/');
 */

/*
const level = require('level')
const db = level('./levelDB', {
    valueEncoding: 'json'
});

db.put('simon', [1, 2, 3])
*/

/*
let www = () => new Promise((r, j) => {
    r(233)
    r(456)

})

www().then(console.log)

*/

/*
const cache = require('memory-cache');
const cache2 = require('memory-cache');
cache.life(1000); // Time in ms

cache.put('foo', 'bar');
cache2.put('foo', 'alive')
console.log(cache.get('foo')); //bar


cache.put('houdini', 'disappear', 2000);
console.log('Houdini will ' + cache.get('houdini')); //Houdini will disappear

setTimeout(function() {
    console.log('Houdini is not ' + cache.get('houdini')); //Houdini is not disappear
    console.log('foo is ' + cache.get('foo')); //foo is null
    console.log('I\'m still ' + cache2.get('foo'));//I'm still alive
}, 1500);

setTimeout(function() {
    console.log('Houdini is ' + cache.get('houdini')); //Houdini is null
}, 2500);
*/

/*
const cache = require('memory-cache');

cache.maxSize(3);

cache.put('a', 'a');
cache.put('b', 'b');
cache.put('c', 'c');
cache.get('a');
cache.put('d', 'd');
cache.put('e', 'e');

console.log(cache.get('a')); //a
console.log(cache.get('b')); //null
console.log(cache.get('c')); //null
console.log(cache.get('d')); //d
console.log(cache.get('e')); //e

cache.life(1000); // Time in ms

cache.put('foo', 'bar');
console.log(cache.get('foo')); //bar


cache.put('houdini', 'disappear', 2000);
console.log('Houdini will ' + cache.get('houdini')); //Houdini will disappear

setTimeout(function() {
    console.log('Houdini is not ' + cache.get('houdini')); //Houdini is not disappear
    console.log('foo is ' + cache.get('foo')); //foo is null
}, 1500);
*/

//require('./index.js')

/*
const level = require('level')
const db = level('./levelDB', {
    valueEncoding: 'json'
});


for (let i = 0; i < 100000; i++) {
    db.put('name' + i, {
        arr: [1, "2", 3],
        abc: "222"
    })
}


let d = 0
console.time('get')
for (let i = 0; i < 100000; i++) {
    db.get('name' + i, (err, data) => {
        if (err) throw err
        d++
        if (d == 100000) {
            console.timeEnd('get')
            console.log(process.memoryUsage());
        }
        //console.log(data)
    })
}



db.put('name' + i, {
    arr: [1, "2", 3],
    abc: "222"
})


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


console.log(__dirname);


let w = (v) => {
    v++
    if (v > 17966) {
        return v
    } else {
        return w(v)
    }
}
console.time('fun')
console.log(w(1));
console.timeEnd('fun')

console.time('array')
let a = Array(4294967295)
for (var i = 0; i < a.length; i++) {
    a[i] = 0
}
console.timeEnd('array')




let arr = {}
let w = (v) => {
    v++
    arr[v] = new Array()
    for (var i = 0; i < 1000; i++) {
        arr[v].push(Math.random())
    }
    if (v > 17966 / 2) {
        return v
    } else {
        return w(v)
    }
}
console.log(w(1));
*/
