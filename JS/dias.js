let nombreMeses = ["Enero","Febrero", "Marzo", "Abril", "Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

let hoy = new Date();
let diaActual = hoy.getDate();
let mesActual = hoy.getMonth();
let yearActual = hoy.getFullYear();

let dates = document.getElementById("dias");
let month = document.getElementById("mes");
let year = document.getElementById("year");

let mesAnterior = document.getElementById("mes_anterior");
let mesSiguiente = document.getElementById("mes_siguiente");

mesAnterior.addEventListener('click', ()=>monthBefore());
mesSiguiente.addEventListener('click', ()=>nextMonth());

month.textContent = nombreMeses[mesActual];
year.textContent = yearActual.toString();

escribirMes(mesActual);

function escribirMes(month){
    for(let i = diaUno(); i > 0; i--){
        dates.innerHTML += `<div class="dia_item ultimos_dias">
        ${diasTotales(mesActual-1)-(i-1)}
        </div>`;
    }

    for (let i = 1; i <= diasTotales(month); i++) {
        if (i === diaActual && mesActual == 9) {
            dates.innerHTML += `<div class="dia_item hoy" data-dia="${i}" data-mes="${mesActual}">${i}</div>`;
        } else {
            dates.innerHTML += `<div class="dia_item" data-dia="${i}" data-mes="${mesActual}">${i}</div>`;
        }
    }
    
    
}

document.querySelectorAll(".dia_item").forEach(dia => {
    dia.addEventListener("click", click_fecha);});



function diasTotales(month){
    if(month === -1 ) month == 11;
    if(month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11){
        return 31;
    }else if (month == 3 || month == 5 || month == 8 || month == 10){
        return 30;
    }else{
        return Bisiesto() ? 29:28;
    }
}

function Bisiesto(){

    return ((yearActual % 100 !== 0 && yearActual % 4 === 0)|| (yearActual % 400 === 0))

}

function diaUno(){
    let inicio = new Date(yearActual, mesActual, 1);
    return ((inicio.getDay()-1) === -1) ? 6 : inicio.getDay()-1;

}

function monthBefore(){
    if(mesActual !== 0){
        mesActual --;
    }else{
        mesActual == 11;
        yearActual --
    }
    nuevaFecha();
}

function nextMonth(){
    if(mesActual !== 11){
        mesActual ++
    }else{
        mesActual = 0
        yearActual ++
    }
    nuevaFecha(); 
}

function nuevaFecha(){
    hoy.setFullYear(yearActual, mesActual, diaActual)
    month.textContent = nombreMeses[mesActual];
    year.textContent = yearActual.toString();
    dates.textContent= '';
    escribirMes(mesActual);
}

function click_fecha(event) {
    let diaSeleccionado = event.currentTarget.getAttribute("data-dia");
    let mesSeleccionado = event.currentTarget.getAttribute("data-mes");
    console.log("Quieres reservar:", diaSeleccionado);
    console.log("del Mes", nombreMeses[mesSeleccionado]);
    
    mostrarHoras(diaSeleccionado, mesSeleccionado); // Llamar a la función para mostrar las horas
}

function mostrarHoras(diaSeleccionado, mesSeleccionado) {
    // Crear un contenedor para las horas si no existe
    let contenedorHoras = document.getElementById("horas");
    if (!contenedorHoras) {
        contenedorHoras = document.createElement("div");
        contenedorHoras.id = "horas";
        document.body.appendChild(contenedorHoras); // O donde desees agregarlo
    }

    // Limpiar cualquier contenido previo
    contenedorHoras.innerHTML = "";

    // Título que indica el día y mes seleccionado
    contenedorHoras.innerHTML = `<h3>Selecciona la hora para el ${diaSeleccionado} de ${nombreMeses[mesSeleccionado]}</h3>`;

    // Generar las 24 horas del día
    for (let hora = 0; hora < 24; hora++) {
        contenedorHoras.innerHTML += `
            <div class="hora_item" data-dia="${diaSeleccionado}" data-mes="${mesSeleccionado}" data-hora="${hora}">
                ${hora < 10 ? '0' + hora : hora}:00
            </div>
        `;
    }

    // Añadir eventos de clic en las horas
    document.querySelectorAll(".hora_item").forEach(hora => {
        hora.addEventListener("click", click_hora);
    });
}



function click_hora(event) {
    let diaSeleccionado = event.currentTarget.getAttribute("data-dia");
    let mesSeleccionado = event.currentTarget.getAttribute("data-mes");
    let horaSeleccionada = event.currentTarget.getAttribute("data-hora");

    console.log(`Reserva realizada para el ${diaSeleccionado} de ${nombreMeses[mesSeleccionado]} a las ${horaSeleccionada}:00`);
    
    // Aquí puedes agregar la lógica para realizar la reserva
}

document.addEventListener("DOMContentLoaded", () => {console.log("el documento cargo")});


