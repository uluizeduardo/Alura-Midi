function tocaSom (idElementoAudio) {
    const elemento =  document.querySelector(idElementoAudio);

    if(elemento && elemento.localName === "audio"){
        elemento.play();      
    }else{
        alert("Valor inválido");
    }
    console.log(elemento.localName);
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//template string

    tecla.onclick = function(){
        tocaSom(idAudio);
    } 
}

