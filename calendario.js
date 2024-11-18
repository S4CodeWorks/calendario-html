// Quando a página for completamente carregada, ativamos a animação
window.addEventListener('load', function() {
    const calendarioSection = document.querySelector('.calendar-section');
    if (calendarioSection) {
        // Adiciona a classe para iniciar a animação
        calendarioSection.classList.add('show');
    }
});
