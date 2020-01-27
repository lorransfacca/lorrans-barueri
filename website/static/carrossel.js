let imagens = document.querySelectorAll('#carrossel li');
let indice = 0;

function controlarIndice(){
    if(indice == imagens.length - 1){
        indice = 0;
    }
}

function alterarClasse(){
    setInterval(function(){
        removerClasse();
        controlarIndice();
        indice++;
        adicionarClasse();
    }, 3000)
}

function removerClasse(){
    imagens[indice].classList.remove('ativo');
}

function adicionarClasse(){
    console.log(indice);
    imagens[indice].classList.add('ativo');
}

function verificarClasse(){
    if (imagens[indice].classList.contains('ativo')){
        alterarClasse();
    }
}

verificarClasse();