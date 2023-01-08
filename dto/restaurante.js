class restaurante{
    constructor(id, RazonSocial, NombreComercial, TipoRestaurante, CiudadU, HoraA, HoraC){
  this.id=id;
  this.RazonSocial=RazonSocial;
  this.NombreComercial=NombreComercial;
  this.TipoRestaurante=TipoRestaurante;
  this.CiudadU=CiudadU;
  this.HoraA=HoraA;
  this.HoraC=HoraC;
    }
    getId() {
        return this.id;
     }
  
    setId(id) {
        this.id = id;
     }
  
    getRazonSocial() {
        return this.RazonSocial;
     }
  
    setRazonSocial(razonSocial) {
        this.RazonSocial = razonSocial;
     }
  
    getNombreComercial() {
        return this.NombreComercial;
     }
  
    setNombreComercial(nombreComercial) {
        this.NombreComercial = nombreComercial;
     }
  
     getTipoRestaurante() {
        return this.TipoRestaurante;
     }
  
    setTipoRestaurante(tipoRestaurante) {
        this.TipoRestaurante = tipoRestaurante;
     }
  
    getCiudadU() {
        return this.CiudadU;
     }
  
    setCiudadU(ciudadU) {
        this.CiudadU = ciudadU;
     }
  
    getHoraC() {
        return this.HoraC;
     }
  
    setHoraC(horaC) {
        this.HoraC = horaC;
     }
  
    getHoraA() {
        return this.HoraA;
     }
  
     setHoraA(horaA) {
        this.HoraA = horaA;
     }
  
}