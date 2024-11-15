document.addEventListener('DOMContentLoaded', () => {
    const conhecaMain = document.getElementById('conheca-main');
    const p1BotaoMudarImagem2 = document.getElementById('p1-botao-mudar-imagem2');
    const p1BotaoMudarImagem1 = document.getElementById('p1-botao-mudar-imagem1');
    const p1BotaoMudarImagem3 = document.getElementById('p1-botao-mudar-imagem3');
    const p3BotaoMudarImagem1 = document.getElementById('p3-botao-mudar-imagem1');
    const p3BotaoMudarImagem2 = document.getElementById('p3-botao-mudar-imagem2');
    let imagemPrimeiraPagina = document.getElementById('imagem-primeira-pagina');
    let pagina3Imagem1 = document.getElementById('pagina3-imagem1');
    let pagina3Imagem2 = document.getElementById('pagina3-imagem2');
    let pagina3Imagem3 = document.getElementById('pagina3-imagem3');
    let pagina3Imagem4 = document.getElementById('pagina3-imagem4');
    let pagina3Imagem5 = document.getElementById('pagina3-imagem5');
    let pagina3Imagem6 = document.getElementById('pagina3-imagem6');

    function trocarImagem2() {
        p1BotaoMudarImagem2.style.backgroundColor = '#5e0b37';
        p1BotaoMudarImagem1.style.backgroundColor = 'white';
        p1BotaoMudarImagem3.style.backgroundColor = 'white';
        imagemPrimeiraPagina.src = 'imagens/imagem-primeira-pagina2.png';
    }

    function trocarImagem1() {
        p1BotaoMudarImagem1.style.backgroundColor = '#5e0b37';
        p1BotaoMudarImagem2.style.backgroundColor = 'white';
        p1BotaoMudarImagem3.style.backgroundColor = 'white';
        imagemPrimeiraPagina.src = 'imagens/imagem-primeira-pagina.png';
    }

    function trocarImagem3() {
        p1BotaoMudarImagem3.style.backgroundColor = '#5e0b37';
        p1BotaoMudarImagem1.style.backgroundColor = 'white';
        p1BotaoMudarImagem2.style.backgroundColor = 'white';
        imagemPrimeiraPagina.src = 'imagens/imagem-primeira-pagina3.png';
    }

    p1BotaoMudarImagem2.addEventListener('click', trocarImagem2);
    p1BotaoMudarImagem1.addEventListener('click', trocarImagem1);
    p1BotaoMudarImagem3.addEventListener('click', trocarImagem3);

    function p3TrocarImagem1() {
        p3BotaoMudarImagem1.style.backgroundColor = '#5e0b37';
        p3BotaoMudarImagem2.style.backgroundColor = 'white';
        pagina3Imagem1.src = 'imagens/pagina3-imagem1.svg';
        pagina3Imagem2.src = 'imagens/pagina3-imagem2.svg';
        pagina3Imagem3.src = 'imagens/pagina3-imagem3.svg';
        pagina3Imagem4.src = 'imagens/pagina3-imagem4.svg';
        pagina3Imagem5.src = 'imagens/pagina3-imagem5.svg';
        pagina3Imagem6.src = 'imagens/pagina3-imagem6.svg';
    }

    function p3TrocarImagem2() {
        p3BotaoMudarImagem1.style.backgroundColor = 'white';
        p3BotaoMudarImagem2.style.backgroundColor = '#5e0b37';
        pagina3Imagem1.src = 'imagens/pagina3-imagem7.svg';
        pagina3Imagem2.src = 'imagens/pagina3-imagem8.svg';
        pagina3Imagem3.src = 'imagens/pagina3-imagem9.svg';
        pagina3Imagem4.src = 'imagens/pagina3-imagem10.svg';
        pagina3Imagem5.src = 'imagens/pagina3-imagem11.svg';
        pagina3Imagem6.src = 'imagens/pagina3-imagem12.svg';
    }

    p3BotaoMudarImagem1.addEventListener('click', p3TrocarImagem1);
    p3BotaoMudarImagem2.addEventListener('click', p3TrocarImagem2);
});
