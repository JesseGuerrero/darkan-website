const fetch = require("node-fetch")
const timeHS = require("./public/timeHS.json");
const fs = require("fs");

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let now = new Date();
async function saveNext() {
    now = new Date();
    const response = await fetch("https://darkan.org:8443/v1/highscores");
    let todayHighscore = await response.json();
    timeHS[now.getMonth() + "-" + now.getDate()] = todayHighscore
    fs.writeFile('./public/timeHS.json', JSON.stringify(timeHS), (err) => {
        if (err) {
            throw err;
        }
        console.log(monthNames[now.getMonth()]+ " " + now.getDate() + " highscores saved.");
    });
    var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0, 0) - now;//if it is past 10am
    if (millisTill10 < 0)
        millisTill10 += 60*60*12*1000; //wait 24 hours
    setTimeout(saveNext, millisTill10);
}
saveNext()
