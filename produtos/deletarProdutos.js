const { produto } = require("../app")
const deletarProdutos = (req,res) =>{
    const {id} = req.params
    const index = produto.findIndex((c) => c.id == id)
    if(index === -1){
        return res.status (400).send({menssage: 'Produto não encontrado'})
    }
    const deletar = produto.splice(index, 1) [0]
    res.status(200).send({message: "produto delatado!!!"})
    produto:deletar
}
module.exports = deletarProdutos