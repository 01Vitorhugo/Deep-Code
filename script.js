
// Efeito de scroll no site 
const sr = ScrollReveal({ 
    reset: true});

sr.reveal('#OqueFazemos', {duration: 1500 });
sr.reveal('#OqueFazemos-lista', {duration: 1500});




sr.reveal('#logo-texto', {duration: 1500});
sr.reveal('#p-logo-texto', {duration: 1500});
sr.reveal('#contato', {duration: 1500});


sr.reveal('#sobre', {duration: 1500});


sr.reveal('#historia', {duration: 2000});

//



// Começo carrossel (CASES)

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;
    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${ - idx * 320}px)`;

}
setInterval(carrossel, 1000);

// Fim carrossel (CASES)




