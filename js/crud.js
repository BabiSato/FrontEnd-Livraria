/******************************************************************************
 * Objetivo: Sistema de cadastro, edição, exclusão e listagem de livros
 * Data: 30/10/2024
 * Autor: Barbara Nayumi
 * Versão: 1.0
 ******************************************************************************/

//receber o botão salvar do html
const botaoSalvar = document.getElementById('salvar')

// receber dados do formulario
const getDadosForm = function(){
    let livroJSON = {}
    let status = true

    // recebe das caixas do html os dados que serão enviados para a API
    let nomeLivro = document.getElementById('title')
    let descricaoLivro = document.getElementById('subtitle')
    let fotoLivro = document.getElementById('image')
    let valorLivro = document.getElementById('price')

    if(nomeLivro == '' || descricaoLivro == '' || fotoLivro == '' || valorLivro == ''){
        alert('Todos os dados devem ser preenchidos')
        status = false
    }else{
        livroJSON.title = nomeLivro.value
        livroJSON.subtitle = descricaoLivro.value
        livroJSON.image = fotoLivro.value
        livroJSON.price = valorLivro.value
    }

    if(status){
        return livroJSON
    } else{
        return false
    }

}

// função para salvar um livro novo
const postLivro = function(dadosLivro){

    console.log(dadosLivro)
    let url = 'https://app-livraria-2024-gsc9e3gcdsh2f2b5.brazilsouth-01.azurewebsites.net/v2/livraria/livro'

    let response = fetch(url, {
        method: 'POST', 
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dadosLivro)
    })

}

// função para alterar o livro existente
const putLivro = function(){

}

// função para deletar o livro
const deleteLivro = function(){

}

// função para listar todos os livros
const getLivros = function(){

}

// função para buscar um livro pelo id
const getBuscarLivro = function(){

}

botaoSalvar.addEventListener('click', function(){
    //postLivro()
    let dados = getDadosForm()

    if(dados){
        postLivro(dados)
    }
})