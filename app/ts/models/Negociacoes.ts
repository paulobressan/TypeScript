//Importanto Negociacao
import { Negociacao } from "./Negociacao";

//Exportando classe Negociacoes
export class Negociacoes {
    //criando um array de negociações que vai conter objetos do tipo Negociacao
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        //ParaArray retorna um novo array de objetos, isso aplica a programação defenciva, onde quem receber
        //o array de negociações não vai conseguir modificar o array original, somente a copia
        return [].concat(this._negociacoes);
    }
} 