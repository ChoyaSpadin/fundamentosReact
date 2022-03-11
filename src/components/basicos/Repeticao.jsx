import React from "react";

// Importando array de produtos
import products from "../../data/products";

export default props => {


    function getProductsListItem() {

        // Produtos.map para transformar objeto do tipo produto para JSX
        return products.map(prod => {
            // Colocar key id para quando tiver alteração no html consiga identificar cada elemento
            return <li key={prod.id}>
                {prod.id} - {prod.nome} -> R$ {prod.preco}
            </li>
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProductsListItem()}
            </ul>
        </div>
    )
}
