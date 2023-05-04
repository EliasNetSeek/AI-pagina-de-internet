<?php
echo '
<!DOCTYPE html>
<html>

<head>
    <title>✞ Tarot ✞</title>
    <link rel="stylesheet" href="/src/css/navBar.css">
    <link rel="stylesheet" href="/src/css/globalStyle.css">
    <link rel="stylesheet" href="/src/css/cards.css">
    <!-- <script src="/src/js/cards.js"></script> -->
    <script src="/src/js/background.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.6.0/lib/p5.js"></script>
</head>

<body>
    <div class="navbar">
        <a class="nav-buton buton-stanga selected" href="#home">Homepage</a>
        <a class="nav-buton buton-stanga" href="all-cards.html">All Cards</a>
        <a class="nav-buton buton-dreapta" href="#contact">Buy</a>
    </div>


    <div>

        <div class="flip-card" style="top: 300px; left: 100px;transform: rotate(-20deg);">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="/src/img/cards/Back.png" style=" border-radius: 10px;width:240px;height:430px;">
                </div>
                <div class="flip-card-back">
                    <div
                        style="background: url(/src/img/cards/Card1.png); border-radius: 10px; background-size:240px 430px; height: 430px; width: 240px;">
                    </div>
                </div>
            </div>
        </div>

        <div class="flip-card" style="top: 200px; left: 440px; transform: rotate(-10deg);">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="/src/img/cards/Back.png" style=" border-radius: 10px;width:240px;height:430px;">
                </div>
                <div class="flip-card-back">
                    <div
                        style="background: url(/src/img/cards/Card2.png); border-radius: 10px; background-size:240px 430px; height: 430px; width: 240px;">
                    </div>
                </div>
            </div>
        </div>

        <div class="flip-card" style="left:780px; top: 170px;">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="/src/img/cards/Back.png" style=" border-radius: 10px; width:240px;height:430px;">
                </div>
                <div class="flip-card-back">
                    <div
                        style="background: url(/src/img/cards/Card3.png); border-radius: 10px; background-size:240px 430px; height: 430px; width: 240px;">
                    </div>
                </div>
            </div>
        </div>

        <div class="flip-card" style="top: 200px; left:1120px; transform: rotate(10deg);">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="/src/img/cards/Back.png" style=" border-radius: 10px;width:240px;height:430px;">
                </div>
                <div class="flip-card-back">
                    <div
                        style="background: url(/src/img/cards/Card4.png); border-radius: 10px; background-size:240px 430px; height: 430px; width: 240px;">
                    </div>
                </div>
            </div>
        </div>

        <div class="flip-card" style="top: 300px; left:1460px; transform: rotate(20deg);">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="/src/img/cards/Back.png" style=" border-radius: 10px;width:240px;height:430px;">
                </div>
                <div class="flip-card-back">
                    <div
                        style="background: url(/src/img/cards/Card5.png); border-radius: 10px; background-size:240px 430px; height: 430px; width: 240px;">
                    </div>
                </div>
            </div>
        </div>

    </div>


    <!-- <div style="padding: 35px 20px 30px 20px; color: white; opacity: .8;"> </div> -->

</body>

</html>
';
?>