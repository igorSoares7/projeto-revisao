URL_API_LIVROS = "https://api-aula.up.railway.app/livros"

async function iniciarCadastro(){

    // 1 entrada de dados
    // preciso pegar os valores dos inputs
    const title = document.getElementById("title").value
    const description = document.getElementById("description").value


    // 1.1 validacao dos campos

    
    if(title == "" || description == "") {
        alert("Digite um livro e descrição!")
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
     await fetch(URL_API_LIVROS, options)
    // 3 Monstrar em tela o resultado da chamada
    // Mensagem de sucesso ou erro
}
