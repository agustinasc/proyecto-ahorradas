/* *******DOM********* */


//Filtros-Tipo
const hidingFilters = document.getElementById ("hiding-filters");//Ocultar filtros
const filtersBox = document.getElementById ("filters-box");//caja de formulario-select
const showFilters = document.getElementById ("show-filters");//Mostrar filtros


//Select de Filtros
const filterType = document.getElementById("filter-type");
const filterCategory = document.getElementById("filter-category");
const filterFrom = document.getElementById("filter-from");
const filterOrder = document.getElementById("filter-order");
const typeBalance = document.getElementById("type-balance");
const categoryBalance = document.getElementById("category-balance");
const orderBalance = document.getElementById("order-balance");


//Reportes
const reportSection = document.getElementById("report-section");
const reportButton = document.getElementById("report-button");

//Categorías
const categories = document.getElementById("categories");
const newCategory = document.getElementById("new-category");
const allCategories = document.getElementById("all-categories");
const categoryButton = document.getElementById("category-button");




/* ******EVENTS****** */


//Ocultar y Mostrar Filtros

hidingFilters.addEventListener ("click", () => {
    filtersBox.style.visibility = "hidden";
    showFilters.style.visibility = "visible"; 
    hidingFilters.style.visibility = "hidden";
});

showFilters.addEventListener ("click", () => {
    filtersBox.style.visibility = "visible";
    showFilters.style.visibility = "hidden";
    hidingFilters.style.visibility = "visible";
})


//Filtrar Operaciones


 
//Filtros Tipo y Categoría

let newData = [...operation]

const filtersBalance = (e) =>{
    let atribute = ""
    if (e.target.id == "type-balance") {
        newData = [...operation]
        categoryBalance.value = "Todas"
      atribute = "tipo"  
    }else{
       typeBalance.value = "Todas"
       atribute = "categoria" 
    }
    newData = newData.filter(operations => operations[atribute] === e.target.value)
    e.target.value === "Todas" ? showOperationTable(operation) : showOperationTable(newData)
}


typeBalance.addEventListener("change", (e) =>{filtersBalance(e)})
categoryBalance.addEventListener("change", (e) =>{filtersBalance(e)}) 



//Filtros Desde


//Para que muestre la fecha de hoy al iniciar
const day = new Date().getDate();
let month = new Date().getMonth() + 1;
const year = new Date().getFullYear();


filterFrom.value = `${year}-${month < 10 ? "0" + month: month}-${day < 10 ? "0" + day: day}`;




//Filtra la categoría por fecha

filterFrom.addEventListener("change", (e)=>{
    const result = operation.filter(operations => operations.fecha === e.target.value )
    showOperationTable(result)
})



//Filtra la categoría por orden a seleccionar

orderBalance.addEventListener("change", ()=>{
    //console.log(orderBalance.value)
    let newOrder = [...operation]
    if (orderBalance.value === "a-z") {
        newOrder.sort((a,b)=> a.descripcion > b.descripcion ? 1 : -1)
    }
    if (orderBalance.value === "z-a") {
        newOrder.sort((a,b)=> a.descripcion < b.descripcion ? 1 : -1)
    }
    if (orderBalance.value === "more-recent") {
        newOrder.sort((a,b)=> a.fecha < b.fecha ? 1 : -1)
    }
    if (orderBalance.value === "less-recent") {
        newOrder.sort((a,b)=> a.fecha > b.fecha ? 1 : -1)
    }
    if (orderBalance.value === "big-amount") {
        newOrder.sort((a,b)=> a.monto < b.monto ? 1 : -1)
    }
    if (orderBalance.value === "less-amount") {
        newOrder.sort((a,b)=> a.monto > b.monto ? 1 : -1)
    }
    showOperationTable(newOrder)
})



//Reportes

reportButton.addEventListener("click", ()=>{
  reportSection.style.display = "block"
  balanceSection.style.display = "none" 
})

const categoryArr = ["Comida", "Servicios", "Salidas", "Educación", "Transporte", "Trabajo", "Deporte"]

//const categoryRute = categoryArr.forEach(element => console.log(element));
/* const categoryRute = categoryArr.forEach(element =>{
    operation.filter(operations => operations === console.log(operations));
}) */

const array = [];
//console.log(operation)
operation = JSON.parse(localStorage.getItem('operation'))?? []

for (let i = 0; i < categoryArr.length; i++){
    const arrSpending = operation.filter(element => element.categoria === categoryArr[i] && element.tipo === "Gasto").reduce((inicial, current) => Number(inicial) + Number(current.monto) ,0)
    const arrGain = operation.filter(element => element.categoria === categoryArr[i] && element.tipo === "Ganancia").reduce((inicial, current) => Number(inicial) + Number(current.monto) ,0)
    array.push({nombre: categoryArr[i], ganancia: arrGain, gasto: arrSpending})
     localStorage.setItem("array", JSON.stringify(array));
    array1 = JSON.parse(localStorage.getItem("array")) ?? []; 
}


const result = Math.max(...array.map(valor => valor.ganancia))
//console.log(array);


//Categorías

categoryButton.addEventListener("click", ()=>{
    categories.style.display = "block"
    balanceSection.style.display = "none" 
    reportSection.style.display = "none"
  })


  