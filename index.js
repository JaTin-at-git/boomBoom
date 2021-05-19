document.querySelector(".showOn").addEventListener("click", boomBoom);

//images
gif1 = new Image();
gif2 = new Image();
gif3 = new Image();
gif4 = new Image();
gif5 = new Image();
gif6 = new Image();
gif7 = new Image();
gif8 = new Image();
gif9 = new Image();
gif10 = new Image();

gif1.src = "https://media.giphy.com/media/l378z7OqXS2CdkLGE/giphy.gif";
gif2.src = "https://media.giphy.com/media/1rQWqW5tHUVANiA6iu/giphy.gif";
gif3.src = "https://media.giphy.com/media/6275XF0LXd1fJwq6xJ/giphy.gif";
gif4.src = "https://media.giphy.com/media/rtvmRKyRn4FJwBUpcq/giphy.gif";
gif5.src = "https://media.giphy.com/media/WOeb2XDNCcCoQAhDvK/giphy.gif";
gif6.src = "https://media.giphy.com/media/mMQDNIG08dNKAljwxM/giphy.gif";
gif7.src = "https://media.giphy.com/media/ogV9ixEeSGuUE/giphy.gif";
gif8.src = "https://media.giphy.com/media/fi8f8Rx1R4LLi/giphy.gif";
gif9.src = "https://media.giphy.com/media/pAfuIVpz1Z7WnDVvc2/giphy.gif";
gif10.src = "https://media.giphy.com/media/7XoVTBAJ2vIKNxAQBC/giphy.gif";


let blastGifDiv = document.querySelector(".blastHere");
let blastGif = gif1;
let oldImage;

blastGifDiv.appendChild(blastGif);

//a function to return an image gif of bomb
function getABombImage() {
    let gifArray = [
        gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif9, gif10
    ]
    return gifArray[Math.floor(Math.random() * gifArray.length)];
}

function boomBoom(ev) {
    let x_position = ev.clientX;
    let y_position = ev.clientY;
    blastGifDiv.classList.remove("invisible");
    blastGifDiv.classList.add("visible");

    blastGifDiv.removeChild(blastGif);
    blastGif = getABombImage();
    blastGifDiv.appendChild(blastGif);

    blastGifDiv.setAttribute("style", "left: " + (x_position - (blastGifDiv.clientWidth) / 2) + "px; top: " + (y_position - (blastGifDiv.clientHeight) / 2) + "px;");
    console.log("left: " + x_position + "px; top: " + y_position + "px;");
    oldImage = blastGif;
}
