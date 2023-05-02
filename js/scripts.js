//const divcolumn = document.getElementById("divcolumn");
const data_id_for = document.getElementById("data_id_for");

const dataTableFor = document.getElementById("dataTableFor");
//
const dataFormProduct = document.getElementById("productForm");
const dataFormDescription = document.getElementById("descriptionForm");
const dataFormPrice = document.getElementById("priceForm");
const dataFormCant = document.getElementById("cantForm");
const dataForm = document.getElementById("formInvent");

console.log(dataForm);
console.log(dataForm.producForm)
console.log(dataForm.producForm)
console.log(dataForm.producForm)


//function get Info SErver

function getInfoserver() {
    let localStorageVar = window.localStorage.getItem("inventario");
    if (localStorageVar != null && localStorageVar != '') {
        let data = JSON.parse(localStorageVar);
        console.log(`la variable ${data} esta definida en el localstorage`);
        return { name: data, boolean: true };
    } else {
        console.log(`la variable data no esta definida en el localstorage`);
        return { name: '', boolean: false };
    }
}

// update info from server 

function updateInfoserver(data) {
    //let dataFromserver = getInfoserver();
    //let data = dataFromserver.name;
    //let datastatus = dataFromserver.boolean;
    //if (datastatus == true) {
        data = JSON.stringify(data);
        window.localStorage.setItem("inventario", data);
    //}
}




//function create

function create() {
    let dataFromserver = getInfoserver();
    let data = dataFromserver.name;
    let datastatus = dataFromserver.boolean;

    let nombreProduct = dataFormProduct.value;
    let descriptionProduct = dataFormDescription.value;
    let buyPrice = dataFormPrice.value;
    let cantProduct = dataFormCant.value;
    /*let nombreProduct = prompt("digite un nombre de producto ");
    let descriptionProduct = prompt("digite una descripcion al producto ");
    let buyPrice = prompt("precio de venda ");
    let cantProduct = prompt("cantidad de producto ");*/
    console.log(dataFormProduct.value, dataFormDescription.value, dataFormCant.value, dataFormPrice.value);
    if (datastatus == true) {
        data.push(
            {
                producto: nombreProduct,
                description: descriptionProduct,
                price: buyPrice,
                cant: cantProduct
            }
        );
        updateInfoserver(data);
        //data = JSON.stringify(data);
        //window.localStorage.setItem("inventario", data);
        //console.log(data);
    } else if (datastatus == false) {
        let data = [];
        data.push(
            {
                producto: nombreProduct,
                description: descriptionProduct,
                price: buyPrice,
                cant: cantProduct
            });
            updateInfoserver(data);
        //console.log(data);
        //data = JSON.stringify(data);
        //window.localStorage.setItem("inventario", data);
    } else {
        console.log("error al leer los datos");
    }
}




//function read
function readArray() {
    let dataFromserver = getInfoserver();
    let data = dataFromserver.name;
    let datastatus = dataFromserver.boolean;
    if (datastatus == true) {
        //data.forEach(listaproductos => {
        let contenidoProducto = '';
        for (let index = 0; index < data.length; index++) {
            const listaproductos = data[index];
            //console.log(`la longitud del objeto es ${listaproductos.length}`);
            console.log(Object.keys(listaproductos).length);
            datalength = (Object.keys(listaproductos).length);
            console.log(datalength);
            for (const key of Object.keys(listaproductos)) {
                //for (const key of listaproductos){
                const part = listaproductos[key];
                //console.log(`esta es una parte ${part}`);
                //console.log(`esta listaproductos.${key} ${listaproductos[key]}`);
                //console.log(` mirar que dice este dato ${listaproductos[4]} `);
                //console.log(key);
                //console.log(`data length ${data.length}, y el index es ${index}`);
                //console.log(`variable lista productos data length  ${listaproductos[datalength]}`);
                if (key == "producto") {
                    contenidoProducto += `<div class="col-12 me-1 ms-1 g-4 py-5 row-cols-1 row-cols-lg-3-->">
                    <div class="border me-1 ms-1"><h1><span>${listaproductos[key]}</span></h1>`;
                } else if (key == "cant") {
                    console.log("---------------------------------");
                    contenidoProducto += `<span>${listaproductos[key]}</span><br>
                    <button class="btn btn-lg btn-primary">Edit</button>
                    <button class="btn btn-lg btn-primary">Deleted</button></div>
                    </div>`;
                } else {
                    contenidoProducto += `<span>${listaproductos[key]}</span><br>`;
                }
                //console.log("pruebaaa",data_id_for.innerHTML);
                //console.log(listaproductos);
                //console.log("final");
                data_id_for.innerHTML = contenidoProducto;
            }
            ;
        }
        //)
    } else {
        data_id_for.innerHTML = `<div><h1>no hay datos</h1></div>`;
        console.log("no se tienen datos ");
    }
}


