class ingrediente{
    constructor(id,id_menu,nombre,calorias){
    this.id=id;
    this.id_menu=id_menu;
    this.nombre=nombre;
    this.calorias=calorias;

    }
   getId_menu() {
        return id_menu;
    }

    setId_menu(id_menu) {
        this.id_menu = id_menu;
    }

    getId() {
        return this.Id;
    }

    setId(id) {
        this.id = id;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre( nombre) {
        this.nombre = nombre;
    }

    getCalorias() {
        return this.calorias;
    }

    setCalorias(calorias) {
        this.calorias = calorias;
    }
}







