URL_API_LIVROS = "https://api-aula.up.railway.app/livros"

async function iniciarLista() {
    //Processamento
    // 1 fazer chamada API GET em /livros
    // utilizar o fetch
    const response = await fetch(URL_API_LIVROS)
    const livros = await response.json()

    // 2 com o resultado da API, mostrar uma tabela com os livros
    //montar um texto cru com tags misturado com os dados dos livros
    const tableHead =  `
     <table border="2">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITULO</th>
                    <th>DESCRIÇÃO</th>
                </tr>
            </thead>
            <tbody>
            `
    let tableBody = ``

    for(let i = 0; i < livros.length; i++){
        tableBody += `
           <tr>
                   <td>${livros[i].id}</td>
                   <td>${livros[i].title}</td>
                   <td>${livros[i].description}</td>
                </tr>
              
                `
    }
            


    const endTable = `
    </tbody>
        </table>
        `

    const fullTable = tableHead + tableBody + endTable
    const table = document.getElementById("listarLivros")
    table.innerHTML = fullTable


    //Saida
    // 1 com a tabela montada, atribuir a tabela no DOM
    //usar o getelementbyid, pegar um elemento e mudar com o innethtml, e inserir a tabela que foi construida com os dados dos livros
}