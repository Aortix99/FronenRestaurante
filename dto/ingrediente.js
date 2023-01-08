class ingrediente{
    constructor(Id,id_menu,Nombre,Calorias){
    this.Id=Id;
    this.id_menu=id_menu;
    this.Nombre=Nombre;
    this.Calorias=Calorias;

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
        this.Id = id;
    }

    getNombre() {
        return this.Nombre;
    }

    setNombre( nombre) {
        this.Nombre = nombre;
    }

    getCalorias() {
        return this.Calorias;
    }

    setCalorias(calorias) {
        this.Calorias = calorias;
    }
}







