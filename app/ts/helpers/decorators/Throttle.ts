//IMPLANTANDO O PADRÃO DE PROJETO THROTTLE
/** 
* Decorator para aplicar o padrão de projeto Throttle, ou seja o metodo que implementar esse decorator
* vai aguarda por padrão 500 mile segundos para executar ou podemos passar por parametro no decorator
* a quantidade de mile segundos que queremos aguardar para executar e se nesse meio tempo a função for
* executada novamente a que estava em espera vai ser anulada e a proxima vai aguarda a execução.
*/
export function Throttle(milessegundos = 500) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let metodoOriginal = descriptor.value;
        //Tempo da ultima função executada
        let timer = 0;
        descriptor.value = function (...args: any[]) {
            /** Se existir algum evento no metodo que implementou o decorator, vamos usar o preventDefault
             *  para tirar o seu comportamento original. O typescript entende que quando utilizamos o if(event)
             *  estamos verificando se existe o objeto implicito event e assim ele tipo o objeto como Event
             * */
            if (event) event.preventDefault();
            //limpar tempo para a nova função
            clearTimeout(timer);
            //Aguardar os milesegundos até a execução do metodo original
            timer = setTimeout(() => metodoOriginal.apply(this, args), milessegundos);
        }

        return descriptor;
    }
}