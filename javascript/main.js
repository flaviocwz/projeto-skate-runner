const skatista = document.querySelector('.skatista');
const lata = document.querySelector('.lata');

const jump = () => {  // Função responsável por fazer o personagem pular 
    skatista.classList.add('jump');
    setTimeout(() => {
        skatista.classList.remove('jump');
    }, 600); // Ajustei o tempo para 600ms, para combinar com a animação CSS
}

const over = setInterval(() => { // Função para parar a animação quando o skatista bater na lata de lixo

    const lataPosition = lata.offsetLeft;
    const skatistaPosition = +window.getComputedStyle(skatista).bottom.replace('px', '');

    if (lataPosition <= 75 && lataPosition > 0 && skatistaPosition < 68) {
        lata.style.animation = 'none';
        lata.style.left = `${lataPosition}px`;

        skatista.style.animation = 'none';
        skatista.style.bottom = `${skatistaPosition}px`;

        clearInterval(over);
    }

}, 10);

document.addEventListener('keydown', jump);
