document.getElementById("tema_btn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
})

document.querySelector(".menu_button").addEventListener("click", () => {
  document.querySelector(".menu_content").classList.toggle("open");
})

function movenav(){
  const nav = document.getElementById("navbar");
  const menuContent = document.querySelector(".menu_content");
  const accessibility = document.querySelector(".accessibility");

  if(window.innerWidth <= 768){
    if(!menuContent.contains(nav)){
      menuContent.prepend(nav);
    }
    }else{
      if(!accessibility.contains(nav)){
      accessibility.appendChild(nav);
    }
    }
}

window.addEventListener("resize", movenav);
window.addEventListener("load", movenav);

const form = document.getElementById('form-contrato');
const mensagemSucesso = document.getElementById('mensagem_sucesso');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // impede o envio real do formulário

  if (form.checkValidity()) {
    // Mostra a mensagem de sucesso
    mensagemSucesso.style.display = 'block';

    // Espera 5 segundos e redireciona
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 5000);
  } else {
    form.reportValidity(); // mostra os avisos de validação padrão
  }
});