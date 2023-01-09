class menu{
    constructor(id, tipoDeMenu,idRestaurante,nombreM,precio){
        this.id=id;
        this.tipoDeMenu=tipoDeMenu;
        this.idRestaurante=idRestaurante;
        this.nombreM=nombreM;
        this.precio=precio
    }
    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getIdRestaurante() {
        return this.idRestaurante;
    }

    setIdRestaurante(idRestaurante) {
        this.idRestaurante = idRestaurante;
    }



    getTipoDeMenu() {
        return this.tipoDeMenu;
    }

    setTipoDeMenu(tipoDeMenu) {
        this.tipoDeMenu = tipoDeMenu;
    }

    getNombreM() {
        return this.NombreM;
    }

    setNombreM(nombreM) {
        this.nombreM = nombreM;
    }

    getPrecio() {
        return this.precio;
    }

    setPrecio(precio) {
        this.precio = precio;
    }
}