//function update
function updateArray(id, key, valor) {
    let dataFromserver = getInfoserver();
    let data = dataFromserver.name;
    let datastatus = dataFromserver.boolean;
    //let idnumber = prompt("cual es el id del objeto que desea actualizar ");
    if (datastatus == true) {
        const findData = data.findIndex(function (data) {
            return true;

        });
        console.log(`${findData}`);
    };
}


//function deletei

function deleteItemArray(idValueDeleted) {
    let dataFromserver = getInfoserver();
    let data = dataFromserver.name;
    let datastatus = dataFromserver.boolean;
    //let idValueDeleted = prompt("digite el id del item a borrar");
    dataDeletedArray = data.filter(function (item) {
        return item.id !== idValueDeleted;
    })
    console.log(dataDeletedArray);
}



// eventos 

//btoReadArray.addEventListener( onclick,readArray());

function readArrayTable() {
    let dataFromserver = getInfoserver();
    let data = dataFromserver.name;
    let datastatus = dataFromserver.boolean;
    if (datastatus == true) {
        //data.forEach(listaproductos => {
        let contenidoProducto = '';
        for (let index = 0; index < data.length; index++) {
            const listaproductos = data[index];
            //console.log(`la longitud del objeto es ${listaproductos.length}`);
            console.log(Object.keys(listaproductos).length);
            datalength = (Object.keys(listaproductos).length);
            console.log(datalength);
            for (const key of Object.keys(listaproductos)) {
                //for (const key of listaproductos){
                const part = listaproductos[key];
                //console.log(`esta es una parte ${part}`);
                //console.log(`esta listaproductos.${key} ${listaproductos[key]}`);
                //console.log(` mirar que dice este dato ${listaproductos[4]} `);
                //console.log(key);
                //console.log(`data length ${data.length}, y el index es ${index}`);
                //console.log(`variable lista productos data length  ${listaproductos[datalength]}`);
                if (key == "producto") {
                    contenidoProducto += `<tr><td>${index}</td>`;
                    console.log(index);
                    contenidoProducto += `<td>${listaproductos[key]}</td>`;
                } else if (key == "cant") {
                    contenidoProducto += `<td>${listaproductos[key]}</td>`;
                    contenidoProducto += `<td><button class="btn btn-lg btn-primary" onclick="updateArray()">Edit</button>
                    <button class="btn btn-lg btn-primary" onclick="deleteItemArray()">Deleted</button></td></tr>`;
                    console.log("---------------------------------");
                } else {
                    contenidoProducto += `<td>${listaproductos[key]}</td>`;
                }
                //console.log("pruebaaa",dataTableFor.innerHTML);
                //console.log(listaproductos);
                //console.log("final");
                dataTableFor.innerHTML = contenidoProducto;
            }
            ;
        }
        //)
    } else {
        dataTableFor.innerHTML = `<div><h1>no hay datos</h1></div>`;
        console.log("no se tienen datos");
    }
}

