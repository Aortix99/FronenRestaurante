var menuL=new locatormenu();

async function save(){
    let id=document.getElementById('id').value;
    let tipoDeMenu=document.getElementById('tipoDeMenu').value;
    let idRestaurante=document.getElementById('idRestaurante').value;
    let nombreM=document.getElementById('nombreM').value;
    let precio=document.getElementById('precio').value;

    
    let p = new menu(id,tipoDeMenu,idRestaurante,nombreM,precio);
    console.log(p);
    let result=await menuL.save(p);
  
    }


async function selectAll(){
    let result = await menuL.selectAll();
    let data = result.data

    console.log(data);
    tabla(data);

}
function limpiar(){
    document.getElementById('id').value="";
    document.getElementById('tipoDeMenu').value="";
    document.getElementById('idRestaurante').value="";
    document.getElementById('nombreM').value="";
    document.getElementById('precio').value="";

}
function updatedata(id,tipoDeMenu,idRestaurante,nombreM, precio) {
    document.getElementById('id').value=id;
    document.getElementById('tipoDeMenu').value=tipoDeMenu;
    document.getElementById('idRestaurante').value=idRestaurante;
    document.getElementById('nombreM').value=nombreM;
    document.getElementById('precio').value=precio;

}


function tabla(lisDatos){
    let body= document.getElementById("listaBody");
    body.innerHTML=null;
    let size=lisDatos.length;
    for(let i=0; i<size;i++){
        let tr=document.createElement('tr');
        let tdid=document.createElement('td');
        let tdtipoDeMenu=document.createElement('td');
        let tdidRestaurante=document.createElement('td');
        let tdnombreM=document.createElement('td');
        let tdprecio=document.createElement('td');

        tdid.innerText=lisDatos[i].id;
        tdtipoDeMenu.innerText=lisDatos[i].tipoDeMenu;
        tdidRestaurante.innerText=lisDatos[i].idRestaurante;
        tdnombreM.innerText=lisDatos[i].nombreM;
        tdprecio.innerText=lisDatos[i].precio;


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
      aedit.setAttribute("href","javascript:updatedata('"+lisDatos[i].id+"','"+lisDatos[i].tipoDeMenu+"','"+lisDatos[i].idRestaurante+"', '"+lisDatos[i].nombreM+"','"+lisDatos[i].precio+"')");
      let imgEdit = document.createElement('img');
      imgEdit.setAttribute("src","/ventas/img/update.png");
      imgEdit.setAttribute("width","24px");
      imgEdit.setAttribute("height","24px");
      aedit.appendChild(imgEdit);


       tdborrar.appendChild(aborrar);
       tdeditar.appendChild(aedit)
        tr.appendChild(tdid);
        tr.appendChild(tdtipoDeMenu);
        tr.appendChild(tdidRestaurante);
        tr.appendChild(tdnombreM);
        tr.appendChild(tdprecio);
        tr.appendChild(tdborrar);
        tr.appendChild(tdeditar);
        body.appendChild(tr);
    }
    
}