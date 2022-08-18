const fetch = require("node-fetch")
// const timeHS = require("./src/pages/highscores/components/timeHS.json");
const recordedHS = require("./public/recordedHS.json");
const fs = require("fs");

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function getPastDateHS(days) {
    let past = new Date()
    past.setDate(past.getDate() - days)
    return recordedHS[past.getMonth() + "-" + past.getDate()]
}

async function saveNext() {
    let now = new Date();
    const response = await fetch("https://darkan.org:8443/v1/highscores");
    let todayHighscore = await response.json();
    recordedHS[now.getMonth() + "-" + now.getDate()] = todayHighscore
    fs.writeFile('./public/recordedHS.json', JSON.stringify(recordedHS), (err) => {
        console.log(monthNames[now.getMonth()]+ " " + now.getDate() + " highscores saved @ " + now.getHours() + "hr:" + now.getMinutes() + "m:" + now.getSeconds() + "s...\n");
    });
    let yesterdayHS = getPastDateHS(1)
    let weekAgoHS = getPastDateHS(7)
    let monthAgoHS = getPastDateHS(30)
    let timeHS = {}
    let timeHSSkill = {}

    for(let i = 0; i < todayHighscore.length; i++) {
        let userName = todayHighscore[i].displayName
        let todayUser = todayHighscore[i]
        let yesterdayUser = yesterdayHS == undefined ? -1 : yesterdayHS.find( yesterdayHS => yesterdayHS['displayName'] === userName )
        let weekAgoUser = weekAgoHS == undefined ? -1 : weekAgoHS.find( weekAgoHS => weekAgoHS['displayName'] === userName )
        let monthAgoUser = monthAgoHS == undefined ? -1 : monthAgoHS.find( monthAgoHS => monthAgoHS['displayName'] === userName )
        timeHS[userName] = {
            "1" : (yesterdayUser == -1 ? -1 : (todayUser.totalXp - yesterdayUser.totalXp)),
            "7" : (weekAgoUser == -1 ? -1 : (todayUser.totalXp - weekAgoUser.totalXp)),
            "30" :(monthAgoUser == -1 ? -1 : (todayUser.totalXp - monthAgoUser.totalXp))
        }
        timeHSSkill[userName] = {
            "1" : (yesterdayUser == -1 ? -1 : (todayUser.xp.map(function(value, index) {return (value-yesterdayUser.xp[index])}))),
            "7" : (weekAgoUser == -1 ? -1 : (todayUser.xp.map(function(value, index) {return (value-weekAgoUser.xp[index])}))),
            "30" :(monthAgoUser == -1 ? -1 : (todayUser.xp.map(function(value, index) {return (value-monthAgoUser.xp[index])})))
        }
    }
    fs.writeFile('./src/pages/highscores/components/timeHS.json', JSON.stringify(timeHS), (err) => {});
    fs.writeFile('./src/pages/highscores/components/timeHSSkill.json', JSON.stringify(timeHSSkill), (err) => {});
    setTimeout(saveNext, 60*60*12*1000);//wait 12 hours
}
saveNext()
