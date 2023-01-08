class menu{
    constructor(id, TipoDeMenu,IdRestaurante,NombreM,precio){
        this.id=id;
        this.TipoDeMenu=TipoDeMenu;
        this.IdRestaurante=IdRestaurante;
        this.NombreM=NombreM;
        this.precio=precio
    }
    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getIdRestaurante() {
        return this.IdRestaurante;
    }

    setIdRestaurante(idRestaurante) {
        this.IdRestaurante = idRestaurante;
    }



    getTipoDeMenu() {
        return this.TipoDeMenu;
    }

    setTipoDeMenu(tipoDeMenu) {
        this.TipoDeMenu = tipoDeMenu;
    }

    getNombreM() {
        return this.NombreM;
    }

    setNombreM(nombreM) {
        this.NombreM = nombreM;
    }

    getPrecio() {
        return this.precio;
    }

    setPrecio(precio) {
        this.precio = precio;
    }
}
