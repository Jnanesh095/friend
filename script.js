// -----------------------------
// AOS Animation
// -----------------------------
AOS.init({
    duration: 1000,
    once: true
});

// -----------------------------
// Loader
// -----------------------------
window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";
        document.getElementById("main").style.display = "block";

    }, 3000);

});

// -----------------------------
// Typewriter
// -----------------------------
new Typed("#typing", {

    strings: [
        "Dear Best Friend ❤️",
        "We've grown up together...",
        "We've laughed together...",
        "We've fought together 😂",
        "We'll always stay together 🤝"
    ],

    typeSpeed: 50,
    backSpeed: 30,
    loop: true

});

// -----------------------------
// Gift Popup
// -----------------------------
const gift = document.getElementById("gift");
const popup = document.getElementById("popup");

gift.addEventListener("click", () => {

    popup.style.display = "flex";

    confetti({

        particleCount: 250,
        spread: 180,
        origin: { y: 0.6 }

    });

});

function closePopup() {

    popup.style.display = "none";

}

// Close popup if background clicked

popup.addEventListener("click", function(e){

    if(e.target===popup){

        popup.style.display="none";

    }

});

// -----------------------------
// Floating Hearts
// -----------------------------
setInterval(createHeart, 500);

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top="100vh";
    heart.style.fontSize=(20+Math.random()*20)+"px";
    heart.style.opacity=Math.random();
    heart.style.pointerEvents="none";
    heart.style.zIndex="999";

    document.body.appendChild(heart);

    let pos=100;

    const fall=setInterval(()=>{

        pos--;

        heart.style.top=pos+"vh";

        heart.style.transform=
        `translateX(${Math.sin(pos/5)*20}px)`;

        if(pos<-10){

            clearInterval(fall);
            heart.remove();

        }

    },30);

}




// -----------------------------
// Mouse Glow
// -----------------------------
const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="20px";
glow.style.height="20px";
glow.style.borderRadius="50%";
glow.style.background="#ffffff";
glow.style.boxShadow="0 0 35px white";
glow.style.pointerEvents="none";
glow.style.opacity=".6";
glow.style.zIndex="9999";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX-10+"px";
    glow.style.top=e.clientY-10+"px";

});

// -----------------------------
// Fade Hero on Scroll
// -----------------------------
window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    hero.style.opacity=1-window.scrollY/500;

});

// -----------------------------
// Random Sparkle Effect
// -----------------------------
setInterval(()=>{

    const star=document.createElement("div");

    star.innerHTML="✨";

    star.style.position="fixed";
    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";
    star.style.fontSize="18px";
    star.style.pointerEvents="none";
    star.style.opacity="1";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },1500);

},700);

function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}