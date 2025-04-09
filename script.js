
function getDestino() {
  const params = new URLSearchParams(window.location.search);
  return params.get("destino") || "FILMS.html";
}

function validateForm() {
  const idade = document.querySelector('input[name="idade"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const emailConfirma = document.querySelector('input[name="confirmarEmail"]').value;
  const senha = document.querySelector('input[name="senha"]').value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (idade < 18) {
    alert("Você precisa ter 18 anos ou mais para se cadastrar.");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("E-mail inválido.");
    return false;
  }

  if (email !== emailConfirma) {
    alert("Os e-mails não coincidem.");
    return false;
  }

  if (senha.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres.");
    return false;
  }

  return true;
}

function showSuccessMessage(callback) {
  const container = document.querySelector(".container");

  const message = document.createElement("div");
  message.textContent = "✅ Cadastro realizado com sucesso!";
  message.style.backgroundColor = "#d4edda";
  message.style.color = "#155724";
  message.style.padding = "10px 20px";
  message.style.marginTop = "15px";
  message.style.borderRadius = "8px";
  message.style.textAlign = "center";
  message.style.fontWeight = "bold";
  message.style.boxShadow = "0 0 8px rgba(0,0,0,0.1)";
  message.style.opacity = "0";
  message.style.transition = "opacity 0.5s ease-in-out";

  container.appendChild(message);

 
  setTimeout(() => {
    message.style.opacity = "1";
  }, 100);


  setTimeout(() => {
    callback();
  }, 1000);
}

function handleSubmit(event) {
  event.preventDefault();
  if (validateForm()) {
    showSuccessMessage(() => {
      const destino = getDestino();
      window.location.href = destino;
    });
  }
}
