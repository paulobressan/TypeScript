import { NegociacaoController } from "./controllers/NegociacaoController";

const controller = new NegociacaoController();

//Realizando bind do adiciona no evento submit do formulario
$('.form').submit(controller.adiciona.bind(controller));