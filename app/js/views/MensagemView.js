//Classe responsavel por renderizar mensagens de sucesso
class MensagemView extends View {
    update(mensagem) {
        //Rendereizando a msg com o retorno do metodo template
        this._elemento.innerHTML = this.template(mensagem);
    }
    //html que sera retornado para ser renderizado
    template(mensagem) {
        return `
            <p class="alert alert-info">${mensagem}</p>
        `;
    }
}
