const {produto} = require("../app")

function criaProdutos (req, res){
    console.log(req.body)
    const novoProdutos = {
        id: produto.length +1,
        nome: req.body.nome,
        categoria: req.body.categoria,
        preço: req.body.preço,
        estoque: req.body.estoque
    }
    produto.push(novoProdutos)
    res
    .status(201)
    .send({message: "produto criado!!!"})
}
module.exports = criaProdutos