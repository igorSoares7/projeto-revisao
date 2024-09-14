URL_API_LIVROS = "https://api-aula.up.railway.app/livros"

async function iniciarCadastro(){

    // 1 entrada de dados
    // preciso pegar os valores dos inputs
    const title = document.getElementById("title").value
    const description = document.getElementById("description").value


    // 1.1 validacao dos campos

    
    if(title == "" || description == "") {
        return resultadoErro()
    }

    // 2 processamento
    // chamada de API Construção da Request

    const options =  {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            title: title,
            description: description
        })
    }
     const response = await fetch(URL_API_LIVROS, options)

    // 3 Monstrar em tela o resultado da chamada
    // Mensagem de sucesso ou erro
    resultadoPositivo()
}

function resultadoPositivo() {
    const resultadoOk = document.getElementById("resultado")
    resultadoOk.style.backgroundColor = "#207868"
    resultadoOk.innerHTML = `Você cadastrou o livro ${title.value}!`
}

function resultadoErro() { 
    const resultadoErro = document.getElementById("resultado")
    resultadoErro.style.backgroundColor = "#AC6363"
    resultadoErro.innerHTML = "Formulário inválido! Digite um livro e descrição!"
}
