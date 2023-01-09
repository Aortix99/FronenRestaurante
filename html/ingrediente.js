var ingredienteL = new locatorIngredientes();

async function save(){
    let id=document.getElementById('id').value;
    let id_menu=document.getElementById('id_menu').value;
    let nombre=document.getElementById('nombre').value;
    let calorias=document.getElementById('calorias').value;
    
    let p = new ingrediente(id,id_menu,nombre,calorias);
    console.log(p);
    let result=await ingredienteL.save(p);
    selectAll();
    limpiar();
}
function limpiar(){
    document.getElementById('id').value="";
    document.getElementById('id_menu').value="";
    document.getElementById('nombre').value="";
    document.getElementById('calorias').value="";
    
}
async function selectAll(){
    let result = await ingredienteL.selectAll();
    let data = result.data
    console.log(data);
    tabla(data);

}
async function deleter(){
    console.log("entre al metodo");
    let id=document.getElementById('id').value;
    console.log("nada"+id);
   let result=await ingredienteL.deleter(id);
   selectAll();
   limpiar();
}
function dele(id){
    document.getElementById('id').value=id;
}

function updatedata(id,id_menu,nombre,calorias) {
    document.getElementById('id').value=id;
    document.getElementById('id_menu').value=id_menu;
    document.getElementById('nombre').value=nombre;
    document.getElementById('calorias').value=calorias;


}

function tabla(lisDatos){
    let body= document.getElementById("listaBody");
    body.innerHTML=null;
    let size=lisDatos.length;
    for(let i=0; i<size;i++){
        let tr=document.createElement('tr');
        let tdid=document.createElement('td');
        let tdid_menu=document.createElement('td');
        let tdnombre=document.createElement('td');
        let tdcalorias=document.createElement('td');

        tdid.innerText=lisDatos[i].id;
        tdid_menu.innerText=lisDatos[i].id_menu;
        tdnombre.innerText=lisDatos[i].nombre;
        tdcalorias.innerText=lisDatos[i].calorias;

              //Crear Icono de Borrado
      let tdborrar = document.createElement('td');
      let aborrar = document.createElement('a');
      aborrar.setAttribute("href","javascript:deleter('"+lisDatos[i].id+"')");
      let imgBorrar = document.createElement('img');
      imgBorrar.setAttribute("src","/ventas/img/delete.png");
      imgBorrar.setAttribute("width","24px");
      imgBorrar.setAttribute("height","24px");
      aborrar.appendChild(imgBorrar);
  
      let tdeditar = document.createElement('td');
      let aedit = document.createElement('a');
      aedit.setAttribute("href","javascript:updatedata('"+lisDatos[i].id+"','"+lisDatos[i].id_menu+"','"+lisDatos[i].nombre+"', '"+lisDatos[i].calorias+"')");
      let imgEdit = document.createElement('img');
      imgEdit.setAttribute("src","/ventas/img/update.png");
      imgEdit.setAttribute("width","24px");
      imgEdit.setAttribute("height","24px");
      aedit.appendChild(imgEdit);


       tdborrar.appendChild(aborrar);
       tdeditar.appendChild(aedit)
        tr.appendChild(tdid);
        tr.appendChild(tdid_menu);
        tr.appendChild(tdnombre);
        tr.appendChild(tdcalorias);
        tr.appendChild(tdborrar);
        tr.appendChild(tdeditar);
        body.appendChild(tr);
    }
    
}