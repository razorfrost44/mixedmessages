const verbs = ["hurt", "freeze", "insist", "lift", "lie", "jump", "hope", "follow", "forbit", "encourage"];
const adverbs = ["quickly", "savagely", "terribly", "lazily", "happily", "bashfully", "joyously", "fiercely", "deceivingly", "intently"];
const nouns = ["Glacier", "Mountain", "Storm", "Snow", "Ice", "Aurora", "Northlook", "Blackiron Blades", "Easthaven", "Goodmead"];
const people = ["Drizzt", "Auril", "Xardorok", "Snow Golem", "Vellynne Harpell", "Avarice", "Nimsy Huddle", "Angajuk", "Dzaan", "Duvessa Shane"];
const spells = ["Fireball", "Lightning", "Magehand", "Charm Person", "Polymorph", "Teleport", "Wall of Fire", "Gust of Wind", "Mending", "Light"];
const weapons = ["Club", "Handaxe", "Wand", "Dart", "Great Sword", "Longbow", "Crossbow", "Poleaxe", "Spear", "Dagger"];
let lib1 = "";
let lib2 = "";
let lib3 = "";

// Helpers
function getRandomWholeNumber (num) {
    return Math.floor(Math.random() * num);
}
function getWordFromArray (arr) {
    return arr[getRandomWholeNumber(arr.length)];
}

// lib1
function generateLib1 () {
    let location = getWordFromArray(nouns);
    let person = getWordFromArray(people);
    let verb = getWordFromArray(verbs);
    let weapon = getWordFromArray(weapons);
    let spell = getWordFromArray(spells);
    let place = getWordFromArray(nouns);
    lib1 = `The day before, I was at ${location} when I came across ${person}. It was so ${verb} I could not believe my luck. I used my ${weapon} and ${spell} to defeat it. I will ponder this lesson later near the ${place}.`;
}
const getLib1 = () => {
    generateLib1();
    return lib1;
};
function printLib1 () {
    generateLib1();
    console.log(lib1);
}

// lib2
function generateLib2 () {
    let noun = getWordFromArray(nouns);
    let weapon = getWordFromArray(weapons);
    let spell = getWordFromArray(spells);
    let person = getWordFromArray(nouns);
    let verb = getWordFromArray(verbs);
    lib2 = `You can pretend to be a bloodthirsty ${noun}, threatening people with your ${weapon}. Except that you need to learn the ${spell} spell to take down ${person}. This will give you a ${verb} advantage in the battle.`;
}
const getLib2 = () => {
    generateLib2();
    return lib2;
};
function printLib2 () {
    generateLib2();
    console.log(lib2);
}

// lib3
function generateLib3 () {
    let noun = getWordFromArray(nouns);
    let spell = getWordFromArray(spells);
    let place = getWordFromArray(nouns);
    let person = getWordFromArray(people);
    let verb = getWordFromArray(verbs);
    lib3 = `${noun} are very different from most. They need constant ${spell} spells to take care of them. You can learn these at ${place} from ${person}. I suggest you ${verb} to get this done.`;
}
const getLib3 = () => {
    generateLib3();
    return lib3;
};
function printLib3 () {
    generateLib3();
    console.log(lib3);
}

// Randomly get/print one of the libs
function getRandomMessage () {
    const randNum = Math.floor((Math.random() * 3) + 1);
    switch (randNum) {
        case 1:
            return getLib1();
        case 2:
            return getLib2();
        case 3:
            return getLib3();
        default:
            return "error";
    }
}
function printRandomMessage () {
    const randNum = Math.floor((Math.random() * 3) + 1);
    if (randNum === 1) {
        printLib1();
    }
    else if (randNum === 2) {
        printLib2();
    }
    else if (randNum === 3) {
        printLib3();
    }
    else {
        console.log("error");
    }
}

// Ending Setup of Stuff
generateLib1();
generateLib2();
generateLib3();

// Print a few random messages

for (let i = 0; i < 10; i++) {
    printRandomMessage();
}

// Tests
// getRandomWholeNumber
/*
console.log(getRandomWholeNumber(10));
console.log(getRandomWholeNumber(10));
*/
// getWordFromArray
/*
console.log(getWordFromArray(verbs));
console.log(getWordFromArray(nouns));
*/
// generateLib1
/*
console.log(lib1);
generateLib1();
console.log(lib1);
*/
// getLib1
/*
console.log(getLib1());
// printLib1
printLib1();
*/
// Lib 2
/*
generateLib2();
console.log(getLib2());
printLib2();
*/
// Lib 3
/*
generateLib3();
console.log(getLib3());
printLib3();
*/
// getRandomMessage and printRandomMessage
/*
console.log(getRandomMessage());
printRandomMessage();
*/