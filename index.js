// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}*/
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
function writeCards(names, event) {
   const messages = []
    for (let a = 0; a < names.length; a++) {
        console.log(`Thank you, ${names[a]}, for the wonderful ${event} gift!`);
    messages.push(`Thank you, ${names[a]}, for the wonderful ${event} gift!`)
    }
    return messages;
}
writeCards();
wrapGifts(gifts);

function countDown() {
    let countDown = 10;
while (countDown >= 0) {console.log(countDown--);
    }
}