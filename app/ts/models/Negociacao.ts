import { ClassDecorator } from '../helpers/decorators/index';

@ClassDecorator("Decorator para a classe negociação")
export class Negociacao {
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
}