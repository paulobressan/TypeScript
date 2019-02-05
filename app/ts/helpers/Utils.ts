import { Imprimivel } from "../models/index";

//ARQUIVO UTILS PARA MANTER ALGUMAS FUNÇÕES QUE VAI FACILITAR O DESENVOLVIMENTO E CENTRALIZAR CÓDIGOS

//Função para imprimir negociações na tela
export function imprime(...objetos: Imprimivel[]) {
    objetos.forEach(objeto => objeto.paraTexto());
}