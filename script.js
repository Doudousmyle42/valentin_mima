var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars with random opacity values
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];

        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

const button = document.getElementById("valentinesButton");
if (button.textContent === "Clique Moi❤") {
    button.textContent = "Je t'aime❤";
}


function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24); // Adjust font size based on screen width
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    
    // glow effect
    context.shadowColor = "rgba(255, 77, 109, 1)";
    context.shadowBlur = 8;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    if(frameNumber < 250){
        context.fillStyle = `rgba(255, 179, 193, ${opacity})`;
        context.fillText("chaque jour je n'arrive pas à croire la chance que j'ai", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    //fades out the text by decreasing the opacity
    if(frameNumber >= 250 && frameNumber < 500){
        context.fillStyle = `rgba(255, 179, 193, ${opacity})`;
        context.fillText("chaque jour je n'arrive pas à croire la chance que j'ai", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    //needs this if statement to reset the opacity before next statement on canvas
    if(frameNumber == 500){
        opacity = 0;
    }
    if(frameNumber > 500 && frameNumber < 750){
        context.fillStyle = `rgba(255, 179, 193, ${opacity})`;

        if (window.innerWidth < 600) {           //shortens long sentence for mobile screens
            drawTextWithLineBreaks(["parmi des billions et des billions d'étoiles,", "sur des milliards d'années"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("parmi des billions et des billions d'étoiles, sur des milliards d'années", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 750 && frameNumber < 1000){
        context.fillStyle = `rgba(255, 179, 193, ${opacity})`;
        
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["parmi des billions et des billions d'étoiles,", "sur des milliards d'années"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("parmi des billions et des billions d'étoiles, sur des milliards d'années", canvas.width/2, canvas.height/2);
        }

        opacity = opacity - 0.01;
    }

    if(frameNumber == 1000){
        opacity = 0;
    }
    if(frameNumber > 1000 && frameNumber < 1250){
        context.fillStyle = `rgba(255, 179, 193, ${opacity})`;
        context.fillText("d'être en vie, et de passer cette vie avec toi", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1250 && frameNumber < 1500){
        context.fillStyle = `rgba(255, 179, 193, ${opacity})`;
        context.fillText("d'être en vie, et de passer cette vie avec toi", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1500){
        opacity = 0;
    }
    if(frameNumber > 1500 && frameNumber < 1750){
        context.fillStyle = `rgba(255, 179, 193, ${opacity})`;
        context.fillText("est si incroyablement, inimaginablement improbable", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1750 && frameNumber < 2000){
        context.fillStyle = `rgba(255, 179, 193, ${opacity})`;
        context.fillText("est si incroyablement, inimaginablement improbable", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2000){
        opacity = 0;
    }
    if(frameNumber > 2000 && frameNumber < 2250){
        context.fillStyle = `rgba(255, 179, 193, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["et pourtant je suis là avec l'impossible", "chance de te connaître"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("et pourtant je suis là avec l'impossible chance de te connaître", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2250 && frameNumber < 2500){
        context.fillStyle = `rgba(255, 179, 193, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["et pourtant je suis là avec l'impossible", "chance de te connaître"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("et pourtant je suis là avec l'impossible chance de te connaître", canvas.width/2, canvas.height/2);
        }
        
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2500){
        opacity = 0;
    }
    if(frameNumber > 2500 && frameNumber < 99999){
        context.fillStyle = `rgba(255, 179, 193, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Je t'aime tant mima, plus que tout ce que", "le temps et l'espace de l'univers peuvent contenir"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Je t'aime tant mima, plus que tout ce que le temps et l'espace de l'univers peuvent contenir", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    
    if(frameNumber >= 2750 && frameNumber < 99999){
        context.fillStyle = `rgba(255, 179, 193, ${secondOpacity})`;


        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["et j'ai hâte de passer tout le temps du", "monde à partager cet instant avec toi !"], canvas.width / 2, (canvas.height/2 + 60), fontSize, lineHeight);
        } else {
            context.fillText("et j'ai hâte de passer tout le temps du monde à partager cet instant avec toi !", canvas.width/2, (canvas.height/2 + 50));
        }

        secondOpacity = secondOpacity + 0.01;
    }

    if(frameNumber >= 3000 && frameNumber < 99999){
        context.fillStyle = `rgba(255, 179, 193, ${thirdOpacity})`;
        context.fillText("Joyeuse Saint-Valentin <3", canvas.width/2, (canvas.height/2 + 120));
        thirdOpacity = thirdOpacity + 0.01;

        button.style.display = "block";
    }   

     // Reset the shadow effect after drawing the text
     context.shadowColor = "transparent";
     context.shadowBlur = 0;
     context.shadowOffsetX = 0;
     context.shadowOffsetY = 0;
}


let animationStarted = false;

function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();
    if (animationStarted) {
        drawText();
    }

    if (frameNumber < 99999 && animationStarted) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

// Intro screen logic
const introScreen = document.getElementById('intro-screen');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const music = document.getElementById('bg-music');

yesBtn.addEventListener('click', () => {
    introScreen.classList.add('hidden');
    animationStarted = true;
    
    // Music fade-in effect
    music.volume = 0;
    music.play().then(() => {
        let volume = 0;
        const fadeAudio = setInterval(() => {
            if (volume < 1.0) {
                volume += 0.05;
                if (volume > 1.0) volume = 1.0;
                music.volume = volume;
            } else {
                clearInterval(fadeAudio);
            }
        }, 200); // Increase volume every 200ms
    }).catch(error => {
        console.log("Music play failed (browser policy?): ", error);
    });
});

noBtn.addEventListener('click', () => {
    alert("Allez... dis oui !");
});

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);
