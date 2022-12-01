/* This year the elves have bought a gift wrapping machine. But... it's not programmed! We need to create an algorithm that helps it in the task.

The machine receives an array with the gifts. Each gift is a string. We need the machine to wrap each gift in wrapping paper and place it in an array of wrapped gifts.

The wrapping paper is the * symbol and to wrap a gift the * symbol is placed so that it completely surrounds the string on all sides. For example: */

// const gifts = ["book", "game", "socks"];

// const wrapped = wrapGifts(gifts);

function wrapping(gifts) {
    let wrapped = [];
    return gifts.map(gift => {
        wrapped = "*".repeat(gift.length + 2);
        return `${wrapped}\n*${gift}*\n${wrapped}`;
    })
}

console.log(wrapping(["book", "game", "socks"]));