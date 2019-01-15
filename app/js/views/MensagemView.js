var Views;
(function (Views) {
    var View = Views.View;
    class MensagemView extends View {
        template(mensagem) {
            return `
                <p class="alert alert-info">${mensagem}</p>
            `;
        }
    }
    Views.MensagemView = MensagemView;
})(Views || (Views = {}));
