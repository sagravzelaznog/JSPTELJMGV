// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const practiceSections = document.querySelectorAll('.practice-section');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetPractice = this.getAttribute('data-practice');
            
            // Remove active class from all buttons and sections
            navButtons.forEach(btn => btn.classList.remove('active'));
            practiceSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked button and corresponding section
            this.classList.add('active');
            document.getElementById(`practice-${targetPractice}`).classList.add('active');
        });
    });
});

// Practice 1: Variables y Salida de Datos
function runPractice1() {
    const output = document.getElementById('output-1');
    let result = '';
    
    // Capture console.log output
    const originalLog = console.log;
    const logs = [];
    console.log = function(...args) {
        logs.push(args.join(' '));
        originalLog.apply(console, args);
    };
    
    // Execute the code
    console.log("¡Hola Mundo!");
    let nombre = "Carlos";
    let edad = 17;
    console.log(`Mi nombre es ${nombre} y tengo ${edad} años`);
    
    // Restore console.log
    console.log = originalLog;
    
    // Display results
    output.textContent = logs.join('\n');
    output.style.color = '#68d391';
}

function runPractice1b() {
    const output = document.getElementById('output-1b');
    let result = '';
    
    const originalLog = console.log;
    const logs = [];
    console.log = function(...args) {
        logs.push(args.join(' '));
        originalLog.apply(console, args);
    };
    
    const PI = 3.14159;
    let radio = 5;
    let area = PI * radio * radio;
    console.log(`El área del círculo es: ${area}`);
    
    console.log = originalLog;
    
    output.textContent = logs.join('\n');
    output.style.color = '#68d391';
}

// Practice 2: Tipos de Datos
function runPractice2() {
    const output = document.getElementById('output-2');
    
    const originalLog = console.log;
    const logs = [];
    console.log = function(...args) {
        logs.push(args.join(' '));
        originalLog.apply(console, args);
    };
    
    let texto = "Hola";
    let numero = 42;
    let esEstudiante = true;
    let sinValor;
    let vacio = null;

    console.log(typeof texto);         // "string"
    console.log(typeof numero);        // "number"
    console.log(typeof esEstudiante);  // "boolean"
    console.log(typeof sinValor);      // "undefined"
    
    console.log = originalLog;
    
    output.textContent = logs.join('\n');
    output.style.color = '#68d391';
}

// Practice 3: Operadores
function runPractice3a() {
    const output = document.getElementById('output-3a');
    
    const originalLog = console.log;
    const logs = [];
    console.log = function(...args) {
        logs.push(args.join(' '));
        originalLog.apply(console, args);
    };
    
    let suma = 10 + 5;          // Resultado: 15
    let resta = 10 - 3;         // Resultado: 7
    let multi = 4 * 3;          // Resultado: 12
    let division = 20 / 4;      // Resultado: 5
    let residuo = 10 % 3;       // Resultado: 1
    let potencia = 2 ** 3;      // Resultado: 8 (2 elevado a la 3)

    console.log(suma, resta, multi, division, residuo, potencia);
    
    console.log = originalLog;
    
    output.textContent = logs.join('\n');
    output.style.color = '#68d391';
}

function runPractice3b() {
    const output = document.getElementById('output-3b');
    
    const originalLog = console.log;
    const logs = [];
    console.log = function(...args) {
        logs.push(args.join(' '));
        originalLog.apply(console, args);
    };
    
    console.log(5 === 5);      // true
    console.log(5 === "5");    // false (número vs string)
    console.log(5 == "5");     // true (convierte tipos automáticamente)
    console.log(5 !== "5");    // true
    console.log(10 > 5);       // true
    console.log(3 < 1);        // false
    console.log(5 >= 5);       // true
    console.log(4 <= 3);       // false
    
    console.log = originalLog;
    
    output.textContent = logs.join('\n');
    output.style.color = '#68d391';
}

function runPractice3c() {
    const output = document.getElementById('output-3c');
    
    const originalLog = console.log;
    const logs = [];
    console.log = function(...args) {
        logs.push(args.join(' '));
        originalLog.apply(console, args);
    };
    
    let edad2 = 20; 
    let tieneCredencial = true;

    // AND (&&) 
    if (edad2 >= 18 && tieneCredencial) { 
      console.log("Puede votar"); 
    }

    // OR (||)
    let esFinDeSemana = false; 
    let esVacaciones = true; 
    if (esFinDeSemana || esVacaciones) { 
      console.log("¡No hay clases!"); 
    }

    // NOT (!)
    let lloviendo = false; 
    if (!lloviendo) { 
      console.log("Podemos salir al patio"); 
    }
    
    console.log = originalLog;
    
    output.textContent = logs.join('\n');
    output.style.color = '#68d391';
}

