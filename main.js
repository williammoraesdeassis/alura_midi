function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeElementos = document.querySelectorAll('.tecla');


for(let contador = 0; contador < listaDeElementos.length; contador++){

    const tecla = listaDeElementos[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }


    tecla.onkeydown = function (evento) {
        if(evento.code === 'Space' || evento.code === 'Enter' || evento.code === `Numpad${contador}`){
            
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

