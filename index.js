// Array de tareas

let tareasDiarias = [
    {
        tarea: "Sacar al perro",
        estado: false,
        id: 1,
    },

    {
        tarea: "Hacer comida",
        estado: false,
        id: 2,
    },
];


// Array de funciones

let funciones = [

    function crearTarea (){

    let tarea = prompt("¿Qué tarea deseas agendar?");
    let estado = false;

    let id = tareasDiarias.length + 1;

    let = nuevaTarea = {

        tarea: tarea,
        estado: estado,
        id: id,

    };

    if(tarea === "" || tarea === null){

        alert("Ingrese algo")

    }else{

        tareasDiarias.push(nuevaTarea);

    }

    },

    function verTareas(){

    let todasLasTareas = "";

    for(let b = 0; b < tareasDiarias.length; b++){

        let estadoTarea = tareasDiarias[b].estado;
        let nombreTarea = tareasDiarias[b].tarea;
        let idTarea = tareasDiarias[b].id;

        if(estadoTarea === false){

            estadoTarea = "No completado";

        }else{

            estadoTarea = "Completado";

        }

        todasLasTareas += "Tarea: " + nombreTarea + "\n" + "Estado: " + estadoTarea + "\n" + "Id: " + idTarea + "\n\n";

    };

    alert(todasLasTareas);

    },

    function cambiarEstado(){

    let indiceDeTarea = prompt("Indique el indice de la tarea a la que desea cambiarle el estado.");

    let estadoModificado = prompt("Indique el estado al que desea cambiar la tarea (`completado` o `no completado`)");

    if(estadoModificado === "completado"){

        tareasDiarias[indiceDeTarea - 1].estado = true

    }if(estadoModificado === "no completado"){

        tareasDiarias[indiceDeTarea - 1].estado = false

    };

    },

    function eliminarTarea(){

        let tareaSeleccionada = parseInt(prompt("Indique el índice de la tarea que desea eliminar."));

        let tareaBuscadaIndex = tareasDiarias.findIndex(tarea => tarea.id === tareaSeleccionada);

        if (tareaBuscadaIndex !== -1) {
            
            tareasDiarias.splice(tareaBuscadaIndex, 1);

            alert("Tarea eliminada.");

        } else {

            alert("Tarea no encontrada.");

        };

    },

];


// Programa

for(let c = 0; c < 1; c++){

    console.log(tareasDiarias)

    let accion = prompt("¿Qué deseas realizar? \n\n - Crear una nueva tarea (nueva tarea). \n - Ver las tareas actuales (ver tareas). \n - Cambiar el estado de alguna tarea (cambiar estado). \n - Eliminar alguna tarea (eliminar tarea). \n");

    switch(accion){

        case "nueva tarea":
        
            funciones[0]();

            c = c - 1;

        break;

        case "ver tareas":
        
            funciones[1]();

            c = c - 1;

        break;

        case "cambiar estado":

            funciones[2]();
        
            c = c - 1;

        break;

        case "eliminar tarea":

            funciones[3]();
        
            c = c - 1;

        break;

        default:

            alert("Ingrese una opción valida")

            c = c - 1;

        break;

    }

};

// fors: a, b, c, d,