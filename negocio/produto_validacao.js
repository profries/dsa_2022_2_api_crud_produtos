function validarProduto(produto) {
    return produto && produto.nome && produto.preco && produto.idcategoria &&
            typeof produto.nome == 'string' && 
            typeof produto.preco == 'number' &&
            typeof produto.idcategoria == 'number'
}

module.exports = {
    validarProduto
}