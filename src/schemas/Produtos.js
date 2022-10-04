import { Schema, model } from 'mongoose';

const Produtos = new Schema({
    produto: String,
    modelo: String,
    marca:String,
    categoria: String,
    descricao: String,
    imgurl: String,
    imgurl2: String,
    imgurl3: String,
    imgurl4: String,
    imgurl5: String,
    imgurl6: String,
    imgurl7: String,
    imgurl8: String,
    preco: String,
    tamanho: String,
    tamanho2: String,
    tamanho3: String,
    tamanho4: String,
    cor: String,
    cor2: String,
    cor3: String,
    cor4: String
});


export default model('Produtos', Produtos);