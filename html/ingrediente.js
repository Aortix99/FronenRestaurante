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
 


        tr.appendChild(tdid);
        tr.appendChild(tdid_menu);
        tr.appendChild(tdnombre);
        tr.appendChild(tdcalorias);
        body.appendChild(tr);
    }
    
}