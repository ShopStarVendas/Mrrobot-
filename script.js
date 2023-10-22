document.addEventListener('DOMContentLoaded', function() {
  const hamburguer = document.querySelector('.hamburguer');
  const menu = document.querySelector('.menu');

  hamburguer.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
});

/* logo */
document.addEventListener("DOMContentLoaded", function() {
  const link = document.getElementById("link");
  const logo = document.getElementById("logo");

  logo.addEventListener("click", function() {
    document.body.classList.add("dark-overlay"); // Adiciona a classe para escurecer o fundo

    setTimeout(function() {
      window.location.href = "404.html"; // Redireciona para "teste.html" após um atraso
    }, 1000); // 3000 milissegundos = 3 segundos
  });
});
