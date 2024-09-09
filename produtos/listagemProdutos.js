const { produto } = require("../app")
const listagemProdutos = (req,res) =>{
    res.status(200).send(produto)
}
module.exports = listagemProdutos

