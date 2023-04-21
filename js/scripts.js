//function create

function create() {
    let dataFromserver = getInfoserver();
    let data = dataFromserver.name;
    let datastatus = dataFromserver.boolean;
    let nombreProduct = prompt("digite un nombre de producto ");
    let descriptionProduct = prompt("digite una descripcion al producto ");
    let buyPrice = prompt("precio de venda ");
    let cantProduct = prompt("cantidad de producto ");
    if (datastatus == true) {
        data.push(
            {
                producto: nombreProduct,
                description: descriptionProduct,
                price: buyPrice,
                cant: cantProduct
            }
        );
        data = JSON.stringify(data);
        window.localStorage.setItem("inventario", data);
        return true
    } else {
        let data = [];
        data.push(
            {
                producto: nombreProduct,
                description: descriptionProduct,
                price: buyPrice,
                cant: cantProduct
        });
    }
}


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

//function read

function readArray() {
    let dataFromserver = getInfoserver();
    let data = dataFromserver.name;
    let datastatus = dataFromserver.boolean;
    if (datastatus == true) {
        data.forEach(element => {
            console.log(element);
        });
    }

}


//function update
function updateArray() {
    let dataFromserver = getInfoserver();
    let data = dataFromserver.name;
    let datastatus = dataFromserver.boolean;
    let idnumber = prompt("cual es el id del objeto que desea actualizar ");
    if (datastatus == true) {
        let iddata = data.findIndex(data => data === idnumber);
        console.log(`${iddata}`);
        return iddata.idnumber;
    };
}


//function delete