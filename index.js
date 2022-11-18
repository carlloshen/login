const correto = document.querySelector("#formulario")
const email = document.querySelector('#email')
const senha = document.querySelector('#password')

correto.addEventListener("submit", (evento => {
    evento.preventDefault()
    let valor = email.value
    let esse = "krlos.henrique98@gmail.com"
    if (valor === esse) {
        window.location.href = "pagina2.html"
    } else {
        email.value=""
        password.value=""
        const errado = document.querySelector("#wrong")
        errado.setAttribute("style","display:block")
        
    }

}))