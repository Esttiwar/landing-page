let boton_sumar;
let boton_restar;
let boton_multiplicar;
let boton_dividir;
let numero_a;
let numero_b;
let resultado;

numero_a = document.getElementById("numero_a");
numero_b = document.getElementById("numero_b");
boton_sumar = document.getElementById("suma");
boton_restar = document.getElementById("resta");
boton_multiplicar = document.getElementById("multiplicacion");
boton_dividir = document.getElementById("division");
resultado = document.getElementById("resultado");

boton_sumar.addEventListener("click", function(){
  let prueba;
  let a = parseFloat(numero_a.value);
  let b = parseFloat(numero_b.value);

  if (isNaN(a)) {
    alert("Debe ingresar un primer numero");
    return;
  }
  if (isNaN(b)) {
    alert("Debe ingresar un segundo numero");
    return;
  }
  prueba = suma(a, b);
  resultado.innerHTML = prueba;
});

boton_restar.addEventListener("click", function(){
  let prueba;
  let a = parseFloat(numero_a.value);
  let b = parseFloat(numero_b.value);

  if (isNaN(a)) {
    alert("Debe ingresar un primer numero");
    return;
  }
  if (isNaN(b)) {
    alert("Debe ingresar un segundo numero");
    return;
  }
  prueba = resta(a, b);
  resultado.innerHTML = prueba;
});

boton_multiplicar.addEventListener("click", function(){
  let prueba;
  let a = parseFloat(numero_a.value);
  let b = parseFloat(numero_b.value);

  if (isNaN(a)) {
    alert("Debe ingresar un primer numero");
    return;
  }
  if (isNaN(b)) {
    alert("Debe ingresar un segundo numero");
    return;
  }
  prueba = multiplicacion(a, b);
  resultado.innerHTML = prueba;
});

boton_dividir.addEventListener("click", function(){
  let prueba;
  let a = parseFloat(numero_a.value);
  let b = parseFloat(numero_b.value);

  if (isNaN(a)) {
    alert("Debe ingresar un primer numero");
    return;
  }
  if (isNaN(b)) {
    alert("Debe ingresar un segundo numero");
    return;
  }
  prueba = division(a, b);
  resultado.innerHTML = prueba;
});

function suma(a, b) {
  let resultado;
  resultado = a + b;
  return resultado;
}

function resta(a, b) {
  let resultado;
  resultado = a - b;
  return resultado;
}

function multiplicacion(a, b) {
  let resultado;
  resultado = a * b;
  return resultado;
}

function division(a, b) {
  let resultado;
  resultado = a / b;
  return resultado;
}
