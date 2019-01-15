//Criando uma classe que representa um pedaço de um html que é uma view
class NegociacoesView extends View {
    //Atualizar a view na pagina
    update(negociacoes: Negociacoes): void {
        this._elemento.innerHTML = this.template(negociacoes);
    }

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