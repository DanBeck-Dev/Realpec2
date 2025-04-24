window.onload = () => {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    document.body.classList.add("dark");
  }
};

document.getElementById("tema_btn").addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
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
  e.preventDefault(); 

  if (form.checkValidity()) {
    mensagemSucesso.style.display = 'block';
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 5000);
  } else {
    form.reportValidity(); 
  }
});