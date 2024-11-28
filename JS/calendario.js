
function cita(nombre, mes, dia){
    this.nombre = nombre
    this.dia = dia
    this.mes = mes

}
const reservados = []

function verificarDisponibilidad(mes,dia){
    for(var i= 0; i < reservados.length; i++){
        if(reservados[i].mes === mes && reservados[i].dia === dia){
            return "fecha no disponible"
            break;
        }else{
            return "fecha disponible"
        }
    }
}







/*
function agendar(){
    let turno = true;

    while(turno){
        let nombre = prompt("indicanos tu nombre")

    if(nombre){

        let mes = prompt("Que mes quieres agendar")

        if(mes >= 1 && mes <= 12){

            let dia = prompt("que dia quieres agendar")

            if(dia >= 1 && dia <= 31){
                
                    if(verificarDisponibilidad(mes,dia)){
                        const nuevaCita = new cita (nombre, mes, dia);
                        reservados.push(nuevaCita);
                        console.log("cita creada", nuevaCita)
                    }

                    turno = confirm("Quieres agendar una nueva cita")
            }else{
                alert("dia invalido")
            }
        }else{
            alert("mes invalido")
        }
    }else {
        alert("nombre invalido")
        
    }

    }    
}

agendar()
*/
