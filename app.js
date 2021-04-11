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

const operationTable = document.getElementById('operation-table') 


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

/* BOTON DE AGREGAR NUEVA OPERACION DEL FORM  */

addOperationBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    balanceSection.style.display = 'block';
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
    const operationLocalStorage = JSON.parse(localStorage.getItem('operation'));
    showOperationTable(operationLocalStorage)
})

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

const operation = [];

//********* FUNCION PARA AGREGAR OPERACIONES A LA TABLA DE OPERACIONES *********/
const showOperationTable = (operation) =>{
    operationTable.innerHTML = '';
    for (let i = 0; i < operation.length; i++) {
        const box = 
        //  //=> FALTA LA TABLA PARA PINTARLO, EN LOS SPANS!!!!!!!
        `<article>
        <span>${operation[i].descripcion}</span>
        <span>${operation[i].monto}</span>
        <span>${operation[i].tipo}</span>
        <span>${operation[i].categoria}</span>
        <span>${operation[i].fecha}</span>
        </article>`;
        operationTable.insertAdjacentHTML('beforeend', box);
        //console.log(operation[i].descripcion);
        //console.log(caja);   
    }
}
