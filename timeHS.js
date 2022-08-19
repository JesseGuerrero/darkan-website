const fetch = require("node-fetch")
// const timeHS = require("./src/pages/highscores/components/timeHS.json");
const recordedHS = require("./public/recordedHS.json");
const fs = require("fs");
const {getSkillNameByID} = require("./src/pages/highscores/SkillEnum");

let timeHS = {}
let timeHSSubset = []
let timeHSSkill = {}
let todayHighscore = {}

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function getPastDateHS(days) {
    let past = new Date()
    past.setDate(past.getDate() - days)
    return recordedHS[past.getMonth() + "-" + past.getDate()]
}

let yesterdayHSKey = getPastDateHS(1)
let weekAgoHSKey = getPastDateHS(7)
let monthAgoHSKey = getPastDateHS(30)

function sortTimeHSByTimePeriod(daysBack) {
    return function (user1, user2) {
        let index = -1
        if (daysBack == 1)
            index = 0
        if (daysBack == 7)
            index = 1
        if (daysBack == 30)
            index = 2
        if (index == -1)
            return
        if (user1.times[index] < user2.times[index])
            return 1
        else if (user1.times[index] > user2.times[index])
            return -1
        else if (user1.times[index] == user2.times[index])
            if (user1.times[index] < user2.times[index])
                return 1
            else if (user1.times[index] > user2.times[index])
                return -1
        return 0
    }
}

function createDaysBackSkillsHS(daysBack) {
    let timeHSSkillSubset = {}
    for(let skillCategory = 0; skillCategory < 25; skillCategory++)
        timeHSSkillSubset[getSkillNameByID(skillCategory)] = []
    for (let userIndex = 0; userIndex < todayHighscore.length; userIndex++) {
        let userName = todayHighscore[userIndex].displayName
        let todayUser = todayHighscore[userIndex]
        let yesterdayUser = yesterdayHSKey == undefined ? -1 : yesterdayHSKey.find(yesterdayHS => yesterdayHS['displayName'] === userName)
        let weekAgoUser = weekAgoHSKey == undefined ? -1 : weekAgoHSKey.find(weekAgoHS => weekAgoHS['displayName'] === userName)
        let monthAgoUser = monthAgoHSKey == undefined ? -1 : monthAgoHSKey.find(monthAgoHS => monthAgoHS['displayName'] === userName)
        for (let skillCategory = 0; skillCategory < 25; skillCategory++) {
            timeHSSkillSubset[getSkillNameByID(skillCategory)][userIndex] = {
                "displayName": userName,
                "times": [
                    (yesterdayUser == -1 ? -1 : (todayUser.xp[skillCategory] - yesterdayUser.xp[skillCategory])),
                    (weekAgoUser == -1 ? -1 : (todayUser.xp[skillCategory] - weekAgoUser.xp[skillCategory])),
                    (monthAgoUser == -1 ? -1 : (todayUser.xp[skillCategory] - monthAgoUser.xp[skillCategory]))
                ]
            }
            timeHSSkillSubset[getSkillNameByID(skillCategory)].sort(sortTimeHSByTimePeriod(daysBack))
        }
    }
    return timeHSSkillSubset
}

async function saveTodaysHS() {
    let now = new Date();
    recordedHS[now.getMonth() + "-" + now.getDate()] = todayHighscore
    fs.writeFile('./public/recordedHS.json', JSON.stringify(recordedHS), (err) => {
        console.log(monthNames[now.getMonth()]+ " " + now.getDate() + " highscores saved @ " + now.getHours() + "hr:" + now.getMinutes() + "m:" + now.getSeconds() + "s...\n");
    });
}

async function saveOverallTimeHS() {
    for(let userIndex = 0; userIndex < todayHighscore.length; userIndex++) {
        let userName = todayHighscore[userIndex].displayName
        let todayUser = todayHighscore[userIndex]
        let yesterdayUser = yesterdayHSKey == undefined ? -1 : yesterdayHSKey.find( yesterdayHS => yesterdayHS['displayName'] === userName )
        let weekAgoUser = weekAgoHSKey == undefined ? -1 : weekAgoHSKey.find( weekAgoHS => weekAgoHS['displayName'] === userName )
        let monthAgoUser = monthAgoHSKey == undefined ? -1 : monthAgoHSKey.find( monthAgoHS => monthAgoHS['displayName'] === userName )
        timeHSSubset[userIndex] = {
            "displayName": userName,
            "times" : [
                (yesterdayUser == -1 ? -1 : (todayUser.totalXp - yesterdayUser.totalXp)),
                (weekAgoUser == -1 ? -1 : (todayUser.totalXp - weekAgoUser.totalXp)),
                (monthAgoUser == -1 ? -1 : (todayUser.totalXp - monthAgoUser.totalXp))
            ]
        }
    }
    timeHS = {
        "1": timeHSSubset.sort(sortTimeHSByTimePeriod(1)),
        "7": timeHSSubset.sort(sortTimeHSByTimePeriod(7)),
        "30": timeHSSubset.sort(sortTimeHSByTimePeriod(30))
    }
    fs.writeFile('./src/pages/highscores/components/timeHS.json', JSON.stringify(timeHS), (err) => {});
}

async function saveSkillsTimeHS() {
    timeHSSkill = {
        "1": createDaysBackSkillsHS(1),
        "7": createDaysBackSkillsHS(7),
        "30": createDaysBackSkillsHS(30)
    }
    fs.writeFile('./src/pages/highscores/components/timeHSSkill.json', JSON.stringify(timeHSSkill), (err) => {});
}

//Main Function
async function saveNext() {
    const response = await fetch("https://darkan.org:8443/v1/highscores");
    todayHighscore = await response.json();
    await saveTodaysHS()
    await saveOverallTimeHS()
    await saveSkillsTimeHS()
    setTimeout(saveNext, 60*60*12*1000);//wait 12 hours
}
saveNext()
