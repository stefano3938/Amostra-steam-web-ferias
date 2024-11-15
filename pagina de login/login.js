function limparTexto(){document.getElementById("email").value="",document.getElementById("senha").value=""}
let caixaMarcar = document.getElementById('botao-lembra-de-mim');
let botal = document.getElementById('botao');
let contador = 1;
function caixinha()
{
 if(contador == 1){
    caixaMarcar.src = '../imagens/botao-marcar.svg';
contador = 0;
}
else
{
caixaMarcar.src = '../imagens/botao-marcar-falso.svg';
contador = 1;
}
}

 botao.addEventListener('click', caixinha);
