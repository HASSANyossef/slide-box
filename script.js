
let images = Array.from(document.querySelectorAll(".row img"));
let bigDiv = document.querySelector(".big-div");
let close = document.getElementById("close");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let mouse = document.querySelector(".gif");
let spinner = document.querySelector(".spinner");
let container = document.querySelector(".container");
let currentIndex = 0;


// setInterval(() =>
// {
//     document.querySelector(".spinner").style.opacity = '0';
// }, 3000);

// window.addEventListener("load", stopSpinner)

function stopSpinner()
{
    spinner.style.display = "none";
}
function waiting()
{
    setInterval(stopSpinner,3000)
}
window.onload = waiting();


function addDiv()
{
    container.style.transform="scale(1)";
}

function appear()
{
    setInterval(addDiv,3000);
}

window.onload = appear();




for (let i = 0; i < images.length; i++)
{
    images[i].addEventListener("click",showImage)
}

function showImage(e)
{
    bigDiv.style.transform= "scale(1)";
    var scrImg = e.target.src;
    currentIndex = images.indexOf(e.target);
    bigDiv.firstElementChild.style.backgroundImage="url("+scrImg+")"
}


close.addEventListener("click",closeImg)

function closeImg() {
    bigDiv.style.transform= "scale(0)";
}


next.addEventListener("click",goNext)

function goNext()
{
    currentIndex++;
    if (currentIndex == images.length)
    {
        currentIndex = 0;
    }
    bigDiv.firstElementChild.style.backgroundImage = "url(" + images[currentIndex].src + ")"
}

prev.addEventListener("click",goPrev)

function goPrev()
{
    currentIndex--;
    if (currentIndex ==-1)
    {
        currentIndex = images.length-1;
    }
    bigDiv.firstElementChild.style.backgroundImage="url("+images[currentIndex].src+")"

}

document.addEventListener("keydown", keyRight)

function keyRight(e)
{
    if (e.key == "ArrowRight")
        goNext();
}


document.addEventListener("keydown", keyLeft)

function keyLeft(e)
{
    if (e.key == "ArrowLeft")
        goPrev()
}


document.addEventListener("keydown", keyEscape)

function keyEscape(e)
{
    if (e.key == "Escape")
        closeImg()
}


document.addEventListener("mousemove", function (e)
{
    mouse.style.left = e.clientX+"px";
    mouse.style.top = e.clientY+"px";
})

// function move(e)
// {
//     mouse.style.left = e.clientx+"px";
//     console.log(e)
// }