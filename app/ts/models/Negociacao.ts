import { ClassDecorator } from '../helpers/decorators/index';
import { Imprimivel } from './Imprimivel';
import { Igualavel } from './Igualavel';

@ClassDecorator("Decorator para a classe negociação")
export class Negociacao implements Imprimivel, Igualavel<Negociacao> {
    //readonly vai manter a propriedade segura para escritas, somente leitura vai ser realizada externamente
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) { }

    get volume(): number {
        return this.quantidade * this.valor
    }

    paraTexto(): void {
        console.log(`Data: ${this.data}
                     Quantidade: ${this.quantidade}
                     Valor: ${this.valor}
                     Volume: ${this.volume}`);
    }

    ehIgual(objeto: Negociacao): boolean {
        return this.data.getDate() == objeto.data.getDate()
            && this.data.getMonth() == objeto.data.getMonth()
            && this.data.getFullYear() == objeto.data.getFullYear();
    }
}