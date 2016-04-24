"use strict";
const SHA256 = require('./SHA256.js')
const ecc = require('eccjs')
const db = require('./db.js')
const eccDB = require('./ecc.js')

module.exports.check = (username) => new Promise((r, j) => {
    db.get(username).then((text) => r(!text))
})

module.exports.find = () => new Promise((r, j) => {
    db.map('username').then(r)
})

module.exports.reg = (newUser, log) => new Promise((r, j) => {
    if (typeof newUser !== 'object') {
        r('error')
    } else if (!newUser.username || !newUser.password || !newUser.rPassword) {
        r('lostElement')
    } else if (newUser.password != newUser.rPassword) {
        r('passwordNotSame')
    } else if (!newUser.username.match(/^\w+$/)) {
        r('illegalUsername')
    } else {
        module.exports.check(newUser.username).then((text) => {
            if (text) {
                db.set(newUser).then((text) => {
                    console.log('新用户: ' + text)
                    r('done')
                })
            } else {
                r('repeat')
            }
        })
    }
})

module.exports.remove = (username) => new Promise((r, j) => {
    module.exports.check(username).then((text) => {
        if (text) {
            r('userNotExist')
        } else {
            db.remove(username).then((username) => {
                console.log('删除用户: ' + db.remove(username))
                r('done')
            })
        }
    })
})

module.exports.login = (username, password) => new Promise((r, j) => {
    module.exports.check(username).then((text) => {
        if (text) {
            r('userNotExist')
        } else {
            db.get(username).then((user) => {
                if (user.password === password) {
                    r('good')
                } else {
                    r('bad')
                }
            })
        }
    })
})


module.exports.changePassword = (username, password, newPassword) => new Promise((r, j) => {
    if (!username || !password || !newPassword) {
        console.log(username);
        console.log(password);
        console.log(newPassword);
        r('lostElement')
    } else {
        module.exports.login(username, password).then((login) => {
            if (login === 'good') {
                module.exports.check(username).then((text) => {
                    if (text) {
                        r('userNotExist')
                    } else {
                        db.update(username, {
                            password: newPassword
                        }).then((text) => {
                            r(text)
                        })
                    }
                })
            } else {
                r(login)
            }
        })
    }
})

/*
module.exports.getJSONUniSkinAPI = (username) => {
    let json = {}
    json.errno = 1
    json.msg = '找不到皮肤'
    return json

    for (var i = 0; i < userInfo.length; i++) {
        if (userInfo[i].name == username) {
            if (userInfo[i].skins != undefined || userInfo[i].cape != undefined) {
                delete JSONFile.msg
                JSONFile.player_name = username
                JSONFile.last_update = userInfo[i].update
                JSONFile.model_preference = []
                JSONFile.skins = {}
                return JSON.stringify(JSONFile)
            } else {
                JSONFile.msg = '未上传皮肤'
                return JSON.stringify(JSONFile)
            }
        }
    }
    return JSON.stringify(JSONFile)
}
*/

module.exports.close = db.close
module.exports.decrypt = (aec) => {
    let result
    try {
        result = JSON.parse(ecc.decrypt(eccDB.find().dec, aec))
    } catch (e) {
        console.error('ECC err: ' + e);
        result = 'err'
    } finally {
        return result
    }
}
module.exports.getECC = () => eccDB.find().enc
