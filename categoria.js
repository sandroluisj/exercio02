const {produto} = require("./app")

const categorias = (req, res) => {
    const { categoria } = req.query
    const produtos = produto.find(l => l.categoria == categoria)
      if(produtos){
        res.status(200).send(produtos)
     } else{
        res.status(404).send('não encontrado !')
     }
}
module.exports = categorias