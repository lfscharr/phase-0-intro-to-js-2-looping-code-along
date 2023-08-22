function writeCards(friend, event) {
    const thankYou = []
    for (let i = 0; i < friend.length; i++) {
        thankYou.push(`Thank you, ${friend[i]}, for the wonderful ${event} gift!`);
        console.log(thankYou)
    }

    return thankYou;
}

writeCards(friend);


function countDown(num) {
let countDown = num ;
while (countDown >= 0); {
    console.log(countDown);
    
countDown-= 1
}

}

// Code your solutions in this file
