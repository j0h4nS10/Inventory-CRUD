// get html in js

const dataTableFor = document.getElementById("dataTableFor");

// get form in js
const inputProduct = document.getElementById("productForm");
const inputDescription = document.getElementById("descriptionForm");
const inputPrice = document.getElementById("priceForm");
const inputCant = document.getElementById("cantForm");
//const dataForm = document.getElementById("formInvent");


// get buttons in js
const btnAddInventary = document.getElementById("btnAddInventary");
const btnReadArray = document.getElementById("btnReadArray");

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

// get inputs from user

function inputDataForm() {
    //console.log(dataForm);
    if (!inputProduct.value && !inputDescription.value && !inputPrice.value && !inputCant.value) {
        alert("all field must not be empty");
    } else {
        let nombreProduct = inputProduct.value;
        let descriptionProduct = inputDescription.value;
        let buyPrice = inputPrice.value;
        let cantProduct = inputCant.value;
        //console.log(nombreProduct,descriptionProduct,buyPrice,cantProduct);
        return {
            product: nombreProduct,
            description: descriptionProduct,
            price: buyPrice,
            cant: cantProduct
        }
    }
}


//function create

function create() {
    let dataFromserver = getInfoserver();
    let data = dataFromserver.name;
    let datastatus = dataFromserver.boolean;
    let inputData = inputDataForm();
    let nombreProduct = inputData.product;
    let descriptionProduct = inputData.description;
    let buyPrice = inputData.price;
    let cantProduct = inputData.cant;
    if (datastatus == true && inputData != null) {
        //console.log(data.length);
        data.push(
            {
                id: 'id' + (new Date()).getTime(),
                product: nombreProduct,
                description: descriptionProduct,
                price: buyPrice,
                cant: cantProduct
            }
        );
        updateInfoserver(data);
        readArrayTable();
        //data = JSON.stringify(data);
        //window.localStorage.setItem("inventario", data);
        //console.log(data);
    } else if (datastatus == false) {
        let data = [];
        data.push(
            {
                id: 'id' + (new Date()).getTime(),
                product: nombreProduct,
                description: descriptionProduct,
                price: buyPrice,
                cant: cantProduct
            });
        updateInfoserver(data);
        readArrayTable();
        //console.log(data);
        //data = JSON.stringify(data);
        //window.localStorage.setItem("inventario", data);
    } else {
        console.log("error al leer los datos");
    }
    //borrar
}


//function update
function updateArray(id) {
    let dataFromserver = getInfoserver();
    let data = dataFromserver.name;
    let datastatus = dataFromserver.boolean;
    //let idnumber = prompt("cual es el id del objeto que desea actualizar ");
    if (datastatus == true) {
        const findDataIndex = data.findIndex(function (item) {
            return item.id === id;
        });
        if (findDataIndex !== -1) {
            console.log(findDataIndex);
            console.log(data[findDataIndex]);
            console.log(data[findDataIndex].product);

            dataTableFor.innerHTML = `<td>${findDataIndex}</td>
            <td><input id="updateProduct" value="${data[findDataIndex].product}"></td>
            <td><input id="updateDescription" value="${data[findDataIndex].description}"></td>
            <td><input id="updatePrice" value="${data[findDataIndex].price}"></td>
            <td><input id="updateAmount" value="${data[findDataIndex].cant}"></td>
            <td><button class="btn btn-lg btn-primary" onclick="updateObject(${findDataIndex})">Update</button></td>`;
            console.log(updateProduct);
            //updateObject();
            //data[findDataIndex][key] = valor;
            //console.log(`Updated element at index ${findDataIndex} with key ${key} and value ${valor}`);
        } else {
            //console.log(`Element with id ${id} not found`);
        }
        console.log(`${findDataIndex}`);
    };
}

//function updateobject

function updateObject(findDataIndex) {
    let updateProduct = document.getElementById("updateProduct");
    let updateDescription = document.getElementById("updateDescription");
    let updatePrice = document.getElementById("updatePrice");
    let updateAmount = document.getElementById("updateAmount");
    let Product = updateProduct.value;
    let Description = updateDescription.value;
    let Price = updatePrice.value;
    let Cant = updateAmount.value;
    let dataFromserver = getInfoserver();
    let data = dataFromserver.name;
    //console.log(`la variable data es ${data}`);
    console.log(Product, Description, Price, Cant);
    //console.log(data[findDataIndex].product); 
    data[findDataIndex].product = Product;
    data[findDataIndex].description = Description;
    data[findDataIndex].price = Price;
    data[findDataIndex].cant = Cant;
    updateInfoserver(data);
    readArrayTable();
}


//function deleted

function deleteItemArray(id) {
    let dataFromserver = getInfoserver();
    let data = dataFromserver.name;
    let datastatus = dataFromserver.boolean;
    console.log(data);
    //let idValueDeleted = prompt("digite el id del item a borrar");
    data = data.filter(function (item) {
        return item.id !== id;
    })
    console.log(data);
    updateInfoserver(data);
    readArrayTable();
}


// function read table
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
            //console.log(Object.keys(listaproductos).length);
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
                if (key == "product") {
                    //contenidoProducto += `<tr><td>${listaproductos[id]}</td>`;
                    console.log(index);
                    contenidoProducto += `<td>${listaproductos[key]}</td>`;
                } else if (key == "cant") {
                    contenidoProducto += `<td>${listaproductos[key]}</td>`;
                    contenidoProducto += `<td><button class="btn btn-lg btn-primary" onclick="updateArray(${index})">Edit</button>
                    <button class="btn btn-lg btn-primary" onclick="deleteItemArray(${index})">Deleted</button></td></tr>`;
                    console.log("---------------------------------");
                } else {
                    contenidoProducto += `<td>${listaproductos[key]}</td>`;
                }
                //console.log("pruebaaa",dataTableFor.innerHTML);
                //console.log(listaproductos);
                //console.log("final");
                dataTableFor.innerHTML = contenidoProducto;
            };
        }
        //)
    } else {
        dataTableFor.innerHTML = `<div><h1>no hay datos</h1></div>`;
        console.log("no se tienen datos");
    }
}



// events

// event main form

btnAddInventary.addEventListener("click", function (event) {
    event.preventDefault();
    create();
});


btnReadArray.addEventListener("click", function (event) {
    event.preventDefault();
    readArrayTable();
});


//btnUpdate.addEventListener("click", function (event){

//});