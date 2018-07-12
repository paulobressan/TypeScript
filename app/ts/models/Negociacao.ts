class Negociacao {
    constructor(private _data: Date, private _quantidade: Number, private _valor: Number) {}

    get data() {
        return new Date(this._data);
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    // get volume() {
    //     //return this._quantidade * this._valor;
    // }
}