function openInvite(){

document.getElementById("card").style.display="block";

document.getElementById("music").play();

confetti({
particleCount:150,
spread:90,
origin:{y:0.6}
});

}

function shareWhatsApp(){

let text="🌙 Eid Mubarak! You are invited to our Eid celebration. Join us!";
let url="https://wa.me/?text="+encodeURIComponent(text);

window.open(url);

}