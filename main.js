//Ocultar y Mostrar Filtros

const hidingFilters = document.getElementById ("hiding-filters");//Ocultar filtros
const filtersBox = document.getElementById ("filters-box");//caja de formulario-select
const showFilters = document.getElementById ("show-filters");//Mostrar filtros

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




