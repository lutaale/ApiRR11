import { Schema, model } from 'mongoose';

const Produtos = new Schema({
    produto: String,
    categoria: String,
    descricao: String,
    imgurl:String,
    preco: String,
    tamanho: String,
    cor:String
});


export default model('Produtos', Produtos);