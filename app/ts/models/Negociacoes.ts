//Importanto Negociacao
import { Negociacao } from "./Negociacao";
import { MeuObjeto } from "./MeuObjeto";

//Exportando classe Negociacoes
export class Negociacoes implements MeuObjeto<Negociacoes> {
    //criando um array de negociações que vai conter objetos do tipo Negociacao
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        //ParaArray retorna um novo array de objetos, isso aplica a programação defenciva, onde quem receber
        //o array de negociações não vai conseguir modificar o array original, somente a copia
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    paraTexto(): void {
        console.log(JSON.stringify(this._negociacoes));
    }

    ehIgual(objeto: Negociacoes): boolean {
        return JSON.stringify(this._negociacoes) == JSON.stringify(objeto._negociacoes);
    }
} 