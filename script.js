var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
document.addEventListener("click",jump);
function jump(){
    if(character.classList == "animate"){return;}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
    
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    console.log(blockLeft)
    if(blockLeft<120){
        counter++;
        document.getElementById("scoreSpan").innerHTML = counter;
    }
}

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. score: "+counter);
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }
}, 10);
