const { produto } = require("../app")
const autualizaçãoProduros = (req,res) =>{
        const {id} = req.params
        const novonome = req.body.nome
        const novacategoria = req.body.categoria
        const novopreço = req.body.preço
        const novoestoque = req.body.estoque
        const produtos = produto.find((f) => f.id == id)
        
        if(!produtos){
            return res.status(400).send({menssage: "erro!!!" })
        }
            produtos.nome = novonome
            produtos.categoria = novacategoria
            produtos.preço = novopreço
            produtos.estoque = novoestoque
           
    res.status(200).send({message: "produto autualizado!!!"})
            produtos:produtos
}
module.exports = autualizaçãoProduros