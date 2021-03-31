//********* DOM *********/

const addOperation = document.getElementById("add-operation");
const balanceSection = document.getElementById('balance-section');
const newOperationSection = document.getElementById('new-operation-section')
const balanceButton = document.getElementById('balance-button')

//********* EVENTS *********/

addOperation.addEventListener('click', ()=>{
    balanceSection.style.display = 'none';
    newOperationSection.style.display = 'block'
})

balanceButton.addEventListener('click', ()=>{
    balanceSection.style.display = 'block';
    newOperationSection.style.display = 'none'
})

