// Función para verificar la clave
function verificarClave(claveIngresada) {
  const claveCorrecta = '1234'; // Clave correcta (puedes cambiarla)
  return claveIngresada === claveCorrecta;
}

// Función para calcular los montos según el modelo 50-30-20
function calcularMontos(ingresoTotal) {
  const gastosNecesarios = ingresoTotal * 0.5;
  const gastosOpcionales = ingresoTotal * 0.3;
  const ahorroInversion = ingresoTotal * 0.2;
  return {
    gastosNecesarios,
    gastosOpcionales,
    ahorroInversion,
  };
}

// Función principal del programa
function programaFinanciero() {
  const nombre = prompt('Ingresa tu nombre:');
  const clave = prompt('Ingresa tu clave:');
  const edad = prompt('Ingresa tu edad:');
  const ingresoTotal = parseFloat(prompt('Ingresa tu ingreso total:'));

  if (verificarClave(clave)) {
    const { gastosNecesarios, gastosOpcionales, ahorroInversion } =
      calcularMontos(ingresoTotal);
    console.log(
      `Hola, ${nombre}. Aquí está tu distribución financiera según el modelo 50-30-20:`
    );
    console.log(`Gastos necesarios: $${gastosNecesarios.toFixed(2)}`);
    console.log(`Gastos opcionales: $${gastosOpcionales.toFixed(2)}`);
    console.log(`Ahorro e inversión: $${ahorroInversion.toFixed(2)}`);
  } else {
    console.log('Clave incorrecta. No se pueden realizar los cálculos.');
  }
}

// Ejecutar el programa
programaFinanciero();
