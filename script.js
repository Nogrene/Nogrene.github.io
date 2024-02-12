function show() {
    document.getElementById("me").innerHTML = "I can see you but you can't see me...";
}

var glowElement = document.getElementById("glow");
var colors = ['#ffeccd', '#edc9b5', '#ffeccd', '#edc9b5'];

function startGlowEffect() {
    var colorIndex = 1;
    setInterval(function() {
        glowElement.style.textShadow = '1px 1px 10px' + colors[colorIndex];
        colorIndex = (colorIndex + 5) % colors.length;    
    }, 250);
}

    startGlowEffect();
    
let heading = document.querySelector("h1");
heading.innerHTML = "The Creepy Side"; 


