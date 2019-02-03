//ARQUIVO UTILS PARA MANTER ALGUMAS FUNÇÕES QUE VAI FACILITAR O DESENVOLVIMENTO E CENTRALIZAR CÓDIGOS

//Função para imprimir negociações na tela
export function imprime(...objetos: any[]) {
    objetos.forEach(objeto => objeto.paraTexto());
}