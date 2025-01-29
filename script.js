document.getElementById('contato-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
  
    if (nome && email && mensagem) {
      document.getElementById('mensagem-sucesso').classList.remove('hidden');
      this.reset(); // Limpa os campos do formulário
      setTimeout(() => {
        document.getElementById('mensagem-sucesso').classList.add('hidden');
      }, 3000); // Esconde a mensagem após 3 segundos
    }
  });
  