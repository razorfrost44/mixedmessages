const forestEncounters= [
    "1d4 Trolls",
    "Yeti",
    "2d6 Gnolls",
    "1d6 Bandits",
    "1d4 Wolves",
    "Dire Wolf",
    "Black Bear",
    "1d4 Bear Cubs",
    "2d4 Snakes",
    "Giant Snake",
    "Giant Boar",
    "Herd of Boar",
    "Treant",
    "Earth Elemental",
    "Green Dragon",
    "Two green drakes",
    "1d4 Sprites",
    "Three Mud Golems",
    "Two Stone Golems",
    "1d4+1 Giant Eagles"
];
// for later when implementing jsonReader
// let messageType = "";
let messages = forestEncounters;

function getRandomMessage (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function printRandomMessage (arr) {
    console.log(arr[Math.floor(Math.random() * arr.length)]);
}

// Tests
// Array Setup
/*
for (let message of messages) {
    console.log(message);
}
*/
// getRandomMessage
/*
for (let i = 0; i < 10; i++) {
    console.log(getRandomMessage(messages));
}
*/
// printRandomMessage
/*
for (let i = 0; i < 10; i++) {
    printRandomMessage(messages);
}
*/
