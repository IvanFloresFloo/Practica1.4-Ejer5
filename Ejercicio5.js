function obtenerNombresPropiedades() {
    const objetoInput = document.getElementById("objetoInput").value;
    const objeto = JSON.parse(objetoInput);
    
    const propiedades = Object.keys(objeto);
    
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = "Propiedades: " + propiedades.join(", ");
  }
  