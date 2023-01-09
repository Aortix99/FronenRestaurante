var restauranteL= new locatorRestaurantes();

async function save(){
let id=document.getElementById('id').value;
let razonSocial=document.getElementById('razonSocial').value;
let nombreComercial=document.getElementById('nombreComercial').value;
let tipoRestaurante=document.getElementById('tipoRestaurante').value;
let ciudadU=document.getElementById('ciudadU').value;
let horaC=document.getElementById('horaC').value;
let horaA=document.getElementById('horaA').value;

let p = new restaurante(id,razonSocial, nombreComercial, tipoRestaurante, ciudadU, horaA, horaC);
console.log(p);
let result=await restauranteL.save(p);
selectAll();
limpiar();
}

async function selectAll(){
    let result = await restauranteL.selectAll();
    let data = result.data
    console.log(data);
    tabla(data);
    limpiar();
}
async function deleter(){
    console.log("entre al metodo");
    let id=document.getElementById('id').value;
    console.log("nada"+id);
   let result=await restauranteL.deleter(id);
   selectAll();
}
function limpiar(){
    document.getElementById('id').value="";
    document.getElementById('razonSocial').value="";
    document.getElementById('nombreComercial').value="";
    document.getElementById('tipoRestaurante').value="";
    document.getElementById('ciudadU').value="";
    document.getElementById('horaC').value="";
    document.getElementById('horaA').value="";
}
function updatedata( id,razonSocial, nombreComercial, tipoRestaurante, ciudadU, horaA, horaC) {
    document.getElementById('id').value=id;
    document.getElementById('razonSocial').value=razonSocial;
    document.getElementById('nombreComercial').value=nombreComercial;
    document.getElementById('tipoRestaurante').value=tipoRestaurante;
    document.getElementById('ciudadU').value=ciudadU;
    document.getElementById('horaA').value=horaA;
    document.getElementById('horaC').value=horaC;
}

function tabla(lisDatos){
    let body= document.getElementById("listaBody");
    body.innerHTML=null;
    let size=lisDatos.length;
    for(let i=0; i<size;i++){
        let tr=document.createElement('tr');
        let tdid=document.createElement('td');
        let tdrazonSocial=document.createElement('td');
        let tdnombreComercial=document.createElement('td');
        let tdtipoRestaurante=document.createElement('td');
        let tdciudadU=document.createElement('td');
        let tdhoraA=document.createElement('td');
        let tdhoraC=document.createElement('td');

        tdid.innerText=lisDatos[i].id;
        tdrazonSocial.innerText=lisDatos[i].razonSocial;
        tdnombreComercial.innerText=lisDatos[i].nombreComercial;
        tdtipoRestaurante.innerText=lisDatos[i].tipoRestaurante;

        if(lisDatos[i].tipoRestaurante==1){
            tdtipoRestaurante.innerText="Vegano"
        }else{if(lisDatos[i].tipoRestaurante==2){
            tdtipoRestaurante.innerText="Vegetariano"
        }else{
            if(lisDatos[i].tipoRestaurante==3){
                tdtipoRestaurante.innerText="Carnes Rojas"
            }else{
                if(lisDatos[i].tipoRestaurante==4){
                    tdtipoRestaurante.innerText="Aves"
                }
            }
        }
            
        }
        tdciudadU.innerText=lisDatos[i].ciudadU;
        tdhoraA.innerText=lisDatos[i].horaA;
        tdhoraC.innerText=lisDatos[i].horaC;

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
    aedit.setAttribute("href","javascript:updatedata('"+lisDatos[i].id+"','"+lisDatos[i].razonSocial+"','"+lisDatos[i].nombreComercial+"', '"+lisDatos[i].tipoRestaurante+"','"+lisDatos[i].ciudadU+"','"+lisDatos[i].horaA+"','"+lisDatos[i].horaC+"')");
    let imgEdit = document.createElement('img');
    imgEdit.setAttribute("src","/ventas/img/update.png");
    imgEdit.setAttribute("width","24px");
    imgEdit.setAttribute("height","24px");
    aedit.appendChild(imgEdit);

        
        tdborrar.appendChild(aborrar);
        tdeditar.appendChild(aedit)
        tr.appendChild(tdid);
        tr.appendChild(tdrazonSocial);
        tr.appendChild(tdnombreComercial);
        tr.appendChild(tdtipoRestaurante);
        tr.appendChild(tdciudadU);
        tr.appendChild(tdhoraA);
        tr.appendChild(tdhoraC);
        tr.appendChild(tdborrar);
        tr.appendChild(tdeditar)
        body.appendChild(tr);
    }
    
}
