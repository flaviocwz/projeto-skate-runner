const skatista = document.querySelector('.skatista');
const lata = document.querySelector('.lata');

const jump = () => {  // Função responsável por fazer o personagem pular
    if (skatista.classList.contains('jump')) return;
    skatista.src = "images/jump.png"; 
    skatista.classList.add('jump');
    setTimeout(() => {
        skatista.classList.remove('jump');
        skatista.src = "images/regular.png";
    }, 600); // Ajuste de tempo para 600ms, para combinar com a animação CSS
};

const over = setInterval(() => { // Função para parar a animação quando o skatista bater na lata
    const lataPosition = lata.offsetLeft;
    const skatistaPosition = +window.getComputedStyle(skatista).bottom.replace('px', '');

    if (lataPosition <= 75 && lataPosition > 0 && skatistaPosition < 68) {
        lata.style.animation = 'none';
        lata.style.left = `${lataPosition}px`;

        skatista.style.animation = 'none';
        skatista.style.bottom = `${skatistaPosition}px`;
        skatista.src = './images/dead.png';

        clearInterval(over);
    }
}, 10);

document.addEventListener('keydown', (event) => {
    if (event.key === "ArrowUp") {
        jump();
    }
});
