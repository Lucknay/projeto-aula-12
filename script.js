const titulo = document.querySelector("#titulo")
const autor = document.querySelector("#Autor")
const genero = document.querySelector("#genero")
const ano = document.querySelector("#ano")

const resultado = document.querySelector("#resultado")

const formulario = document.querySelector("#formulario")

const livros= []


formulario.addEventListener("submit", (evento)=>{

    evento.preventDefault()

    const livro = {
        titulo: titulo.value,
        autor: autor.value,
        genero: genero.value,   
        ano: ano.value
        }
        
        livros.push(livro)
        
        resultado.innerHTML = ""
    
        livros.forEach((usuario_da_vez)=>{

        const card = document.createElement("div")

        card.innerHTML = `
        <h2>Titulo: ${usuario_da_vez.titulo}</h2>
        <p>Autor: ${usuario_da_vez.autor}</p>
        <p>Gênero: ${usuario_da_vez.genero}</p>
        <p>Ano: ${usuario_da_vez.ano}</p>
        
        `
        resultado.appendChild(card)
         
        
        localStorage.setItem("dados_cliente", JSON.stringify(livros))
    })   
})


const buscar2 = document.querySelector("#buscar1")
const buscar = document.querySelector("#buscar")

buscar2.addEventListener("click", ()=>{

     const lista_do_local_storage = JSON.parse(localStorage.getItem("dados_cliente")) || []

     resultado.innerHTML = ""

     lista_do_local_storage.forEach( (livroAtual)=>{
        if(buscar.value === livroAtual.titulo){
        const card = document.createElement("div")

        card.innerHTML = `
        <h2>Titulo: ${livroAtual.titulo}</h2>
        <p>Autor: ${livroAtual.autor}</p>
        <p>Gênero: ${livroAtual.genero}</p>
        <p>Ano: ${livroAtual.ano}</p>
        
        `
        resultado.appendChild(card) } 
        }

        

      
       )

})


function carregarPagina() {
    const lista_do_local_storage = JSON.parse(localStorage.getItem("dados_cliente")) || []

    lista_do_local_storage.forEach((cliente) => {
        const caixinha = document.createElement("div")
        caixinha.innerHTML = `
        <h2>Titulo: ${cliente.titulo}</h2>
        <p>Autor: ${cliente.autor}</p>
        <p>Gênero: ${cliente.genero}</p>
        <p>Ano: ${cliente.ano}</p>
        
        `
        resultado.appendChild(caixinha)
    })
}

carregarPagina() 













  










    