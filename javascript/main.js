const skatista = document.querySelector('.skatista');


const jump = () => {
   
    
        skatista.classList.add('jump');

        
        setTimeout(() => {
            skatista.classList.remove('jump');
        }, 500);
    }



document.addEventListener('keydown', jump);
