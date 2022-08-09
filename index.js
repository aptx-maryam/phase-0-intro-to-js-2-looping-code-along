// Code your solutions in this file


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
   for (let i = 0; i < gifts.length; i++) {
     console.log(`Wrapped ${gifts[i]} and added a bow!`);
   }

   return gifts;
 }
 wrapGifts(gifts);



 // Thank you messages

function writeCards(cardNames, event) {
    let fullMessage = [];
    for (let i = 0; i < cardNames.length; i++) {
        fullMessage.push (`Thank you, ${cardNames[i]}, for the wonderful ${event} gift!`)
    }
    return fullMessage;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")



function countDown(number){
    let i = 0;
    while(number > 0){
        console.log(number);
        number -= 1;
    }
    console.log(number)
}
countDown(10)
