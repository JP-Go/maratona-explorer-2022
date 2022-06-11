const respostas = [
  "Não.",
  "Não tenho tanta certeza.",
  "Sim.",
  "Certeza!",
  "Não conte com isso",
  "Será decididamente assim.",
  "Sem dúvidas!",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Concentre-se e pergunte novamente.",
  "As perspectivas não são tão boas",
  "A meu ver, sim.",
  "Minha fontes dizem que não",
  "Sinais apontam que sim.",
  "Provavelmente",
  "Você pode contar com isso."
]

const botaoPergunta = document.querySelector("button")
const inputPergunta = document.querySelector("input")
const placeholderResposta = document.querySelector("#resposta")

const obterResposta = (respostas) => {
  const totalRespostas = respostas.length
  const indiceResposta = Math.floor(Math.random() * totalRespostas)
  return respostas[indiceResposta]
}

const mostrarResposta = (resposta, placeholder) => {
  placeholder.innerHTML = resposta
}

const validarPergunta = (pergunta) => {
  return pergunta[pergunta.length - 1] == '?' && pergunta.length > 0
}

botaoPergunta.addEventListener("click", () => {
  const textoPergunta = inputPergunta.value
  const ePergunta = validarPergunta(textoPergunta)
  if (!ePergunta) {
    alert("Digite uma pergunta")
    return
  }
  const pergunta = "<div>" + textoPergunta + "</div>" 
  const resposta = obterResposta(respostas)
  mostrarResposta(pergunta + resposta, placeholderResposta)
  placeholderResposta.style.opacity = 1;
  setTimeout(()=>{placeholderResposta.style.opacity = 0},3000)
})