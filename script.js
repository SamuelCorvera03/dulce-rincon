const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        faqItems.forEach(otherItem => {
            if (otherItem !== item) otherItem.classList.remove('active');
        });
            item.classList.toggle('active');
    });
});

const miFormulario = document.getElementById('form-postres');

if (miFormulario) {
    miFormulario.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Evita que la página se recargue
        
        const nombre = document.getElementById('nombre').value;
        
        // Simulación de envío
        alert(`¡Gracias ${nombre}! Hemos recibido tu mensaje. Te contactaremos pronto.`);
        miFormulario.reset(); // Limpia los campos
    });
}
