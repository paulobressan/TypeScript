//Criando uma classe que representa um pedaço de um html que é uma view
class NegociacoesView {
    //recebendo o seletor, onde vai ser renderizado o html
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    //Atualizar a view na pagina
    update() {
        this._elemento.innerHTML = this.template();
    }
    //html que sera retornado para ser renderizado
    template() {
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
            </tbody>

            <tfoot>
            </tfoot>
        </table>    
        `;
    }
}
