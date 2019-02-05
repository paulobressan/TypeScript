import { Negociacao, NegociacaoParcial } from '../models/index';

export class NegociacaoService {
    obterNegociacoes(handler: HandlerFunction): Promise<Negociacao[]> {
        /**
        * O fetch é uma função do javascript que realiza requisições, ele é uma evolução do XMLHttpResquest e pode ser usado com promise
        */
        return new Promise((resolve, reject) => {
            fetch('http://localhost:8080/dados')
                .then(res => handler(res))
                .then(res => res.json())
                .then((dados: NegociacaoParcial[]) => resolve(dados
                    .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))))
                .catch(err => {
                    console.log(err);
                    reject('Não foi possivel importar negociações');
                });
        });
    }
}

/** 
 * A interface HandlerFunction vai padronizar para que todos os metodos que espera como parametro uma função
 * tenha no parametro da função passada o res do tipo Responde e que o retorno seja do tipo response.
 * */

export interface HandlerFunction {
    (res: Response): Response;
}