import './Produtos.css';

import Produto from '../../Elementos/Produto/Produto'

export default function Produtos() {
    return (
        <div className='Produtos'>
            <Produto nomeProduto={"Salmão com Molho de Maracujá"} preco={"49,90"} iconePath={"/images/garfo.svg"}/>
            <Produto nomeProduto={"Espaguete à Carbonara"} preco={"39,90"} iconePath={"/images/garfo.svg"}/>
            <Produto nomeProduto={"Hambúrguer Artesanal"} preco={"24,90"} iconePath={"/images/garfo.svg"}/>
            <Produto nomeProduto={"Pizza Marguerita"} preco={"39,90"} iconePath={"/images/garfo.svg"}/>
            <Produto nomeProduto={"Risoto de Cogumelos"} preco={"42,00"} iconePath={"/images/garfo.svg"}/>
            <Produto nomeProduto={"Lasanha de Carne"} preco={"34,90"} iconePath={"/images/garfo.svg"}/>
        </div>
    )
}