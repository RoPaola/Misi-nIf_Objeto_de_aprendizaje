function evaluarOxigeno() {
    const nivel = parseFloat(document.getElementById("oxigeno").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(nivel)) {
        resultado.textContent = "Por favor, ingresa un valor numérico válido.";
    } else if (nivel < 20) {
        resultado.textContent = " Nivel crítico. Activá el protocolo de emergencia.";
    } else if (nivel > 50) {
        resultado.textContent = "Nivel alto. Activá los ventiladores.";
    } else {
        resultado.textContent = "Nivel estable. No se requiere acción inmediata.";
    }
}