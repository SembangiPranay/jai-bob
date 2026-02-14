const sections = document.querySelectorAll(".section");
const enterBtn = document.getElementById("enterBtn");

let current = 0;

function showSection(index) {
    sections.forEach(sec => sec.classList.remove("active"));
    sections[index].classList.add("active");
    current = index;
}

enterBtn.addEventListener("click", () => {
    showSection(1);
});

/* PHOTO SEQUENCE */
const photos = ["photo1.jpg","photo2.jpg","photo3.jpg"];
let photoIndex = 0;
const photoEl = document.getElementById("photoSequence");

function nextPhoto(){
    photoEl.classList.remove("zoom");
    setTimeout(()=>{
        photoIndex = (photoIndex + 1) % photos.length;
        photoEl.src = photos[photoIndex];
        photoEl.classList.add("zoom");
    },1000);
}
setInterval(nextPhoto,6000);

/* TEXT REVEAL */
const romanticText = document.getElementById("romanticText");
setTimeout(()=>{
    romanticText.style.opacity = 1;
},4000);

/* SIMPLE MAP LINE */
const canvas = document.getElementById("mapCanvas");
if(canvas){
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    ctx.strokeStyle = "#ff8fab";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(50,200);
    ctx.lineTo(400,100);
    ctx.stroke();
}

