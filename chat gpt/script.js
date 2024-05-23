// Este script JavaScript é apenas um exemplo básico e pode ser expandido conforme necessário

// Exemplo de código JavaScript para manipular eventos quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    console.log('A página foi carregada.');

    // Exemplo de manipulação de eventos para um clique em um botão
    var button = document.getElementById('myButton');
    button.addEventListener('click', function() {
        alert('Você clicou no botão!');
    });
});