// Practice 4: Estructuras de Control
function runPractice4a() {
    const output = document.getElementById('output-4a');
    
    const originalLog = console.log;
    const logs = [];
    console.log = function(...args) {
        logs.push(args.join(' '));
        originalLog.apply(console, args);
    };
    
    let edad = 16;
    if (edad >= 18) {
      console.log("Eres mayor de edad");
    } else {
      console.log("Eres menor de edad");
    }
    
    console.log = originalLog;
    
    output.textContent = logs.join('\n');
    output.style.color = '#68d391';
}

function runPractice4b() {
    const output = document.getElementById('output-4b');
    
    const originalLog = console.log;
    const logs = [];
    console.log = function(...args) {
        logs.push(args.join(' '));
        originalLog.apply(console, args);
    };
    
    let calificacion = 85;
    if (calificacion >= 90) {
      console.log("Calificación: A — Excelente");
    } else if (calificacion >= 80) {
      console.log("Calificación: B — Bueno");
    } else if (calificacion >= 70) {
      console.log("Calificación: C — Regular");
    } else {
      console.log("Calificación: F — Reprobado");
    }
    
    console.log = originalLog;
    
    output.textContent = logs.join('\n');
    output.style.color = '#68d391';
}

function runPractice4c() {
    const output = document.getElementById('output-4c');
    
    const originalLog = console.log;
    const logs = [];
    console.log = function(...args) {
        logs.push(args.join(' '));
        originalLog.apply(console, args);
    };
    
    let dia = 3;
    switch (dia) {
      case 1: console.log("Lunes"); break;
      case 2: console.log("Martes"); break;
      case 3: console.log("Miércoles"); break; // dia es 3, así que entra aquí
      case 4: console.log("Jueves"); break;
      case 5: console.log("Viernes"); break;
      default: console.log("Fin de semana");
    }
    
    console.log = originalLog;
    
    output.textContent = logs.join('\n');
    output.style.color = '#68d391';
}

// Practice 5: Ciclos
function runPractice5a() {
    const output = document.getElementById('output-5a');
    
    const originalLog = console.log;
    const logs = [];
    console.log = function(...args) {
        logs.push(args.join(' '));
        originalLog.apply(console, args);
    };
    
    for (let i = 1; i <= 5; i++) {
      console.log(`Vuelta número: ${i}`);
    }
    
    console.log = originalLog;
    
    output.textContent = logs.join('\n');
    output.style.color = '#68d391';
}

function runPractice5b() {
    const output = document.getElementById('output-5b');
    
    const originalLog = console.log;
    const logs = [];
    console.log = function(...args) {
        logs.push(args.join(' '));
        originalLog.apply(console, args);
    };
    
    let contador = 0;
    while (contador < 3) {
      console.log(`Contador: ${contador}`);
      contador++; // Esencial para que el ciclo termine
    }
    
    console.log = originalLog;
    
    output.textContent = logs.join('\n');
    output.style.color = '#68d391';
}

// Practice 6: Arreglos
function runPractice6a() {
    const output = document.getElementById('output-6a');
    
    const originalLog = console.log;
    const logs = [];
    console.log = function(...args) {
        logs.push(args.join(' '));
        originalLog.apply(console, args);
    };
    
    let frutas = ["Manzana", "Plátano", "Naranja", "Uva"];

    console.log(frutas[0]);         // "Manzana"
    console.log(frutas[2]);         // "Naranja"
    console.log(frutas.length);     // 4

    frutas.push("Fresa");           // Agrega al final
    frutas.pop();                   // Elimina el último elemento
    console.log(frutas);            // Muestra todo el array
    
    console.log = originalLog;
    
    output.textContent = logs.join('\n');
    output.style.color = '#68d391';
}

function runPractice6b() {
    const output = document.getElementById('output-6b');
    
    const originalLog = console.log;
    const logs = [];
    console.log = function(...args) {
        logs.push(args.join(' '));
        originalLog.apply(console, args);
    };
    
    let estudiantes = ["Ana", "Luis", "María", "Pedro"];

    for (let i = 0; i < estudiantes.length; i++) {
      console.log(`${i + 1}. ${estudiantes[i]}`);
    }
    
    console.log = originalLog;
    
    output.textContent = logs.join('\n');
    output.style.color = '#68d391';
}

function runPractice6c() {
    const output = document.getElementById('output-6c');
    
    const originalLog = console.log;
    const logs = [];
    console.log = function(...args) {
        logs.push(args.join(' '));
        originalLog.apply(console, args);
    };
    
    let cal1 = 92; 
    let cal2 = 92; 
    let cal3 = 78; 
    let promedio = (cal1 + cal2 + cal3) / 3; 
    console.log(`El promedio es: ${promedio.toFixed(2)}`);
    
    console.log = originalLog;
    
    output.textContent = logs.join('\n');
    output.style.color = '#68d391';
}
