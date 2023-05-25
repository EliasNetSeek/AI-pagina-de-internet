var cardList = [
    {
        number: 1,
        name: "THE EMPEROR",
    },
    {
        number: 2,
        name: "THE HANGED",
    },
    {
        number: 3,
        name: "THE SUN",
    },
    {
        number: 4,
        name: "THE STAR",
    },
    {
        number: 5,
        name: "THE MAGICIAN",
    },
    {
        number: 6,
        name: "THE TOWER",
    },
    {
        number: 7,
        name: "THE HIEROPHANT",
    },
    {
        number: 8,
        name: "X CUPS",
    },
    {
        number: 9,
        name: "II SWORDS",
    },
    {
        number: 10,
        name: "ACE CUPS",
    },
    {
        number: 11,
        name: "II CUPS",
    },
    {
        number: 12,
        name: "WANDS",
    },
    {
        number: 13,
        name: "QUEEN SWORDS",
    },
    {
        number: 14,
        name: "PENTACLES",
    },
]

var cardPosition = [
    {
        top: 300,
        left: 100,
        rotate: -20,
    },
    {
        top: 200,
        left: 440,
        rotate: -10,
    },
    {
        top: 170,
        left: 780,
        rotate: 0,
    },
    {
        top: 200,
        left: 1120,
        rotate: 10,
    },
    {
        top: 300,
        left: 1460,
        rotate: 20,
    },
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}

var deltCards = [];
window.onload = function () {
    for (let i = 0; i < 5; i++) {
        var kard = getRandomInt(cardList.length);

        if (!deltCards.includes(kard)) {
            deltCards.push(kard);
        } else {
            kard = getRandomInt(cardList.length);
            deltCards.push(kard);
        }

        document.getElementById('card' + (i + 1) + 'face').style.background = 'url(/src/img/cards/Card' + kard + '.png)';
        document.getElementById('card' + (i + 1) + 'face').style.backgroundSize = '240px 430px';
        document.getElementById('card' + (i + 1)).style.top = cardPosition[i].top;
        document.getElementById('card' + (i + 1)).style.left = cardPosition[i].left;
        document.getElementById('card' + (i + 1)).style.transform = 'rotate(' + cardPosition[i].rotate + 'deg)';
        console.log(i + ": " + cardList[kard - 1].name)
    }
};

var pickedCards = [];
function pickedCard(cardNo) {
    if (!pickedCards.includes(cardNo) && pickedCards.length < 3) {
        pickedCards.push(cardNo);

        var newLine = document.getElementById('pickedCards');
        newLine.insertAdjacentHTML('afterend', "<h2 class='newPicked' id='newPicked'>" + cardList[ deltCards[cardNo - 2] ].name + "</h2>");
    }
}
