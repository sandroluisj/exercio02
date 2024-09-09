
const express = require('express')
const app = express()
const port = 3000

const criarProduto = require("./produtos/criaProdutos")
const listagemProdutos = require ("./produtos/listagemProdutos")
const autualizaçãoProduros = require ("./produtos/autualizaçãoProdutos")
const deletarProdutos = require ("./produtos/deletarProdutos")
const nomes = require ("./nome")
const categorias = require('./categoria')
const preços = require('./preço')


app.use(express.json()); 

app.get('/',(req, res) => {
    res.send("servidor ok")
}) 

app.post('/produto', criarProduto)
app.get('/produto', listagemProdutos)
app.put('/produto/:id', autualizaçãoProduros)
app.delete('/produto/:id', deletarProdutos )

app.get('/produto/nome', nomes)
app.get('/produto/preço', preços)
app.get('/produto/categoria', categorias)
app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`)
})