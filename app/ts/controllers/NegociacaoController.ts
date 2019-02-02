//Importando classes
//O index é utilizado como estratégia Barril, ele exporta todos os modulos da pasta views ou models, cada pasta tem o o seu
import { NegociacoesView, MensagemView } from "../views/index";
import { Negociacoes, Negociacao, NegociacaoParcial } from "../models/index";
import { DomInject } from '../helpers/decorators/index';

export class NegociacaoController {
    //Criando as propriedade para os input, como o input é um elemento as prop tem que ser do tipo HTMLInputElement

    //Decorator para injetar os elementos quando alguem chamar o elemento
    @DomInject('#data')
    private _inputData: JQuery;
    @DomInject('#quantidade')
    private _inputQuantidade: JQuery;
    @DomInject('#valor')
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    //View para renderizar as negociações
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    //View para renderizar mensagens
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        //Assim que a pagina for carregada, vamos carregar a tebela
        this._negociacoesView.update(this._negociacoes);
    }

    //O parametro passado é um evento e para eventos podemos passar o tipo Event
    adiciona(event: Event) {
        event.preventDefault();

        //Limitando negociações para somente serem feitas de segunda a sexta
        let data = new Date((<string>this._inputData.val()).replace(/-/g, ','));

        if (!this._ehDiaUtil(data)) {
            this._mensagemView.update('Não é possivel criar negociações em dias não utel.');
            return;
        }

        const negociacao = new Negociacao(
            //capturar o valor do input com o jquery
            data,
            (<number>this._inputQuantidade.val()),
            (<number>this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoes.paraArray().forEach(negociacao => console.log(negociacao));
        //Toda vez que uma negociação for adicionado, vamos atualiza a tabela
        this._negociacoesView.update(this._negociacoes);
        //Renderizando uma mensagem
        this._mensagemView.update('Negociação adicionada com sucesso');

    }

    //Metodo para validar e uma data esta em um dia util, segunda a sexta.
    private _ehDiaUtil(data: Date) {
        //0 = domingo, 6 = sabado
        return data.getDay() != DiaDaSemana.Domingo && data.getDay() != DiaDaSemana.Sabado;
    }

    /**
     * Essa função vai importar dados para o front atraves de um requisição para o servidor
     */
    importaDados() {
        //Função para tratar erro
        function isOk(res: Response) {
            if (res.ok) {
                return (<any>res);
            } else {
                return new Error(res.statusText);
            }
        }
        /**
         * O fetch é uma função do javascript que realiza requisições, ele é uma evolução do XMLHttpResquest e pode ser usado com promise
         */
        fetch('http://localhost:8080/dados')
            .then(res => isOk(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) => {
                dados
                    .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
                    .forEach(negociacao => this._negociacoes.adiciona(negociacao));
                this._negociacoesView.update(this._negociacoes);
            })
            .catch(err => console.log(err));
    }
}


//Para deixar o código limpo, podemos criar enumerações. A enumeração é contida por chave e valor, porem quando
//nós não atribuimos valor a chave por padrão o valor vai ser incremental, por exemplo na frente das chaves abaixo tem o valor de cada chave
//Portanto quando atribuimos um valor ao enum, por exemplo o domingo for valor 5 a segunda vai ser 6, terça 7 e assim incremental.
enum DiaDaSemana {
    Domingo, //0
    Segunda, //1
    Terça, //2
    Quarta, //3
    Quinta, //4
    Sexta, //5
    Sabado //6
}