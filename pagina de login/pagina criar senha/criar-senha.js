let imagemTermos = document.getElementById('imagem-termos');
let botaoTermos = document.getElementById('botao-termos');
let contador = 1;

function Termos(){
 if(contador == 1){
    imagemTermos.src = '../v.svg';
contador = 0;
}
else
{
imagemTermos.src = '../a';
contador = 1;
}
}

botaoTermos.addEventListener('click', Termos);
