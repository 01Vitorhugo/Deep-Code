
// Efeito de scroll no site 
const sr = ScrollReveal({ 
    reset: true});

// Conteudo o que fazemos
sr.reveal('#OqueFazemos', {duration: 1500 });
sr.reveal('#OqueFazemos-lista', {duration: 1500});
sr.reveal('#figure-img', {duration: 1500});
// 


// Conteudo quem somos
sr.reveal('#logo-texto', {duration: 1500});
sr.reveal('#p-logo-texto', {duration: 1500});
// 



// Conteudo sobre
sr.reveal('#sobre', {duration: 1500});
//


// Conteudo contato
sr.reveal('#contato', {duration: 1500});
//



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




