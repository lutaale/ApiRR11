import { Schema, model } from 'mongoose';

const FoodeasyAPP = new Schema({
  user: String,
  item: String,
  acompanhamentos: String,
  tamanho: String,
  preco: Number,
  quantidade: String,
  telefone: String,
  userrest: String,
  urllogo:String
});


export default model('Foodeasyapp', FoodeasyAPP);