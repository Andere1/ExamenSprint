var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
return  (estudiantes);
}

function agregarEstudiante(nombre,ptosTecnicos,ptosHabilidad) {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante

  var nombre;
  var ptosTecnicos;
  var ptosHabilidad;

    nombre=prompt("Hola-Ingrese nombre de la estudiante:");
    ptosTecnicos=prompt("Ingrese porcentaje técnico: ");
    ptosHabilidad=prompt("Ingrese porcentaje de habilidad socioemocional: ");

var objeto ={
  "Nombre":nombre,
  "ptosTecnicos":ptosTecnicos,
  "ptosHabilidad":ptosHabilidad
};
estudiantes.push(objeto);
return (objeto);
  }
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
var resultado="";

    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.Nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.ptosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.ptosHabilidad + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    var comillas="";
    for (var i in estudiantes){
      comillas+= mostrar(estudiantes[i]);
    }
    // Retornar el template de todos los estudiantes
return (comillas);
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    var nombre="";
      nombre=prompt("Que nombre desea buscar:");
      var buscar ={"Nombre":nombre};
      estudiantes.push(buscar);


          // Hint: El estudiante debe ser agregado a la lista de estudiantes
            return (objeto(nombre,ptosTecnicos,ptosHabilidad));
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    return estudiantes.sort(function(par1,par2){
      return (par2.ptosTecnicos-par1.ptosTecnicos);
    });
  }


function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
return estudiantes.sort(function(par1,par2){
  return (par2.ptosHabilidad-par1.ptosHabilidad);
});
}
