class restaurante{
    constructor(id, razonSocial, nombreComercial, tipoRestaurante, ciudadU, horaA, horaC){
  this.id=id;
  this.razonSocial=razonSocial;
  this.nombreComercial=nombreComercial;
  this.tipoRestaurante=tipoRestaurante;
  this.ciudadU=ciudadU;
  this.horaA=horaA;
  this.horaC=horaC;
    }
    getId() {
        return this.id;
     }
  
    setId(id) {
        this.id = id;
     }
  
    getRazonSocial() {
        return this.razonSocial;
     }
  
    setRazonSocial(razonSocial) {
        this.razonSocial = razonSocial;
     }
  
    getNombreComercial() {
        return this.nombreComercial;
     }
  
    setNombreComercial(nombreComercial) {
        this.nombreComercial = nombreComercial;
     }
  
     getTipoRestaurante() {
        return this.tipoRestaurante;
     }
  
    setTipoRestaurante(tipoRestaurante) {
        this.tipoRestaurante = tipoRestaurante;
     }
  
    getCiudadU() {
        return this.ciudadU;
     }
  
    setCiudadU(ciudadU) {
        this.ciudadU = ciudadU;
     }
  
    getHoraC() {
        return this.horaC;
     }
  
    setHoraC(horaC) {
        this.horaC = horaC;
     }
  
    getHoraA() {
        return this.horaA;
     }
  
     setHoraA(horaA) {
        this.horaA = horaA;
     }
  
}