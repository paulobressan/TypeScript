//Importando a classe View exportada pelo modulo
import { View } from './View';
//Classe Negociacoes
import { Negociacoes } from '../models/Negociacoes';

//Criando uma classe que representa um pedaço de um html que é uma view
//Usando o ES2015 para exportar a classe NegociacoesView
export class NegociacoesView extends View<Negociacoes> {
    //html que sera retornado para ser renderizado
    template(negociacoes: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
            ${
            //Mapear o array para que seja retornado um array de string, onde cada string é uma linha da tabela, com suas colunas preenchidas
            negociacoes.paraArray().map(negociacao =>
                `
                    <tr>
                        <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>
                `
            )/**O join vai pegar o array de string e converter tudo em uma unica string */.join('')}
            </tbody>
            <tfoot>
            </tfoot>
        </table>    
        `;
    }
}