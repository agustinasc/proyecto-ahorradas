//********* DECLARACION DE VARIABLES - DOM *********/

const addOperation = document.getElementById("add-operation");
const balanceSection = document.getElementById('balance-section');
const newOperationSection = document.getElementById('new-operation-section');
const balanceButton = document.getElementById('balance-button');
const addOperationBtn = document.getElementById('add-operation-btn');
const cancelOperationBtn = document.getElementById('cancel-operation-btn');
const inputDescription = document.getElementById('input-description');
const inputAmount = document.getElementById('input-amount');
const inputResult = document.getElementById('input-result');
const inputCategories = document.getElementById('input-categories');
const inputDate = document.getElementById('input-date');

const operationTable = document.getElementById('operation-table');
const includesOperation = document.getElementById('includes-operation');
const noIncludesOperation = document.getElementById('no-includes-operation');

const navBarBurguer = document.getElementById('navbar-burger');
const navbarBasicExample = document.getElementById('navbarBasicExample')
//const navBarMenu = document.getElementById('navbar-menu');



//********* EVENTS *********/

addOperation.addEventListener('click', ()=>{
    
    balanceSection.style.display = 'none';
    newOperationSection.style.display = 'block'
})

balanceButton.addEventListener('click', ()=>{
    balanceSection.style.display = 'block';
    newOperationSection.style.display = 'none'
})

cancelOperationBtn.addEventListener('click', ()=>{
    balanceSection.style.display = 'block';
    newOperationSection.style.display = 'none'
})

let days = new Date().getDate();
let months = new Date().getMonth() + 1;
let years = new Date().getFullYear();

inputDate.value = `${years}-${months < 10 ? '0' + months: months}-${days < 10 ? '0' + days: days }`;


let operation = [];

//********* FUNCION PARA AGREGAR OPERACIONES A LA TABLA DE OPERACIONES *********/


const showOperationTable = (operation) =>{
    operationTable.innerHTML = '';
    for (let i = 0; i < operation.length; i++) {
        const box = 
        `<article class="columns has-text-centered is-mobile">
            <div class="column is-3-desktop is-family-monospace is-3-mobile">${operation[i].descripcion}</div>
            <div class="column is-2-desktop is-family-monospace tag is-primary is-light is-medium is-3-mobile">${operation[i].categoria}</div>
            <div class="column is-3 is-family-monospace is-hidden-mobile">${operation[i].fecha}</div>
            <div class="column is-2-desktop is-family-monospace is-3-mobile">$${operation[i].monto}</div>
            <div class="column is-2-desktop is-family-monospace is-3-mobile">${operation[i].tipo}</div>
        </article>`;
        operationTable.insertAdjacentHTML('beforeend', box);
        //console.log(operation[i].descripcion);
        //console.log(caja);   
    }

    //******** FUNCION PARA APARECER Y DESAPARECER IMAGEN CUANDO EXISTEN OPERACIONES ********/

    const hiddenPicture = (operation) =>{
        if(operation.length >= 1){
            includesOperation.style.display = 'block';
            noIncludesOperation.style.display = 'none';
        }else if (operation.length === 0){
            includesOperation.style.display = 'none';
            noIncludesOperation.style.display = 'block'
        }
    }
    hiddenPicture(operation)
    // console.log(operation.length);
}


/*******  BOTON DE AGREGAR NUEVA OPERACION DEL FORM  *******/

addOperationBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    // localStorage.setItem('operation', JSON.stringify(operation));
    // operation = JSON.parse(localStorage.getItem('operation'));
    balanceSection.style.display = 'block';
    newOperationSection.style.display = 'none';
    //console.log(inputDescription.value)
    const newOperation = {
        descripcion: inputDescription.value, 
        monto: inputAmount.value, 
        tipo: inputResult.value, 
        categoria: inputCategories.value,
        fecha: inputDate.value 
    }
    //console.log(newOperation);
    operation.push(newOperation);
    localStorage.setItem('operation', JSON.stringify(operation));
    operation = JSON.parse(localStorage.getItem('operation'));
    showOperationTable(operation)
})

JSON.parse(localStorage.getItem('operation')) == null ? showOperationTable(operation) : showOperationTable(JSON.parse(localStorage.getItem('operation')))



//****** PARA BLANQUEAR EL FORM ******/ => NO FUNCIONA TODAVIA!!!!!!

// const blankForm = (blank) =>{
//     newOperation = {
//         descripcion: inputDescription.value, 
//         monto: inputAmount.value, 
//         tipo: inputResult.value, 
//         categoria: inputCategories.value,
//         fecha: inputDate.value 
//     }
// }

//****** MENU HAMBURGUESA *******//

const showBurguer = () =>{
    if (navBarBurguer.classList.contains('is-active')) {
        navBarBurguer.classList.remove('is-active')
        navbarBasicExample.classList.remove('is-active')
    } else {
        navBarBurguer.classList.add('is-active')
        navbarBasicExample.classList.add('is-active')
    }
}
navBarBurguer.addEventListener('click', showBurguer) 
//=> {
    //navbarBasicExample.style.display = 'block';
    //navBarBurguer.classList.toggle('is-active');
    // if(navBarBurguer.contains('is-active')){
    //     navbarBasicExample.classList.remove('is-active')
    // }
    //console.log(e.target)
//})

