function cita(nombre, mes, dia) {
    this.nombre = nombre;
    this.dia = dia;
    this.mes = mes;
}

const reservadosJSON = [];

function verificarDisponibilidad(mes, dia) {
    for (let i = 0; i < reservadosJSON.length; i++) {
        if (reservadosJSON[i].mes === mes && reservadosJSON[i].dia === dia) {
            return false; // Fecha no disponible
        }
    }
    return true; // Fecha disponible
}

function guardarEnLocalStorage() {
    localStorage.setItem('reservadosJSON', JSON.stringify(reservadosJSON));
    console.log('Citas guardadas en localStorage');
}

function agendar() {
    let turno = true;

    while (turno) {
        let nombre = prompt("Indícanos tu nombre");

        if (nombre) {
            let mes = parseInt(prompt("¿Qué mes quieres agendar?"), 10);

            if (mes >= 1 && mes <= 12) {
                let dia = parseInt(prompt("¿Qué día quieres agendar?"), 10);

                if (dia >= 1 && dia <= 31) {
                    if (verificarDisponibilidad(mes, dia)) {
                        const nuevaCita = new cita(nombre, mes, dia);
                        reservadosJSON.push(nuevaCita);
                        console.log("Cita creada:", nuevaCita);
                    } else {
                        alert("Fecha no disponible");
                    }
                    turno = confirm("¿Quieres agendar una nueva cita?");
                } else {
                    alert("Día inválido");
                }
            } else {
                alert("Mes inválido");
            }
        } else {
            alert("Nombre inválido");
        }
    }

    guardarEnArchivo();
    console.log("Lista actualizada de citas reservadas:", reservadosJSON);
}

/*agendar();*/

